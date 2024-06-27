import { AcPosteComptable } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcPosteComptableStateProvider extends ICrudStateProvider<AcPosteComptable> {
    mapEntitieFrom(json: any): AcPosteComptable {
      return {
        id: json["pcCode"],
        code: json["pcCode"],
        libelle: json["pcLib"],
      };
    }
  }
  
  const acPostecomptableyProvider = new AcPosteComptableStateProvider("/postecomptable");
  export default acPostecomptableyProvider;