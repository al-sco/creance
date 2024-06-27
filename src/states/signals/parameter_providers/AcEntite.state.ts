import { AcEntite } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcEntityStateProvider extends ICrudStateProvider<AcEntite> {
  mapEntitieFrom(json: any): AcEntite {
    return {
      id: json["entiteCode"],
      code: json["entiteCode"],
      libelle: json["entiteLib"],
      libelleLong: json["entiteLibLong"],
      responsable: json["entiteResp"],
      entiteAssign: json["entiteAssign"],
    };
  }
}

const acEntityProvider = new AcEntityStateProvider("/entite");
export default acEntityProvider;
