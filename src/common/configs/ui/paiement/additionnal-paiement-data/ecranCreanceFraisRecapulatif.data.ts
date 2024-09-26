import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const ecranCreanceFraisRecapulatif: CreanceFieldType[] = [
  {
    name: "Paiement",
    key: "libelle",
    state: acCreanceProvider.getState(),
    inputItem: {
        isEditable: true,
        inputType: InputType.number,
    },
},
{
    name: "Pénalités",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
    },
  },
  {
    name: "Autres frais",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
    },
  },
  {
    name: "Ech.Encours",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
    },
  },
  {
    name: "Principale",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
    },
  },
  {
    name: "Solde",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
    },
  },
];
