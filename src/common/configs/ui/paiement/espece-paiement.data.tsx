import ComponentBuilder, { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import MultiComponentsBuilder from "../../../../components/paiement/multi-components-builder";
import NormalEffetPaiementComponents from "../../../../components/paiement/paiement-additionnal-components/normal_effet_paiement_component";
import { AdditionnalContentType } from "../creance/creance.type";
import { enrgst_paie_esp } from "./additionnal-paiement-data/enrgst_paie_esp.data";
import { enrgst_paie_esp2 } from "./additionnal-paiement-data/enrgst_paie_esp2.data";
import { fraisEffetPaiementData } from "./additionnal-paiement-data/frais-effet-paiement.data";
import { normalEffetPaiementData } from "./additionnal-paiement-data/normal-effet-paiement.data";
import { paiementCreanceViewData } from "./paiement_creance_view_data";


export const especePaiementSelectItem: AdditionnalContentType[] = [
    {
        label:'SELECTION'
    },

    {
        label: 'Paiement en Espèces',
        child: <MultiComponentsBuilder children={
            [
                {
                    
                    child:  <ComponentBuilder label="ENREGISTREMENT DES PAIEMENTS EN ESPECES" fields={enrgst_paie_esp} />
                },
                {
                    child: <NormalEffetPaiementComponents selectItem={normalEffetPaiementData} />
                },  
            ]
        } />
    },

    {
        label:'Paiement par Banque de Remboursement',
        child: <MultiComponentsBuilder children={
            [
                {
                    child: <ComponentBuilder label="ENREGISTREMENT DES PAIEMENTS PAR BANQUE DE REMBOURSEMENT" fields={enrgst_paie_esp2}/>
                },
                {
                    child: <NormalEffetPaiementComponents selectItem={normalEffetPaiementData} />

                }
            ]
        } />
    },

    {
        label: 'Paiement de frais',
        child: <ComponentBuilder label="FRAIS" fields={fraisEffetPaiementData} />
    },
    // {
    //     label: 'Paiement par banque rembs.',
    //     child: <MultiComponentsBuilder children={
    //         [
    //             {
    //                 child: <NormalEffetPaiementComponents selectItem={normalEffetPaiementData} />
    //             },
    //             {
    //                 child:  <ComponentBuilder label="ENREGISTREMENT DES PAIEMENTS PAR BANQUE DE REMBOURSEMENT" child={paie_banq_remb} />
    //             },  
    //         ]
    //     } />
    // },
    
]

export const especePaiementComponentData: ComponentBuilderType[] = [
    {
        label: 'Creance',
        fields: paiementCreanceViewData
    },
    // {
    //     label: 'Espece',
    //     child: [
    //         {
    //             name: "N°Créance",
    //             key: "creanCode",
    //             state: acCreanceProvider.getState(),
    //             inputItem: {
    //                 isEditable: false,
    //                 placeholder: "numéro creance",
    //                 inputType: InputType.text,
    //             },
    //         },
    //         {
    //             name: "N°Créance",
    //             key: "creanCode",
    //             state: acCreanceProvider.getState(),
    //             inputItem: {
    //                 isEditable: false,
    //                 placeholder: "numéro creance",
    //                 inputType: InputType.text,
    //             },
    //         },
    //         {
    //             name: "N°Créance",
    //             key: "creanCode",
    //             state: acCreanceProvider.getState(),
    //             inputItem: {
    //                 isEditable: false,
    //                 placeholder: "numéro creance",
    //                 inputType: InputType.text,
    //             },
    //         },
    //         {
    //             name: "N°Créance",
    //             key: "creanCode",
    //             state: acCreanceProvider.getState(),
    //             inputItem: {
    //                 isEditable: false,
    //                 placeholder: "numéro creance",
    //                 inputType: InputType.text,
    //             },
    //         },
    //     ]
    // }
]