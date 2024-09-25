import ComponentBuilder, { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import NormalEffetPaiementComponents from "../../../../components/paiement/paiement-additionnal-components/normal_effet_paiement_component";
import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import { AdditionnalContentType, InputType } from "../creance/creance.type";
import { FraisVisiteTerrain } from "./additionnal-paiement-data/ecranFraisVisiteTerrain.data";
import { factureFraisPaiementData } from "./additionnal-paiement-data/factureFrais.data";
import { fraisEffetPaiementData } from "./additionnal-paiement-data/frais-effet-paiement.data";
import { normalEffetPaiementData } from "./additionnal-paiement-data/normal-effet-paiement.data";
import { paiementCreanceViewData } from "./paiement_creance_view_data";

export const FraisVisiteTerrainPaiementSelectItem: AdditionnalContentType[] = [
   
        {
            label: 'Vide',
        },
        
    ]


export const FraisVisiteTerrainPaiementComponentData: ComponentBuilderType[] = [
    {
        label:'Groupe Creance',
        child:[
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
    child:[
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