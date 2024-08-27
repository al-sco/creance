import { ComponentBuilderType } from "../../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const saisie_et_vente: CreanceFieldType[] = [
  {
    name: "Libelle",
    key: "libelle",
    state: acCreanceProvider.getState(),
    selectItems: acCreanceProvider.getDebiteursItems,
    inputItem: {
        isEditable: false,
        placeholder: "Libelle",
        inputType: InputType.text,
    },
},
{
    name: "Type",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "type",
      inputType: InputType.text,
    },
  },
  {
    name: "Date",
    key: "date",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      inputType: InputType.date,
    },
  },
  
];
