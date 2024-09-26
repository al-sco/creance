import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const FraisPremierAcquereur: CreanceFieldType[] = [
  {
    name: "N°Creance",
    key: "libelle",
    state: acCreanceProvider.getState(),
    selectItems: acCreanceProvider.getDebiteursItems,
    inputItem: {
        isEditable: true,
        placeholder: "Code",
        inputType: InputType.text,
    },
},
{
    name: "Code Debiteur",
    key: "libelle",
    state: acCreanceProvider.getState(),
    inputItem: {
        isEditable: true,
        placeholder: "Code",
        inputType: InputType.text,
    },
},
{
    name: "Nom",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      inputType: InputType.text,
    },
  },
  {
    name: "N°Contrat",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      inputType: InputType.date,
    },
  },
  
];
