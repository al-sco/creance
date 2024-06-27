import { AcNationalite } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcNationalityStateProvider extends ICrudStateProvider<AcNationalite> {
    mapEntitieFrom(json: any): AcNationalite {
      return {
        id: json["natCode"],
        code: json["natCode"],
        libelle: json["natLib"],
      };
    }
  }
  
  const acNationaliteProvider = new AcNationalityStateProvider("/nationalite");
  export default acNationaliteProvider;

