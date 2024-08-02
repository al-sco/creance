import acCreanceProvider, {
  booleanProvider,
  classCreanceProvider,
} from "../../../../states/signals/creances_providers/AcCreance.state";
import acDebiteurProvider from "../../../../states/signals/creances_providers/AcDebiteur.state";
import acGroupeCreanceProvider from "../../../../states/signals/parameter_providers/AcGroupeCreance.state";
import acObjetCreanceProvider from "../../../../states/signals/parameter_providers/AcObjetCreances.state";
import acPeriodiciteProvider from "../../../../states/signals/parameter_providers/AcPeriodicite.state";
import acTypeDomicilProvider from "../../../../states/signals/parameter_providers/AcTypeDomicil.state";
import { detailGarantisAditionnalData, detailLogementAditionnalData, detailTerrainAditionnalData } from "./additionnal-content/aditionnal-data";
import { GarantiesPersonnellesAdditionnalContent } from "./additionnal-content/garanties-personnelles-additionnal-content";
import { GarantiesReellesAdditionnalContentContent } from "./additionnal-content/garanties-reelles-adtitionnal-content";
import {
  CreanceDataType,
  CreanceFieldType,
  CreanceTabType,
  InputType,
} from "./creance.type";

const creanceFields: CreanceFieldType[] = [
  {
    name: "N°Créance",
    key: "nCreance",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "numéro creance",
      inputType: InputType.text,
    },
  },
  {
    name: "Débiteur",
    key: "debiteur",
    state: acCreanceProvider.getState(),
    inputItem: {
      inputType: InputType.text,
      isEditable: false,
      placeholder: "Debiteur",
    },
    onInsert: acCreanceProvider.simpleInsert,
    selectItems: acCreanceProvider.getDebiteursItems,
  },

  {
    name: "Périodicité",
    key: "periodicite",
    onInsert: acCreanceProvider.simpleInsert,
    selectItems: acCreanceProvider.getSelectItems(acPeriodiciteProvider),
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      inputType: InputType.number,
      placeholder: "périodicité",
    },
  },
  {
    name: "Grpe Creance",
    key: "groupeCreance",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    selectItems: acCreanceProvider.getSelectItems(acGroupeCreanceProvider),
    inputItem: {
      isEditable: false,
      placeholder: "grpe creance",
      inputType: InputType.text,
    },
  },
  {
    name: "Objet Créance",
    key: "objectCreance",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,

    inputItem: {
      isEditable: true,
      inputType: InputType.text,
      placeholder: "objet creance",
    },
  },
  {
    name: "Type d'Objet",
    key: "typeObject",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,

    inputItem: {
      isEditable: false,
      inputType: InputType.text,
      placeholder: "grpe creance",
    },
    selectItems: acCreanceProvider.getSelectItems(acObjetCreanceProvider),
  },

  {
    name: "Capital Initial",
    key: "capitalInitial",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "capital initial",
    },
  },
  {
    name: "Mont. Dû",
    key: "montantDu",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "montant dû",
    },
  },

  {
    name: "Entité",
    key: "entite",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "entité",
      inputType: InputType.text,
    },
  },
  {
    name: "Mont. Décaissé",
    key: "montDecaisse",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,

    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "montant décaissé",
    },
  },
  {
    name: "Total Dû",
    key: "totalDu",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      inputType: InputType.number,
      placeholder: "total dû",
    },
  },
  {
    name: "Mont. Déja Remb.",
    key: "montDejaRemb",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "montant déja remboursse",
    },
  },
  {
    name: "Nb. Ech",
    key: "nbEch",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "nombre echéance",
    },
  },
  {
    name: "Mont. Impayé",
    key: "montImpaye",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      inputType: InputType.text,
      placeholder: "montant impayé",
    },
  },
  {
    name: "Sté Caution",
    key: "steCaution",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "ste caution",
    },
  },
  {
    name: "Date Reconnais.",
    key: "dateReconnais",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: false,
      inputType: InputType.date,
      placeholder: "date reconnaissance",
    },
  },
  {
    name: "Commission",
    key: "commission",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.text,
      placeholder: "commission",
    },
  },
  {
    name: "Divers Frais",
    key: "diversFrais",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "divers frais",
    },
  },
  {
    name: "Date 1ere Ech.",
    key: "date1ereEch",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      inputType: InputType.date,
    },
  },
  {
    name: "Stat Recouv.",
    key: "statRecouv",
    state: acCreanceProvider.getState(),
    selectItems: booleanProvider,
    onInsert: acCreanceProvider.simpleInsert,
  },
  {
    name: "Mont Ass.",
    key: "montAss",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      placeholder: "montant ass",
      inputType: InputType.text,
    },
  },
  {
    name: "Date Dern Ech",
    key: "dateDernEch",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      inputType: InputType.date,
    },
  },
  {
    name: "Encours",
    key: "enCours",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      placeholder: "encours",
      inputType: InputType.number,
    },
  },
  {
    name: "N° Précédent",
    key: "nPrecedent",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,

    inputItem: {
      isEditable: true,
      placeholder: "numéro précédent",
      inputType: InputType.number,
    },
  },
  {
    name: "Date d'Octroie.",
    key: "dateOctroie",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      inputType: InputType.date,
    },
  },

  {
    name: "Date 1er Precompte.",
    key: "date1erPrecompt",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      inputType: InputType.date,
    },
  },
  {
    name: "N° Ancien",
    key: "nAncien",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,

    inputItem: {
      isEditable: true,
      placeholder: "numéro ancien",
      inputType: InputType.number,
    },
  },

  {
    name: "Type Structure",
    key: "typestructure",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: false,
      placeholder: "numéro ancien",
      inputType: InputType.number,
    },
  },
  {
    name: "Int. conv. %",
    key: "intConv",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      placeholder: "int conv",
      inputType: InputType.number,
    },
  },
  {
    name: "Int. Ret.",
    key: "intRet",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      placeholder: "int ret",
      inputType: InputType.number,
    },
  },
  {
    name: "Mont. Inv Conv. Payé",
    onInsert: acCreanceProvider.simpleInsert,
    key: "montInvConvPaye",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      placeholder: "montant int conv payé",
      inputType: InputType.number,
    },
  },
  {
    name: "Pénalité 1%",
    key: "penalite1",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "penalité 1%",
      inputType: InputType.text,
    },
  },
  {
    name: "Total à recouvrer",
    key: "totalARecouv",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "total a recouvrer",
      inputType: InputType.number,
    },
  },
  {
    name: "Crean Sold Avt Liq",
    key: "cranSoldAvtLiq",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    selectItems: booleanProvider,
  },
  {
    name: "Class Créance",
    key: "classCreance",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    selectItems: classCreanceProvider,
  },
  {
    name: "Mont à Remb.",
    key: "montARemb",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      inputType: InputType.text,
      placeholder: "montant a rembourssé",
    },
  },
];

const creanceTabs: CreanceTabType[] = [
  {
    tabName: "Pièce",
    key: "piece",
    tableHeaders: [
      "Type Piece",
      "Référence",
      "Libellé",
      "Date Emission",
      "Date Reception",
    ],
    tableContent: [
      {
        name: "Pièce",
        key: "typePiece",
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false,
          placeholder: "type",
        },
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      },
      {
        name: "Reférence",
        key: "ref",
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "reference",
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
        name: "Date Emission",
        key: "dateEmi",
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
          isEditable: false,
        },
      },
      {
        name: "Date Reception",
        key: "dateRec",
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
          isEditable: false,
        },
      },
    ],
  },
  {
    tabName: "Garantie Personnelle",
    additionnalContents: [
      {
        label: 'Detail Garanties Pers.',
        child: <GarantiesPersonnellesAdditionnalContent data={detailGarantisAditionnalData} />,
      }
    ],
    key: "garantiePersonnelle",
    tableHeaders: [
      "Type",
      "Employeur",
      "Status Sal.",
      "Quartier",
      "Priorité",
      "Nom",
      "Prénoms",
      "Date Inscription",
      "Fonction",
      "Profession",
      "Adress Postale",
    ],
    tableContent: [
      {
        name: "Type",
        key: "type",
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      },
      {
        name: "Employeur",
        key: "emp",
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      },
      {
        name: "Status Sal.",
        key: "status",
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      },
      {
        name: "Quartier",
        key: "quartier",
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      },
      {
        name: "Priorité",
        key: "priorité",
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
        name: "Prénoms",
        key: "prénoms",
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
        },
      },
      {
        name: "Date d'inscription",
        key: "dateInscription",
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Fonction",
        key: "fonction",
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      },
      {
        name: "Profession",
        key: "profession",
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      },
      {
        name: "Addresse postal",
        key: "addr",
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
        },
      },
    ],
  },
  {
    tabName: "Garanties Réelles",
    key: "garaniesReelles",
    additionnalContents: [
      {
        label: 'Details Logement',
        child: <GarantiesReellesAdditionnalContentContent data={detailLogementAditionnalData} />,
      },
      {
        label: 'Details Terrain',
        child: <GarantiesReellesAdditionnalContentContent data={detailTerrainAditionnalData} />,
      }
    ],
    tableHeaders: [
      "Type",
      "N°Garantie",
      "Date Inscript",
      "Obj Montant",
      "Libelle",
      "Terrain",
      "Logement",
      "Code",
    ],
    tableContent: [
      {
        name: "Type",
        key: "type",
        state: acDebiteurProvider.getState(),
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      },
      {
        name: "N°Garantie",
        key: "numGarant",
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "numGarant",
        },
      },
      {
        name: "Date Inscript",
        key: "dateIns",
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Obj Montant",
        key: "objMontant",
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Obj montant",
        },
      },
      {
        name: "Libelle",
        key: "libelle",
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "libelle",
        },
      },
      {
        name: "Terrain",
        key: "terrain",
        state: acDebiteurProvider.getState(),
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      },
      {
        name: "Logement",
        key: "logement",
        state: acDebiteurProvider.getState(),
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      },
      {
        name: "Code",
        key: "code",
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: false
        }
      },
    ],
  },
  {
    tabName: "Assurance",
    key: 'A',
    rowCount: 1,
    fields: [
      {
        name: "N° Assureur",
        key: 'numAssu',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "registre de commerce",
        },
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      },
      {
        name: "Police",
        key: 'police',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          placeholder: "police",
          isEditable: true,
        },
      },
      {
        name: "Date début",
        key: 'dateDebut',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
        },
      },
      {
        name: "Prime",
        key: 'prime',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          placeholder: "prime",
          isEditable: true,
        },
      },
      {
        name: "Date Signature",
        key: 'dateSign',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.date,
        },
      },
    ],
  }
];

export const mainCreanceDatas: CreanceDataType = {
  title: "Etude créance",
  fields: creanceFields,
  columCount: 3,
  create: acCreanceProvider.create,
  state: acCreanceProvider.getState(),
  tabs: creanceTabs,
};
