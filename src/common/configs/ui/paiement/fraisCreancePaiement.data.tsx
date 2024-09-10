import ComponentBuilder, { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import MultiComponentsBuilder from "../../../../components/paiement/multi-components-builder";
import NormalEffetPaiementComponents from "../../../../components/paiement/paiement-additionnal-components/normal_effet_paiement_component";
import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import { AdditionnalContentType, InputType } from "../creance/creance.type";
import { creance_SfraisPaiementData } from "./additionnal-paiement-data/creance_Sfrais_screen.data";
import { enrgst_paie_esp } from "./additionnal-paiement-data/enrgst_paie_esp.data";
import { factureEspData } from "./additionnal-paiement-data/factureEsp.data";
import { factureEspAntrData } from "./additionnal-paiement-data/factureEspAntr.data";
import { factureEspFraisPaiementData } from "./additionnal-paiement-data/factureEspFrais.data";
import { normalEffetPaiementData } from "./additionnal-paiement-data/normal-effet-paiement.data";
import { paiementCreanceViewData } from "./paiement_creance_view_data";




export const fraisCreancePaiementSelectItem: AdditionnalContentType[] = [
  {
      label:'SELECTION'
  },

  {
      label: 'Paiement avec frais',
      child: <MultiComponentsBuilder children={
          [
              { 
                  child:  <ComponentBuilder label="FRAIS" child={factureEspFraisPaiementData} />
              },
          ]
      } />
  },

  {
    label:'Paiement sans frais', 
      child: <NormalEffetPaiementComponents selectItem={creance_SfraisPaiementData} />
     },
]


export const fraisCreanceComponentData: ComponentBuilderType[] = [

    {
        label:'CONTRAT',
        child:paiementCreanceViewData
    },
    {
      label: 'Effet/Cheque',
      child: [
          {
              name: "Type Effet",
              key: "creanCode",
              state: acCreanceProvider.getState(),
              selectItems: acCreanceProvider.getDebiteursItems,
              inputItem: {
                  isEditable: false,
                  placeholder: "type effet",
                  inputType: InputType.text,
              },
          },
          {
              name: "Numero",
              key: "creanCode",
              state: acCreanceProvider.getState(),
              inputItem: {
                  isEditable: true,
                  placeholder: "numéro",
                  inputType: InputType.text,
              },
          },
          {
              name: "Banque Emettrice",
              key: "creanCode",
              state: acCreanceProvider.getState(),
              selectItems: acCreanceProvider.getDebiteursItems,
              inputItem: {
                  isEditable: false,
                  placeholder: "banque emettrice",
                  inputType: InputType.text,
              },
          },
          {
              name: "Montant",
              key: "creanCode",
              state: acCreanceProvider.getState(),
              inputItem: {
                  isEditable: true,
                  placeholder: "montant",
                  inputType: InputType.number,
              },
          },
      ]
  }

   


]