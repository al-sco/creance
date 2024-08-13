import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import acDebiteurProvider, {
  sexeProvider,
  statusMatrimonialProvider,
} from "../../../../../states/signals/creances_providers/AcDebiteur.state";
import acBanqueAgenceProvider from "../../../../../states/signals/parameter_providers/AcBanqueAgence.state";
import acTypeDomicilProvider from "../../../../../states/signals/parameter_providers/AcTypeDomicil.state";
import { CreanceDataType, InputType } from "../creance.type";

export const detailGarantisAditionnalData: CreanceDataType = {
  create: async (data: any) => {
    await acCreanceProvider.create(data)
  },
  title: "",
  columCount: 2,
  state: acDebiteurProvider.getState(),
  fields: [
    {
      name: "N° Creance",
      key: "numCreance",
      selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "N° Garantie",
      key: "numGarant",
      selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Type",
      key: "type",
      selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
    },
    {
      name: "Nat. piece ident",
      key: "nat",
      selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
    },
    {
      name: "Salaire brut",
      key: "salaire",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "N° Piece ident",
      key: "numPiece",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.number,
        isEditable: true,
      },
    },
    {
      name: "Salaire net",
      key: "salaire",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Nom",
      key: "nom",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Prémons",
      key: "prenoms",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Matricule",
      key: "matricule",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Date de naissance",
      key: "dt",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.date,
      },
    },
    {
      name: "Date de retraite",
      key: "dtRetraite",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.date,
      },
    },
    {
      name: "Date de decès",
      key: "dtRetraite",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.date,
      },
    },
    {
      name: "Lieu de naissance",
      key: "lieuNaiss",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Sexe",
      key: "sexe",
      selectItems: sexeProvider,
    },
    {
      name: "Situation Matrimonial",
      key: "sitMatri",
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "Address postal",
      key: "addr",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Lieu etablis",
      key: "lieuEtablis",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Telephone domicile",
      key: "tellDomicile",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Telephone bureau",
      key: "tellBureau",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Date etablis",
      key: "dtEtablis",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.date,
        isEditable: true,
      },
    },
    {
      name: "Numéro celulaire",
      key: "cell",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Email",
      key: "email",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Nom Père",
      key: "nomPere",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Nom Mère",
      key: "nomMère",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Rue",
      key: "rue",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
      },
    },
    {
      name: "Quartier",
      key: "quartier",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "Civilité",
      key: "civilite",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "Profession",
      key: "profession",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "Fonction",
      key: "fonction",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "Employeur",
      key: "emp",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "Status salarial",
      key: "statusSal",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
      },
      selectItems: statusMatrimonialProvider,
    },
  ],
  tabs: [
    {
      tabName: "Domiciliation",
      key: "D",
      tableHeaders: ["Type", "N°Compte", "Libellé", "Banque agence", "Banque"],
      tableContent: [
        {
          name: "Type",
          key: "domiciliationType",
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
          key: "nCompte",
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.number,
            isEditable: true,
            placeholder: "num. compte",
          },
        },
        {
          name: "Libellé",
          key: "libelle",
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: "libelle",
          },
        },
        {
          name: "Banque Agence",
          key: "banqueAgence",
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: false,
            placeholder: "bq. agence",
          },
          onInsert: acDebiteurProvider.simpleInsert,
          selectItems: acDebiteurProvider.getSelectItems(
            acBanqueAgenceProvider
          ),
        },
        {
          name: "Banque",
          key: "banque",
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: false,
          },
        },
      ],
    },
  ],
};

export const detailTerrainAditionnalData: CreanceDataType = {
  create: async (data: any) => {
    await acCreanceProvider.create(data)
  },
  title: "",
  columCount: 2,
  state: acDebiteurProvider.getState(),
  fields: [
    {
      name: "Code",
      key: "code",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "code",
      },
    },
    {
      name: "Quartier",
      key: "quartier",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "quartier",
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "Superficie (m²)",
      key: "superficie",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "superficie",
      },
    },
    {
      name: "Ilot",
      key: "ilot",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
        placeholder: "ilot",
      },
    },
    {
      name: "Lot",
      key: "lot",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
        placeholder: "lot",
      },
    },
    {
      name: "Date de mise en patrimoine",
      key: "date",
      inputItem: {
        inputType: InputType.date,
      },
    },
    {
      name: "Mode d'aquisition",
      key: "mode",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "mode aquisition",
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "Titre Foncier",
      key: "titreFoncier",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "N° titre foncier",
      key: "numTitreFoncier",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.number,
        isEditable: true,
      },
    },
    {
      name: "Section Cadastrale",
      key: "secitonC",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "Section Cadastrale",
      },
    },
    {
      name: "Circonscription",
      key: "circonscription",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "Circonscription",
      },
    },
    {
      name: "Opération",
      key: "operation",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "operation",
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "Description",
      key: "Description",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
        placeholder: "description",
      },
    },
    {
      name: "Position",
      key: "position",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
        placeholder: "position",
      },
    },
    {
      name: "Commune",
      key: "Commune",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
        placeholder: "Commune",
      },
    },
    {
      name: "Mode Opposition",
      key: "Mode Opposition",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
        placeholder: "Mode Opposition",
      },
    },
    {
      name: "Date Motif",
      key: "dateMotif",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.date,
      },
    },
  ],
  tabs: [
    {
      tabName: "Circonscription",
      key: "C",
      tableHeaders: ["Code", "Libellé"],
      tableContent: [
        {
          name: "Code",
          key: "code",
          state: acDebiteurProvider.getState(),
          onInsert: acDebiteurProvider.simpleInsert,
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: "code",
          },
        },
        {
          name: "Libellé",
          key: "libelle",
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: "libelle",
          },
        },
      ],
    },
    {
      tabName: "Titre Foncier",
      key: "T",
      tableHeaders: [],
      rowCount: 1,
      fields: [
        {
          name: "Numéro TF",
          key: "nimeroTf",
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: "numero titre foncier",
          },
        },

        {
          name: "Circonscription",
          key: "Circonscription",
          state: acDebiteurProvider.getState(),
          selectItems: statusMatrimonialProvider,
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: "Circonscription",
          },
        },
        {
          name: "Section Cadastrale",
          key: "sectionCadastrale",
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: "section cadastrale",
          },
        },
        {
          name: "Libelle",
          key: "Libelle",
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: "Libelle",
          },
        },
        {
          name: "Frais",
          key: "Frais",
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: "Frais",
          },
        },
        {
          name: "Demandeur",
          key: "Demandeur",
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: "Demandeur",
          },
        },
        {
          name: "Centre",
          key: "Centre",
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: "Centre",
          },
        },
      ],
    },
  ],
};

export const detailLogementAditionnalData: CreanceDataType = {
  create: async (data: any) => {
    await acCreanceProvider.create(data)
  },
  title: "",
  columCount: 2,
  state: acDebiteurProvider.getState(),
  fields: [
    {
      name: "Code",
      key: "code",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "code",
      },
    },
    {
      name: "Quartier",
      key: "quartier",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "quartier",
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "Type Logement",
      key: "typeL",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "logement",
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "Mode d'acquisition",
      key: "mode",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "mode acquisiton",
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "N° Porte",
      key: "porte",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.number,
        isEditable: true,
      },
    },
    {
      name: "N° Lot",
      key: "lot",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.number,
        isEditable: true,
      },
    },
    {
      name: "N° iLot",
      key: "ilot",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.number,
        isEditable: true,
      },
    },
    {
      name: "N° Bloc",
      key: "bloc",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.number,
        isEditable: true,
      },
    },
    {
      name: "Nombre de piece",
      key: "nombrePiece",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.number,
        isEditable: true,
      },
    },
    {
      name: "Valeur (cfa)",
      key: "val",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.number,
        isEditable: true,
      },
    },
    {
      name: "Titre foncier",
      key: "titreFoncier",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "titre foncier",
      },
      selectItems: statusMatrimonialProvider,
    },
    {
      name: "Num Titre foncier",
      key: "numTF",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.number,
        isEditable: true,
      },
    },
    {
      name: "Circonscription",
      key: "Circonscription",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: false,
        placeholder: "circonscription",
      },
    },
    {
      name: "Description",
      key: "Description",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
        placeholder: "Description",
      },
    },
    {
      name: "Motif Opposition",
      key: "motifOpposition",
      state: acDebiteurProvider.getState(),
      inputItem: {
        inputType: InputType.text,
        isEditable: true,
        placeholder: "Motif Opposition",
      },
    },
  ],
};
