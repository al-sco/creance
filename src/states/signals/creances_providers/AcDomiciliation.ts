



import { AcCreance, AcDebiteurPhysique } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";




class AcCreanceStateProvider extends ICrudStateProvider<AcDomiciliation> {
    mapDataToJson(data: AcDomiciliation): {} {
        return {
          domCode: data["domCode"],
          bqagCode: data["bqagCode"],
          typdomCode: data["typdomCode"],
          garphysCode: data["garphysCode"],
          debCode: data["debCode"],
          domLib: data["domLib"],
          domDateCtl: data["domDateCtl"],
          ancAg: data["ancAg"],
          villeCode: data["villeCode"],
          numBenef: data["numBenef"],
          acOvps: data["acOvps"]
        };
      }
      
      
      
    
      mapEntitieFrom(json: any): AcDomiciliation {
        return {
          domCode: json["domCode"],
          bqagCode: json["bqagCode"],
          typdomCode: json["typdomCode"],
          garphysCode: json["garphysCode"],
          debCode: json["debCode"],
          domLib: json["domLib"],
          domDateCtl: json["domDateCtl"],
          ancAg: json["ancAg"],
          villeCode: json["villeCode"],
          numBenef: json["numBenef"],
          acOvps: json["acOvps"]
        };
      }
      
      
}      