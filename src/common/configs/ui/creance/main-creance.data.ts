import { CreanceDataType, CreanceFieldType, CreanceTabType, InputType } from "./creance.type";

const creanceFields: CreanceFieldType[] = [
    {
        name: 'Débiteur',
        key:'debiteur',
        inputItem:{
            inputType:InputType.text,
            isEditable:true,
            placeholder: 'Debiteur'
        },
        selectItems: [
            {
                title: 'Option1',
                value: 'option1'
            },
            {
                title: 'Option2',
                value: 'option2'
            }
        ]
    },
    {
        name: 'Périodicité',
        key:'periodicite',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "périodicité",
        },
        selectItems: [
            {
                title: 'Mensuel',
                value: 'mensuel'
            },
            {
                title: 'Quotidien',
                value: 'quotidien'
            },
            {
                title: 'Annuel',
                value: 'annuel'
            }
        ]
    },
    {
        name: 'Grpe Creance',
        key:'groupeCreance',
        inputItem: {
            isEditable: true,
            placeholder: "grpe creance",
            inputType: InputType.text
        },
        selectItems: [
            {
                title: 'Option1',
                value: 'option1'
            },
            {
                title: 'Option2',
                value: 'option2'
            }
        ]
    },
    {
        name: 'Objet Créance',
     key:'objectCreance',   
        inputItem: {
            isEditable: true,
            inputType: InputType.text,
            placeholder: "objet creance",
        },
    },
    {
        name: "Type d'Objet",
        key:'typeObject',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "grpe creance",
        },
        selectItems: [
            {
                title: 'Option1',
                value: 'option1'
            },
            {
                title: 'Option2',
                value: 'option2'
            }
        ]
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
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "capital initial",
        },
    },
    {
        name: 'Mont. Dû',
        key:'montantDu',
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
            isEditable: true,
            inputType: InputType.number,
            placeholder: "total dû",
        },
    },
    {
        name: 'Mont. Déja Remb.',
        key:'montDejaRemb',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "montant déja remboursse",
        },
    },
    {
        name: 'Nb. Ech',
        key:'nbEch',
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
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "ste caution",
        },
    },
    {
        name: 'Date Reconnais.',
        key:'dateReconnais',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "date reconnaissance",
        },
    },
    {
        name: 'Commission',
        key:'commission',
        inputItem: {
            isEditable: true,
            inputType: InputType.text,
            placeholder: "commission",
        },
    },
    {
        name: 'Divers Frais',
        key:'diversFrais',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "divers frais",
        },
    },
    {
        name: 'Date 1ere Ech.',
        key:'date1ereEch',
        inputItem: {
            inputType: InputType.date
        },
    },
    {
        name: 'Stat Recouv.',
        key:'statRecouv',
        selectItems: [
            {
                title: 'Nom',
                value: 'nom'
            },
            {
                title: 'Oui',
                value: 'oui'
            }
        ]
    },
    {
        name: 'Mont Ass.',
        key:'montAss',
        inputItem: {
            isEditable: true,
            placeholder: "montant ass",
            inputType: InputType.text
        },
    },
    {
        name: 'Date Dern Ech',
        key:'dateDernEch',
        inputItem: {
            inputType: InputType.date
        },
    },
    {
        name: 'Encours',
        key:'enCours',
        inputItem: {
            isEditable: true,
            placeholder: "encours",
            inputType: InputType.number
        },
    },
    {
        name: 'N° Précédent',
        key:'nPrecedent',
        inputItem: {
            isEditable: true,
            placeholder: "numéro précédent",
            inputType: InputType.number
        },
    },
    {
        name: "Date d'Octroie.",
        key:'dateOctroie',
        inputItem: {
            inputType: InputType.date
        },
    },
    {
        name: 'N° Ancien',
        key:'nAncien',
        inputItem: {
            isEditable: true,
            placeholder: "numéro ancien",
            inputType: InputType.number
        },
    },
    {
        name: 'Int. conv.',
        key:'intConv',
        inputItem: {
            isEditable: true,
            placeholder: "int conv",
            inputType: InputType.number
        },
    },
    {
        name: 'Int. Ret.',
        key:'intRet',
        inputItem: {
            isEditable: true,
            placeholder: "int ret",
            inputType: InputType.number
        },
    },
    {
        name: 'Mont. Inv Conv. Payé',
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
            inputType: InputType.text
        },
    },
    {
        name: 'Crean Sold Avt Liq',
        key:'cranSoldAvtLiq',
        selectItems: [
            {
                title: 'Option 1',
                value: 'option1'
            },
            {
                title: 'Option 1',
                value: 'option1'
            }
        ]
    },
    {
        name: 'Class Créance',
        key:'classCreance',
        selectItems: [
            {
                title: 'Crance Normal',
                value: 'cranceNormal'
            },
            {
                title: 'Crance Normal',
                value: 'cranceNormal'
            },
            {
                title: 'Crance Normal',
                value: 'cranceNormal'
            }
        ]
    },
]

const creanceTabs: CreanceTabType[] = [
    {
        tabName: 'Piece',
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
    tabs: creanceTabs
}
