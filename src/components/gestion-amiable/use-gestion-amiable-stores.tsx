import { create } from "zustand";

interface Props{
    acteCode: string;
    setActeCode:(acteCode: string) => void;
     accordionLib: string;
     setAccordionLib:(accordionLib: string) => void;
}

export const useGestionAmiableStores =create<Props>((set)=>({
    acteCode:"",
    setActeCode: (acteCode: string) => () => {
        set({ acteCode })
    },
    accordionLib:"",
    setAccordionLib: (accordionLib: string) => () => {
        set({ accordionLib })
    },
}));