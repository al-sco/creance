import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";


export const factureEspAntrData : CreanceFieldType[]=[


    {
        name: "LIBELLE",
        key:"frais",
        selectItems:acCreanceProvider.getDebiteursItems,
         state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    placeholder: "numero",
                    inputType: InputType.text,
                },
            },

            {
                name: "MONTANT",
                key:"frais",
                selectItems:acCreanceProvider.getDebiteursItems,
                 state: acCreanceProvider.getState(),
                        inputItem: {
                            isEditable: true,
                            placeholder: "numero",
                            inputType: InputType.number,
                        },
                    },

                    {
                        name: "DATE",
                        key:"frais",
                         state: acCreanceProvider.getState(),
                                inputItem: {
                                    isEditable: true,
                                     inputType: InputType.date,
                                },
                            },

]
