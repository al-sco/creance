import { CreanceStaticDataType, SelectItem } from "../../../common/configs/ui/creance/creance.type";
import { AcCreance, AcDebiteur} from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import acDebiteurProvider from "./AcDebiteur.state";


class AcCreanceStateProvider extends ICrudStateProvider<AcCreance> {
    mapDataToJson(data: AcTypeStruct): {} {
        return {
          typeStructOrgcode: data["typeStructOrgcode"],
          typeStructOrglib: data["typeStructOrglib"]
        }
      }
      
  }
  
  mapEntitieFrom(json: any): AcTypeStruct {
    return {
      typeStructOrgcode: json["typeStructOrgcode"],
      typeStructOrglib: json["typeStructOrglib"]
    };
  }
  
  


  
  simpleInsert=(key:string,value:any): void=>{
   let state= this.getState();
   state.value= {...state.value,...{[key]:value}}
   console.log(state.value)
  }

  getSelectItems=(provider: any):()=>Promise<SelectItem[]>=>{
      return async()=>{
        let typeDebiteurs=(await provider.find()) as any[];    
        return typeDebiteurs.map((typeDebiteur)=>({
        title:typeDebiteur.libelle,
        value:typeDebiteur.code
        }));
      }
  }

  getDebiteursItems = async(): Promise<SelectItem[]> => {
    let typeDebiteurs = await acDebiteurProvider.find() as AcDebiteur[];
    return typeDebiteurs.map((typeDebiteur) => ({
      title: typeDebiteur.debEmail,
      value: typeDebiteur.debAdrpost,
    }));
};
}


const acCreanceProvider = new AcCreanceStateProvider(
  "/creance",{}
);
export default acCreanceProvider;

export const booleanProvider=async():Promise<SelectItem[]>=>{
  let status:boolean[]=[
    true, false
  ]

  return status.map((e)=>({
    title:e?'Oui':'Non',
    value:e?'Oui':'Non'
  }))

}

export const classCreanceProvider= async():Promise<SelectItem[]>=>{
  let creantTypes:CreanceStaticDataType[] = [
  {
    label: 'Creance normal',
    value: 'creance normal'
  },
  {
    label: 'Creance contentieuse',
    value: 'creance contentieuse'
  }, 
  {
    label: 'Creance irrecouvrable',
    value: 'creance irrecouvrable'
  }, 
]

return creantTypes.map((e)=>({title:e.label,value:e.value}))
}