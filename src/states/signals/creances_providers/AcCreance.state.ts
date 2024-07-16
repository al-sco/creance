import { CreanceStaticDataType, SelectItem } from "../../../common/configs/ui/creance/creance.type";
import { AcDebiteur} from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import acDebiteurProvider from "./AcDebiteur.state";

class AcCreanceStateProvider extends ICrudStateProvider<AcDebiteur> {
  mapDataToJson(data: AcDebiteur): {} {
    return {
      categDebCode: data["id"],
      categDebLib:data["libelle"],
      debAdrpost:data["debAdrpost"],
      debCel:data["debCel"],
      debCodeAnc:data["debCodeAnc"],
      debCodeCharg:data["debCodeCharg"],
      debDateCtl:data["debDateCtl"],
      debEmail:data["debEmail"],
      debFax:data["debFax"],
      debTelbur:data["debTelbur"],
      debTeldom:data["debTeldom"],
      garphysCode:data["garphysCode"],
      propCode:data["propCode"],
      typdebCode:data["typdebCode"]
    }
  }
  mapEntitieFrom(json: any): AcDebiteur {
    return {
      id: json["id"],
      code: json["id"],
      libelle: json["categDebCode"],
      debAdrpost:json["debAdrpost"],
      debCel:json["debCel"],
      debCodeAnc:json["debCodeAnc"],
      debCodeCharg:json["debCodeCharg"],
      debDateCtl:json["debDateCtl"],
      debEmail:json["debEmail"],
      debFax:json["debFax"],
      debTelbur:json["debTelbur"],
      debTeldom:json["debTeldom"],
      garphysCode:json["garphysCode"],
      propCode:json["propCode"],
      typdebCode:json["typdebCode"]
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