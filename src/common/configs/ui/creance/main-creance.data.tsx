import ComponentBuilder from "../../../../components/paiement/component_builder";
import PaiementComponent from "../../../../components/paiement/paiement_component";
import acCreanceProvider, {
  booleanProvider,
  classCreanceProvider,
} from "../../../../states/signals/creances_providers/AcCreance.state";
import acDebiteurProvider from "../../../../states/signals/creances_providers/AcDebiteur.state";
import acGroupeCreanceProvider from "../../../../states/signals/parameter_providers/AcGroupeCreance.state";
import acObjetCreanceProvider from "../../../../states/signals/parameter_providers/AcObjetCreances.state";
import acPeriodiciteProvider from "../../../../states/signals/parameter_providers/AcPeriodicite.state";
import acTypeDomicilProvider from "../../../../states/signals/parameter_providers/AcTypeDomicil.state";
import { ecranCreanceFraisRecapulatif } from "../paiement/additionnal-paiement-data/ecranCreanceFraisRecapulatif.data";
import { FraisLogement } from "../paiement/additionnal-paiement-data/ecranFraisLogement.data";
import { FraisPremierAcquereur } from "../paiement/additionnal-paiement-data/ecranFraisPremierAcquereur.data";
import { FraisTerrain } from "../paiement/additionnal-paiement-data/ecranFraisTerrain.data";
import { ecranFraisPaiementComponentData } from "../paiement/ecranFraisPrin.data";
import { FraisVisiteTerrainPaiementComponentData } from "../paiement/ecranFraisVisiteTerrain.data";
import { detailGarantisAditionnalData, detailLogementAditionnalData, detailTerrainAditionnalData } from "./additionnal-content/aditionnal-data";
import { GarantiesPersonnellesAdditionnalContent } from "./additionnal-content/garanties-personnelles-additionnal-content";
import { GarantiesReellesAdditionnalContentContent } from "./additionnal-content/garanties-reelles-adtitionnal-content";
import {
  CreanceDataType,
  CreanceFieldType,
  CreanceTabType,
  InputType,
} from "./creance.type";


const defaultGarantiesPersonnells = [
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
]
const creanceFields: CreanceFieldType[] = [
  {
    name: "Débiteur",
    key: "debCode",
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
    name: "Grpe Créance",
    key: "grpCreanCode",
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
    name: "Type d'Objet",
    key: "objCreanCode",
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
    key: "creanCapitInit",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "capital initial",
    },
  },
  {
    name: "Mont. Décaissé",
    key: "creanMontDebloq",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,

    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "montant décaissé",
    },
  },
  {
    name: "Sté Caution",
    key: "creanCommStecaut",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "ste caution",
    },
  },
  {
    name: "Stat Recouv.",
    key: "creanStatrecouv",
    state: acCreanceProvider.getState(),
    selectItems: booleanProvider,
    onInsert: acCreanceProvider.simpleInsert,
  },
  {
    name: "N° Précédent",
    key: "creanCodePrec",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,

    inputItem: {
      isEditable: true,
      placeholder: "numéro précédent",
      inputType: InputType.number,
    },
  },
  {
    name: "N° Ancien",
    key: "creanCodeAnc",
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
    key: "typeStructOrgcode",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: false,
      placeholder: "numéro ancien",
      inputType: InputType.number,
    },
  },
  {
    name: "Class Créance",
    key: "creanClasse",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    selectItems: classCreanceProvider,
  },
  {
    name: "N°Créance",
    key: "creanCode",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "numéro creance",
      inputType: InputType.text,
    },
  },
  {
    name: "Entité",
    key: "entiteLib",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "entité",
      inputType: InputType.text,
    },
  },
  {
    name: "Objet Créance",
    key: "creanObjet",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,

    inputItem: {
      isEditable: true,
      inputType: InputType.text,
      placeholder: "objet creance",
    },
  },
  {
    name: "Périodicité",
    key: "periodCode",
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
    name: "Nb. Ech",
    key: "creanNbech",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "nombre echéance",
    },
  },
  {
    name: "Date Reconnais.",
    key: "creanDatrec",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: false,
      inputType: InputType.date,
      placeholder: "date reconnaissance",
    },
  },
  {
    name: "Date 1ere Ech.",
    key: "creanDateft",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      inputType: InputType.date,
    },
  },
  {
    name: "Date Dern Ech",
    key: "creanDatech",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      inputType: InputType.date,
    },
  },
  {
    name: "Date d'Octroi",
    key: "creanDatoctroi",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      inputType: InputType.date,
    },
  },
  {
    name: "Date 1er Precompte.",
    key: "date1erPrecompt ?",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      inputType: InputType.date,
    },
  },
  {
    name: "Crean Sold Avt Liq",
    key: "creanSoldAvantLiq",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    selectItems: booleanProvider,
  },
  {
    name: "Commission",
    key: "creanCommBanq",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.text,
      placeholder: "commission",
    },
  },
  {
    name: "Mont Ass.",
    key: "creanMontAss",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      placeholder: "montant ass",
      inputType: InputType.text,
    },
  },
  {
    name: "Int. conv. %",
    key: "creanMontIc",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      placeholder: "int conv",
      inputType: InputType.number,
    },
  },
  {
    name: "Mont. Inv Conv. Payé",
    onInsert: acCreanceProvider.simpleInsert,
    key: "creanMontIcPaye",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      placeholder: "montant int conv payé",
      inputType: InputType.number,
    },
  },
  {
    name: "Int. Ret.",
    key: "creanMontIr",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      placeholder: "int ret",
      inputType: InputType.number,
    },
  },
  {
    name: "Ordonnateur",
    key: "ordonnateur",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    selectItems: acCreanceProvider.getDebiteursItems,
    inputItem: {
      isEditable: false,
      placeholder: "Ordonnateur",
      inputType: InputType.text,
    },
  },

  {
    name: "Mont à Remb.",
    key: "montARemb ?",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      inputType: InputType.text,
      placeholder: "montant a rembourssé",
    },
  },
  {
    name: "Mont. Dû",
    key: "creanMontDu",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "montant dû",
    },
  },
  {
    name: "Mont. Déja Remb.",
    key: "creanDejRemb",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "montant déja remboursse",
    },
  },
  {
    name: "Mont. Impayé",
    key: "creanMontImpaye",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      inputType: InputType.text,
      placeholder: "montant impayé",
    },
  },
  {
    name: "Divers Frais",
    key: "creanFrais",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
      placeholder: "divers frais",
    },
  },
  {
    name: "Encours",
    key: "creanEncours",
    state: acCreanceProvider.getState(),
    onInsert: acCreanceProvider.simpleInsert,
    inputItem: {
      isEditable: true,
      placeholder: "encours",
      inputType: InputType.number,
    },
  },
  {
    name: "Total Dû",
    key: "totalDu ?",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      inputType: InputType.number,
      placeholder: "total dû",
    },
  },
  {
    name: "Pénalité 1%",
    key: "creanPenalite",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "penalité 1%",
      inputType: InputType.text,
    },
  },
  {
    name: "Total à recouvrer",
    key: "totalARecouv ?",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "total a recouvrer",
      inputType: InputType.number,
    },
  },
];

const defaultPieceTabRow = [
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

    hasAddButton: true,
    tableContent: defaultPieceTabRow,
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
    hasAddButton: true,
    tableContent: defaultGarantiesPersonnells,
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
    hasAddButton: true,
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

const fraisTabs: CreanceTabType[] = [
  
    {
      tabName: "Creance",
      tabTitle: "Creance",
      children: [
        {
          child:  <ComponentBuilder label="Recaputulatif" fields={ecranCreanceFraisRecapulatif} />
        },
        {
          child: <PaiementComponent  data={ecranFraisPaiementComponentData} />
        }
      ],
      fields: [
        {
          name: "Code",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: "Code de creance",
          },
          selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
        },
        {
          name: "Debiteur",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },
        {
          name: "Grpe Créance",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
            placeholder: "Grpp de creance",
          },
        },

        {
          name: "Entité",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Type d'Objet",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Objet",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Capitale Initiale",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Mont. Du",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Mont. Décaissé",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Code Prec",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Périodicité",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Taux Int. conv",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Mont. Déjà Remb.",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Date 1ère Ech",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Encours",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Mont. Int. à recouv",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

        {
          name: "Frais",
          key: 'numAssu',
          state: acDebiteurProvider.getState(),
          inputItem: {
            inputType: InputType.text,
            isEditable: true,
          },
        },

      ],
      key: ""
    },
 
  {
    tabName: "Mutation",
    tabTitle: "Mutation",
    children: [


      {
        child:  <ComponentBuilder label="Logement" fields={FraisLogement} />
    },

    {
      child:  <ComponentBuilder label="Terrain" fields={FraisTerrain} />
  },
  
  {
    child:  <ComponentBuilder label="Premier Acquereur" fields={FraisPremierAcquereur} />
},
       {
          child: <PaiementComponent  data={ecranFraisPaiementComponentData} />
        }
    ],
    fields: [
      {
        name: "Code",
        key: "libelle",
        state: acCreanceProvider.getState(),
        selectItems: acCreanceProvider.getDebiteursItems,
        inputItem: {
            isEditable: true,
            placeholder: "Code",
            inputType: InputType.text,
        },
    },
    {
        name: "Proprietaire",
        key: "libelle",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: true,
            placeholder: "Code",
            inputType: InputType.text,
        },
    },
    {
        name: "Gestionnaire",
        key: "type",
        state: acCreanceProvider.getState(),
        inputItem: {
          isEditable: true,
          placeholder: "Montant",
          inputType: InputType.text,
        },
      },
      {
        name: "Date de creation",
        key: "type",
        state: acCreanceProvider.getState(),
        inputItem: {
          isEditable: true,
          placeholder: "Montant",
          inputType: InputType.date,
        },
      },
      {
        name: "Gestionnaire",
        key: "type",
        state: acCreanceProvider.getState(),
        inputItem: {
          isEditable: true,
          placeholder: "Montant",
          inputType: InputType.text,
        },
      },
    ],
    key: ""
  },
];

const visiteTerrainTabs: CreanceTabType[] = [
  {
    tabName: "Visite de terreain",
    tabTitle: "Groupe Creance",
    fields: [
      {
        name: "Groupe de Creance",
        key: 'numAssu',
        state: acDebiteurProvider.getState(),
        inputItem: {
          inputType: InputType.text,
          isEditable: true,
          placeholder: "Grpe de Creance",
        },
        selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
      },
    ],

    children:[
      {
        child:<PaiementComponent data={FraisVisiteTerrainPaiementComponentData}/>
    },    ],

    key: ""
  },
 
 
];

export const mainCreanceDatas: CreanceDataType = {
  title: "Etude créance",
  fields: creanceFields,
  columCount: 3,
  create: acCreanceProvider.create,
  state: acCreanceProvider.getState(),
  tabs: creanceTabs,
};

export const VisiteTerrainCreationData: CreanceDataType = {
  title: "Creation De Frais",
  fields: [],  
  hasAddbutton: true,
  create: acCreanceProvider.create,
  state: acCreanceProvider.getState(),
  tabs: visiteTerrainTabs,
};

export const fraisCreationData: CreanceDataType = {
  title: "Visite de terrain",
  fields: [],  
  hasAddbutton: true,
  create: acCreanceProvider.create,
  state: acCreanceProvider.getState(),
  tabs: fraisTabs,
};
