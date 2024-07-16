import acDebiteurProvider, { naturePieceIdentite, regimeMariageProvider, sexeProvider, statusMatrimonialProvider } from "../../../../states/signals/creances_providers/AcDebiteur.state";
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
    inputItem: {
      inputType: InputType.text,
      isEditable: false,
      placeholder: "code",
    },
  },
  {
    name: "Catégorie",
    key: 'categorie',
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
    key: 'tel',
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
    key: 'adressePostale',
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
    key: 'email',
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
    key: 'cel',
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
    key: 'type',
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
    key: 'fax',
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
    key: 'P',
    fields: [
      {
        name: "Civilité",
        key: 'civilite',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "civilite",
        },
        onInsert: acDebiteurProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acCiviliteProvider),
      },
      {
        name: "Nom",
        key: 'nom',
        state: acDebiteurProvider.getState(),
        onInsert: acDebiteurProvider.simpleInsert,
        inputItem: {
          inputType: InputType.text,
          placeholder: "nom",
          isEditable: true,
        },
      },
      {
        name: "Prénom",
        key: 'prenom',
        onInsert: acDebiteurProvider.simpleInsert,

        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "prénom",
        },
      },
      {
        name: "Date de naissance",
        key: 'dateNaissance',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Lieu de Naiss.",
        key: 'lieuNaissance',
        state: acDebiteurProvider.getState(),
        onInsert: acDebiteurProvider.simpleInsert,
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "lieu de naiss.",
        },
      },
      {
        name: "Quartier",
        key: 'quartier',

        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "quartier",
        },
        onInsert: acDebiteurProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acQuartierProvider),
      },
      {
        name: "Nationalité",
        key: 'nationalite',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "nationalité",
        },
        onInsert: acDebiteurProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acNationaliteProvider),
      },
      {
        name: "Fonction",
        key: 'fonction',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "fonction",
        },
        onInsert: acDebiteurProvider.simpleInsert,

        selectItems: acDebiteurProvider.getSelectItems(acFonctionProvider),
      },
      {
        name: "Profession",
        key: 'profession',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "profession",
        },
        onInsert: acDebiteurProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acProfessionProvider),
      },
      {
        name: "Employeur",
        key: 'employeur',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "employeur",
        },
        onInsert: acDebiteurProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acTypeEmployeurProvider),
      },
      {
        name: "Statue salarié",
        key: 'statutSalarie',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "statue salarié",
        },
        onInsert: acDebiteurProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acStatutSalarieProvider),
      },
      {
        name: "Matricule",
        key: 'matricule',
        state: acDebiteurProvider.getState(),
        onInsert: acDebiteurProvider.simpleInsert,
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "matricule",
        },
      },
      {
        name: "Sexe",
        key: 'sexe',
        onInsert:acDebiteurProvider.simpleInsert,
        selectItems: sexeProvider,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "sexe",
        },
      },
      {
        name: "Date de decès",
        key: 'dateDeces',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Nat. pièce ident.",
        key: 'nationalitePieceIdentite',
        state: acDebiteurProvider.getState(),
        onInsert: acDebiteurProvider.simpleInsert,
        selectItems: naturePieceIdentite,

      },
      {
        name: "Situation Matrimonnial",
        key: 'situationMatrimonnial',
        inputItem:{
          isEditable:false,
        },
        selectItems:statusMatrimonialProvider,
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
      },
      {
        name: "Nombre d'enfant.",
        key: 'nombreEnfant',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.number,
          isEditable: true,
        },
      },
      {
        name: "Regime Mariage",
        key: 'regimeMariage',
        selectItems:regimeMariageProvider,
        onInsert:acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem:{
          isEditable:false
        }
      },
      {
        name: "Date établis.",
        key: 'dateEtablissement',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "N° pièce ident.",
        key: 'nPieceIdentite',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "n° pièce ident.",
        },
      },
      {
        name: "Lieu établis",
        key: 'lieuEtablissement',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "lieu etablis.",
        },
      },
      {
        name: "Nom Conjoint",
        key: 'nomConjoint',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "nom conjoint",
        },
      },
      {
        name: "Prénoms Conjoint",
        key: 'prenomConjoint',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'prénoms conjoint'
        },
      },
      {
        name: "Addresse Conjoint",
        key: 'addresseConjoint',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'addresse conjoint'
        },
      },
      {
        name: "Date naiss. Conjoint",
        key: 'dateNaissanceConjoint',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Tel Conjoint",
        key: 'telConjoint',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'tel conjoint'
        },
      },
      {
        name: "N°pièce ident. Conjoint",
        key: 'nPieceIdentiteConjoint',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.number,
          isEditable: true,
        },
      },
      {
        name: "Nom du père",
        key: 'nomPere',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'nom du père'
        },
      },
      {
        name: "Prénoms du père",
        key: 'prenomPere',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'prénoms du père'
        },
      },
      {
        name: "Nom de la mère",
        key: 'nomMere',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'nom de la mère'
        },
      },
      {
        name: "Prénoms de la mère",
        key: 'prenomMere',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'prénoms de la mère'
        },
      },
      {
        name: "Rue",
        key: 'rue',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: 'rue'
        },
      },
    ],
  },
  {
    tabName: "Moral",
    key: 'M',
    rowCount: 1,
    fields: [
      {
        name: "Registre de commerce",
        key: 'registreCommerce',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "registre de commerce",
        },
      },
      {
        name: "Raison social",
        key: 'raisonSocial',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          placeholder: "raison social",
          isEditable: true,
        },
      },
      {
        name: "Capital social",
        key: 'capitalSocial',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Capital social",
        },
      },
      {
        name: "Forme Juridique",
        key: 'formeJuridique',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Forme Juridique",
        },
      },
      {
        name: "Domaine d'activité",
        key: 'domaineActivite',
        state: acDebiteurProvider.getState(),
        onInsert: acDebiteurProvider.simpleInsert,
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Domaine d'activité",
        },
      },
      {
        name: "Siège social",
        key: 'siegeSocial',
        state: acDebiteurProvider.getState(),
        onInsert: acDebiteurProvider.simpleInsert,
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Siège social",
        },
      },
      {
        name: "Nom Gérant",
        key: 'nomGerant',
        onInsert: acDebiteurProvider.simpleInsert,
        state: acDebiteurProvider.getState(),
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
    key: 'D',
    tableHeaders: ["Type", "N°Compte", "Libellé", "Banque agence", "Banque"],
    tableContent: [
      {
        name: "Type",
        key: 'domiciliationType',
        state: acDebiteurProvider.getState(),
        onInsert: acDebiteurProvider.simpleInsert,
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
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.number,
          isEditable: true,
          placeholder: "num. compte",
        },
      },
      {
        name: "Libellé",
        key: 'libelle',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "libelle",
        },
      },
      {
        name: "Banque Agence",
        key: 'banqueAgence',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "bq. agence",
        },
        onInsert: acDebiteurProvider.simpleInsert,
        selectItems: acDebiteurProvider.getSelectItems(acBanqueAgenceProvider),
      },
      {
        name: "Banque",
        key: 'banque',
        state: acDebiteurProvider.getState(),
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
  state: acDebiteurProvider.getState(),
  fields: debiteurFields,
  tabs: debiteurTabs,
};
