import { ComponentBuilderType } from "../../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const paie_banq_remb: CreanceFieldType[] = [
  {
    name: "Libelle paiement",
    key: "numRecu",
    state: acCreanceProvider.getState(),
    inputItem: {
        isEditable: true,
        placeholder: "numero",
        inputType: InputType.text,
    },
},
{
    name: "Montant paiement",
    key: "frais",
    selectItems: acCreanceProvider.getDebiteursItems,
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: true,
      inputType: InputType.number,
    },
  },
  {
    name: "Compte Opération",
    key: "numEch",
    state: acCreanceProvider.getState(),
    selectItems:acCreanceProvider.getDebiteursItems,
    inputItem: {
      isEditable: false,
      placeholder: "numero lig ech",
      inputType: InputType.text,
    },
  },
  {
    name: "Banque Agence",
    key: "typeFrais",
    state: acCreanceProvider.getState(),
    selectItems:acCreanceProvider.getDebiteursItems,
    inputItem: {
      isEditable: false,
      inputType: InputType.text,
    },
  },
  {
    name: "Banque",
    key: "montantPaye",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      inputType: InputType.text,
    },
  },
  {
    name: "N°Reçus Manuel",
    key: "montantPaye",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "montant paye",
      inputType: InputType.text,
    },
  },
  {
    name: "Date de paiement",
    key: "montant",
    state: acCreanceProvider.getState(),
    inputItem: {
      isEditable: false,
      placeholder: "montant",
      inputType: InputType.date,
    },
  },
];
