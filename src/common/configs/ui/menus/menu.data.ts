import { MenuItem, SubMenuItem } from "./menus.type";
import Account from "../../../../assets/account.svg";
import Archivre from "../../../../assets/archive.svg";
import Contentieux from "../../../../assets/contentieux.svg";
import Creance from "../../../../assets/creance.svg";
import Help from "../../../../assets/help.svg";
import Operation from "../../../../assets/operation.svg";
import Patrimoine from "../../../../assets/patrimoine.svg";
import FollowClient from "../../../../assets/suiv-client.svg";
import Recovery from "../../../../assets/recovery.svg";
import Settings from "../../../../assets/settings-enable.svg";
import { ParameterColumnType } from "../../../../components/parameter-main-content/parameter-main-content";
import {
  BankAgencyStateFuncs,
  bankAgencyList,
} from "../../../../states/signals/parameter-providers/bank-agency.state";
import { Signal } from "@preact/signals-react";
import { buildTableContent } from "../../../../components/base-table/base-table";
import {
  bankList,
  BankStateFuncs,
} from "../../../../states/signals/parameter-providers/banks.state";
import {
  CategoryDebtorStateFuncs,
  categroyList,
} from "../../../../states/signals/parameter-providers/category-debtor.state";
import {
  CilivityStateFuncs,
  civilityList,
} from "../../../../states/signals/parameter-providers/civility.state";
import {
  ClasseStateFuncs,
  classeList,
} from "../../../../states/signals/parameter-providers/classe.state";
import {
  OperationAccountStateFuncs,
  operationList,
} from "../../../../states/signals/parameter-providers/operation-account.state";
import {
  AccountingAccountOperationStateFuncs,
  compteComptableList,
} from "../../../../states/signals/parameter-providers/AcCompteCptablOper.state";
import {
  AccountingAccountOperationSonareciStateFuncs,
  compteComptableSonareciList,
} from "../../../../states/signals/parameter-providers/accounting-account-operation-sonareci.state";
import {
  CodeProduitSonareciStateFuncs,
  codeProduitsList,
} from "../../../../states/signals/parameter-providers/code-produits-sonareci";
import {
  EntityStateFuncs,
  entiteList,
} from "../../../../states/signals/parameter-providers/entite.state";
import {
  EtapeStateFuncs,
  etapeList,
} from "../../../../states/signals/parameter-providers/etape.state";
import {
  FunctionStateFuncs,
  functionList,
} from "../../../../states/signals/parameter-providers/function.state";
import {
  ObjetCreancesStateFuncs,
  creancesList,
} from "../../../../states/signals/parameter-providers/objet-creances.state";
import {
  JournalStateFuncs,
  journalList,
} from "../../../../states/signals/parameter-providers/journal.state";
import {
  MessagesStateFuncs,
  messagesList,
} from "../../../../states/signals/parameter-providers/messages.state";
import {
  ModeAcquisitionStateFuncs,
  acquisitionList,
} from "../../../../states/signals/parameter-providers/mode-acquisition.state";
import {
  ModePaiementStateFuncs,
  paiementList,
} from "../../../../states/signals/parameter-providers/mode-paiement.state";
import {
  NationalityStateFuncs,
  nationalityList,
} from "../../../../states/signals/parameter-providers/nationality.state";
import {
  PeriodicityStateFuncs,
  periodicityList,
} from "../../../../states/signals/parameter-providers/periodicity.state";
import {
  SatusRequestLocationStateFuncs,
  locationList,
} from "../../../../states/signals/parameter-providers/etatLocalisation.state";
import { key } from "localforage";
import { groupeCreanceList, GroupeCreanceStateFuncs } from "../../../../states/signals/parameter-providers/groupeCreance.state";
import { ExercicesService, exerciceServiceList } from "../../../../states/signals/parameter-providers/exercice.state";

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
        loader: BankAgencyStateFuncs.fetchBankAgency,
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
        loader: BankStateFuncs.fetchBanks,
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
        loader: CategoryDebtorStateFuncs.fetchCategories,
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
        loader: CilivityStateFuncs.fetchCivility,
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
        loader: ClasseStateFuncs.fetchClasse,
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
        loader: OperationAccountStateFuncs.fetchOperationAccount,
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
        loader: AccountingAccountOperationStateFuncs.fetchAccountOperation,
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
        loader: AccountingAccountOperationSonareciStateFuncs.fetchBanks,
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
        loader: AccountingAccountOperationSonareciStateFuncs.fetchBanks,
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
        loader: CodeProduitSonareciStateFuncs.fetchBanks,
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
        loader: EntityStateFuncs.fetchBanks,
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
        loader: EtapeStateFuncs.fetchBanks,
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
        loader: SatusRequestLocationStateFuncs.fetchBanks,
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
        loader: ExercicesService.fetchExercice,
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
        loader: FunctionStateFuncs.fetchBanks,
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
        loader: GroupeCreanceStateFuncs.fetchGroupeCreances,
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
        loader: JournalStateFuncs.fetchBanks,
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
        loader: MessagesStateFuncs.fetchBanks,
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
        loader: ModeAcquisitionStateFuncs.fetchBanks,
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
        loader: ModePaiementStateFuncs.fetchBanks,
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
        loader: NationalityStateFuncs.fetchBanks,
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
        loader: ObjetCreancesStateFuncs.fetchBanks,
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
        loader: PeriodicityStateFuncs.fetchBanks,
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
