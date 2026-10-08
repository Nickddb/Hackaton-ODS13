import { create } from 'zustand'
import { persist } from 'zustand/middleware'
interface State { authenticated:boolean; visitor:boolean; login:(visitor?:boolean)=>void; logout:()=>void }
export const useAuthStore=create<State>()(persist(set=>({authenticated:false,visitor:false,login:(visitor=false)=>set({authenticated:true,visitor}),logout:()=>set({authenticated:false,visitor:false})}),{name:'climaalert-auth'}))
