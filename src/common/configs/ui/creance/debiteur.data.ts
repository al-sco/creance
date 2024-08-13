import acDebiteurProvider, { AcDebiteurStateProvider, naturePieceIdentite, regimeMariageProvider, sexeProvider, statusMatrimonialProvider } from "../../../../states/signals/creances_providers/AcDebiteur.state";
import acDebiteurMoralProvider from "../../../../states/signals/creances_providers/AcDebiteurMoral.state";
import acDebiteurPhysiqueProvider from "../../../../states/signals/creances_providers/AcDebiteurPhysique.state";
import acDomiciliationStateProvider from "../../../../states/signals/creances_providers/AcDomiciliation.state";
import acBanqueAgenceProvider from "../../../../states/signals/parameter_providers/AcBanqueAgence.state";
import acCategoryDebtorProvider from "../../../../states/signals/parameter_providers/AcCategoryDebtor.state";
import acCiviliteProvider from "../../../../states/signals/parameter_providers/AcCivility.state";
import acFonctionProvider from "../../../../states/signals/parameter_providers/AcFunction.state";
import acNationaliteProvider from "../../../../states/signals/parameter_providers/AcNationality.state";
import acProfessionProvider from "../../../../states/signals/parameter_providers/AcProfession.state";
import acQuartierProvider from "../../../../states/signals/parameter_providers/AcQuartier.state";
import acStatutSalarieProvider from "../../../../states/signals/parameter_providers/AcStatutSalarie.state";
import acTypeDebiteurProvider from "../../../../states/signals/parameter_providers/AcTypeDebiteur.state";
import acTypeDomicilProvider from "../../../../states/signals/parameter_providers/AcTypeDomicil.state";
import acTypeEmployeurProvider from "../../../../states/signals/parameter_providers/AcTypeEmployeur.state";
import {
  CreanceDataType,
  CreanceFieldType,
  CreanceTabType,
  InputType,
} from "./creance.type";

const debiteurFields: CreanceFieldType[] = [
  {
    name: "Code",
    key: 'code',
    state: acDebiteurProvider.getState(),
    onInsert: acDebiteurProvider.simpleInsertWithRefresh,
    selectItems: acDebiteurProvider.getDebiteursSelectItems,
    inputItem: {
      inputType: InputType.text,
      isEditable: false,
      placeholder: "code",
    },
  },
  {
    name: "Catégorie",
    key: 'categDebCode',
    state: acDebiteurProvider.getState(),
    onInsert: acDebiteurProvider.simpleInsert,
    selectItems: acDebiteurProvider.getSelectItems(acCategoryDebtorProvider),
    inputItem: {
      inputType: InputType.text,
      isEditable: false,
      placeholder: "catégorie",
    },
  },
  {
    name: "Tèl",
    key: 'debTeldom',
    onInsert: acDebiteurProvider.simpleInsert,
    state: acDebiteurProvider.getState(),
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "tèl",
    },
  },

  {
    name: "Adr. Postale",
    key: 'debAdrpost',
    onInsert: acDebiteurProvider.simpleInsert,
    state: acDebiteurProvider.getState(),
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "adr. postale",
    },
  },
  {
    name: "Email",
    key: 'debEmail',
    onInsert: acDebiteurProvider.simpleInsert,
    state: acDebiteurProvider.getState(),
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "adr. email",
    },
  },
  {
    name: "Cel",
    key: 'debCel',
    onInsert: acDebiteurProvider.simpleInsert,
    state: acDebiteurProvider.getState(),
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "cel",
    },
  },
  {
    name: "Type",
    key: AcDebiteurStateProvider.debiteurTypeKeyCode,
    state: acDebiteurProvider.getState(),
    onInsert: acDebiteurProvider.simpleInsert,
    selectItems: acDebiteurProvider.getSelectItems(acTypeDebiteurProvider),
    inputItem: {
      inputType: InputType.text,
      isEditable: false,
      placeholder: "type",
    },
  },
  {
    name: "Fax",
    key: 'debFax',
    onInsert: acDebiteurProvider.simpleInsert,
    state: acDebiteurProvider.getState(),
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "fax",
    },
  },
];

const debiteurTabs: CreanceTabType[] = [
  {
    tabName: "Physique",
    rowCount: 2,
    key: AcDebiteurStateProvider.physiqueTypeCode,
    fields: [
      {
        name: "Civilité",
        key: 'civCode',
        state: acDebiteurPhysiqueProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "civilite",
        },
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acCiviliteProvider),
      },
      {
        name: "Nom",
        key: 'debNom',
        state: acDebiteurPhysiqueProvider.getState(),
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        inputItem: {
          inputType: InputType.text,
          placeholder: "nom",
          isEditable: true,
        },
      },
      {
        name: "Prénom",
        key: 'debPren',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,

        state: acDebiteurPhysiqueProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "prénom",
        },
      },
      {
        name: "Date de naissance",
        key: 'debDatnaiss',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(),
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Lieu de Naiss.",
        key: 'debLieunaiss',
        state: acDebiteurPhysiqueProvider.getState(),
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "lieu de naiss.",
        },
      },
      {
        name: "Quartier",
        key: 'quartCode',

        state: acDebiteurPhysiqueProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "quartier",
        },
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acQuartierProvider),
      },
      {
        name: "Nationalité",
        key: 'natCode',
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "nationalité",
        },
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acNationaliteProvider),
      },
      {
        name: "Fonction",
        key: 'debFonction',
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "fonction",
        },
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,

        selectItems: acDebiteurProvider.getSelectItems(acFonctionProvider),
      },
      {
        name: "Profession",
        key: 'profesCode',
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "profession",
        },
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acProfessionProvider),
      },
      {
        name: "Employeur",
        key: 'debEmployeur',
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "employeur",
        },
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acTypeEmployeurProvider),
      },
      {
        name: "Statue salarié",
        key: 'statsalCode',
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "statue salarié",
        },
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acStatutSalarieProvider),
      },
      {
        name: "Matricule",
        key: 'debMatric',
        state: acDebiteurPhysiqueProvider.getState(),
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "matricule",
        },
      },
      {
        name: "Sexe",
        key: 'debSexe',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        selectItems: sexeProvider,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "sexe",
        },
      },
      {
        name: "Date de decès",
        key: 'debDatdec',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Nat. pièce ident.",
        key: 'debNatpident',
        state: acDebiteurPhysiqueProvider.getState(),
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        selectItems: naturePieceIdentite,

      },
      {
        name: "Situation Matrimonnial",
        key: 'debSitmatri',
        inputItem: {
          isEditable: false,
        },
        selectItems: statusMatrimonialProvider,
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(),
      },
      {
        name: "Nombre d'enfant.",
        key: 'debNbrEnf',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.number,
          isEditable: true,
        },
      },
      {
        name: "Regime Mariage",
        key: 'regmatCode',
        selectItems: regimeMariageProvider,
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          isEditable: false
        }
      },
      {
        name: "Date établis.",
        key: 'debDatetpident',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "N° pièce ident.",
        key: 'debNumpident',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "n° pièce ident.",
        },
      },
      {
        name: "Lieu établis",
        key: 'debLieuetpident',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "lieu etablis.",
        },
      },
      {
        name: "Nom Conjoint",
        key: 'debCjNom',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "nom conjoint",
        },
      },
      {
        name: "Prénoms Conjoint",
        key: 'debCjPren',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'prénoms conjoint'
        },
      },
      {
        name: "Addresse Conjoint",
        key: 'debCjAdr',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'addresse conjoint'
        },
      },
      {
        name: "Date naiss. Conjoint",
        key: 'debCjDatnaiss',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Tel Conjoint",
        key: 'debCjTel',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'tel conjoint'
        },
      },
      {
        name: "N°pièce ident. Conjoint",
        key: 'debCjNumpident',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.number,
          isEditable: true,
        },
      },
      {
        name: "Nom du père",
        key: 'debNpere',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'nom du père'
        },
      },
      {
        name: "Prénoms du père",
        key: 'debPrpere',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'prénoms du père'
        },
      },
      {
        name: "Nom de la mère",
        key: 'debNmere',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'nom de la mère'
        },
      },
      {
        name: "Prénoms de la mère",
        key: 'debPrmere',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'prénoms de la mère'
        },
      },
      {
        name: "Rue",
        key: 'debRue',
        onInsert: acDebiteurPhysiqueProvider.simpleInsert,
        state: acDebiteurPhysiqueProvider.getState(), inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'rue'
        },
      },
    ],
  },
  {
    tabName: "Moral",
    key: AcDebiteurStateProvider.moralTypeCode,
    rowCount: 1,
    fields: [
      {
        name: "Registre de commerce",
        key: 'debRegistcom',
        onInsert: acDebiteurMoralProvider.simpleInsert,
        state: acDebiteurMoralProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "registre de commerce",
        },
      },
      {
        name: "Raison social",
        key: 'debRaisSociale',
        onInsert: acDebiteurMoralProvider.simpleInsert,
        state: acDebiteurMoralProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          placeholder: "raison social",
          isEditable: true,
        },
      },
      {
        name: "Capital social",
        key: 'debCapitsocial',
        onInsert: acDebiteurMoralProvider.simpleInsert,
        state: acDebiteurMoralProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Capital social",
        },
      },
      {
        name: "Forme Juridique",
        key: 'debFormJurid',
        onInsert: acDebiteurMoralProvider.simpleInsert,
        state: acDebiteurMoralProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Forme Juridique",
        },
      },
      {
        name: "Domaine d'activité",
        key: 'debDomActiv',
        state: acDebiteurMoralProvider.getState(),
        onInsert: acDebiteurMoralProvider.simpleInsert,
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Domaine d'activité",
        },
      },
      {
        name: "Siège social",
        key: 'debSiegSocial',
        state: acDebiteurMoralProvider.getState(),
        onInsert: acDebiteurMoralProvider.simpleInsert,
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Siège social",
        },
      },
      {
        name: "Nom Gérant",
        key: 'debNomGerant',
        onInsert: acDebiteurMoralProvider.simpleInsert,
        state: acDebiteurMoralProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Nom Gérant",
        },
      },
    ],
  },
  {
    tabName: "Domiciliation",
    key: AcDebiteurStateProvider.domiciliationTypeCode,
    tableHeaders: ["Type", "N°Compte", "Libellé", "Banque agence", "Banque"],
    hasAddButton: true,
    handleTabRowSave: acDomiciliationStateProvider.saveFieldData,
    tableContent: [
      {
        name: "Type",
        key: 'typdomCode',
        state: acDomiciliationStateProvider.getState(),
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "type",
        },
      },
      {
        name: "N°Compte",
        key: 'nCompte',
        state: acDomiciliationStateProvider.getState(),
        inputItem: {
          inputType: InputType.number,
          isEditable: true,
          placeholder: "num. compte",
        },
      },
      {
        name: "Libellé",
        key: 'domLib',
        state: acDomiciliationStateProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "libelle",
        },
      },
      {
        name: "Banque Agence",
        key: 'bqagCode',
        state: acDomiciliationStateProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "bq. agence",
        },
        selectItems: acDebiteurProvider.getSelectItems(acBanqueAgenceProvider),
      },
      {
        name: "Banque",
        key: 'banque',
        state: acDomiciliationStateProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
        },
      },
    ],
  },
];

export const debiteursDatas: CreanceDataType = {
  title: "Débiteur",
  create: acDebiteurProvider.createDebiteurFully,
  state: acDebiteurProvider.getState(),
  fields: debiteurFields,
  tabs: debiteurTabs,
};
