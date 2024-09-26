import { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import NormalEffetPaiementComponents from "../../../../components/paiement/paiement-additionnal-components/normal_effet_paiement_component";
import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import { AdditionnalContentType, InputType } from "../creance/creance.type";
import { normalEffetPaiementData } from "./additionnal-paiement-data/normal-effet-paiement.data";
import { paiementCreanceViewData } from "./paiement_creance_view_data";

export const virementPaiementSelectItem: AdditionnalContentType[] = [
    {        
        child: <NormalEffetPaiementComponents hasNoPaidButton={true} selectItem={normalEffetPaiementData} />
    },
]

export const virementPaiementComponentData: ComponentBuilderType[] = [
    {
        label: 'Creance',
        fields: paiementCreanceViewData,
    },
   {
    label:'ENREGISTREMENT DES PAIEMENTS CGRAE-OVP-CNPS-PGT',
    fields:[
            {
                name: "N°Rèçu Manuel",
                key: "numRecu",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    placeholder: "N°Rèçu",
                    inputType: InputType.text,
                },
            },

            {
                name: "Libelle Paiement",
                key: "numRecu",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    placeholder: "Libelle",
                    inputType: InputType.text,
                },
            },

            {
                name: "Montant Paiement",
                key: "numRecu",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    inputType: InputType.number,
                },
            },
            
            {
                name: "Date de paiement",
                key: "numRecu",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    inputType: InputType.date,
                },
            },
            {
                name: "Mode Paiement",
                key: "numRecu",
                selectItems:acCreanceProvider.getDebiteursItems,
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    inputType: InputType.text,
                },
            },

            {
                name: "Commpte Operation",
                key: "numRecu",
                selectItems: acCreanceProvider.getDebiteursItems,
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    placeholder: "N°Rèçu",
                    inputType: InputType.text,
                },
            },
        ]
   },
]
