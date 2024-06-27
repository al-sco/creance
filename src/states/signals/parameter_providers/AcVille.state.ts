import { AcVille } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";


class AcVilleStateProvider extends ICrudStateProvider<AcVille> {
    mapEntitieFrom(json: any): AcVille {
      return {
        id: json["villeId"],
        code: json["villeCode"],
        libelle: json["villeLib"],
      };
    }
  }
  
  const acVilleProvider = new AcVilleStateProvider("/ville");
  export default acVilleProvider;