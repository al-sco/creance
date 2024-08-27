import ComponentBuilder, { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import MultiComponentsBuilder from "../../../../components/paiement/multi-components-builder";
import NormalEffetPaiementComponents from "../../../../components/paiement/paiement-additionnal-components/normal_effet_paiement_component";
import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import { AdditionnalContentType, InputType } from "../creance/creance.type";
import { enrgst_paie_esp } from "./additionnal-paiement-data/enrgst_paie_esp.data";
import { fraisEffetPaiementData } from "./additionnal-paiement-data/frais-effet-paiement.data";
import { normalEffetPaiementData } from "./additionnal-paiement-data/normal-effet-paiement.data";
import { paie_banq_remb } from "./additionnal-paiement-data/paie_banq_remb.data";
import { saisie_et_vente } from "./additionnal-paiement-data/saisie_et_vente.data";
import { paiementCreanceViewData } from "./paiement_creance_view_data";


export const especePaiementSelectItem: AdditionnalContentType[] = [

    {
        label: 'Paiement en espèces 1',
        child: <MultiComponentsBuilder children={
            [
                {
                    
                    child:  <ComponentBuilder label="ENREGISTREMENT DES PAIEMENTS EN ESPECES" child={enrgst_paie_esp} />
                },
                {
                    child: <NormalEffetPaiementComponents selectItem={normalEffetPaiementData} />
                },  
            ]
        } />
    },

    {
        label: 'Paiement en espèces 2',
        child: <ComponentBuilder label="FRAIS" child={fraisEffetPaiementData} />
    },
    {
        label: 'Paiement après saisie et vente',
        child: <MultiComponentsBuilder children={
            [
                {
                    child:  <ComponentBuilder label="INFORMATION SUR LA SAISE DE BIENS" child={saisie_et_vente} />
                },
                {
                    child:  <ComponentBuilder label="ENREGISTREMENT DES PAIEMENTS EN ESPECES" child={enrgst_paie_esp} />
                },  
            ]
        } />
    },
    {
        label: 'Paiement par banque rembs.',
        child: <MultiComponentsBuilder children={
            [
                {
                    child: <NormalEffetPaiementComponents selectItem={normalEffetPaiementData} />
                },
                {
                    child:  <ComponentBuilder label="ENREGISTREMENT DES PAIEMENTS PAR BANQUE DE REMBOURSEMENT" child={paie_banq_remb} />
                },  
            ]
        } />
    },
    
]

export const especePaiementComponentData: ComponentBuilderType[] = [
    {
        label: 'Creance',
        child: paiementCreanceViewData
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