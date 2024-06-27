import { AcCivilite } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcCilivityStateProvider extends ICrudStateProvider<AcCivilite> {
  mapEntitieFrom(json: any): AcCivilite {
    return {
      id: json["civCode"],
      code: json["civCode"],
      libelle: json["civLib"],
    };
  }
}

const acCilivityProvider = new AcCilivityStateProvider("/civilite");
export default acCilivityProvider;
