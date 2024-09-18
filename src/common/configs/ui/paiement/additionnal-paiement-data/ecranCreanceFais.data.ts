import { ComponentBuilderType } from "../../../../../components/paiement/component_builder";
import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";

export const ecranCreanceFrais: CreanceFieldType[] = [
  
    {
        name: "Code",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        selectItems: acCreanceProvider.getDebiteursItems,
        inputItem: {
            isEditable: false,
            placeholder: "code",
            inputType: InputType.text,
        },
    },
    {
        name: "Debiteur",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "debiteur",
            inputType: InputType.text,
        },
    },
    {
        name: "Groupe Creance",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "groupe creance",
            inputType: InputType.text,
        },
    },
    {
        name: "Nbr Ech",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "nombre echeance",
            inputType: InputType.number,
        },
    },
    {
        name: "Objet",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "objet",
            inputType: InputType.text,
        },
    },
    {
        name: "Capital Initial",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "capital initial",
            inputType: InputType.text,
        },
    },
    {
        name: "Taux Int. Conv",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "taux int conv",
            inputType: InputType.text,
        },
    },
    {
        name: "Taux Int. Ret",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "taux int ret",
            inputType: InputType.text,
        },
    },
    {
        name: "Date Effet",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "date effet",
            inputType: InputType.text,
        },
    },
    {
        name: "Date Ech",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "date ech",
            inputType: InputType.text,
        },
    },
    {
        name: "Date Octroi",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "date octroi",
            inputType: InputType.text,
        },
    },
    {
        name: "Durée",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "duree",
            inputType: InputType.text,
        },
    },
    {
        name: "Periodicité",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "periodicite",
            inputType: InputType.text,
        },
    },
    {
        name: "Status",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "status",
            inputType: InputType.text,
        },
    },
    {
        name: "Montant Debloqué",
        key: "creanCode",
        state: acCreanceProvider.getState(),
        inputItem: {
            isEditable: false,
            placeholder: "montant debloque",
            inputType: InputType.number,
        },
    },
  
];
