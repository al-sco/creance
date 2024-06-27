import { AcCompteOper } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcComptableAccountOperationStateProvider extends ICrudStateProvider<AcCompteOper> {
  mapEntitieFrom(json: any): AcCompteOper {
    return {
      id: json["id"],
      cptoperCode: json["cptoperCode"],
      bqagCode: json["bqagCode"],
      grpCreanCode: json["grpCreanCode"],
    };
  }
}

const acComptableAccountOperationProvider =
  new AcComptableAccountOperationStateProvider("/compte-oper");
export default acComptableAccountOperationProvider;
