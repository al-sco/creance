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
    inputItem: {
      inputType: InputType.text,
      isEditable: false,
      placeholder: "code",
    },
  },
  {
    name: "Catégorie",
    key:'categorie',
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
    key:'tel',
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "tèl",
    },
  },

  {
    name: "Adr. Postale",
    key:'adressePostale',
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "adr. postale",
    },
  },
  {
    name: "Email",
    key:'email',
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "adr. email",
    },
  },
  {
    name: "Cel",
    key:'cel',
    inputItem: {
      inputType: InputType.text,
      isEditable: true,
      placeholder: "cel",
    },
  },
  {
    name: "Type",
    key:'type',
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
    key:'fax',
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
        key:'nom',
        inputItem: {
          inputType: InputType.text,
          placeholder: "nom",
          isEditable: true,
        },
      },
      {
        name: "Prénom",
        key:'prenom',
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "prénom",
        },
      },
      {
        name: "Date de naissance",
        key:'dateNaissance',
        inputItem: {
          inputType: InputType.date,
          isEditable: true,
        },
      },
      {
        name: "Lieu de Naiss.",
        key:'lieuNaissance',
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "lieu de naiss.",
        },
      },
      {
        name: "Quartier",
        key:'quartier',
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
        key:'nationalite',
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
        key:'fonction',
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
        key:'profession',
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
        key:'employeur',
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
        key:'statutSalarie',
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
        key:'matricule',
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "matricule",
        },
      },
      {
        name: "Sexe",
        key:'sexe',
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "sexe",
        },
      },
      {
        name: "Date de decès",
        key:'dateDeces',
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Nat. pièce ident.",
        key:'nationalitePieceIdentite',

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
        key:'situationMatrimonnial',
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
        key:'nombreEnfant',
        inputItem: {
          inputType: InputType.number,
          isEditable: true,
        },
      },
      {
        name: "Regime Mariage",
        key:'regimeMariage',
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
        key:'dateEtablissement',
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "N° pièce ident.",
        key:'nPieceIdentite',
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "n° pièce ident.",
        },
      },
      {
        name: "Lieu établis",
        key:'lieuEtablissement',
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "lieu etablis.",
        },
      },
      {
        name: "Nom Conjoint",
        key:'nomConjoint',
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "nom conjoint",
        },
      },
      {
        name: "Prénoms Conjoint",
        key:'prenomConjoint',
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'prénoms conjoint' 
        },            
      },
      {
        name: "Addresse Conjoint",
        key:'addresseConjoint',
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'addresse conjoint' 
        },            
      },
      {
        name: "Date naiss. Conjoint",
        key:'dateNaissanceConjoint',
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Tel Conjoint",
        key:'telConjoint',
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'tel conjoint' 
        },            
      },
      {
        name: "N°pièce ident. Conjoint",
        key:'nPieceIdentiteConjoint',
        inputItem: {
            inputType: InputType.number,
            isEditable: true,
        },            
      },      
      {
        name: "Nom du père",
        key:'nomPere',
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'nom du père'
        },            
      },
      {
        name: "Prénoms du père",
        key:'prenomPere',
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'prénoms du père'
        },            
      },
      {
        name: "Nom de la mère",
        key:'nomMere',
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'nom de la mère'
        },            
      },
      {
        name: "Prénoms de la mère",
        key:'prenomMere',
        inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: 'prénoms de la mère'
        },            
      },
      {
        name: "Rue",
        key:'rue',
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
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "registre de commerce",
        },
      },
      {
        name: "Raison social",
        key:'raisonSocial',
        inputItem: {
          inputType: InputType.text,
          placeholder: "raison social",
          isEditable: true,
        },
      },
      {
        name: "Capital social",
        key:'capitalSocial',
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Capital social",
        },
      },
      {
        name: "Forme Juridique",
        key:'formeJuridique',
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Forme Juridique",
        },
      },
      {
        name: "Domaine d'activité",
        key:'domaineActivite',
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Domaine d'activité",
        },
      },
      {
        name: "Siège social",
        key:'siegeSocial',
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Siège social",
        },
      },
      {
        name: "Nom Gérant",
        key:'nomGerant',
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
        key:'nCompte',
        inputItem: {
          inputType: InputType.number,
          isEditable: true,
          placeholder: "num. compte",
        },
      },
      {
        name: "Libellé",
        key:'libelle',
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "libelle",
        },
      },
      {
        name: "Banque Agence",
        key:'banqueAgence',
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
        key:'banque',
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
