import ComponentBuilder, { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import NormalEffetPaiementComponents from "../../../../components/paiement/paiement-additionnal-components/normal_effet_paiement_component";
import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import { AdditionnalContentType, InputType } from "../creance/creance.type";
import { fraisEffetPaiementData } from "./additionnal-paiement-data/frais-effet-paiement.data";
import { normalEffetPaiementData } from "./additionnal-paiement-data/normal-effet-paiement.data";
import { paiementCreanceViewData } from "./paiement_creance_view_data";

export const effetPaiementSelectItem: AdditionnalContentType[] = [
    {
        label: 'Normal',
        child: <NormalEffetPaiementComponents selectItem={normalEffetPaiementData} />
    },
    {
        label: 'Frais',
        child: <ComponentBuilder label="Frais" child={fraisEffetPaiementData} />
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
                name: "Type Effet",
                key: "creanCode",
                state: acCreanceProvider.getState(),
                selectItems: acCreanceProvider.getDebiteursItems,
                inputItem: {
                    isEditable: false,
                    placeholder: "type effet",
                    inputType: InputType.text,
                },
            },
            {
                name: "Numero",
                key: "creanCode",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    placeholder: "numéro",
                    inputType: InputType.text,
                },
            },
            {
                name: "Banque Emettrice",
                key: "creanCode",
                state: acCreanceProvider.getState(),
                selectItems: acCreanceProvider.getDebiteursItems,
                inputItem: {
                    isEditable: false,
                    placeholder: "banque emettrice",
                    inputType: InputType.text,
                },
            },
            {
                name: "Montant",
                key: "creanCode",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    placeholder: "montant",
                    inputType: InputType.number,
                },
            },
        ]
    }
]