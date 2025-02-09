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
  quartLib?: string;
  profesCode: string;
  profesLib?: string;
  natCode: string;
  natLib?: string;
  empCode: string;
  empLib?: string;
  statsalCode: string;
  statsalLib?: string;
  fonctCode: string;
  fonctLib?: string;
  debNom: string;
  debPren: string;
  debDatnaiss: Date | null;
  debLieunaiss: string;
  debDatdec?: Date | null;
  teldom: string;
  debNatpident: string;
  debNumpident: string;
  debDatetpident?: Date | null;
  debLieuetpident: string;
  debSitmatri: string;
  debRue: string;
  debNmere: string;
  debPrmere: string;
  debNpere: string;
  debPrpere: string;
  debNbrEnf: string;
  debSexe: string;
  debMatric: string;
  civCode: string;
  civLib?: string;
  debCjNom: string;
  debCjPren: string;
  debCjDatnaiss?: Date | null;
  debCjTel: string;
  debCjAdr: string;
  debCjNumpident: string;
}