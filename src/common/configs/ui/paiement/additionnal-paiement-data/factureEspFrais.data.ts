import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";



export const factureEspFraisPaiementData : CreanceFieldType[]=[

{
    name: "N°FRAIS",
    key:"frais",
    selectItems:acCreanceProvider.getDebiteursItems,
     state: acCreanceProvider.getState(),
            inputItem: {
                isEditable: true,
                placeholder: "numero",
                inputType: InputType.text,
            },
        },
        {
            name: "N°LIG.ech.",
            key: "frais",
            
            state: acCreanceProvider.getState(),
            inputItem: {
              isEditable: false,
              placeholder: "numero frais",
              inputType: InputType.text,
            },
          },
          {
            name: "N°FRAIS",
            key: "numEch",
            state: acCreanceProvider.getState(),
            inputItem: {
              isEditable: false,
              placeholder: "numero lig ech",
              inputType: InputType.text,
            },
          },
          {
            name: "Type frais",
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
            key: "typeFrais",
            state: acCreanceProvider.getState(),
            inputItem: {
              isEditable: true,
              placeholder: "type frais",
              inputType: InputType.number,
            },
          },

          {
            name: "Montant Payé",
            key: "typeFrais",
            state: acCreanceProvider.getState(),
            inputItem: {
              isEditable: false,
              placeholder: "type frais",
              inputType: InputType.text,
            },
          },

          {
            name: "Date Paiement",
            key: "typeFrais",
            state: acCreanceProvider.getState(),
            inputItem: {
              isEditable: false,
              placeholder: "type frais",
              inputType: InputType.text,
            },
          },
    ]
