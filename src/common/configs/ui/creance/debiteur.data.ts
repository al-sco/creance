import acDebiteurProvider from "../../../../states/signals/creances_providers/AcDebiteur.state";
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
import acTypePieceProvider from "../../../../states/signals/parameter_providers/AcTypePiece.state";
import {
  CreanceDataType,
  CreanceFieldType,
  CreanceTabType,
  InputType,
} from "./creance.type";

const debiteurFields: CreanceFieldType[] = [
  {
    name: "Code",
    key:'code',
    state:acDebiteurProvider.getState(),
    inputItem: {
      inputType: InputType.text,
      isEditable: false,
      placeholder: "code",
    },
  },
  {
    name: "Catégorie",
    key:'categorie',
    state:acDebiteurProvider.getState(),
    onInsert:acDebiteurProvider.simpleInsert,
    selectItems: acDebiteurProvider.getSelectItems(acCategoryDebtorProvider),
    inputItem: {
      inputType: InputType.text,
      isEditable: false,
      placeholder: "catégorie",
    },
  },
  {
    name: "Tèl",
    key:'tel',
    onInsert:acDebiteurProvider.simpleInsert,
    state:acDebiteurProvider.getState(),
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "tèl",
    },
  },

  {
    name: "Adr. Postale",
    key:'adressePostale',
    onInsert:acDebiteurProvider.simpleInsert,
    state:acDebiteurProvider.getState(),
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "adr. postale",
    },
  },
  {
    name: "Email",
    key:'email',
    onInsert:acDebiteurProvider.simpleInsert,
    state:acDebiteurProvider.getState(),
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "adr. email",
    },
  },
  {
    name: "Cel",
    key:'cel',
    onInsert:acDebiteurProvider.simpleInsert,
    state:acDebiteurProvider.getState(),
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "cel",
    },
  },
  {
    name: "Type",
    key:'type',
    state:acDebiteurProvider.getState(),
    onInsert:acDebiteurProvider.simpleInsert,
    selectItems: acDebiteurProvider.getSelectItems(acTypeDebiteurProvider),
    inputItem: {
      inputType: InputType.text,
      isEditable: false,
      placeholder: "type",
    },
  },
  {
    name: "Fax",
    key:'fax',
    onInsert:acDebiteurProvider.simpleInsert,
    state:acDebiteurProvider.getState(),
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
    fields: [
      {
        name: "Civilité",
        key:'civilite',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "civilite",
        },
    onInsert:acDebiteurProvider.simpleInsert,
    selectItems: acDebiteurProvider.getSelectItems(acCiviliteProvider),
      },
      {
        name: "Nom",
        key:'nom',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          placeholder: "nom",
          isEditable: true,
        },
      },
      {
        name: "Prénom",
        key:'prenom',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "prénom",
        },
      },
      {
        name: "Date de naissance",
        key:'dateNaissance',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
          isEditable: true,
        },
      },
      {
        name: "Lieu de Naiss.",
        key:'lieuNaissance',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "lieu de naiss.",
        },
      },
      {
        name: "Quartier",
        key:'quartier',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "quartier",
        },
    onInsert:acDebiteurProvider.simpleInsert,
    selectItems: acDebiteurProvider.getSelectItems(acQuartierProvider),
      },
      {
        name: "Nationalité",
        key:'nationalite',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "nationalité",
        },
    onInsert:acDebiteurProvider.simpleInsert,

    selectItems: acDebiteurProvider.getSelectItems(acNationaliteProvider),
      },
      {
        name: "Fonction",
        key:'fonction',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "fonction",
        },
    onInsert:acDebiteurProvider.simpleInsert,

    selectItems: acDebiteurProvider.getSelectItems(acFonctionProvider),
      },
      {
        name: "Profession",
        key:'profession',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "profession",
        },
    onInsert:acDebiteurProvider.simpleInsert,
    selectItems: acDebiteurProvider.getSelectItems(acProfessionProvider),
      },
      {
        name: "Employeur",
        key:'employeur',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "employeur",
        },
    onInsert:acDebiteurProvider.simpleInsert,
    selectItems: acDebiteurProvider.getSelectItems(acTypeEmployeurProvider),
      },
      {
        name: "Statue salarié",
        key:'statutSalarie',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "statue salarié",
        },
    onInsert:acDebiteurProvider.simpleInsert,
    selectItems: acDebiteurProvider.getSelectItems(acStatutSalarieProvider),
      },
      {
        name: "Matricule",
        key:'matricule',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "matricule",
        },
      },
      {
        name: "Sexe",
        key:'sexe',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "sexe",
        },
      },
      {
        name: "Date de decès",
        key:'dateDeces',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Nat. pièce ident.",
        key:'nationalitePieceIdentite',
state:acDebiteurProvider.getState(),
onInsert:acDebiteurProvider.simpleInsert,
selectItems: acDebiteurProvider.getSelectItems(acTypePieceProvider),

      },
      {
        name: "Situation Matrimonnial",
        key:'situationMatrimonnial',
        state:acDebiteurProvider.getState(),

      },
      {
        name: "Nombre d'enfant.",
        key:'nombreEnfant',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.number,
          isEditable: true,
        },
      },
      {
        name: "Regime Mariage",
        key:'regimeMariage',
        state:acDebiteurProvider.getState(),
      },
      {
        name: "Date établis.",
        key:'dateEtablissement',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "N° pièce ident.",
        key:'nPieceIdentite',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "n° pièce ident.",
        },
      },
      {
        name: "Lieu établis",
        key:'lieuEtablissement',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "lieu etablis.",
        },
      },
      {
        name: "Nom Conjoint",
        key:'nomConjoint',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "nom conjoint",
        },
      },
      {
        name: "Prénoms Conjoint",
        key:'prenomConjoint',
        state:acDebiteurProvider.getState(),
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'prénoms conjoint' 
        },            
      },
      {
        name: "Addresse Conjoint",
        key:'addresseConjoint',
        state:acDebiteurProvider.getState(),
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'addresse conjoint' 
        },            
      },
      {
        name: "Date naiss. Conjoint",
        key:'dateNaissanceConjoint',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Tel Conjoint",
        key:'telConjoint',
        state:acDebiteurProvider.getState(),
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'tel conjoint' 
        },            
      },
      {
        name: "N°pièce ident. Conjoint",
        key:'nPieceIdentiteConjoint',
        state:acDebiteurProvider.getState(),
        inputItem: {
            inputType: InputType.number,
            isEditable: true,
        },            
      },      
      {
        name: "Nom du père",
        key:'nomPere',
        state:acDebiteurProvider.getState(),
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'nom du père'
        },            
      },
      {
        name: "Prénoms du père",
        key:'prenomPere',
        state:acDebiteurProvider.getState(),
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'prénoms du père'
        },            
      },
      {
        name: "Nom de la mère",
        key:'nomMere',
        state:acDebiteurProvider.getState(),
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'nom de la mère'
        },            
      },
      {
        name: "Prénoms de la mère",
        key:'prenomMere',
        state:acDebiteurProvider.getState(),
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'prénoms de la mère'
        },            
      },
      {
        name: "Rue",
        key:'rue',
        state:acDebiteurProvider.getState(),
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
    rowCount: 1,
    fields: [
      {
        name: "Registre de commerce",
        key:'registreCommerce',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "registre de commerce",
        },
      },
      {
        name: "Raison social",
        key:'raisonSocial',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          placeholder: "raison social",
          isEditable: true,
        },
      },
      {
        name: "Capital social",
        key:'capitalSocial',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Capital social",
        },
      },
      {
        name: "Forme Juridique",
        key:'formeJuridique',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Forme Juridique",
        },
      },
      {
        name: "Domaine d'activité",
        key:'domaineActivite',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Domaine d'activité",
        },
      },
      {
        name: "Siège social",
        key:'siegeSocial',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Siège social",
        },
      },
      {
        name: "Nom Gérant",
        key:'nomGerant',
        state:acDebiteurProvider.getState(),
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
    tableHeaders: ["Type", "N°Compte", "Libellé", "Banque agence", "Banque"],
    tableContent: [
      {
        name: "Type",
        key:'type',
        state:acDebiteurProvider.getState(),
    onInsert:acDebiteurProvider.simpleInsert,
selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),

        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "type",
        },
        // selectItems: [
        //   {
        //     title: "Option 1",
        //     value: "Option1",
        //   },
        //   {
        //     title: "Option 2",
        //     value: "Option2",
        //   },
        // ],
      },
      {
        name: "N°Compte",
        key:'nCompte',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.number,
          isEditable: true,
          placeholder: "num. compte",
        },
      },
      {
        name: "Libellé",
        key:'libelle',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "libelle",
        },
      },
      {
        name: "Banque Agence",
        key:'banqueAgence',
        state:acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "bq. agence",
        },
    onInsert:acDebiteurProvider.simpleInsert,
selectItems: acDebiteurProvider.getSelectItems(acBanqueAgenceProvider),
      },
      {
        name: "Banque",
        key:'banque',
        state:acDebiteurProvider.getState(),
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
  fields: debiteurFields,
  tabs: debiteurTabs,
};
