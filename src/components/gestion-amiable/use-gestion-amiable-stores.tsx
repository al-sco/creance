import { create } from "zustand";
import { ActeModel } from "../../states/model/actes.model";

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

  fileUrl : any;
  setFirlUrl:(fileUrl: any) => void;
  previewFile: boolean,
  setPreviewFile: (previewFile: boolean) => void;

  actes: ActeModel[];
  setActes: (actes: ActeModel[]) => void;
  acteLoading: boolean;
  setActeLoading: (acteLoading: boolean) => void;
}

export const useGestionAmiableStores = create<Props>((set) => ({
  acteCode: "",
  setActeCode: (acteCode: string) => {
    set({ acteCode });
  },
  accordionLib: "Déplier",
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
  },
  fileUrl: "",
  setFirlUrl: (fileUrl: any)=>{
    set({ fileUrl})
  },
  previewFile: false,
  setPreviewFile: (previewFile: boolean)=>{
    set({ previewFile})
  },
  acteLoading: false,
  setActeLoading: (acteLoading: boolean) =>{
    set({ acteLoading})
  },
  actes: [],
  setActes:(actes: ActeModel[]) =>{
    set({ actes })
  }
}));
