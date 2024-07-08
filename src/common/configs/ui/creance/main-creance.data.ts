import { CreanceDataType, CreanceFieldType, CreanceTabType, InputType } from "./creance.type";

const creanceFields: CreanceFieldType[] = [
    {
        name: 'Débiteur',
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
        inputItem: {
            isEditable: true,
            inputType: InputType.text,
            placeholder: "objet creance",
        },
    },
    {
        name: "Type d'Objet",
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
        inputItem: {
            isEditable: false,
            inputType: InputType.text,
            placeholder: "montant a rembourssé",
        },
    },
    {
        name: 'Capital Initial',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "capital initial",
        },
    },
    {
        name: 'Mont. Dû',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "montant dû",
        },
    },
    {
        name: 'N°Créance',
        inputItem: {
            isEditable: false,
            placeholder: "numéro creance",
            inputType: InputType.text
        }
    },
    {
        name: 'Entité',
        inputItem: {
            isEditable: false,
            placeholder: "entité",
            inputType: InputType.text
        },
    },
    {
        name: 'Mont. Décaissé',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "montant décaissé",
        },
    },
    {
        name: 'Total Dû',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "total dû",
        },
    },
    {
        name: 'Mont. Déja Remb.',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "montant déja remboursse",
        },
    },
    {
        name: 'Nb. Ech',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "nombre echéance",
        },
    },
    {
        name: 'Mont. Impayé',
        inputItem: {
            isEditable: false,
            inputType: InputType.text,
            placeholder: "montant impayé",
        },
    },
    {
        name: 'Sté Caution',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "ste caution",
        },
    },
    {
        name: 'Date Reconnais.',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "date reconnaissance",
        },
    },
    {
        name: 'Commission',
        inputItem: {
            isEditable: true,
            inputType: InputType.text,
            placeholder: "commission",
        },
    },
    {
        name: 'Divers Frais',
        inputItem: {
            isEditable: true,
            inputType: InputType.number,
            placeholder: "divers frais",
        },
    },
    {
        name: 'Date 1ere Ech.',
        inputItem: {
            inputType: InputType.date
        },
    },
    {
        name: 'Stat Recouv.',
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
        inputItem: {
            isEditable: true,
            placeholder: "montant ass",
            inputType: InputType.text
        },
    },
    {
        name: 'Date Dern Ech',
        inputItem: {
            inputType: InputType.date
        },
    },
    {
        name: 'Encours',
        inputItem: {
            isEditable: true,
            placeholder: "encours",
            inputType: InputType.number
        },
    },
    {
        name: 'N° Précédent',
        inputItem: {
            isEditable: true,
            placeholder: "numéro précédent",
            inputType: InputType.number
        },
    },
    {
        name: "Date d'Octroie.",
        inputItem: {
            inputType: InputType.date
        },
    },
    {
        name: 'N° Ancien',
        inputItem: {
            isEditable: true,
            placeholder: "numéro ancien",
            inputType: InputType.number
        },
    },
    {
        name: 'Int. conv.',
        inputItem: {
            isEditable: true,
            placeholder: "int conv",
            inputType: InputType.number
        },
    },
    {
        name: 'Int. Ret.',
        inputItem: {
            isEditable: true,
            placeholder: "int ret",
            inputType: InputType.number
        },
    },
    {
        name: 'Mont. Inv Conv. Payé',
        inputItem: {
            isEditable: true,
            placeholder: "montant int conv payé",
            inputType: InputType.number
        },
    },
    {
        name: 'Pénalité 1%',
        inputItem: {
            isEditable: false,
            placeholder: "penalité 1%",
            inputType: InputType.text
        },
    },
    {
        name: 'Total à recouvrer',
        inputItem: {
            isEditable: false,
            placeholder: "total a recouvrer",
            inputType: InputType.text
        },
    },
    {
        name: 'Crean Sold Avt Liq',
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
        headers: ['Type Piece', 'Reference', 'Libelle', 'Date reception', 'Date emission'],
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
        headers: ['Garantie Personnelle'],
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
