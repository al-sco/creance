import { AcCategorieDebiteur, ParameterBaseData } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";

class AcDebiteurStateProvider extends ICrudStateProvider<AcCategorieDebiteur> {
  mapDataToJson(data: ParameterBaseData): {} {
    return {
      categDebCode: data["id"],
      categDebLib:data["libelle"],
    }
  }
  mapEntitieFrom(json: any): AcCategorieDebiteur {
    return {
      id: json["categDebCode"],
      code: json["categDebCode"],
      libelle: json["categDebLib"],
    };
  }
}

const acDebiteurProvider = new AcDebiteurStateProvider(
  "/debiteur",{}
);
export default acDebiteurProvider;
