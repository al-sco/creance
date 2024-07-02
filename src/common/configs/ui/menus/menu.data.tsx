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
import acTypeOVPProvider from "../../../../states/signals/parameter_providers/AcTypeOVP.state";
import acTypeOperationProvider from "../../../../states/signals/parameter_providers/AcTypeOperation.state";
import acTypeLogementProvider from "../../../../states/signals/parameter_providers/AcTypeLogement.state";
import acTypgarPhyProvider from "../../../../states/signals/parameter_providers/AcTypgarPhy.state";
import acTypgarReelleProvider from "../../../../states/signals/parameter_providers/AcTypgarReelle.state";
import acTypeFraiProvider from "../../../../states/signals/parameter_providers/AcTypeFrai.state";
import acTypeEmployeurProvider from "../../../../states/signals/parameter_providers/AcTypeEmployeur.state";
import acTypeEffetProvider from "../../../../states/signals/parameter_providers/AcTypeEffet.state";
import acTypeDomicilProvider from "../../../../states/signals/parameter_providers/AcTypeDomicil.state";
import acTypeDebiteurProvider from "../../../../states/signals/parameter_providers/AcTypeDebiteur.state";
import acTypeContratProvider from "../../../../states/signals/parameter_providers/AcTypeContrat.state";
import acTypeCptProvider from "../../../../states/signals/parameter_providers/AcTypeCpt.state";
import acTypeChargeProvider from "../../../../states/signals/parameter_providers/AcTypeCharge.state";
import acTypeEcheancierProvider from "../../../../states/signals/parameter_providers/AcTypeEcheancier.state";
import acTypeAuxilProvider from "../../../../states/signals/parameter_providers/AcTypeAuxil.state";
import acTypeActeProvider from "../../../../states/signals/parameter_providers/AcTypeActe.state";
import acStatutSalarieProvider from "../../../../states/signals/parameter_providers/AcStatutSalarie.state";
import acStatutCreanceProvider from "../../../../states/signals/parameter_providers/AcStatutCreance.state";
import acQuartierProvider from "../../../../states/signals/parameter_providers/AcQuartier.state";
import acCompteOperProvider from "../../../../states/signals/parameter_providers/AcCompte.state";
import ListableSearchableItemComponent from "../../../../components/listable-searchable-item/listable-searchable-item";
import CreanceMainContent from "../../../../components/creance/creance-main-content";
import { creanceFields } from "../creance/creance.data";

export type SubMenuType = {
  name: string;
  nameHeader?: string
  nameColumn?: string
  loader?: (e: any) => any
  dataProvider?: Signal<any>
  columns?: ParameterColumnType[]
  headers?: ParameterColumnType[]
  handleDelete?: (data: any) => Promise<void>,
  handleEdit?: (data: any) => Promise<void>,
  create?: (data: any) => Promise<void>,
  additionalHeaderRender?: () => JSX.Element,
};

type MenuItemType = {
  name: string;
  icon: string;
  path: string;
  subMenu?: SubMenuType[];
  render?: () => JSX.Element,
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
        nameHeader: "Agence",
        dataProvider: acBanqueAgenceProvider.getState(),
        handleDelete: acBanqueAgenceProvider.delete,
        additionalHeaderRender: () => <ListableSearchableItemComponent placeholder="Rechercher une banque" searchPlaceholder="Exemple: Ecobank" />,
        handleEdit: acBanqueAgenceProvider.update,
        create: acBanqueAgenceProvider.create,
        nameColumn: "",
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
        nameColumn: "Saisie des Banques",
        nameHeader: "",
        dataProvider: acBanqueProvider.getState(),
        create: acBanqueProvider.create,
        handleDelete: acBanqueProvider.delete,
        handleEdit: acBanqueProvider.update,
        loader: acBanqueProvider.find,
        headers: [
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
        nameColumn: "Gestion des Catégories de Debiteur",
        nameHeader: "",
        loader: acCategoryDebtorProvider.find,
        dataProvider: acCategoryDebtorProvider.getState(),
        create: acCategoryDebtorProvider.create,
        handleDelete: acCategoryDebtorProvider.delete,
        handleEdit: acCategoryDebtorProvider.update,
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
        name: "Civilité",
        nameColumn: "Civilité",
        nameHeader: "",
        loader: acCilivityProvider.find,
        dataProvider: acCilivityProvider.getState(),
        create: acCilivityProvider.create,
        handleDelete: acCilivityProvider.delete,
        handleEdit: acCilivityProvider.update,
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
        name: "Classe",
        nameColumn: "Gestion des Classes",
        nameHeader: "",
        loader: acClasseProvider.find,
        dataProvider: acClasseProvider.getState(),
        create: acClasseProvider.create,
        handleDelete: acClasseProvider.delete,
        handleEdit: acClasseProvider.update,
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
        dataProvider: acCompteOperProvider.getState(),
        loader: acCompteOperProvider.find,
        create: acCompteOperProvider.create,
        handleDelete: acCompteOperProvider.delete,
        handleEdit: acCompteOperProvider.update,


        nameHeader: "Saisie Compte Opération",
        nameColumn: "",
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
        nameHeader: "Groupe Creance / Type Opération",
        nameColumn: "Compte Ecriture",
        loader: acComptableAccountOperationSonareciProvider.find,
        dataProvider: acComptableAccountOperationSonareciProvider.getState(),
        create: acComptableAccountOperationSonareciProvider.create,
        handleDelete: acComptableAccountOperationSonareciProvider.delete,
        handleEdit: acComptableAccountOperationSonareciProvider.update,
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
        nameHeader: "Groupe Creance / Type Opération",
        nameColumn: "Compte Ecriture",
        loader: acComptableAccountOperationSonareciProvider.find,
        dataProvider: acComptableAccountOperationSonareciProvider.getState(),
        create: acComptableAccountOperationSonareciProvider.create,
        handleDelete: acComptableAccountOperationSonareciProvider.delete,
        handleEdit: acComptableAccountOperationSonareciProvider.update,
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
        nameHeader: "Groupe Creance / Type Opération",
        nameColumn: "Compte Ecriture",
        loader: acComptableAccountOperationSonareciProvider.find,
        dataProvider: acComptableAccountOperationSonareciProvider.getState(),
        create: acComptableAccountOperationSonareciProvider.create,
        handleDelete: acComptableAccountOperationSonareciProvider.delete,
        handleEdit: acComptableAccountOperationSonareciProvider.update,
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
        nameHeader: "",
        nameColumn: "Code Produits (Cptes Clients)",
        dataProvider: acCodeProduitSonareciProvider.getState(),
        loader: acCodeProduitSonareciProvider.find,
        create: acCodeProduitSonareciProvider.create,
        handleDelete: acCodeProduitSonareciProvider.delete,
        handleEdit: acCodeProduitSonareciProvider.update
        ,
        headers: [
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
        nameColumn: "Liste des Entités de l'ACCC",
        nameHeader: "",
        loader: acEntityProvider.find,
        dataProvider: acEntityProvider.getState(),
        create: acEntityProvider.create,
        handleDelete: acEntityProvider.delete,
        handleEdit: acEntityProvider.update,
        headers: [{
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
        nameColumn: "Gestion des Etapes",
        nameHeader: "",
        loader: acEtapeProvider.find,
        dataProvider: acEtapeProvider.getState(),
        create: acEtapeProvider.create,
        handleDelete: acEtapeProvider.delete,
        handleEdit: acEtapeProvider.update,
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
        name: "Etat de la demande de Localisation",
        nameHeader: "",
        nameColumn: "Etat Localisation",
        loader: acEtatLocalisationProvider.find,
        dataProvider: acEtatLocalisationProvider.getState(),
        create: acEtatLocalisationProvider.create,
        handleDelete: acEtatLocalisationProvider.delete,
        handleEdit: acEtatLocalisationProvider.update,
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
        name: "Exercice",
        nameHeader: "",
        loader: acExercicesProvider.find,
        dataProvider: acExercicesProvider.getState(),
        create: acExercicesProvider.create,
        handleDelete: acExercicesProvider.delete,
        handleEdit: acExercicesProvider.update,
        nameColumn: "Gestion des Exercices",
        headers: [
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
        nameColumn: "Gestions des Fonctions",
        nameHeader: "",
        loader: acFunctionProvider.find,
        dataProvider: acFunctionProvider.getState(),
        create: acFunctionProvider.create,
        handleDelete: acFunctionProvider.delete,
        handleEdit: acFunctionProvider.update,
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
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
        name: "Groupe Créance",
        nameColumn: "Gestion des Groupes de Creance",
        dataProvider: acGroupeCreanceProvider.getState(),
        loader: acGroupeCreanceProvider.find,
        create: acGroupeCreanceProvider.create,
        handleDelete: acGroupeCreanceProvider.delete,
        handleEdit: acGroupeCreanceProvider.update,
        nameHeader: "Gestion des Entités ACCC",
        headers: [
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
        nameHeader: "",
        nameColumn: "Gestion des Journaux",
        dataProvider: acJournalProvider.getState(),
        loader: acJournalProvider.find,
        create: acJournalProvider.create,
        handleDelete: acJournalProvider.delete,
        handleEdit: acJournalProvider.update,
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
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
        name: "Message",
        nameHeader: "",
        nameColumn: "Messages",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acMessagesProvider.getState(),
        loader: acMessagesProvider.find,
        create: acMessagesProvider.create,
        handleDelete: acMessagesProvider.delete,
        handleEdit: acMessagesProvider.update,
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
        nameHeader: "",
        nameColumn: "Gestion des Modes d'Acquisition ",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acModeAcquisitionProvider.getState(),
        loader: acModeAcquisitionProvider.find,
        create: acModeAcquisitionProvider.create,
        handleDelete: acModeAcquisitionProvider.delete,
        handleEdit: acModeAcquisitionProvider.update,
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
        nameColumn: "Gestion des Modes de Remboursement",
        nameHeader: "",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acModePaiementProvider.getState(),
        loader: acModePaiementProvider.find,
        create: acModePaiementProvider.create,
        handleDelete: acModePaiementProvider.delete,
        handleEdit: acModePaiementProvider.update,
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
        nameHeader: "",
        nameColumn: "Gestion des Nationalités",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acNationaliteProvider.getState(),
        loader: acNationaliteProvider.find,
        create: acNationaliteProvider.create,
        handleDelete: acNationaliteProvider.delete,
        handleEdit: acNationaliteProvider.update,
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
        nameColumn: "Gestion des Objets des Creances",
        nameHeader: "",
        headers: [],
        dataProvider: acObjetCreancesProvider.getState(),
        loader: acObjetCreancesProvider.find,
        create: acObjetCreancesProvider.create,
        handleDelete: acObjetCreancesProvider.delete,
        handleEdit: acObjetCreancesProvider.update,
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
        nameHeader: "Ville",
        headers: [
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
        dataProvider: acZoneProvider.getState(),
        loader: acZoneProvider.find,
        create: acZoneProvider.create,
        handleDelete: acZoneProvider.delete,
        handleEdit: acZoneProvider.update,
        nameColumn: "Quartier + Opération à revoir",
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
        nameColumn: "Périodicité",
        nameHeader: "",
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
        dataProvider: acPeriodicityProvider.getState(),
        loader: acPeriodicityProvider.find,
        create: acPeriodicityProvider.create,
        handleDelete: acPeriodicityProvider.delete,
        handleEdit: acPeriodicityProvider.update,
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
        nameColumn: "Liste des Paramètres",
        nameHeader: "",
        headers: [
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
        dataProvider: acParamGenerauxProvider.getState(),
        loader: acParamGenerauxProvider.find,
        create: acParamGenerauxProvider.create,
        handleDelete: acParamGenerauxProvider.delete,
        handleEdit: acParamGenerauxProvider.update,
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
        nameColumn: "Postes Comptables",
        nameHeader: "",
        dataProvider: acPostecomptableyProvider.getState(),
        loader: acPostecomptableyProvider.find,
        create: acPostecomptableyProvider.create,
        handleDelete: acPostecomptableyProvider.delete,
        handleEdit: acPostecomptableyProvider.update,
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "posteComptable",
            label: "Poste Comptable",
          },
        ],
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
        nameColumn: "Gestion des Professions",
        nameHeader: "",
        dataProvider: acProfessionProvider.getState(),
        loader: acProfessionProvider.find,
        create: acProfessionProvider.create,
        handleDelete: acProfessionProvider.delete,
        handleEdit: acProfessionProvider.update,
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
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
        name: "Quartier",
        nameColumn: "Quartier",
        nameHeader: "",
        dataProvider: acQuartierProvider.getState(),
        loader: acQuartierProvider.find,
        create: acQuartierProvider.create,
        handleDelete: acQuartierProvider.delete,
        handleEdit: acQuartierProvider.update,

        headers: [
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
        nameColumn: "Gestion des Statuts des Creances",
        nameHeader: "",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acStatutCreanceProvider.getState(),
        loader: acStatutCreanceProvider.find,
        create: acStatutCreanceProvider.create,
        handleDelete: acStatutCreanceProvider.delete,
        handleEdit: acStatutCreanceProvider.update,

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
        nameColumn: "Gestion des Statuts des Salaries",
        nameHeader: "",
        dataProvider: acStatutSalarieProvider.getState(),
        loader: acStatutSalarieProvider.find,
        create: acStatutSalarieProvider.create,
        handleDelete: acStatutSalarieProvider.delete,
        handleEdit: acStatutSalarieProvider.update,

        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
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
        name: "Type d'Acte",
        nameColumn: "Acte",
        nameHeader: "",
        dataProvider: acTypeActeProvider.getState(),
        loader: acTypeActeProvider.find,
        create: acTypeActeProvider.create,
        handleDelete: acTypeActeProvider.delete,
        handleEdit: acTypeActeProvider.update,

        headers: [
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
        nameColumn: "Type Auxiliaire",
        nameHeader: "",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acTypeAuxilProvider.getState(),
        loader: acTypeAuxilProvider.find,
        create: acTypeAuxilProvider.create,
        handleDelete: acTypeAuxilProvider.delete,
        handleEdit: acTypeAuxilProvider.update,

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
        nameColumn: "Gestion des Types d'Echéancier",
        nameHeader: "",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acTypeEcheancierProvider.getState(),
        loader: acTypeEcheancierProvider.find,
        create: acTypeEcheancierProvider.create,
        handleDelete: acTypeEcheancierProvider.delete,
        handleEdit: acTypeEcheancierProvider.update,


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
        nameColumn: "Gestion des Types de Charge",
        nameHeader: "",
        dataProvider: acTypeChargeProvider.getState(),
        loader: acTypeChargeProvider.find,
        create: acTypeChargeProvider.create,
        handleDelete: acTypeChargeProvider.delete,
        handleEdit: acTypeChargeProvider.update,


        headers: [
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
        nameColumn: "Gestion des Types de Compte",
        nameHeader: "",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acTypeCptProvider.getState(),
        loader: acTypeCptProvider.find,
        create: acTypeCptProvider.create,
        handleDelete: acTypeCptProvider.delete,
        handleEdit: acTypeCptProvider.update,


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
        nameColumn: "Gestion des Types de Contrat",
        nameHeader: "",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acTypeContratProvider.getState(),
        loader: acTypeContratProvider.find,
        create: acTypeContratProvider.create,
        handleDelete: acTypeContratProvider.delete,
        handleEdit: acTypeContratProvider.update,
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
        nameColumn: "Gestion des Types de Debiteur",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acTypeDebiteurProvider.getState(),
        loader: acTypeDebiteurProvider.find,
        create: acTypeDebiteurProvider.create,
        handleDelete: acTypeDebiteurProvider.delete,
        handleEdit: acTypeDebiteurProvider.update,

        nameHeader: "",
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
        nameColumn: "Type Domiciliation",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acTypeDomicilProvider.getState(),
        loader: acTypeDomicilProvider.find,
        create: acTypeDomicilProvider.create,
        handleDelete: acTypeDomicilProvider.delete,
        handleEdit: acTypeDomicilProvider.update,

        nameHeader: "",
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
        nameColumn: "Gestion Type Effet",
        nameHeader: "",
        dataProvider: acTypeEffetProvider.getState(),
        loader: acTypeEffetProvider.find,
        create: acTypeEffetProvider.create,
        handleDelete: acTypeEffetProvider.delete,
        handleEdit: acTypeEffetProvider.update,

        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
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
        name: "Type Employeur",
        nameColumn: "Saisiede Types Employeur",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        nameHeader: "",
        dataProvider: acTypeEmployeurProvider.getState(),
        loader: acTypeEmployeurProvider.find,
        create: acTypeEmployeurProvider.create,
        handleDelete: acTypeEmployeurProvider.delete,
        handleEdit: acTypeEmployeurProvider.update,

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
        nameColumn: "Type Frais",
        nameHeader: "",
        dataProvider: acTypeFraiProvider.getState(),
        loader: acTypeFraiProvider.find,
        create: acTypeFraiProvider.create,
        handleDelete: acTypeFraiProvider.delete,
        handleEdit: acTypeFraiProvider.update,


        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
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
        name: "Type Garantie Réelle",
        nameColumn: "Type de Garantie Réelle",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acTypgarReelleProvider.getState(),
        loader: acTypgarReelleProvider.find,
        create: acTypgarReelleProvider.create,
        handleDelete: acTypgarReelleProvider.delete,
        handleEdit: acTypgarReelleProvider.update,


        nameHeader: "",
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
        nameColumn: "Type Garantie Personnelle",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acTypgarPhyProvider.getState(),
        loader: acTypgarPhyProvider.find,
        create: acTypgarPhyProvider.create,
        handleDelete: acTypgarPhyProvider.delete,
        handleEdit: acTypgarPhyProvider.update,

        nameHeader: "",
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
        nameColumn: "Type Logement",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acTypeLogementProvider.getState(),
        loader: acTypeLogementProvider.find,
        create: acTypeLogementProvider.create,
        handleDelete: acTypeLogementProvider.delete,
        handleEdit: acTypeLogementProvider.update,

        nameHeader: "",
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
        nameColumn: "Type Opération",
        headers: [
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
        dataProvider: acTypeOperationProvider.getState(),
        loader: acTypeOperationProvider.find,
        create: acTypeOperationProvider.create,
        handleDelete: acTypeOperationProvider.delete,
        handleEdit: acTypeOperationProvider.update,
        nameHeader: "",
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
        nameColumn: "Type OVP",

        nameHeader: "",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acTypeOVPProvider.getState(),
        loader: acTypeOVPProvider.find,
        create: acTypeOVPProvider.create,
        handleDelete: acTypeOVPProvider.delete,
        handleEdit: acTypeOVPProvider.update,

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
        nameColumn: "Gestion des Type de Pièce",
        dataProvider: acTypePieceProvider.getState(),
        loader: acTypePieceProvider.find,
        create: acTypePieceProvider.create,
        handleDelete: acTypePieceProvider.delete,
        handleEdit: acTypePieceProvider.update,
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        nameHeader: "",
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
        nameColumn: " Type de Régularisation",
        dataProvider: acTypeRegulProvider.getState(),
        loader: acTypeRegulProvider.find,
        create: acTypeRegulProvider.create,
        handleDelete: acTypeRegulProvider.delete,
        handleEdit: acTypeRegulProvider.update,
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        nameHeader: "",
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
        nameColumn: "Type de Saisie",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acTypeSaisieProvider.getState(),
        loader: acTypeSaisieProvider.find,
        create: acTypeSaisieProvider.create,
        handleDelete: acTypeSaisieProvider.delete,
        handleEdit: acTypeSaisieProvider.update,
        nameHeader: "",
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
        nameColumn: "Gestion des Villes",
        headers: [
          {
            key: "Code",
            label: "Code",
          },
          {
            key: "Libelle",
            label: "Libelle",
          },
        ],
        dataProvider: acVilleProvider.getState(),
        loader: acVilleProvider.find,
        create: acVilleProvider.create,
        handleDelete: acVilleProvider.delete,
        handleEdit: acVilleProvider.update,
        nameHeader: "",
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
        nameColumn: "Gestion des Zones",
        dataProvider: acZoneProvider.getState(),
        loader: acZoneProvider.find,
        create: acZoneProvider.create,
        handleDelete: acZoneProvider.delete,
        handleEdit: acZoneProvider.update,
        headers: [
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
        nameHeader: "",
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
    render: () => <CreanceMainContent creanceFields={creanceFields} />
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
  render: menuItem.render ? () => menuItem.render!() : undefined,
  subMenus: menuItem.subMenu?.map(
    (subMenu, index): SubMenuItem => ({
      id: index,
      name: subMenu.name,
      nameColumn: subMenu.nameColumn,
      nameHeader: subMenu.nameHeader,
      headers: subMenu.headers,
      subMenuType: subMenu,
      viewName: getViewName(menuItem),
      loader: subMenu.loader,
      render:
        subMenu.dataProvider && subMenu.columns
          ? () => buildTableContent({ columns: subMenu.columns!, signal: subMenu.dataProvider!, subMenu: subMenu })
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
