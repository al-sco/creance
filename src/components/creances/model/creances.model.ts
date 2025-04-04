// Interface pour la création/modification d'une créance (requête vers l'API)
export interface CreanceDTO {
  debCode?: number;
  grpCreanCode: string;
  objCreanCode: string;
  periodCode: string;
  creanCapitInit?: number;
  creanMontDu?: number;
  creanDejRemb?: number;
  creanPenalite?: number;
  creanEncours?: number;
  creanPenalite1?: number;
  creanTotalRecouvrer?: number;
  creanMontPaye?: number;
  creanMontImpaye?: number;
  creanTotalDue?: number;
  creanMontIc?: number;
  creanDateCtl?: Date;
  creanTauxIc?:number;
  creanMontIr?: number;
  creanTauxIr?: number;
  creanMontAss?: number;
  creanMontDebloq?: number;
  creanFrais?: number;
  creanCommBanq?: number;
  creanCommStecaut?: number;
  creanDatoctroi?: string;
  creanDatrec?: string;
  creanDateft?: string;
  creanDatech?: string;
  creanTauxir?: number;
  creanDuree?: number;
  creanObjet?: string;
  creanNbech?: string;
  creanStatrecouv?: string;
  creanClasse?: string;
  creanCodePrec?:string;
  creanCodeAnc?:string;
  ordoCode?: number;
  typeStructOrgcode?: string;
  creanMontIcPaye?: number;
  creanSoldeInit?: string;
}




// Interface pour les données enrichies retournées par l'API
export interface CreanceVM extends CreanceDTO {
  creanCode: string;
  creanDatecrea?: string;
  debNomComplet?: string;
  grpCreanLib?: string;
  entiteLib?: string;
  objCreanLib?: string;
  ordoNom?: string;
  periodLib?: string;
  typeStructOrglib?: string;
}

// Interfaces pour les référentiels
export interface Debiteur {
  debCode: number;
  nomComplet: string;
  adresse?: string;
}

export interface GroupeCreance {
  grpCreanCode: string;
  grpCreanLib: string;
  entiteCode?: string;
  entiteLib?: string;
}

export interface ObjetCreance {
  objCreanCode: string;
  objCreanLib: string;
}

export interface Periodicite {
  periodCode: string;
  periodLib: string;
}

export interface Ordonnateur {
  ordoCode: number;
  ordoNom: string;
}

export interface TypeStructOrga {
  typeStructOrgcode: string;
  typeStructOrglib: string;
}

// État initial pour le formulaire de créance
export const initialCreanceState: CreanceDTO = {
  debCode: undefined,
  grpCreanCode: '',
  objCreanCode: '',
  periodCode: '',
  creanCapitInit: undefined,
  creanMontDu: undefined,
  creanObjet: '',
  creanDuree: undefined,
  creanDatoctroi: undefined,
  creanMontDebloq: undefined,
  creanNbech: '',
  creanTauxIc: undefined,
  ordoCode: undefined,
  typeStructOrgcode: '',
  creanDatrec: undefined,
  creanDateft: undefined,
  creanDatech: undefined,
  creanCommBanq: undefined,
  creanMontAss: undefined,
  creanMontIc: undefined,
  creanMontIcPaye: undefined,
  creanMontIr: undefined,
  creanTotalDue: undefined,
  creanSoldeInit: '',
};

// Type pour les modes d'affichage
export type CreanceMode = 'creation' | 'modification' | 'consultation';