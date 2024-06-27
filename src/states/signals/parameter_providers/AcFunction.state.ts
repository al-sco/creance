import ICrudStateProvider from "./ICrudStateProvider";
import { AcFonction } from "../../AcData.types";

class AcFunctionStateProvider extends ICrudStateProvider<AcFonction> {
  mapEntitieFrom(json: any): AcFonction {
    return {
      id: json["id"],
      code: json["fonctCode"],
      libelle: json["fonctLib"],
    };
  }
}

const acFunctionProvider = new AcFunctionStateProvider("/fonction");
export default acFunctionProvider;
