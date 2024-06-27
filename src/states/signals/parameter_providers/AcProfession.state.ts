import { AcProfession } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcProfessionStateProvider extends ICrudStateProvider<AcProfession> {
    mapEntitieFrom(json: any): AcProfession {
      return {
        id: json["profesCode"],
        code: json["profesCode"],
        libelle: json["profesLib"],
      };
    }
  }
  
  const acProfessionProvider = new AcProfessionStateProvider("/profession");
  export default acProfessionProvider;