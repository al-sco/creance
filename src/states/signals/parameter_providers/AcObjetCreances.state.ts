import { AcObjetCreance } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcObjetCreancesStateProvider extends ICrudStateProvider<AcObjetCreance> {
    mapEntitieFrom(json: any): AcObjetCreance {
      return {
        id: json["objCreanCode"],
        code: json["objCreanCode"],
        libelle: json["objCreanLib"],
      };
    }
  }
  
  const acObjetCreancesProvider = new AcObjetCreancesStateProvider("/objet-creance");
  export default acObjetCreancesProvider;
