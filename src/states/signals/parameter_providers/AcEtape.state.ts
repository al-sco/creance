import { AcEtape } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcEtapeStateProvider extends ICrudStateProvider<AcEtape> {
    mapEntitieFrom(json: any): AcEtape {
      return {
        id: json["civCode"],
        code: json["civCode"],
        libelle: json["civLib"],
      };
    }
  }
  
  const acEtapeProvider = new AcEtapeStateProvider("/etape");
  export default acEtapeProvider;
