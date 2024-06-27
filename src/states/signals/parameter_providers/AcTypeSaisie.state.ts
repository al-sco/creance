import { AcTypeSaisie } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypeSaisieStateProvider extends ICrudStateProvider<AcTypeSaisie> {
  mapEntitieFrom(json: any): AcTypeSaisie {
    return {
      id: json["typeSaisieId"],
      code: json["typeSaisieCode"],
      libelle: json["typeSaisieLib"],
    };
  }
}

const acTypeSaisieProvider = new AcTypeSaisieStateProvider("/type-saisie");
export default acTypeSaisieProvider;
