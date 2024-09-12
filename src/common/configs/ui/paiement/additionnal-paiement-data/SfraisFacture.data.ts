import { ComponentBuilderType } from "../../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const SfraisFacturePaiementData: CreanceFieldType[] = [
  {
    name: "Lib. Paiement",
    key: "numRecu",
    state: acCreanceProvider.getState(),
    inputItem: {
        isEditable: true,
        placeholder: "numero",
        inputType: InputType.text,
    },
},
{
    name: "Banque Agence",
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
    name: "Mode Paiement",
    key: "numEch",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "numero lig ech",
      inputType: InputType.text,
    },
  },
  {
    name: "N°Effet",
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
