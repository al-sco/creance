import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const factureFraisPaiementData: CreanceFieldType[] = [
  {
    name: "N°Frais",
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
    name: "Type Frais",
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
    name: "N°Frais",
    key: "numEch",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "numero lig ech",
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
      inputType: InputType.number,
    },
  },
  {
    name: "Montant Paye",
    key: "montant",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "montant",
      inputType: InputType.number,
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
];
