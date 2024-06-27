import Recovery from "../../../../assets/recovery.svg"
import Settings from "../../../../assets/settings-enable.svg"
import FollowClient from "../../../../assets/suiv-client.svg"
import Patrimoine from "../../../../assets/patrimoine.svg"
import Account from "../../../../assets/account.svg";
import Operation from "../../../../assets/operation.svg";
import Archivre from "../../../../assets/archive.svg";
import Contentieux from "../../../../assets/contentieux.svg";
import Creance from "../../../../assets/creance.svg";
import Help from "../../../../assets/help.svg";
import { MenuItem, SubMenuItem } from "./menus.type";
import { AcOperationAccountStateFuncs, operationList } from "../../../../states/signals/parameter_providers/AcOperationAccount.state";
import { AcPeriodicityStateFuncs, periodicityList } from "../../../../states/signals/parameter_providers/AcPeriodicity.state";
import { Signal } from "@preact/signals-react";
import { ParameterColumnType } from "../../../../components/parameter-main-content/parameter-main-content";
import { AcBankAgencyStateFuncs, bankAgencyList } from "../../../../states/signals/parameter_providers/AcBankAgency.state";
import { buildTableContent } from "../../../../components/base-table/base-table";
import { bankList, AcBankStateFuncs } from "../../../../states/signals/parameter_providers/AcBanks.state";
import { AcCategoryDebtorStateFuncs, categroyList } from "../../../../states/signals/parameter_providers/AcCategoryDebtor.state";
import { AcCilivityStateFuncs, civilityList } from "../../../../states/signals/parameter_providers/AcCivility.state";
import { AcClasseStateFuncs, classeList } from "../../../../states/signals/parameter_providers/AcClasse.state";
import { AcCodeProduitSonareciStateFuncs, codeProduitsList } from "../../../../states/signals/parameter_providers/AcCodeProduitsSonareci";
import { AcComptableAccountOperationSonareciStateFuncs, compteComptableSonareciList } from "../../../../states/signals/parameter_providers/AcComptableAccountOperationSonareci.state";
import { AcComptableAccountOperationStateFuncs, compteComptableList } from "../../../../states/signals/parameter_providers/AcCompteCptablOper.state";
import { AcEntityStateFuncs, entiteList } from "../../../../states/signals/parameter_providers/AcEntite.state";
import { AcEtapeStateFuncs, etapeList } from "../../../../states/signals/parameter_providers/AcEtape.state";
import { AcSatusRequestLocationStateFuncs, locationList } from "../../../../states/signals/parameter_providers/AcEtatLocalisation.state";
import { AcExercicesService, exerciceServiceList } from "../../../../states/signals/parameter_providers/AcExercice.state";
import { AcFunctionStateFuncs, functionList } from "../../../../states/signals/parameter_providers/AcFunction.state";
import { AcGroupeCreanceStateFuncs, groupeCreanceList } from "../../../../states/signals/parameter_providers/AcGroupeCreance.state";
import { AcJournalStateFuncs, journalList } from "../../../../states/signals/parameter_providers/AcJournal.state";
import { AcMessagesStateFuncs, messagesList } from "../../../../states/signals/parameter_providers/AcMessages.state";
import { AcModeAcquisitionStateFuncs, acquisitionList } from "../../../../states/signals/parameter_providers/AcModeAcquisition.state";
import { AcModePaiementStateFuncs, paiementList } from "../../../../states/signals/parameter_providers/AcModePaiement.state";
import { AcNationalityStateFuncs, nationalityList } from "../../../../states/signals/parameter_providers/AcNationality.state";
import { AcObjetCreancesStateFuncs, creancesList } from "../../../../states/signals/parameter_providers/AcObjetCreances.state";
import { AcParamGenerauxStateFuncs, paramGenerauxList } from "../../../../states/signals/parameter_providers/AcParamGeneraux.state";
import { posteComptableList, PosteComptableStateFuncs } from "../../../../states/signals/parameter_providers/posteComptable.state";
import { professionList, ProfessionStateFuncs } from "../../../../states/signals/parameter_providers/profession.state";
import { AcZoneStateFuncs, zoneList } from "../../../../states/signals/parameter_providers/AcZone.state";
import { AcVilleStateFuncs, villeList } from "../../../../states/signals/parameter_providers/AcVille.state";
import { AcTypeSaisieStateFuncs, typeSaisieList } from "../../../../states/signals/parameter_providers/AcTypeSaisie.state";
import { AcTypeRegulStateFuncs, typeRegulList } from "../../../../states/signals/parameter_providers/AcTypeRegul.state";
import { AcTypePieceStateFuncs, typePieceList } from "../../../../states/signals/parameter_providers/AcTypePiece.state";

type SubMenuType = {
  name: string;
  nameHeader?:string
  nameColumn?:string
  loader?: (e: any) => any;
  dataProvider?: Signal;
  columns?: ParameterColumnType[];
  headers?: ParameterColumnType[];
};

type MenuItemType = {
  name: string;
  icon: string;
  path: string;
  subMenu?: SubMenuType[];
};

const parametersViewsPaths = ["/settings"];
const letters = new Map<string, string>([
  ["é", "e"],
  ["à", "a"],
  ["'", ""],
]);

const menuItemsData: Array<MenuItemType> = [
  {
    name: "Overview",
    path: "/overview",
    icon: Recovery,
  },
  {
    name: "Action",
    path: "/action",
    icon: Account,
    subMenu: [
      {
        name: "Connexion",
      },
      {
        name: "Déconnexion",
      },
      {
        name: "Comptabilité",
      },
      {
        name: "Utilisateur",
      },
      {
        name: "Habilitations",
      },
      {
        name: "Modifier mot de passe",
      },
      {
        name: "Initialisation du mot de passe",
      },
      {
        name: "Quitter",
      },
    ],
  },
  {
    name: "Paramètres",
    icon: Settings,
    path: "/settings",
    subMenu: [
      {
        name: "Agence de banque",
        loader: AcBankAgencyStateFuncs.fetchBankAgencies,
        dataProvider: bankAgencyList,
        nameHeader:"Banque",
        nameColumn:"Agence",
        headers: [
          {
            label: "Code",
            key: "Code",
          },

          {
            label: "Libelle",
            key: "Libelle",
          },
        ],
        columns: [
          {
            label: "Code",
            key: "Code",
          },

          {
            label: "Libelle",
            key: "Libelle",
          },
        ],
      },
      {
        name: "Banque",
        nameColumn:"Saisie des Banques",
        nameHeader:"",
        dataProvider: bankList,
        loader: AcBankStateFuncs.fetchBanks,
        headers: [],
        columns: [
          {
            label: "Code",
            key: "Code",
          },
          {
            label: "Libelle",
            key: "Libelle",
          },
          {
            label: "Adresse",
            key: "Adresse",
          },
          {
            label: "Responsabilite",
            key: "Responsabilite",
          },
        ],
      },
      {
        name: "Catégorie de débiteur",
        nameColumn:"Gestion des Catégories de Debiteur",
        nameHeader:"",
        loader: AcCategoryDebtorStateFuncs.fetchCategories,
        dataProvider: categroyList,
        headers: [],
        columns: [
          {
            label: "Code",
            key: "Code",
          },
          {
            label: "Libelle",
            key: "Libelle",
          },
        ],
      },
      {
        name: "Civilité",
        nameColumn:"Civilité",
        nameHeader:"",
        loader: AcCilivityStateFuncs.fetchCivilities,
        dataProvider: civilityList,
        headers: [],
        columns: [
          {
            label: "Code",
            key: "Code",
          },
          {
            label: "Libelle",
            key: "Libelle",
          },
        ],
      },

      {
        name: "Classe",
        nameColumn:"Gestion des Classes",
        nameHeader:"",
        loader: AcClasseStateFuncs.fetchClasses,
        dataProvider: classeList,
        headers: [],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Compte d'operation",
        nameHeader:"Saisie Compte Opération",
        nameColumn:"",
        loader: AcOperationAccountStateFuncs.fetchAccountOperations,
        dataProvider: operationList,
        columns: [
          {
            key: "codeBanqueAgence",
            label: "Code",
          },
          {
            key: "codeGroupeCreance",
            label: "Libelle",
          },
        ],
        headers: [
          {
            key: "numero",
            label: "N°Compte",
          },
          {
            key: "codeBanqueAgence",
            label: "Code Banque Agence",
          },
          {
            key: "codeGroupeCreance",
            label: "Code Groupe Créance",
          },
        ],
      },
      {
        name: "Cpte Comptable d'Opération",
        nameHeader:"Groupe Creance / Type Opération",
        nameColumn:"Compte Ecriture",
        loader: AcComptableAccountOperationStateFuncs.fetchAccountOperations,
        dataProvider: compteComptableList,
        headers: [
          {
            key: "groupeCreance",
            label: "Groupe Creance",
          },
          {
            key: "typeOperation",
            label: "Type Operation",
          },
        ],
        columns: [
          {
            key: "cptoperCode",
            label: "Compte",
          },
          {
            key: "cptoperCode",
            label: "Libelle",
          },
          {
            key: "bqagCode",
            label: "Sens",
          },
          {
            key: "grpCreanCode",
            label: "Journal",
          },
        ],
      },
      {
        name: "Cpte comptable d'operation Sonar",
        nameHeader:"Groupe Creance / Type Opération",
        nameColumn:"Compte Ecriture",
        loader: AcComptableAccountOperationSonareciStateFuncs.fetchComptableAccountOperations,
        dataProvider: compteComptableSonareciList,
        headers: [
            {
              key: "groupeCreance",
              label: "Groupe Creance",
            },
            {
              key: "typeOperation",
              label: "Type Operation",
            },
            {
                key: "groupeSonareci",
                label: "Groupe Sonareci",
              },
          ],
        columns: [
          {
            key: "Compte",
            label: "Compte",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
          {
            key: "Sens",
            label: "Sens",
          },
          {
            key: "Journal",
            label: "Journal",
          },

        ],
      },
      {
        name: "Cpte comptable d'operation Sonar Modif",
        nameHeader:"Groupe Creance / Type Opération",
        nameColumn:"Compte Ecriture",
        loader: AcComptableAccountOperationSonareciStateFuncs.fetchComptableAccountOperations,
        dataProvider: compteComptableSonareciList,
        headers: [
            {
              key: "groupeCreance",
              label: "Groupe Creance",
            },
            {
              key: "typeOperation",
              label: "Type Operation",
            },
            {
                key: "groupeSonareci",
                label: "Groupe Sonareci",
              },
          ],
        columns: [
          {
            key: "Compte",
            label: "Compte",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
          {
            key: "Sens",
            label: "Sens",
          },
          {
            key: "Journal",
            label: "Journal",
          },
        ],
      },
      {
        name: "Codes produits Sonareci",
        nameHeader:"",
        nameColumn:"Code Produits (Cptes Clients)",
        loader: AcCodeProduitSonareciStateFuncs.fetchProductsCodes,
        dataProvider: codeProduitsList,
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "intituleComptes",
            label: "Intitulé de Comptes",
          },
          {
            key: "ancienCompteunibol",
            label: "Anc.Cpte Unibol (Cpte de Regrpt)",
          },
          {
            key: "compteRegroupeptSaari",
            label: "Cpte Regroupt",
          },

          {
            key: "Libelle",
            label: "Libelle Saari",
          },
          {
            key: "observation",
            label: "Observation",
          },
        ],
      },

      {
        name: "Entité",
        nameColumn:"Liste des Entités de l'ACCC",
        nameHeader:"",
        loader: AcEntityStateFuncs.fetchEntities,
        dataProvider: entiteList,
headers:[{
    key: "responsable",
    label: "Responsable ou Fondé de pourvoirs",
  },
  {
    key: "libelleLong",
    label: "Libellé Long",
  },],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },

        ],
      },
      {
        name: "Etape",
        nameColumn:"Gestion des Etapes",
        nameHeader:"",
        loader: AcEtapeStateFuncs.fetchEtapes,
        dataProvider: etapeList,
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Etat de la demande de Localisation",
        nameHeader:"",
        nameColumn:"Etat Localisation",
        loader: AcSatusRequestLocationStateFuncs.fetchStatusLocations,
        dataProvider: locationList,
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Exercice",
        nameHeader:"",
        loader: AcExercicesService.fetchExercices,
        dataProvider: exerciceServiceList,
        nameColumn:"Gestion des Exercices",
        headers:[],
        columns: [
          {
            key: "annee",
            label: "Annee",
          },
          {
            key: "libelle",
            label: "Libelle",
          },
          {
            key: "dateAdoptionBud",
            label: "Date Adopt Bud",
          },
          {
            key: "dateDebut",
            label: "Date Debut",
          },
          {
            key: "exoDatefin",
            label: "Date Fin",
          },
          {
            key: "cloture",
            label: "Cloture",
          },
        ],
      },
      {
        name: "Fonction",
        nameColumn:"Gestions des Fonctions",
        nameHeader:"",
        loader: AcFunctionStateFuncs.fetchFuncions,
        dataProvider: functionList,
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Groupe Créance",
        nameColumn:"Gestion des Groupes de Creance",
        loader: AcGroupeCreanceStateFuncs.fetchGroupeCreances,
        dataProvider: groupeCreanceList,
        nameHeader:"Gestion des Entités ACCC",
        headers:[
            {
                key: "Code",
                label: "Code",
              },
              {
                key: "Libelle",
                label: "Libelle",
              },
              {
                key: "Libellé Long",
                label: "Libellé Long",
              },
        ],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },

        ],
      },
      {
        name: "Journal",
        nameHeader:"",
        nameColumn:"Gestion des Journaux",
        loader: AcJournalStateFuncs.fetchJournals,
        dataProvider: journalList,
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Message",
        nameHeader:"",
        nameColumn:"Messages",
        headers:[],
        loader: AcMessagesStateFuncs.fetchMessages,
        dataProvider: messagesList,
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Mode d'Acquisition",
        nameHeader:"",
        nameColumn:"Gestion des Modes d'Acquisition ",
        headers:[],
        loader: AcModeAcquisitionStateFuncs.fetchAcquisitionModes,
        dataProvider: acquisitionList,
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Mode de Paiement",
        nameColumn:"Gestion des Modes de Remboursement",
        nameHeader:"",
        headers:[],
        loader: AcModePaiementStateFuncs.fetchPaimentModes,
        dataProvider: paiementList,
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Nationalité",
        nameHeader:"",
        nameColumn:"Gestion des Nationalités",
        headers:[],
        loader: AcNationalityStateFuncs.fetchNationalities,
        dataProvider: nationalityList,
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Objet créance",
        nameColumn:"Gestion des Objets des Creances",
        nameHeader:"",
        headers:[],
        loader: AcObjetCreancesStateFuncs.fetchCreancesObjects,
        dataProvider: creancesList,
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Opération",
        nameHeader:"Ville",
        headers: [],
        loader: AcOperationAccountStateFuncs.fetchAccountOperations,
        dataProvider: operationList,
        nameColumn:"Quartier + Opération à revoir",
        columns: [
          {
            key: "zone",
            label: "Zone",
          },
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Périodicité",
        nameColumn:"Périodicité",
        nameHeader:"",
        headers:[],
        loader: AcPeriodicityStateFuncs.fetchPeriodicities,
        dataProvider: periodicityList,
        columns: [
          {
            label: "Code",
            key: "Code",
          },
          {
            label: "Libelle",
            key: "Libelle",
          },
        ],
      },
      {
        name: "Paramètre Généraux",
        nameColumn:"Liste des Paramètres",
        nameHeader:"",
        headers:[],
        dataProvider:paramGenerauxList,
        loader:AcParamGenerauxStateFuncs.fetchParamGeneraux,
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
          {
            key: "Valeur",
            label: "Valeur",
          },
          {
            key: "Commentaire",
            label: "Commentaire",
          },
        ],
      },
      {
        name: "Poste Comptable",
        nameColumn:"Postes Comptables",
        nameHeader:"",
        dataProvider:posteComptableList,
        loader:PosteComptableStateFuncs.fetchPosteComptable,
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "posteComptable",
            label: "Poste Comptable",
          },
        ],
      },
      {
        name: "Profession",
        nameColumn:"Gestion des Professions",
        nameHeader:"",
        dataProvider: professionList,
        loader:ProfessionStateFuncs.fetchProfessions,
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Quartier",
        nameColumn:"Quartier",
        nameHeader:"",
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
          {
            key: "Ville",
            label: "Ville",
          },
          {
            key: "Zone",
            label: "Zone",
          },
        ],
      },
      {
        name: "Statut Créance",
        nameColumn:"Gestion des Statuts des Creances",
        nameHeader:"",
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Staut Salarié",
        nameColumn:"Gestion des Statuts des Salaries",
        nameHeader:"",
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type d'Acte",
        nameColumn:"Acte",
        nameHeader:"",
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
          {
            key: "Delai",
            label: "Delai",
          },
        ],
      },
      {
        name: "Type d'Auxiliaire",
        nameColumn:"Type Auxiliaire",
        nameHeader:"",
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type d'Echéancier",
        nameColumn:"Gestion des Types d'Echéancier",
        nameHeader:"",
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type de Charge",
        nameColumn:"Gestion des Types de Charge",
        nameHeader:"",
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
          {
            key: "Sens",
            label: "Sens",
          },
        ],
      },
      {
        name: "Type de Compte",
        nameColumn:"Gestion des Types de Compte",
        nameHeader:"",
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type de Contrat",
        nameColumn:"Gestion des Types de Contrat",
        nameHeader:"",
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type Débiteur",
        nameColumn:"Gestion des Types de Debiteur",
        headers:[],
        nameHeader:"",
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type de Domiciliation",
        nameColumn:"Type Domiciliation",
        headers:[],
        nameHeader:"",
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type Effet",
        nameColumn:"Gestion Type Effet",
        nameHeader:"",
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type Employeur",
        nameColumn:"Saisiede Types Employeur",
        headers:[],
        nameHeader:"",
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type de Frais",
        nameColumn:"Type Frais",
        nameHeader: "",
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type Garantie Réelle",
        nameColumn:"Type de Garantie Réelle",
        headers:[],
        nameHeader:"",
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type Garantie Personnelle",
        nameColumn:"Type Garantie Personnelle",
        headers:[],
        nameHeader:"",
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type Logement",
        nameColumn:"Type Logement",
        headers:[],
        nameHeader:"",
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type Opération",
        nameColumn:"Type Opération",
        headers:[],
        nameHeader:"",
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
          {
            key: "Mode",
            label: "Mode",
          },
          {
            key: "Paie",
            label: "Paie",
          },
          {
            key: "Type",
            label: "Type",
          },

        ],
      },
      {
        name: "Type OVP",
        nameColumn:"Type OVP",
        nameHeader:"",
        headers:[],
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type Pièce",
        nameColumn:"Gestion des Type de Pièce",
        dataProvider:typePieceList,
        loader:AcTypePieceStateFuncs.fetchTypePiece,
        headers:[],
        nameHeader:"",
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type Régularisation",
        nameColumn:" Type de Régularisation",
        dataProvider:typeRegulList,
        loader:AcTypeRegulStateFuncs.fetchTypeRegul,
        headers:[],
        nameHeader:"",
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Type Saisie",
        nameColumn:"Type de Saisie",
        dataProvider:typeSaisieList,
        loader:AcTypeSaisieStateFuncs.fetchTypeSaisie,
        headers:[],
        nameHeader:"",
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Ville",
        nameColumn:"Gestion des Villes",
        headers:[],
        dataProvider:villeList,
        loader:AcVilleStateFuncs.fetchVilles,
        nameHeader:"",
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
      },
      {
        name: "Zone",
        dataProvider:zoneList,
        loader:AcZoneStateFuncs.fetchZones,
        nameColumn:"Gestion des Zones",
        headers:[],
        nameHeader:"",
        columns: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
          {
            key: "Description",
            label: "Description",
          },
        ],
      },
    ],
  },
  {
    name: "Etude de Creance",
    path: "/creances",
    icon: Creance,
    subMenu: [
      {
        name: "Enregistrement",
      },

      {
        name: "Mise à jour",
      },
      {
        name: "Consultation",
      },
    ],
  },
  {
    name: "Suivi Clientèle",
    path: "/followClient",
    icon: FollowClient,
    subMenu: [
      {
        name: "Enregistrement",
      },
      {
        name: "Mise }à jour",
      },
      {
        name: "Annulation",
      },
      {
        name: "Consultation",
      },
      {
        name: "Suivi }des actes de Recouvrement",
      },
    ],
  },
  {
    name: "Suivi Récouv.",
    path: "/recovery",
    icon: Recovery,
    subMenu: [
      { name: "Enregistrement" },
      { name: "Mise à jour" },
      { name: "Consultation" },
    ],
  },
  {
    name: "Contentieux",
    path: "/contentieux",
    icon: Contentieux,
    subMenu: [
      { name: "Enregistrement" },
      { name: "Mise à jour" },
      { name: "Consultation" },
      { name: "Suivi des Actes de Recouvrement" },
    ],
  },
  {
    name: "Patrimoine",
    path: "/patrimoine",
    icon: Patrimoine,
    subMenu: [
      { name: "Enregistrement" },
      { name: "Mise à jour" },
      { name: "Consultation" },
    ],
  },
  {
    name: "Opérations Div",
    path: "/operations",
    icon: Operation,
    subMenu: [
      { name: "Enregistrement" },
      { name: "Mise à jour" },
      { name: "Consultation" },
      { name: "Budget" },
      { name: "Remboursement des Créanciers" },
      { name: "Gestion de Carnet" },
      { name: "Tableau de Bord-Direction ACCC" },
      { name: "Gestion des Stocks" },
    ],
  },
  {
    name: "Etats",
    path: "/etats",
    icon: Archivre,
    subMenu: [
      { name: "Etude créance" },
      { name: "Suivi Clientèle" },
      { name: "Suivi Recouvrement" },
      { name: "Contentieux" },
      { name: "Patrimoine" },
      { name: "Autres" },
    ],
  },
  {
    name: "Aide",
    icon: Help,
    path: "/aide",
    subMenu: [{ name: "Apropos" }, { name: "Manuel" }, { name: "Aide Oracle" }],
  },
];
export const menuItems: MenuItem[] = menuItemsData.map((menuItem, index) => ({
  id: index,
  path: menuItem.path,
  icon: menuItem.icon,
  name: menuItem.name,

  subMenus: menuItem.subMenu?.map(
    (subMenu, index): SubMenuItem => ({
      id: index,
      name: subMenu.name,
      nameColumn:subMenu.nameColumn,
      nameHeader:subMenu.nameHeader,
      headers:subMenu.headers,
      viewName: getViewName(menuItem),
      loader: subMenu.loader,
      render:
        subMenu.dataProvider && subMenu.columns
          ? () => buildTableContent(subMenu.dataProvider!, subMenu.columns!)
          : undefined,
      columns: subMenu.columns,
      path: formatLabelToPath(subMenu),
    })
  ),
}));

function getViewName(menuItem: MenuItemType): "parameter" | undefined {
  return parametersViewsPaths.findIndex(
    (path) => path.toLowerCase() == menuItem.path.toLowerCase()
  ) !== -1
    ? "parameter"
    : undefined;
}

function formatLabelToPath(subMenu: SubMenuType) {
  let formattedPath = subMenu.name.trim().replaceAll(" ", "_").toLowerCase();
  for (let key of letters.keys()) {
    formattedPath.replaceAll(key, letters.get(key)!.valueOf());
  }

  return formattedPath;
}
