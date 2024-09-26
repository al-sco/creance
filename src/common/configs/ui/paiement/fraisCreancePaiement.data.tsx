import ComponentBuilder, { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import MultiComponentsBuilder from "../../../../components/paiement/multi-components-builder";
import NormalEffetPaiementComponents from "../../../../components/paiement/paiement-additionnal-components/normal_effet_paiement_component";
import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import { AdditionnalContentType, InputType } from "../creance/creance.type";
import { creance_SfraisPaiementData } from "./additionnal-paiement-data/creance_Sfrais_screen.data";
import { factureEspFraisPaiementData } from "./additionnal-paiement-data/factureEspFrais.data";
import { paiementCreanceViewData } from "./paiement_creance_view_data";




export const fraisCreancePaiementSelectItem: AdditionnalContentType[] = [
  {
      label:'SELECTION'
  },

  {
      label: 'Paiement de frais',
      child: <MultiComponentsBuilder children={
          [
              { 
                  child:  <ComponentBuilder label="FRAIS" fields={factureEspFraisPaiementData} />
              },
          ]
      } />
  },

  {
    label:'Paiement en espece', 
      child: <NormalEffetPaiementComponents hasNoPaidButton={true} selectItem={creance_SfraisPaiementData} />
     },
]


export const fraisCreanceComponentData: ComponentBuilderType[] = [

    {
        label:'Creance',
        fields:paiementCreanceViewData
    },
    {
      label: 'Effet/Cheque',
      fields: [
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