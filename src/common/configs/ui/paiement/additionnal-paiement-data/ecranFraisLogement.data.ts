import { ComponentBuilderType } from "../../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const FraisLogement: CreanceFieldType[] = [
  {
    name: "Code Log",
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
    name: "N°Porte",
    key: "libelle",
    state: acCreanceProvider.getState(),
    inputItem: {
        isEditable: true,
        placeholder: "Code",
        inputType: InputType.text,
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
