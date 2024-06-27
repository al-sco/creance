import { AcClasse } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";


class AcClasseStateProvider extends ICrudStateProvider<AcClasse> {
    mapEntitieFrom(json: any): AcClasse {
      return {
        id: json["id"],
        code: json["clasCode"],
        libelle: json["clasLib"],
      };
    }
  }
  
  const acClasseProvider = new AcClasseStateProvider('/classe');
  export default acClasseProvider;
