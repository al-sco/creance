import { Signal } from "@preact/signals-react";
import { AcDomicialition } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";


type DomiciliationRowFieldData = {
  rowIndex: number,
  bqagCode: string,
  typdomCode: string,
  domLib: string,
  numAccount: string,
}


class AcDomicialitionStateProvider extends ICrudStateProvider<AcDomicialition> {

  fields: Signal<DomiciliationRowFieldData[]> = new Signal()

  mapDataToJson(data: AcDomicialition): {} {
    return {
      domCode: data["domCode"],
      bqagCode: data["bqagCode"],
      typdomCode: data["typdomCode"],
      garphysCode: data["garphysCode"],
      debCode: data["debCode"],
      domLib: data["domLib"],
      domDateCtl: data["domDateCtl"],
      ancAg: data["ancAg"],
      villeCode: data["villeCode"],
      numBenef: data["numBenef"],
    };
  }




  mapEntitieFrom(json: any): AcDomicialition {
    return {
      domCode: json["domCode"],
      id: json["domCode"],
      bqagCode: json["bqagCode"],
      typdomCode: json["typdomCode"],
      garphysCode: json["garphysCode"],
      debCode: json["debCode"],
      domLib: json["domLib"],
      domDateCtl: json["domDateCtl"],
      ancAg: json["ancAg"],
      villeCode: json["villeCode"],
      numBenef: json["numBenef"],
    };
  }


  saveFieldData = (fieldsData: DomiciliationRowFieldData[]) => {
    this.fields.value = fieldsData
  }
}

const acDomiciliationStateProvider = new AcDomicialitionStateProvider("/debiteur-physique")
export default acDomiciliationStateProvider

