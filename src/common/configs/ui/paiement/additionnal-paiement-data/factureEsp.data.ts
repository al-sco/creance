import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import { CreanceFieldType, InputType } from "../../creance/creance.type";


export const factureEspData : CreanceFieldType[]=[
    {
        name: "Lbelle de paiement",
        key:"frais",
         state: acCreanceProvider.getState(),
                inputItem: {
                    isEditable: true,
                    placeholder: "Libelle",
                    inputType: InputType.text,
                },
            },

            {
                name: "Montant de paiement",
                key:"frais",
                 state: acCreanceProvider.getState(),
                        inputItem: {
                            isEditable: true,
                            placeholder: "numero",
                            inputType: InputType.number,
                        },
                    },
        

]