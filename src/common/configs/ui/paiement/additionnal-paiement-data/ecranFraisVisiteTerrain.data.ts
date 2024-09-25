import { ComponentBuilderType } from "../../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const FraisVisiteTerrain: CreanceFieldType[] = [
  {
    name: "Groupe Creance",
    key: "libelle",
    state: acCreanceProvider.getState(),
    selectItems: acCreanceProvider.getDebiteursItems,
    inputItem: {
        isEditable: true,
        placeholder: "groupe creance",
        inputType: InputType.text,
    },
},  
];
