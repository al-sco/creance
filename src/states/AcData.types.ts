type ParameterBaseData = {
  id: string;
  code: string;
  libelle: string;
};

type AcBanqueAgence = ParameterBaseData;
type AcBanque = ParameterBaseData & { responsabilite: string; adresse: string };
type AcCategorieDebiteur = ParameterBaseData;
type AcCivilite = ParameterBaseData;
type AcClasse = ParameterBaseData;

type AcCptOperation = {
  id: string;
  numero: string;
  codeBanqueAgence: string;
  codeGroupeCreance: string;
};


type AcCpteClientSonar=
{
  id: String
  cpteCliCode: String
  cpteCliLib: String
  cpteCliSaari: String
  cpteCliUnibol: String
  cpteCliObserv: String
  planCptaNum: String
};



type AcCompteOper = {
  id: string;
  cptoperCode: string;
  bqagCode: string;
  grpCreanCode: string;
};


type  CodeProduitSonareci = {
  id: string;
  code: string;
  intituleComptes: string;
  ancienCompteunibol: string;
  compteRegroupeptSaari: string;
  libelle: string;
  observation: string;
};
 
type AcEntite = ParameterBaseData & {
  responsable: string;
  libelleLong: string;
  entiteAssign: string
};

type AcEtape = ParameterBaseData;

type AcEtatLocalisation = ParameterBaseData;

type Cloture = {
  enCours: "EN COURS";
  cloture: "CLOTURE";
};

type AcExercice = {
  annee: string;
  libelle: string;
  dateAdoptionBud: string;
  dateDebut: string;
  dateFin: string;
  cloture: Cloture;
};

type AcFonction = ParameterBaseData;

type AcGroupeCreance = ParameterBaseData & {
  libelleLong: string;
};

type AcJournal = ParameterBaseData;
type TMessage = ParameterBaseData;
type AcModeAcquisition = ParameterBaseData;
type AcModePaiement = ParameterBaseData;
type AcNationalite = ParameterBaseData;
type AcObjetCreance = ParameterBaseData;

type AcOperation = {
  ville: ParameterBaseData;
  quartier: Array<ParameterBaseData & { zone: string }>;
  operation: ParameterBaseData[];
};

type AcPeriodicite = ParameterBaseData;
type AcParam = ParameterBaseData & { valeur: string; commentaire: string };
type AcPosteComptable = ParameterBaseData;

type AcProfession = ParameterBaseData;
type AcQuartier = ParameterBaseData & {
  ville: string;
  zone: string;
};

type AcStatutCreance = ParameterBaseData;
type AcStatutSalarie = ParameterBaseData;
type AcTypeActe = ParameterBaseData & { delai: string };
type AcTypeAuxil = ParameterBaseData;
type AcTypeEcheancier = ParameterBaseData;
type AcTypeCharge = ParameterBaseData & { sens: string };
type AcTypeCpt = ParameterBaseData;
type AcTypeContrat = ParameterBaseData;
type AcTypeDebiteur = ParameterBaseData;
type AcTypeDomicil = ParameterBaseData;
type AcTypeEffet = ParameterBaseData;
type AcTypeEmployeur = ParameterBaseData;
type AcTypeFrai = ParameterBaseData;
type AcTypgarReelle = ParameterBaseData;
type AcTypgarPhy = ParameterBaseData;
type AcTypeLogement = ParameterBaseData;
type AcTypeOperation = ParameterBaseData & { modePaie: string; typePaie: string };
type AcTypeOvp = ParameterBaseData;
type AcTypePiece = ParameterBaseData;
type AcTypeRegul = ParameterBaseData;
type AcTypeSaisie = ParameterBaseData;
type AcVille = ParameterBaseData;
type AcZone = ParameterBaseData & { description: string };