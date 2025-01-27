// stores/useDebiteurStore.ts
import { create } from 'zustand';

interface DebiteurState {
  currentDebiteur: any;
  setDebiteur: (debiteur: any) => void;
}

export const useDebiteurStore = create<DebiteurState>((set) => ({
  currentDebiteur: null,
  setDebiteur: (debiteur) => set({ currentDebiteur: debiteur }),
}));