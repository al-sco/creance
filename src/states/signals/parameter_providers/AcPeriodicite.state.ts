import { AcPeriodicite } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";


class AcPeriodicityStateProvider extends ICrudStateProvider<AcPeriodicite> {
    mapEntitieFrom(json: any): AcPeriodicite {
      return {
        id: json["periodCode"],
        code: json["periodCode"],
        libelle: json["periodLib"],
      };
    }
  }
  
  const acPeriodicityProvider = new AcPeriodicityStateProvider("/periodicite");
  export default acPeriodicityProvider;
