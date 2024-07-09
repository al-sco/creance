import {
  CreanceDataType,
  CreanceFieldType,
  CreanceTabType,
  InputType,
} from "./creance.type";

const debiteurFields: CreanceFieldType[] = [
  {
    name: "Code",
    inputItem: {
      inputType: InputType.text,
      isEditable: false,
      placeholder: "code",
    },
  },
  {
    name: "Catégorie",
    selectItems: [
      {
        title: "Option 1",
        value: "option1",
      },
      {
        title: "Option 2",
        value: "option2",
      },
    ],
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "catégorie",
    },
  },
  {
    name: "Tèl",
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "tèl",
    },
  },

  {
    name: "Adr. Postale",
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "adr. postale",
    },
  },
  {
    name: "Email",
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "adr. email",
    },
  },
  {
    name: "Cel",
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "cel",
    },
  },
  {
    name: "Type",
    selectItems: [
      {
        title: "Moral",
        value: "moral",
      },
      {
        title: "Physique",
        value: "physique",
      },
    ],
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "type",
    },
  },
  {
    name: "Fax",
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
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "civilite",
        },
        selectItems: [
          {
            title: "Option 1",
            value: "Option1",
          },
          {
            title: "Option 2",
            value: "Option2",
          },
        ],
      },
      {
        name: "Nom",
        inputItem: {
          inputType: InputType.text,
          placeholder: "nom",
          isEditable: true,
        },
      },
      {
        name: "Prénom",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "prénom",
        },
      },
      {
        name: "Date de naissance",
        inputItem: {
          inputType: InputType.date,
          isEditable: true,
        },
      },
      {
        name: "Lieu de Naiss.",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "lieu de naiss.",
        },
      },
      {
        name: "Quartier",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "quartier",
        },
        selectItems: [
          {
            title: "Option 1",
            value: "Option1",
          },
          {
            title: "Option 2",
            value: "Option2",
          },
        ],
      },
      {
        name: "Nationalité",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "nationalité",
        },
        selectItems: [
          {
            title: "Option 1",
            value: "Option1",
          },
          {
            title: "Option 2",
            value: "Option2",
          },
        ],
      },
      {
        name: "Fonction",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "fonction",
        },
        selectItems: [
          {
            title: "Option 1",
            value: "Option1",
          },
          {
            title: "Option 2",
            value: "Option2",
          },
        ],
      },
      {
        name: "Profession",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "profession",
        },
        selectItems: [
          {
            title: "Option 1",
            value: "Option1",
          },
          {
            title: "Option 2",
            value: "Option2",
          },
        ],
      },
      {
        name: "Employeur",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "employeur",
        },
        selectItems: [
          {
            title: "Option 1",
            value: "Option1",
          },
          {
            title: "Option 2",
            value: "Option2",
          },
        ],
      },
      {
        name: "Statue salarié",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "statue salarié",
        },
        selectItems: [
          {
            title: "Option 1",
            value: "Option1",
          },
          {
            title: "Option 2",
            value: "Option2",
          },
        ],
      },
      {
        name: "Matricule",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "matricule",
        },
      },
      {
        name: "Sexe",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "sexe",
        },
      },
      {
        name: "Date de decès",
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Nat. pièce ident.",
        selectItems: [
          {
            title: "Option 1",
            value: "Option1",
          },
          {
            title: "Option 2",
            value: "Option2",
          },
        ],
      },
      {
        name: "Situation Matrimonnial",
        selectItems: [
          {
            title: "Option 1",
            value: "Option1",
          },
          {
            title: "Option 2",
            value: "Option2",
          },
        ],
      },
      {
        name: "Nombre d'enfant.",
        inputItem: {
          inputType: InputType.number,
          isEditable: true,
        },
      },
      {
        name: "Regime Mariage",
        selectItems: [
          {
            title: "Option 1",
            value: "Option1",
          },
          {
            title: "Option 2",
            value: "Option2",
          },
        ],
      },
      {
        name: "Date établis.",
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "N° pièce ident.",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "n° pièce ident.",
        },
      },
      {
        name: "Lieu établis",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "lieu etablis.",
        },
      },
      {
        name: "Nom Conjoint",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "nom conjoint",
        },
      },
      {
        name: "Prénoms Conjoint",
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'prénoms conjoint' 
        },            
      },
      {
        name: "Addresse Conjoint",
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'addresse conjoint' 
        },            
      },
      {
        name: "Date naiss. Conjoint",
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Tel Conjoint",
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'tel conjoint' 
        },            
      },
      {
        name: "N°pièce ident. Conjoint",
        inputItem: {
            inputType: InputType.number,
            isEditable: true,
        },            
      },      
      {
        name: "Nom du père",
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'nom du père'
        },            
      },
      {
        name: "Prénoms du père",
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'prénoms du père'
        },            
      },
      {
        name: "Nom de la mère",
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'nom de la mère'
        },            
      },
      {
        name: "Prénoms de la mère",
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'prénoms de la mère'
        },            
      },
      {
        name: "Rue",
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
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "registre de commerce",
        },
      },
      {
        name: "Raison social",
        inputItem: {
          inputType: InputType.text,
          placeholder: "raison social",
          isEditable: true,
        },
      },
      {
        name: "Capital social",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Capital social",
        },
      },
      {
        name: "Forme Juridique",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Forme Juridique",
        },
      },
      {
        name: "Domaine d'activité",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Domaine d'activité",
        },
      },
      {
        name: "Siège social",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Siège social",
        },
      },
      {
        name: "Nom Gérant",
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
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "type",
        },
        selectItems: [
          {
            title: "Option 1",
            value: "Option1",
          },
          {
            title: "Option 2",
            value: "Option2",
          },
        ],
      },
      {
        name: "N°Compte",
        inputItem: {
          inputType: InputType.number,
          isEditable: true,
          placeholder: "num. compte",
        },
      },
      {
        name: "Libellé",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "libelle",
        },
      },
      {
        name: "Banque Agence",
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "bq. agence",
        },
        selectItems: [
          {
            title: "Option 1",
            value: "Option1",
          },
          {
            title: "Option 2",
            value: "Option2",
          },
        ],
      },
      {
        name: "Banque",
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
