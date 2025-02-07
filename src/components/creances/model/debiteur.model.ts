export interface DebiteurState {
  id?: number;
  categDebCode: string;
  propCode: string;
  garphysCode: string;
  typdebCode: string;
  debAdrpost: string;
  debCel: string;
  debEmail: string;
  debTelbur: string;
  debFax: string;
  debCodeCharg: string;
  debTeldom: string;
  debLocalisat: string;
}

export interface TypeDebiteur {
  typdebCode: string;
  typdebLib: string;
}

export interface CategorieDebiteur {
  categDebCode: string;
  categDebLib: string;
}

export interface DebiteurMoral {
  debCode: number;
  debRaisSociale: string;
  debRegistcom: string;
  debDatcreat: Date;
  debCapitsocial: number;
  debFormJurid: string;
  debDomActiv: string;
  debSiegSocial: string;
  debNomGerant: string;
  ancCiv?: string;
  debCodeCharg?: string;
  debCpteContrib?: string;
  civGerant?: string;
  debTel?: string;
  debFax?: string;
  debEmail?: string;
  debAdr?: string;
  debVille?: string;
  debPays?: string;
  debBp?: string;
}

export interface Domiciliation {
  domCode: string;
  bqagCode: string;
  typdomCode: string;
  garphysCode: number;
  debCode: number;
  domLib: string;
  domDateCtl: Date;
  ancAg?: string;
  villeCode: string;
  numBenef?: number;
  domMont: number;
  domDatDeb: Date;
  domDatFin: Date;
  domStatut: string;
  domMotif?: string;
  domObs?: string;
}

export interface DebiteurPhysique {
  debCode: number;
  quartCode: string;
  profesCode: string;
  natCode: string;
  empCode: string;
  statsalCode: string;
  fonctCode: string;
  civCode: string;
  debNom: string;
  debPren: string;
  debDatnaiss: Date;
  debLieunaiss: string;
  debDatdec?: Date;
  debTeldom: string;
  debTelpro?: string;
  debTelport?: string;
  debEmail: string;
  debAdr: string;
  debVille: string;
  debPays: string;
  debBp?: string;
  debSexe: string;
  debSitfam?: string;
  debNbenf?: number;
  debCni: string;
  debDatcni?: Date;
  debLieucni?: string;
}