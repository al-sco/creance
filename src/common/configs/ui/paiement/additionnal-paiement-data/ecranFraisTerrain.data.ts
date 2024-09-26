import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const FraisTerrain: CreanceFieldType[] = [
  {
    name: "Code Terr.",
    key: "libelle",
    state: acCreanceProvider.getState(),
    inputItem: {
        isEditable: true,
        placeholder: "Code",
        inputType: InputType.text,
    },
},
{
    name: "Lot",
    key: "libelle",
    state: acCreanceProvider.getState(),
    inputItem: {
        isEditable: true,
        placeholder: "Code",
        inputType: InputType.text,
    },
},
{
    name: "ILOT",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      placeholder: "Montant",
      inputType: InputType.text,
    },
  },
  {
    name: "Superficile",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      inputType: InputType.date,
    },
  },
  {
    name: "Code Operat.",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      placeholder: "Montant",
      inputType: InputType.text,
    },
  },
  
];
