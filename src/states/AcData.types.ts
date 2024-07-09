export type Identifiable = {
  id: any;
};
export type ParameterBaseData = Identifiable & {
  code: string;
  libelle: string;
};

export type AcBanqueAgence = ParameterBaseData;
export type AcBanque = ParameterBaseData & {
  responsabilite: string;
  adresse: string;
};
export type AcCategorieDebiteur = ParameterBaseData;
export type AcCivilite = ParameterBaseData;
export type AcClasse = ParameterBaseData;

export type AcCptOperation = {
  id: string;
  numero: string;
  codeBanqueAgence: string;
  codeGroupeCreance: string;
};

export type AcCpteClientSonar = {
  id: String;
  cpteCliCode: String;
  cpteCliLib: String;
  cpteCliSaari: String;
  cpteCliUnibol: String;
  cpteCliObserv: String;
  planCptaNum: String;
};

export type AvCompte={
  id: string;

}

export type AcCompteOper = {
  id: string;
  cptoperCode: string;
  bqagCode: string;
  grpCreanCode: string;
};

export type AcCompteComptableOperationSonareci = {
  id: string;
  groupeCreance: string;
  typeOperation: string;
  compte: string;
  journal: string;
  libelle: string;
  sens: string;
  groupeSonareci: string;
};

export type AcCodeProduitSonareci = {
  id: string;
  code: string;
  intituleComptes: string;
  ancienCompteunibol: string;
  compteRegroupeptSaari: string;
  libelle: string;
  observation: string;
};

export type AcEntite = ParameterBaseData & {
  responsable: string;
  libelleLong: string;
  entiteAssign: string;
};

export type AcEtape = ParameterBaseData;

export type AcEtatLocalisation = ParameterBaseData;

export type Cloture = {
  enCours: "EN COURS";
  cloture: "CLOTURE";
};

export type AcExercice = {
  id: number;
  libelle: string;
  dateAdoptionBud: string;
  dateDebut: string;
  dateFin: string;
  cloture: Cloture;
};

export type AcFonction = ParameterBaseData;

export type AcGroupeCreance = ParameterBaseData & {
  libelleLong: string;
  entiteCode: string;
};

export type AcJournal = ParameterBaseData;
export type TMessage = ParameterBaseData;
export type AcModeAcquisition = ParameterBaseData;
export type AcModePaiement = ParameterBaseData;
export type AcNationalite = ParameterBaseData;
export type AcObjetCreance = ParameterBaseData;

export type AcOperation = {
  ville: ParameterBaseData;
  quartier: Array<ParameterBaseData & { zone: string }>;
  operation: ParameterBaseData[];
};

export type AcPeriodicite = ParameterBaseData;
export type AcParam = ParameterBaseData & {
  valeur: string;
  commentaire: string;
};
export type AcPosteComptable = ParameterBaseData;

export type AcProfession = ParameterBaseData;
export type AcQuartier = ParameterBaseData & {
  ville: string;
  zone: string;
};

export type AcStatutCreance = ParameterBaseData;
export type AcStatutSalarie = ParameterBaseData;
export type AcTypeActe = ParameterBaseData & { delai: string };
export type AcTypeAuxil = ParameterBaseData;
export type AcTypeEcheancier = ParameterBaseData;
export type AcTypeCharge = ParameterBaseData & { sens: string };
export type AcTypeCpt = ParameterBaseData;
export type AcTypeContrat = ParameterBaseData;
export type AcTypeDebiteur = ParameterBaseData;
export type AcTypeDomicil = ParameterBaseData;
export type AcTypeEffet = ParameterBaseData;
export type AcTypeEmployeur = ParameterBaseData;
export type AcTypeFrai = ParameterBaseData;
export type AcTypgarReelle = ParameterBaseData;
export type AcTypgarPhy = ParameterBaseData;
export type AcTypeLogement = ParameterBaseData;
export type AcTypeOperation = ParameterBaseData & {
  modePaie: string;
  typePaie: string;
};
export type AcTypeOvp = ParameterBaseData;
export type AcTypePiece = ParameterBaseData;
export type AcTypeRegul = ParameterBaseData;
export type AcTypeSaisie = ParameterBaseData;
export type AcVille = ParameterBaseData;
export type AcZone = ParameterBaseData & { description: string };

export type AcDebiteur=ParameterBaseData &  {
  propCode:number
  garphysCode:number
  typdebCode:string
  debAdrpost:string
  debCel:string
  debEmail:string
  debTelbur:string
  debFax:string
  debDateCtl:Date
  debCodeCharg:string
  debCodeAnc:string
  debTeldom:string
}

export type AcDebiteurMoral=ParameterBaseData &  {
  debiteur:AcDebiteur
  debRaisSociale:string
  debRegistcom:string
  debDatcreat:Date
  debCapitsocial:number
  debFormJurid:string
  debDomActiv:string
  debSiegSocial:string
  debNomGerant:string
  ancCiv:string
  debCodeCharg:string
  debCpteContrib:string
  civGerant:string
}

export type AcDebiteurPhysique=ParameterBaseData &  {
  debiteur:AcDebiteur
  quartCode:string
  profesCode:string
  natCode:string
  empCode:string
  statsalCode:AcStatutSalarie
  fonctCode:string
  debNom:string
  debPren:string
  debDatnaiss:Date
  debLieunaiss:string
  debDatdec:Date
  debTeldom:string
  debNatpident:string
  debNumpident:string
  debDatetpident:Date
  debLieuetpident:string
  debSitmatri:string
  debRue:string
  debNmere:string
  debPrmere:string
  debNpere:string
  debPrpere:string
  debNbrEnf:string
  debSexe:string
  debMatric:string
  civCode:AcCivilite
  debCjNom:string
  debCjPren:string
  debCjDatnaiss:Date
  debCjTel:string
  debCjAdr:string
  debCjNumpident:string
  debDateCtl:Date
  debEmployeur:string
  debCodeAnc:string
  ancCiv:string
  debDatcreat:string
  ancNat:string
  debCodeCharg:string
  debAncDatnaiss:Date
  debAncSituat:string
  debFonction:string
  regmatCode:string
}
