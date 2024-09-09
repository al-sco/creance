import ComponentBuilder, { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import NormalEffetPaiementComponents from "../../../../components/paiement/paiement-additionnal-components/normal_effet_paiement_component";
import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import { AdditionnalContentType, InputType } from "../creance/creance.type";
import { fraisEffetPaiementData } from "./additionnal-paiement-data/frais-effet-paiement.data";
import { normalEffetPaiementData } from "./additionnal-paiement-data/normal-effet-paiement.data";
import { paiementCreanceViewData } from "./paiement_creance_view_data";

export const fraisPaiementSelectItem: AdditionnalContentType[] = [
    {
        label: 'Frais',
        child: <ComponentBuilder label="Frais" child={fraisEffetPaiementData} />
    },
]

export const fraisPaiementComponentData: ComponentBuilderType[] = [
    {
        label: 'Creance',
        child: paiementCreanceViewData,
    },

    {
        label:'Frais',
        child:[
            {
                name: "N° Réçu Mannuel",
                key: "numRecu",
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    placeholder: "numero",
                    inputType: InputType.number,
                },
            },
            {
                name: "N° Frais",
                key: "frais",
                selectItems: acCreanceProvider.getDebiteursItems,
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  placeholder: "numero frais",
                  inputType: InputType.text,
                },
              },
              {
                name: "N° Lig Ech",
                key: "numEch",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  placeholder: "numero lig ech",
                  inputType: InputType.text,
                },
              },
              {
                name: "Type Frais",
                key: "typeFrais",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  placeholder: "type frais",
                  inputType: InputType.text,
                },
              },
              {
                name: "Montant",
                key: "montant",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  placeholder: "montant",
                  inputType: InputType.text,
                },
              },
              {
                name: "Montant Payé",
                key: "montantPaye",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  placeholder: "montant paye",
                  inputType: InputType.text,
                },
              },
              {
                name: "Date Paiement",
                key: "dateP",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  inputType: InputType.date,
                },
              },
        ]
    }
    // {
    //     label: 'Effet/Cheque',
    //     child: [
    //         {
    //             name: "Type Effet",
    //             key: "creanCode",
    //             state: acCreanceProvider.getState(),
    //             selectItems: acCreanceProvider.getDebiteursItems,
    //             inputItem: {
    //                 isEditable: false,
    //                 placeholder: "type effet",
    //                 inputType: InputType.text,
    //             },
    //         },
    //         {
    //             name: "Numero",
    //             key: "creanCode",
    //             state: acCreanceProvider.getState(),
    //             inputItem: {
    //                 isEditable: true,
    //                 placeholder: "numéro",
    //                 inputType: InputType.text,
    //             },
    //         },
    //         {
    //             name: "Banque Emettrice",
    //             key: "creanCode",
    //             state: acCreanceProvider.getState(),
    //             selectItems: acCreanceProvider.getDebiteursItems,
    //             inputItem: {
    //                 isEditable: false,
    //                 placeholder: "banque emettrice",
    //                 inputType: InputType.text,
    //             },
    //         },
    //         {
    //             name: "Montant",
    //             key: "creanCode",
    //             state: acCreanceProvider.getState(),
    //             inputItem: {
    //                 isEditable: true,
    //                 placeholder: "montant",
    //                 inputType: InputType.number,
    //             },
    //         },
    //     ]
    // }
]