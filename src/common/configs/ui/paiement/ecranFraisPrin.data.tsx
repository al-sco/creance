import ComponentBuilder, { ComponentBuilderType } from "../../../../components/paiement/component_builder";
import MultiComponentsBuilder from "../../../../components/paiement/multi-components-builder";
import acCreanceProvider from "../../../../states/signals/creances_providers/AcCreance.state";
import { AdditionnalContentType, InputType } from "../creance/creance.type";
import { ecranCreanceFrais } from "./additionnal-paiement-data/ecranCreanceFais.data";
import { ecranCreanceFraisRecapulatif } from "./additionnal-paiement-data/ecranCreanceFraisRecapulatif.data";
import { FraisLogement } from "./additionnal-paiement-data/ecranFraisLogement.data";
import { FraisMutation } from "./additionnal-paiement-data/ecranFraisMutation.data";
import { FraisPremierAcquereur } from "./additionnal-paiement-data/ecranFraisPremierAcquereur.data";
import { FraisTerrain } from "./additionnal-paiement-data/ecranFraisTerrain.data";



export const ecranFraisPaiementSelectItem: AdditionnalContentType[] = [

    {
        label:'SELECTION'
    }, 
    {
        label: 'Creance',
        child: <MultiComponentsBuilder children={
            [
                { 
                    child:  <ComponentBuilder label="Creance" fields={ecranCreanceFrais} />
                },
                {
                    child:  <ComponentBuilder label="Recaputulatif" fields={ecranCreanceFraisRecapulatif} />
                }
            ]
        } />
    }, 
    {
        label: 'Mutation',
        child: <MultiComponentsBuilder children={
            [
                { 
                    child:  <ComponentBuilder label="Mutaion" fields={FraisMutation} />
                },
                {
                    child:  <ComponentBuilder label="Logement" fields={FraisLogement} />
                },
                {
                    child:  <ComponentBuilder label="Terrain" fields={FraisTerrain} />
                },
                {
                    child:  <ComponentBuilder label="Premier Acquereur" fields={FraisPremierAcquereur} />
                }
            ]
        } />
    }, 
    {
        label:'Autre Frais'
    }
]

export const ecranFraisPaiementComponentData: ComponentBuilderType[] = [
    {
        label: 'Frais',
        fields:[{
            
                name: "Type",
                key: "type",
                state: acCreanceProvider.getState(),
                selectItems: acCreanceProvider.getDebiteursItems,
                     inputItem: {
                    isEditable: true,
                    placeholder: "Libelle",
                    inputType: InputType.text,
                },
            },
          
            {
            name: "Libelle",
            key: "libelle",
            state: acCreanceProvider.getState(),
            inputItem: {
                isEditable: true,
                placeholder: "Libelle",
                inputType: InputType.text,
            },
        },
        {
            name: "Montant",
            key: "type",
            state: acCreanceProvider.getState(),
            inputItem: {
              isEditable: true,
              placeholder: "Montant",
              inputType: InputType.number,
            },
          },
        
          {
            name: "Beneficiaire",
            key: "libelle",
            state: acCreanceProvider.getState(),
            inputItem: {
                isEditable: true,
                inputType: InputType.text,
            },
        },
        ],
    },
]