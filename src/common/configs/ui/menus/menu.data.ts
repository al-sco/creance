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
import acPeriodicityProvider from "../../../../states/signals/parameter_providers/AcPeriodicite.state";
import { Signal } from "@preact/signals-react";
import { ParameterColumnType } from "../../../../components/parameter-main-content/parameter-main-content";
import acCategoryDebtorProvider from "../../../../states/signals/parameter_providers/AcCategoryDebtor.state";
import acCilivityProvider from "../../../../states/signals/parameter_providers/AcCivility.state";
import acClasseProvider from "../../../../states/signals/parameter_providers/AcClasse.state";
import acCodeProduitSonareciProvider from "../../../../states/signals/parameter_providers/AcCodeProduitsSonareci";
import acComptableAccountOperationSonareciProvider from "../../../../states/signals/parameter_providers/AcComptableAccountOperationSonareci.state";
import acEntityProvider from "../../../../states/signals/parameter_providers/AcEntite.state";
import acEtapeProvider from "../../../../states/signals/parameter_providers/AcEtape.state";
import acEtatLocalisationProvider from "../../../../states/signals/parameter_providers/AcEtatLocalisation.state";
import acExercicesProvider from "../../../../states/signals/parameter_providers/AcExercice.state";
import acFunctionProvider from "../../../../states/signals/parameter_providers/AcFunction.state";
import acGroupeCreanceProvider from "../../../../states/signals/parameter_providers/AcGroupeCreance.state";
import acJournalProvider from "../../../../states/signals/parameter_providers/AcJournal.state";
import acMessagesProvider from "../../../../states/signals/parameter_providers/AcMessages.state";
import acModeAcquisitionProvider from "../../../../states/signals/parameter_providers/AcModeAcquisition.state";
import acModePaiementProvider from "../../../../states/signals/parameter_providers/AcModePaiement.state";
import acNationaliteProvider from "../../../../states/signals/parameter_providers/AcNationality.state";
import acObjetCreancesProvider from "../../../../states/signals/parameter_providers/AcObjetCreances.state";
import acPostecomptableyProvider from "../../../../states/signals/parameter_providers/AcPosteComptable.state";
import acProfessionProvider from "../../../../states/signals/parameter_providers/AcProfession.state";
import acZoneProvider from "../../../../states/signals/parameter_providers/AcZone.state";
import acVilleProvider from "../../../../states/signals/parameter_providers/AcVille.state";
import acTypeSaisieProvider from "../../../../states/signals/parameter_providers/AcTypeSaisie.state";
import acTypeRegulProvider from "../../../../states/signals/parameter_providers/AcTypeRegul.state";
import acTypePieceProvider from "../../../../states/signals/parameter_providers/AcTypePiece.state";
import acParamGenerauxProvider from "../../../../states/signals/parameter_providers/AcParamGeneraux.state";
import acBanqueAgenceProvider from "../../../../states/signals/parameter_providers/AcBanqueAgence.state";
import acBanqueProvider from "../../../../states/signals/parameter_providers/AcBanque.state";
import { buildTableContent } from "../../../../components/base-table/table-render";

export type SubMenuType = {
  name: string;
  nameHeader?:string
  nameColumn?:string
  loader?: (e: any) => any
  dataProvider?: Signal<any>
  columns?: ParameterColumnType[]
  headers?: ParameterColumnType[]
  handleDelete?:(data:any)=>void,
  handleEdit?:(data:any)=>void,
  create?:(data:any)=>void
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
        loader: acBanqueAgenceProvider.find,
        nameHeader:"Banque",
        dataProvider: acBanqueAgenceProvider.getState(),
        handleDelete:acBanqueAgenceProvider.delete,
        handleEdit:acBanqueAgenceProvider.delete,
        create:acBanqueAgenceProvider.create,
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
        dataProvider: acBanqueProvider.getState(),
        create:acBanqueProvider.create,
        handleDelete:acBanqueProvider.delete,
        handleEdit:acBanqueProvider.update,
        loader: acBanqueAgenceProvider.find,
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
        loader: acCategoryDebtorProvider.find,
        dataProvider: acCategoryDebtorProvider.getState(),
        create:acCategoryDebtorProvider.create,
        handleDelete:acCategoryDebtorProvider.delete,
        handleEdit:acCategoryDebtorProvider.update,
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
        loader: acCilivityProvider.find,
        dataProvider: acCilivityProvider.getState(),
        create:acCilivityProvider.create,
        handleDelete:acCilivityProvider.delete,
        handleEdit:acCilivityProvider.update,
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
        dataProvider: acClasseProvider.getState(),
        create:acClasseProvider.create,
        handleDelete:acClasseProvider.delete,
        handleEdit:acClasseProvider.update,
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
        loader: acComptableAccountOperationSonareciProvider.find,
        dataProvider: acComptableAccountOperationSonareciProvider.getState(),
        create:acComptableAccountOperationSonareciProvider.create,
        handleDelete:acComptableAccountOperationSonareciProvider.delete,
        handleEdit:acComptableAccountOperationSonareciProvider.update,
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
        loader: acComptableAccountOperationSonareciProvider.find,
        dataProvider: acComptableAccountOperationSonareciProvider.getState(),
        create:acComptableAccountOperationSonareciProvider.create,
        handleDelete:acComptableAccountOperationSonareciProvider.delete,
        handleEdit:acComptableAccountOperationSonareciProvider.update,
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
        loader: acComptableAccountOperationSonareciProvider.find,
        dataProvider: acComptableAccountOperationSonareciProvider.getState(),
        create:acComptableAccountOperationSonareciProvider.create,
        handleDelete:acComptableAccountOperationSonareciProvider.delete,
        handleEdit:acComptableAccountOperationSonareciProvider.update,
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
        loader: acCodeProduitSonareciProvider.find,
        dataProvider: acCodeProduitSonareciProvider.getState(),
        create:acCodeProduitSonareciProvider.create,
        handleDelete:acCodeProduitSonareciProvider.delete,
        handleEdit:acCodeProduitSonareciProvider.update,
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
        loader: acEntityProvider.find,
        dataProvider: acEntityProvider.getState(),
        create:acEntityProvider.create,
        handleDelete:acEntityProvider.delete,
        handleEdit:acEntityProvider.update,
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
        loader: acEtapeProvider.find,
        dataProvider: acEtapeProvider.getState(),
        create:acEtapeProvider.create,
        handleDelete:acEtapeProvider.delete,
        handleEdit:acEtapeProvider.update,
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
        loader: acEtatLocalisationProvider.find,
        dataProvider: acEtatLocalisationProvider.getState(),
        create:acEtatLocalisationProvider.create,
        handleDelete:acEtatLocalisationProvider.delete,
        handleEdit:acEtatLocalisationProvider.update,
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
        loader: acExercicesProvider.find,
        dataProvider: acExercicesProvider.getState(),
        create:acExercicesProvider.create,
        handleDelete:acExercicesProvider.delete,
        handleEdit:acExercicesProvider.update,
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
        loader: acFunctionProvider.find,
        dataProvider: acFunctionProvider.getState(),
        create:acFunctionProvider.create,
        handleDelete:acFunctionProvider.delete,
        handleEdit:acFunctionProvider.update,
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
        dataProvider: acGroupeCreanceProvider.getState(),
        loader: acGroupeCreanceProvider.find,
        create:acGroupeCreanceProvider.create,
        handleDelete:acGroupeCreanceProvider.delete,
        handleEdit:acGroupeCreanceProvider.update,
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
        dataProvider: acJournalProvider.getState(),
        loader: acJournalProvider.find,
        create:acJournalProvider.create,
        handleDelete:acJournalProvider.delete,
        handleEdit:acJournalProvider.update,
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
        dataProvider: acMessagesProvider.getState(),
        loader: acMessagesProvider.find,
        create:acMessagesProvider.create,
        handleDelete:acMessagesProvider.delete,
        handleEdit:acMessagesProvider.update,
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
        dataProvider: acModeAcquisitionProvider.getState(),
        loader: acModeAcquisitionProvider.find,
        create:acModeAcquisitionProvider.create,
        handleDelete:acModeAcquisitionProvider.delete,
        handleEdit:acModeAcquisitionProvider.update,
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
        dataProvider: acModePaiementProvider.getState(),
        loader: acModePaiementProvider.find,
        create:acModePaiementProvider.create,
        handleDelete:acModePaiementProvider.delete,
        handleEdit:acModePaiementProvider.update,
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
        dataProvider: acNationaliteProvider.getState(),
        loader: acNationaliteProvider.find,
        create:acNationaliteProvider.create,
        handleDelete:acNationaliteProvider.delete,
        handleEdit:acNationaliteProvider.update,
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
        dataProvider: acObjetCreancesProvider.getState(),
        loader: acObjetCreancesProvider.find,
        create:acObjetCreancesProvider.create,
        handleDelete:acObjetCreancesProvider.delete,
        handleEdit:acObjetCreancesProvider.update,
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
        dataProvider: acZoneProvider.getState(),
        loader: acZoneProvider.find,
        create:acZoneProvider.create,
        handleDelete:acZoneProvider.delete,
        handleEdit:acZoneProvider.update,
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
        dataProvider: acPeriodicityProvider.getState(),
        loader: acPeriodicityProvider.find,
        create:acPeriodicityProvider.create,
        handleDelete:acPeriodicityProvider.delete,
        handleEdit:acPeriodicityProvider.update,
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
        dataProvider: acParamGenerauxProvider.getState(),
        loader: acParamGenerauxProvider.find,
        create:acParamGenerauxProvider.create,
        handleDelete:acParamGenerauxProvider.delete,
        handleEdit:acParamGenerauxProvider.update,
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
        dataProvider: acPostecomptableyProvider.getState(),
        loader: acPostecomptableyProvider.find,
        create:acPostecomptableyProvider.create,
        handleDelete:acPostecomptableyProvider.delete,
        handleEdit:acPostecomptableyProvider.update,
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
        dataProvider: acProfessionProvider.getState(),
        loader: acProfessionProvider.find,
        create:acProfessionProvider.create,
        handleDelete:acProfessionProvider.delete,
        handleEdit:acProfessionProvider.update,
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
      // TODO
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
        // TODO
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
        name: "Statut Salarié",
        nameColumn:"Gestion des Statuts des Salaries",
        nameHeader:"",
        //TODO
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
        //TODO
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
        //TODO
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
        //TODO

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
        //TODO

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
        //TODO

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
        //TODO

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
        //TODO
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
        //TODO
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
        //TODO
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
        //TODO
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
        //TODO

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
        //TODO

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
        //TODO
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
        //TODO
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
        //TODO
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
        //TODO
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
        dataProvider: acTypePieceProvider.getState(),
        loader: acTypePieceProvider.find,
        create:acTypePieceProvider.create,
        handleDelete:acTypePieceProvider.delete,
        handleEdit:acTypePieceProvider.update,
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
        dataProvider: acTypeRegulProvider.getState(),
        loader: acTypeRegulProvider.find,
        create:acTypeRegulProvider.create,
        handleDelete:acTypeRegulProvider.delete,
        handleEdit:acTypeRegulProvider.update,
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
        dataProvider: acTypeSaisieProvider.getState(),
        loader: acTypeSaisieProvider.find,
        create:acTypeSaisieProvider.create,
        handleDelete:acTypeSaisieProvider.delete,
        handleEdit:acTypeSaisieProvider.update,
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
        dataProvider: acVilleProvider.getState(),
        loader: acVilleProvider.find,
        create:acVilleProvider.create,
        handleDelete:acVilleProvider.delete,
        handleEdit:acVilleProvider.update,
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
        dataProvider: acZoneProvider.getState(),
        loader: acZoneProvider.find,
        create:acZoneProvider.create,
        handleDelete:acZoneProvider.delete,
        handleEdit:acZoneProvider.update,
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
          ? () => buildTableContent({columns:subMenu.columns!,signal:subMenu.dataProvider!,subMenu:subMenu})
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
