import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const fraisEffetPaiementData: CreanceFieldType[] = [
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
];
