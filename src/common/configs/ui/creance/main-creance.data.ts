import acCreanceProvider, { booleanProvider, classCreanceProvider } from "../../../../states/signals/creances_providers/AcCreance.state";
import acDebiteurProvider from "../../../../states/signals/creances_providers/AcDebiteur.state";
import acGroupeCreanceProvider from "../../../../states/signals/parameter_providers/AcGroupeCreance.state";
import acObjetCreanceProvider from "../../../../states/signals/parameter_providers/AcObjetCreances.state";
import acPeriodiciteProvider from "../../../../states/signals/parameter_providers/AcPeriodicite.state";
import { CreanceDataType, CreanceFieldType, CreanceTabType, InputType } from "./creance.type";

const creanceFields: CreanceFieldType[] = [

    {
        name: 'N°Créance',
     key:'nCreance',   
     state: acCreanceProvider.getState(),
     inputItem: {
            isEditable: false,
            placeholder: "numéro creance",
            inputType: InputType.text
        }
    },
    {
        name: 'Débiteur',
        key:'debiteur',
        state: acCreanceProvider.getState(),
        inputItem:{
            inputType:InputType.text,
            isEditable:false,
            placeholder: 'Debiteur'
        },
        onInsert: acDebiteurProvider.simpleInsert,
selectItems: acCreanceProvider.getSelectItems(acDebiteurProvider),

    },

    {
        name: 'Périodicité',
        key:'periodicite',
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            inputType: InputType.number,
            placeholder: "périodicité",
        },
selectItems: acCreanceProvider.getSelectItems(acPeriodiciteProvider),

    },
    {
        name: 'Grpe Creance',
        key:'groupeCreance',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: false,
            placeholder: "grpe creance",
            inputType: InputType.text
        },
selectItems: acCreanceProvider.getSelectItems(acGroupeCreanceProvider),

    },
    {
        name: 'Objet Créance',
     key:'objectCreance',   
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
        key:'typeObject',
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
        name: 'Capital Initial',
        key:'capitalInitial',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "capital initial",
        },
    },
    {
        name: 'Mont. Dû',
        key:'montantDu',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "montant dû",
        },
    },
    
    {
        name: 'Entité',
        key:'entite',
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "entité",
            inputType: InputType.text
        },
    },
    {
        name: 'Mont. Décaissé',
        key:'montDecaisse',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "montant décaissé",
        },
    },
    {
        name: 'Total Dû',
        key:'totalDu',
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            inputType: InputType.number,
            placeholder: "total dû",
        },
    },
    {
        name: 'Mont. Déja Remb.',
        key:'montDejaRemb',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "montant déja remboursse",
        },
    },
    {
        name: 'Nb. Ech',
        key:'nbEch',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "nombre echéance",
        },
    },
    {
        name: 'Mont. Impayé',
        key:'montImpaye',
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            inputType: InputType.text,
            placeholder: "montant impayé",
        },
    },
    {
        name: 'Sté Caution',
        key:'steCaution',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "ste caution",
        },
    },
    {
        name: 'Date Reconnais.',
        key:'dateReconnais',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: false,
            inputType: InputType.date,
            placeholder: "date reconnaissance",
        },
    },
    {
        name: 'Commission',
        key:'commission',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: true,
            inputType: InputType.text,
            placeholder: "commission",
        },
    },
    {
        name: 'Divers Frais',
        key:'diversFrais',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "divers frais",
        },
    },
    {
        name: 'Date 1ere Ech.',
        key:'date1ereEch',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            inputType: InputType.date
        },
    },
    {
        name: 'Stat Recouv.',
        key:'statRecouv',
        state: acCreanceProvider.getState(),
        selectItems:booleanProvider,
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable:false
        }
    },
    {
        name: 'Mont Ass.',
        key:'montAss',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: true,
            placeholder: "montant ass",
            inputType: InputType.text
        },
    },
    {
        name: 'Date Dern Ech',
        key:'dateDernEch',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            inputType: InputType.date
        },
    },  
    {
        name: 'Encours',
        key:'enCours',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: true,
            placeholder: "encours",
            inputType: InputType.number
        },
    },
    {
        name: 'N° Précédent',
        key:'nPrecedent',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,

        inputItem: {
            isEditable: true,
            placeholder: "numéro précédent",
            inputType: InputType.number
        },
    },
    {
        name: "Date d'Octroie.",
        key:'dateOctroie',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            inputType: InputType.date
        },
    },

    {
        name: "Date 1er Precompte.",
        key:'date1erPrecompt',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            inputType: InputType.date
        },
    },
    {
        name: 'N° Ancien',
        key:'nAncien',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,

        inputItem: {
            isEditable: true,
            placeholder: "numéro ancien",
            inputType: InputType.number
        },
    },

    {
        name: 'Type Structure',
        key:'typestructure',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: false,
            placeholder: "numéro ancien",
            inputType: InputType.number
        },
    },
    {
        name: 'Int. conv. %',
        key:'intConv',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: true,
            placeholder: "int conv",
            inputType: InputType.number
        },
    },
    {
        name: 'Int. Ret.',
        key:'intRet',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: true,
            placeholder: "int ret",
            inputType: InputType.number
        },
    },
    {
        name: 'Mont. Inv Conv. Payé',
        onInsert: acCreanceProvider.simpleInsert,
        key:'montInvConvPaye',
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: true,
            placeholder: "montant int conv payé",
            inputType: InputType.number
        },
    },
    {
        name: 'Pénalité 1%',
        key:'penalite1',
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "penalité 1%",
            inputType: InputType.text
        },
    },
    {
        name: 'Total à recouvrer',
        key:'totalARecouv',
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "total a recouvrer",
            inputType: InputType.number
        },
    },
    {
        name: 'Crean Sold Avt Liq',
        key:'cranSoldAvtLiq',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        selectItems:booleanProvider,
    },
    {
        name: 'Class Créance',
        key:'classCreance',
        state: acCreanceProvider.getState(),
        onInsert: acCreanceProvider.simpleInsert,
        selectItems:classCreanceProvider
    },
    {
        name: 'Mont à Remb.',
        key:'montARemb',
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            inputType: InputType.text,
            placeholder: "montant a rembourssé",
        },
    },
]

const creanceTabs: CreanceTabType[] = [
    {
        tabName: 'Piece',
        key:'piece',
        tableHeaders: ['Type Piece', 'Reference', 'Libelle', 'Date reception', 'Date emission'],
        tableContent: [
            {
                label: "Type Piece",
                key: "TypePiece",
        },

            {
                label: "Reference",
                key: "Reference",
        },

            {
                label: "Libelle",
                key: "Libelle",
        },

            {
                label: "Date reception",
                key: "DateReception",
        },

            {
                label: "Date emission",
                key: "DateEmission",
        },

        ]
    },
    {
        tabName: 'Garantie Personnelle',
        key:'garantiePersonnelle',
        state: acCreanceProvider.getState(),
        tableHeaders: ['Type Piece', 'Reference', 'Libelle', 'Date reception', 'Date emission'],
        tableContent: [
            {
                label: "Type Piece",
                key: "TypePiece",
            },

            {
                label: "Reference",
                key: "Reference",
            },

            {
                label: "Libelle",
                key: "Libelle",
            },

            {
                label: "Date reception",
                key: "DateReception",
            },

            {
                label: "Date emission",
                key: "DateEmission",  
            },

        ]
    },
    {
        tabName: 'Référence',
        key:'reference',
        state: acCreanceProvider.getState(),
        tableContent: [
            {
                label: "Type Piece",
                key: "TypePiece",
            state: acCreanceProvider.getState(),},

            {
                label: "Reference",
                key: "Reference",
            state: acCreanceProvider.getState(),},

            {
                label: "Libelle",
                key: "Libelle",
            state: acCreanceProvider.getState(),},

            {
                label: "Date reception",
                key: "DateReception",
            state: acCreanceProvider.getState(),},

            {
                label: "Date emission",
                key: "DateEmission",
            state: acCreanceProvider.getState(),},

        ]
    }

    
]

export const mainCreanceDatas: CreanceDataType = {
    title: 'Etude créance',
    fields: creanceFields,
    columCount:3,
    state:acCreanceProvider.getState(),
    tabs: creanceTabs
}
