import { create } from 'zustand'; import { persist } from 'zustand/middleware'; import { stations } from '@/mocks/data/climate'
interface State { stationId:string; setStation:(id:string)=>void }
export const useStationStore=create<State>()(persist(set=>({stationId:stations[0].id,setStation:stationId=>set({stationId})}),{name:'climaalert-station-v2'}))
