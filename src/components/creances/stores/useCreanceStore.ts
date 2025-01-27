import { create } from "zustand";
import { CreanceModel } from "../model/creances.model";

interface CreanceStore {
  creances: CreanceModel[];
  addCreance: (creance: CreanceModel) => void;
  deleteCreance: (id: string) => void;
}

export const useCreanceStore = create<CreanceStore>((set) => ({
  creances: [],
  
  addCreance: (creance) => 
    set((state) => ({ creances: [...state.creances, creance] })),

  deleteCreance: (id) => 
    set((state) => ({ 
      creances: state.creances.filter(c => c.id !== id) 
    }))
}));