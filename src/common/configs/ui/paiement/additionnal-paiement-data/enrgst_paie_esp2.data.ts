import { ComponentBuilderType } from "../../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const enrgst_paie_esp2: CreanceFieldType[] = [
  {
    name: "Libelle paiement",
    key: "libelle",
    state: acCreanceProvider.getState(),
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

  {
    name: "N°Reçus Manuel",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      placeholder: "Montant",
      inputType: InputType.text,
    },
  },

  {
    name: "Compte Operation",
    key: "type",
    selectItems:acCreanceProvider.getDebiteursItems,
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "Montant",
      inputType: InputType.text,
    },
  },
  {
    name: "Banque Agence",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "Montant",
      inputType: InputType.text,
    },
  },
  {
    name: "Banque",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "Montant",
      inputType: InputType.text,
    },
  },

  {
    name: "Date de Paiement",
    key: "type",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      placeholder: "Montant",
      inputType: InputType.number,
    },
  },
  
];

