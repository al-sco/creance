import { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import { AdditionnalContentType, InputType } from "../creance/creance.type";
import { paiementCreanceViewData } from "./paiement_creance_view_data";

export const especePaiementSelectItem: AdditionnalContentType[] = [
    {
        label: 'Frais',
        child: <>Hi </>
    },
    {
        label: 'Espece',
        child: <>Ho</>
    },
]

export const especePaiementComponentData: ComponentBuilderType[] = [
    {
        label: 'Creance',
        child: paiementCreanceViewData
    },
    {
        label: 'Espece',
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