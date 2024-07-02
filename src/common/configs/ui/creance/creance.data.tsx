import { CreanceFieldType, CreanceTabType, InputType } from "./creance.type";

export const creanceFields: CreanceFieldType[] = [
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
        name: 'Debiteur',
        inputItem: {
            isEditable: false,
            placeholder: "debiteur",
            inputType: InputType.text
        }
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
        name: 'Grpe Creance',
        inputItem: {
            isEditable: false,
            placeholder: "grpe creance",
            inputType: InputType.number
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
        name: 'Grpe Creance',
        inputItem: {

            isEditable: false,
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
        name: 'Grpe Creance',
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
        name: 'Grpe Creance',
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
        name: 'Grpe Creance',
        inputItem: {

            isEditable: true,
            inputType: InputType.text,
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
        name: 'Grpe Creance',
        inputItem: {

            isEditable: true,
            inputType: InputType.text,
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
        name: 'Grpe Creance',
        inputItem: {

            isEditable: true,
            inputType: InputType.text,
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
        name: 'Grpe Creance',
        inputItem: {

            isEditable: true,
            inputType: InputType.text,
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
]

export const creanceTabs: CreanceTabType[] = [
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