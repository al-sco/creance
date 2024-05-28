type ParameterBaseData = {
  id: string;
  code: string;
  libelle: string;
};

type AgenceBanque = ParameterBaseData;
type Banque = ParameterBaseData & { responsabilite: string; adresse: string };
type CategorieDebiteur = ParameterBaseData;
type Civilite = ParameterBaseData;
type Classe = ParameterBaseData;

type CompteOperation = {
  id: string;
  numero: string;
  codeBanqueAgence: string;
  codeGroupeCreance: string;
};


type CompteComptableOperation = {
  id: string;
  groupeCreance: string;
  typeOperation: string;
  compte: string;
  libelle: string;
  sens: string;
  journal: string;
};

type CompteComptableOperationSonareci = CompteComptableOperation & {
  groupeSonareci: string;
};

type CodeProduitSonareci = {
  id: string;
  code: string;
  intituleComptes: string;
  ancienCompteunibol: string;
  compteRegroupeptSaari: string;
  libelle: string;
  observation: string;
};

type Entite = ParameterBaseData & {
  responsable: string;
  libelleLong: string;
};

type Etape = ParameterBaseData;

type EtatDemandelocalisation = ParameterBaseData;
type Cloture = {
  enCours: "EN COURS";
  cloture: "CLOTURE";
};
type Exercice = {
  annee: string;
  libelle: string;
  dateAdoptionBud: string;
  dateDebut: string;
  dateFin: string;
  cloture: Cloture;
};

type Fonction = ParameterBaseData;

type GroupeCreance = ParameterBaseData & {
  libelleLong: string;
};

type Journal = ParameterBaseData;
type Messages = ParameterBaseData;
type ModeAcquisition = ParameterBaseData;
type ModePaiement = ParameterBaseData;
type Nationalite = ParameterBaseData;
type ObjetCreances = ParameterBaseData;

type Operation = {
  ville: ParameterBaseData;
  quartier: Array<ParameterBaseData & { zone: string }>;
  operation: ParameterBaseData[];
};

type Periodicite = ParameterBaseData;
type ParametresGeneraux = ParameterBaseData & { valeur: string; commentaire: string };
type PosteComptable = {
  code: string;
  posteComptable: string;
};

type Profession = ParameterBaseData;
type Quartier = ParameterBaseData & {
  ville: string;
  zone: string;
};

type StatutCreance = ParameterBaseData;
type StatutSalarie = ParameterBaseData;
type TypeActe = ParameterBaseData & { delai: string };
type TypeAuxiliaireJustice = ParameterBaseData;
type TypeEcheancier = ParameterBaseData;
type TypeCharge = ParameterBaseData & { sens: string };
type TypeCompte = ParameterBaseData;
type TypeContrat = ParameterBaseData;
type TypeDebiteur = ParameterBaseData;
type TypeDomiciliation = ParameterBaseData;
type TypeEffet = ParameterBaseData;
type TypeEmployeur = ParameterBaseData;
type TypeFrais = ParameterBaseData;
type TypeGarantieReelle = ParameterBaseData;
type TypeGarantiePersonnelle = ParameterBaseData;
type TypeLogement = ParameterBaseData;
type TypeOperation = ParameterBaseData & { modePaie: string; typePaie: string };
type TypeOvd = ParameterBaseData;
type TypePiece = ParameterBaseData;
type TypeRegularisation = ParameterBaseData;
type TypeSaisie = ParameterBaseData;
type Ville = ParameterBaseData;
type Zone = ParameterBaseData & { description: string };