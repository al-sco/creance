import { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import { AdditionnalContentType, InputType } from "../creance/creance.type";

export const FraisVisiteTerrainPaiementSelectItem: AdditionnalContentType[] = [
   
        {
            label: 'Vide',
        },
        
    ]


export const FraisVisiteTerrainPaiementComponentData: ComponentBuilderType[] = [
    {
        label:'Groupe Creance',
        fields:[
            {
                name: "Groupe Creance",
                key: "numRecu",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    placeholder: "numero",
                    inputType: InputType.text,
                },
            },
        
    
]}, 
{
    label:'Info du client',
    fields:[
        {
            
            name: "Nom",
            key: "numRecu",
            state: acCreanceProvider.getState(),
            inputItem: {
                isEditable: true,
                inputType: InputType.text,
            },
        },
        {
            name: "Prenom",
            key: "numRecu",
            state: acCreanceProvider.getState(),
            inputItem: {
                isEditable: true,
                inputType: InputType.text,
            },
        },

         {
            name: "Objet",
            key: "numRecu",
            state: acCreanceProvider.getState(),
            inputItem: {
                isEditable: true,
                placeholder: "numero",
                inputType: InputType.text,
            },
        },
        {
            name: "Date",
            key: "numRecu",
            state: acCreanceProvider.getState(),
            inputItem: {
                isEditable: true,
                placeholder: "numero",
                inputType: InputType.date,
            },
        },
        {
            name: "Ref Terrain",
            key: "numRecu",
            state: acCreanceProvider.getState(),
            inputItem: {
                isEditable: true,
                placeholder: "numero",
                inputType: InputType.text,
            },
        },
        {
            name: "Reference",
            key: "numRecu",
            state: acCreanceProvider.getState(),
            inputItem: {
                isEditable: true,
                placeholder: "numero",
                inputType: InputType.text,
            },
        },
    ]
}

]