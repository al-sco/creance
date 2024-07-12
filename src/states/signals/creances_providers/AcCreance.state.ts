import { SelectItem } from "../../../common/configs/ui/creance/creance.type";
import { AcDebiteur} from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";

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

}


const acCreanceProvider = new AcCreanceStateProvider(
  "/creance",{}
);
export default acCreanceProvider;
