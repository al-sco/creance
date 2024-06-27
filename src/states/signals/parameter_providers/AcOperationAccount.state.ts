import { AcCptOperation } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";
class AcOperationAccountStateProvider extends ICrudStateProvider<AcCptOperation> {
  mapEntitieFrom(json: any): AcCptOperation {
    return {
      id: json["cptoperCode"],
      numero: json["cptoperCode"],
      codeBanqueAgence: json["bqagCode"],
      codeGroupeCreance: json["grpCreanCode"],
    };
  }
}

const acOperationAccountProvider = new AcOperationAccountStateProvider(
  "/compte-oper"
);
export default acOperationAccountProvider;
