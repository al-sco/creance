import { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import { AdditionnalContentType, InputType } from "../creance/creance.type";
import { paiementCreanceViewData } from "./paiement_creance_view_data";

export const effetPaiementSelectItem: AdditionnalContentType[] = [
    {
        label: 'Normal',
        child: <>Normal Content</>
    },
    {
        label: 'Frais',
        child: <>Frais Content</>
    },
]


export const effetPaiementComponentData: ComponentBuilderType[] = [
    {
        label: 'Creance',
        child: paiementCreanceViewData,
    },
    {
        label: 'Effet/Cheque',
        child: [
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
                name: "N°Créance",
                key: "creanCode",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: false,
                    placeholder: "numéro creance",
                    inputType: InputType.text,
                },
            },
        ]
    }
]