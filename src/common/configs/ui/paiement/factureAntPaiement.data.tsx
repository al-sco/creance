import ComponentBuilder, { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import NormalEffetPaiementComponents from "../../../../components/paiement/paiement-additionnal-components/normal_effet_paiement_component";
import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import { AdditionnalContentType, InputType } from "../creance/creance.type";
import { fraisEffetPaiementData } from "./additionnal-paiement-data/frais-effet-paiement.data";
import { normalEffetPaiementData } from "./additionnal-paiement-data/normal-effet-paiement.data";
import { paiementCreanceViewData } from "./paiement_creance_view_data";


export const factureAntComponentData: ComponentBuilderType[] = [

    {
        label:'CONTRAT BAIL',
        child:[
            {
                name: "N°CONTRAT",
                key: "numRecu",
                selectItems:acCreanceProvider.getDebiteursItems,
                state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    placeholder: "numero",
                    inputType: InputType.text,
                },
            },
            {
                name: "LIBELLE",
                key: "frais",
                
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  placeholder: "numero frais",
                  inputType: InputType.text,
                },
              },
              {
                name: "N°LOCATAIRE",
                key: "numEch",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  placeholder: "numero lig ech",
                  inputType: InputType.text,
                },
              },
              {
                name: "Nom Loctaire",
                key: "typeFrais",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  placeholder: "type frais",
                  inputType: InputType.text,
                },
              },
              {
                name: "Date début",
                key: "montant",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  placeholder: "montant",
                  inputType: InputType.date,
                },
              },
              {
                name: "Date fin",
                key: "montantPaye",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  placeholder: "montant paye",
                  inputType: InputType.date,
                },
              },
              {
                name: "GRPE CREANCE",
                key: "dateP",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  inputType: InputType.text,
                },
              },

              {
                name: "TYPE",
                key: "dateP",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  inputType: InputType.text,
                },
              },

              {
                name: "N°LOGEMENT",
                key: "dateP",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  inputType: InputType.text,
                },
              },
              {
                name: "N°BLOC",
                key: "dateP",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  inputType: InputType.number,
                },
              },
              {
                name: "N°LOT",
                key: "dateP",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  inputType: InputType.text,
                },
              },
              {
                name: "N°ILOT",
                key: "dateP",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  inputType: InputType.number,
                },
              },
              {
                name: "CAUTION",
                key: "dateP",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  inputType: InputType.text,
                },
              },
              {
                name: "OPERATION",
                key: "dateP",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  inputType: InputType.number,
                },
              },
        ]

    
    },

    {
        label:"PAIEMENT",
        child:[
            {
                name: "LIBELLE",
                key: "dateP",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: true,
                  inputType: InputType.text,
                },
              },
              {
                name: "MONTANT",
                key: "dateP",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: true,
                  inputType: InputType.number,
                },
              },

              {
                name: "DATE",
                key: "dateP",
                state: acCreanceProvider.getState(),
                inputItem: {
                  isEditable: false,
                  inputType: InputType.date,
                },
              },
        ]
    }

]