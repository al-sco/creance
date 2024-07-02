import { AcCompteOper } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcCompteOperStateProvider extends ICrudStateProvider<AcCompteOper> {
  mapDataToJson(data: AcCompteOper): {} {
    console.log(data);
    return {
      cptoperCode: data["cptoperCode"],
      bqagCode: data["bqagCode"],
      grpCreanCode: data["grpCreanCode"],
    };
  }

  mapEntitieFrom(json: any): AcCompteOper {
    return {
      id: json["cptoperCode"],
      cptoperCode: json["cptoperCode"],
      bqagCode: json["bqagCode"],
      grpCreanCode: json["grpCreanCode"],
    };
  }
}

const acCompteOperProvider = new AcCompteOperStateProvider("/compte");
export default acCompteOperProvider;
