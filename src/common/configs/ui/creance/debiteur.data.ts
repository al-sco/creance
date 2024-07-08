import { CreanceDataType, CreanceFieldType, CreanceTabType } from "./creance.type";

const debiteurFields: CreanceFieldType[] = [
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
]

const debiteurTabs: CreanceTabType[] = [
    {
        tabName: 'Piece',
        headers: ['Type Piece', 'Reference', 'Libelle', 'Date reception', 'Date emission'],
        tableContent: [
         
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

export const debiteursDatas: CreanceDataType = {
    title: 'Débiteur',
    fields: debiteurFields,
    tabs: debiteurTabs
}
