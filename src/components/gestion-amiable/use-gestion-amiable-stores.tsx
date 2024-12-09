import { create } from "zustand";

interface Props {
  acteCode: string;
  setActeCode: (acteCode: string) => void;
  accordionLib: string;
  setAccordionLib: (accordionLib: string) => void;
  typActeCode: string;
  setTypeActeCode: (typActeCode: string) => void;
  codeCreance: string;
  setCodeCreance: (codeCreance: string) => void;
  actId: string;
  setActId: (actId: string) => void;
}

export const useGestionAmiableStores = create<Props>((set) => ({
  acteCode: "",
  setActeCode: (acteCode: string) => {
    set({ acteCode });
  },
  accordionLib: "",
  setAccordionLib: (accordionLib: string) => {
    set({ accordionLib });
  },
  typActeCode: "",
  setTypeActeCode: (typActeCode: string) => {
    set({ typActeCode })
  },
  codeCreance: "",
  setCodeCreance: (codeCreance: string) => {
    set({ codeCreance })
  },
  actId:"",
  setActId: (actId: string) =>{
    set({actId})
  }
}));
