import { ComponentBuilderType } from "../../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const enrgst_paie_esp: CreanceFieldType[] = [
  {
    name: "Libelle paiement",
    key: "libelle",
    state: acCreanceProvider.getState(),
    selectItems: acCreanceProvider.getDebiteursItems,
    inputItem: {
        isEditable: true,
        placeholder: "Libelle",
        inputType: InputType.text,
    },
},
{
    name: "Montant paiement",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      placeholder: "Montant",
      inputType: InputType.number,
    },
  },
  
];
