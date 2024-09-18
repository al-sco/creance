import { ComponentBuilderType } from "../../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const FraisMutation: CreanceFieldType[] = [
  {
    name: "Code",
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
    name: "Proprietaire",
    key: "libelle",
    state: acCreanceProvider.getState(),
    inputItem: {
        isEditable: true,
        placeholder: "Code",
        inputType: InputType.text,
    },
},
{
    name: "Gestionnaire",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      placeholder: "Montant",
      inputType: InputType.text,
    },
  },
  {
    name: "Date de creation",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      placeholder: "Montant",
      inputType: InputType.date,
    },
  },
  {
    name: "Gestionnaire",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      placeholder: "Montant",
      inputType: InputType.text,
    },
  },
  
];
