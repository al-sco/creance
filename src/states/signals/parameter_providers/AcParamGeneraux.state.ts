import { AcParam } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcParamGenerauxStateProvider extends ICrudStateProvider<AcParam> {
  mapEntitieFrom(json: any): AcParam {
    return {
      id: json["id"],
      code: json["id"],
      libelle: json["paramLib"],
      commentaire: json["paramComment"],
      valeur: json["paramValeur"],
    };
  }
}

const acParamGenerauxProvider = new AcParamGenerauxStateProvider("/param");
export default acParamGenerauxProvider;
