export  type Identifiable={
  id:any,
}
export  type ParameterBaseData =Identifiable & {
  code: string;
  libelle: string;
};

export type AcBanqueAgence = ParameterBaseData;
export type AcBanque = ParameterBaseData & { responsabilite: string; adresse: string };
export type AcCategorieDebiteur = ParameterBaseData;
export type AcCivilite = ParameterBaseData;
export type AcClasse = ParameterBaseData;

export type AcCptOperation = {
  id: string;
  numero: string;
  codeBanqueAgence: string;
  codeGroupeCreance: string;
};


export type AcCpteClientSonar=
{
  id: String
  cpteCliCode: String
  cpteCliLib: String
  cpteCliSaari: String
  cpteCliUnibol: String
  cpteCliObserv: String
  planCptaNum: String
};



export type AcCompteOper = {
  id: string;
  cptoperCode: string;
  bqagCode: string;
  grpCreanCode: string;
};


export type  CodeProduitSonareci = {
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
  entiteAssign: string
};

export type AcEtape = ParameterBaseData;

export type AcEtatLocalisation = ParameterBaseData;

export type Cloture = {
  enCours: "EN COURS";
  cloture: "CLOTURE";
};

export type AcExercice = {
  annee: string;
  libelle: string;
  dateAdoptionBud: string;
  dateDebut: string;
  dateFin: string;
  cloture: Cloture;
};

export type AcFonction = ParameterBaseData;

export type AcGroupeCreance = ParameterBaseData & {
  libelleLong: string;
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
export type AcParam = ParameterBaseData & { valeur: string; commentaire: string };
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
export type AcTypeOperation = ParameterBaseData & { modePaie: string; typePaie: string };
export type AcTypeOvp = ParameterBaseData;
export type AcTypePiece = ParameterBaseData;
export type AcTypeRegul = ParameterBaseData;
export type AcTypeSaisie = ParameterBaseData;
export type AcVille = ParameterBaseData;
export type AcZone = ParameterBaseData & { description: string };