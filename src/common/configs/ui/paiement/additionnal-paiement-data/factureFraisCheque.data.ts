import { ComponentBuilderType } from "../../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const factureFraisChequePaiementData: CreanceFieldType[] = [
  {
    name: "Numero",
    key: "numRecu",
    selectItems: acCreanceProvider.getDebiteursItems,
    state: acCreanceProvider.getState(),
    inputItem: {
        isEditable: true,
        placeholder: "numero",
        inputType: InputType.text,
    },
},
{
    name: "Banque",
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
    name: "Type Effet",
    key: "numEch",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "numero lig ech",
      inputType: InputType.text,
    },
  },
  {
    name: "Date Creation",
    key: "montant",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "montant",
      inputType: InputType.date,
    },
  },
  {
    name: "Montant",
    key: "montant",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "montant",
      inputType: InputType.number,
    },
  },
];
