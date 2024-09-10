import { ComponentBuilderType } from "../../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { InputType } from "../../creance/creance.type";

export const creance_SfraisPaiementData : ComponentBuilderType[] = [
    {
        label: 'Garantie Personnel',
        child: [
            {
                name: "N°",
                key: "creanCode",
                state: acCreanceProvider.getState(),
                selectItems: acCreanceProvider.getDebiteursItems,                
                inputItem: {
                    isEditable: false,
                    placeholder: "type",
                    inputType: InputType.text,
                },
            },
            {
                name: "Type",
                key: "type",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: false,
                    placeholder: "type",
                    inputType: InputType.text,
                },
            },
            {
                name: "Nom",
                key: "nom",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: false,
                    placeholder: "nom",
                    inputType: InputType.text,
                },
            },
            {
                name: "Celulaire",
                key: "celulaire",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: false,
                    placeholder: "celulaire",
                    inputType: InputType.text,
                },
            },
            {
                name: "Profession",
                key: "profession",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: false,
                    placeholder: "profession",
                    inputType: InputType.text,
                },
            },
        ],
      
    },
    {
        label: 'Debiteur Principal',
        child: [
            {
                name: "Libelle",
                key: "libelle",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    placeholder: "libelle",
                    inputType: InputType.text,
                },
            },
            {
                name: "Montant",
                key: "montant",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    placeholder: "montant",
                    inputType: InputType.number,
                },
            },
        ]
    },
    {
        label: 'Assureur',
        child: [
            {
                name: "N°",
                key: "creanCode",
                state: acCreanceProvider.getState(),
                selectItems: acCreanceProvider.getDebiteursItems,                
                inputItem: {
                    isEditable: false,
                    placeholder: "type",
                    inputType: InputType.text,
                },
            },
            {
                name: "Assureur",
                key: "assureur",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: false,
                    placeholder: "assureur",
                    inputType: InputType.text,
                },
            },
            {
                name: "Télephone",
                key: "télephone",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: false,
                    placeholder: "télephone",
                    inputType: InputType.text,
                },
            },
            {
                name: "Gérant",
                key: "gérant",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: false,
                    placeholder: "gérant",
                    inputType: InputType.text,
                },
            },
        ]
    },
  
]