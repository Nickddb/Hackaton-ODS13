// Script para importação automática do Backlog para GitHub Issues / Projects
// Funciona tanto localmente quanto dentro do GitHub Actions

const https = require('https');
const fs = require('fs');
const path = require('path');

const REPO_OWNER = process.env.GITHUB_REPOSITORY_OWNER || 'Nickddb';
const REPO_NAME = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'Hackaton-ODS13';
const TOKEN = process.env.GITHUB_TOKEN;

if (!TOKEN) {
  console.error('ERRO: Defina a variável de ambiente GITHUB_TOKEN.');
  process.exit(1);
}

const planPath = path.join(__dirname, '..', 'PLANO_IMPLANTACAO_FRONTEND.md');
if (!fs.existsSync(planPath)) {
  console.error(`ERRO: Arquivo ${planPath} não encontrado.`);
  process.exit(1);
}

const content = fs.readFileSync(planPath, 'utf8');
const lines = content.split(/\r?\n/);

let currentGroup = 'Geral';
const cards = [];
let currentCard = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.startsWith('### ')) {
    currentGroup = line.replace('### ', '').trim();
  } else if (line.startsWith('#### FE-')) {
    if (currentCard) {
      cards.push(currentCard);
    }
    const match = line.match(/#### (FE-\d{3}) — (.*)/);
    if (match) {
      currentCard = {
        id: match[1],
        title: match[2].trim(),
        group: currentGroup,
        priority: '',
        description: '',
        criteria: []
      };
    }
  } else if (currentCard) {
    if (line.startsWith('**Prioridade:**')) {
      currentCard.priority = line.replace('**Prioridade:**', '').trim();
    } else if (line.startsWith('- ') && currentCard.criteria.length > 0) {
      currentCard.criteria.push(line.replace('- ', '').trim());
    } else if (line.startsWith('- ') && lines[i - 1]?.includes('Critérios de aceite')) {
      currentCard.criteria.push(line.replace('- ', '').trim());
    } else if (line.trim() !== '' && !line.startsWith('**Critérios de aceite:**') && currentCard.criteria.length === 0 && !line.startsWith('**Prioridade:**')) {
      currentCard.description += (currentCard.description ? ' ' : '') + line.trim();
    }
  }
}
if (currentCard) {
  cards.push(currentCard);
}

console.log(`Carregados ${cards.length} cards do plano de implantação.`);

async function createIssue(card) {
  const bodyData = JSON.stringify({
    title: `[${card.id}] ${card.title}`,
    body: `### ${card.group}\n\n**Prioridade:** ${card.priority}\n\n${card.description}\n\n### Critérios de Aceite:\n` + card.criteria.map(c => `- [ ] ${c}`).join('\n'),
    labels: [card.group, `Prioridade: ${card.priority}`].filter(Boolean)
  });

  const options = {
    hostname: 'api.github.com',
    path: `/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
    method: 'POST',
    headers: {
      'User-Agent': 'NodeJS-Backlog-Importer',
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(bodyData)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 201) {
          const issue = JSON.parse(data);
          console.log(`[SUCESSO] Criada Issue #${issue.number}: ${issue.title}`);
          resolve(issue);
        } else {
          console.error(`[ERRO ${res.statusCode}] Falha ao criar ${card.id}: ${data}`);
          resolve(null);
        }
      });
    });
    req.on('error', reject);
    req.write(bodyData);
    req.end();
  });
}

async function run() {
  console.log(`Iniciando a criação de ${cards.length} issues no repositório ${REPO_OWNER}/${REPO_NAME}...`);
  for (const card of cards) {
    await createIssue(card);
    await new Promise(r => setTimeout(r, 400));
  }
  console.log('Finalizado com sucesso!');
}

run();
