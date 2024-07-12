import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import acDebiteurProvider from "../../../../states/signals/creances_providers/AcDebiteur.state";
import acGroupeCreanceProvider from "../../../../states/signals/parameter_providers/AcGroupeCreance.state";
import acObjetCreanceProvider from "../../../../states/signals/parameter_providers/AcObjetCreances.state";
import acPeriodiciteProvider from "../../../../states/signals/parameter_providers/AcPeriodicite.state";
import { CreanceDataType, CreanceFieldType, CreanceTabType, InputType } from "./creance.type";

const creanceFields: CreanceFieldType[] = [
    {
        name: 'Débiteur',
        key:'debiteur',
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
        onInsert: acCreanceProvider.simpleInsert,
        
        inputItem: {
            isEditable: false,
            inputType: InputType.number,
            placeholder: "grpe creance",
        },
selectItems: acCreanceProvider.getSelectItems(acObjetCreanceProvider),

    },
    {
        name: 'Mont à Remb.',
        key:'montARemb',
        inputItem: {
            isEditable: false,
            inputType: InputType.text,
            placeholder: "montant a rembourssé",
        },
    },
    {
        name: 'Capital Initial',
        key:'capitalInitial',
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
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "montant dû",
        },
    },
    {
        name: 'N°Créance',
     key:'nCreance',   
        inputItem: {
            isEditable: false,
            placeholder: "numéro creance",
            inputType: InputType.text
        }
    },
    {
        name: 'Entité',
        key:'entite',
        inputItem: {
            isEditable: false,
            placeholder: "entité",
            inputType: InputType.text
        },
    },
    {
        name: 'Mont. Décaissé',
        key:'montDecaisse',
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
        inputItem: {
            isEditable: false,
            inputType: InputType.number,
            placeholder: "total dû",
        },
    },
    {
        name: 'Mont. Déja Remb.',
        key:'montDejaRemb',
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
        inputItem: {
            isEditable: false,
            inputType: InputType.text,
            placeholder: "montant impayé",
        },
    },
    {
        name: 'Sté Caution',
        key:'steCaution',
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
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            inputType: InputType.date
        },
    },
    {
        name: 'Stat Recouv.',
        key:'statRecouv',
        // selectItems: [
        //     {
        //         title: 'Nom',
        //         value: 'nom'
        //     },
        //     {
        //         title: 'Oui',
        //         value: 'oui'
        //     }
        // ]
    },
    {
        name: 'Mont Ass.',
        key:'montAss',
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
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            inputType: InputType.date
        },
    },
    {
        name: 'Encours',
        key:'enCours',
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
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            inputType: InputType.date
        },
    },

    {
        name: "Date 1er Precompte.",
        key:'date1erPrecompt',
        onInsert: acCreanceProvider.simpleInsert,
        inputItem: {
            inputType: InputType.date
        },
    },
    {
        name: 'N° Ancien',
        key:'nAncien',
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
        inputItem: {
            isEditable: true,
            placeholder: "montant int conv payé",
            inputType: InputType.number
        },
    },
    {
        name: 'Pénalité 1%',
        key:'penalite1',
        inputItem: {
            isEditable: false,
            placeholder: "penalité 1%",
            inputType: InputType.text
        },
    },
    {
        name: 'Total à recouvrer',
        key:'totalARecouv',
        inputItem: {
            isEditable: false,
            placeholder: "total a recouvrer",
            inputType: InputType.number
        },
    },
    {
        name: 'Crean Sold Avt Liq',
        key:'cranSoldAvtLiq',
        // selectItems: [
        //     {
        //         title: 'Option 1',
        //         value: 'option1'
        //     },
        //     {
        //         title: 'Option 1',
        //         value: 'option1'
        //     }
        // ]
    },
    {
        name: 'Class Créance',
        key:'classCreance',
        // selectItems: [
        //     {
        //         title: 'Crance Normal',
        //         value: 'cranceNormal'
        //     },
        //     {
        //         title: 'Crance Normal',
        //         value: 'cranceNormal'
        //     },
        //     {
        //         title: 'Crance Normal',
        //         value: 'cranceNormal'
        //     }
        // ]
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
    }
]

export const mainCreanceDatas: CreanceDataType = {
    title: 'Etude créance',
    fields: creanceFields,
    state:acCreanceProvider.getState(),
    tabs: creanceTabs
}
