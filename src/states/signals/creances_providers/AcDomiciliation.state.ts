import { Signal } from "@preact/signals-react";
import { AcDomicialition } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";





class AcDomicialitionStateProvider extends ICrudStateProvider<AcDomicialition> {

  fields: Signal<AcDomicialition[]> = new Signal()

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


  create = async ({ debCode }: { debCode: number }): Promise<AcDomicialition | void> => {

    let rowWithDebCodeAdded = this.fields.value.map((row) => ({ ...row, debCode:debCode }))
    let { status } = await axios.post(getUrl(`${this.basePath}/all`), rowWithDebCodeAdded, {
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': true
      }
    })
    console.log(`From dom ${status}`)
    console.log(rowWithDebCodeAdded);
    
    if (status == 201) {
      await this.find()
    }
  }


  saveFieldData = (fieldsData: any[]) => {
    this.fields.value = fieldsData.map((field) => this.mapEntitieFrom(field))
    console.log("From dom state")
    console.log(this.fields.value)
  }
}

const acDomiciliationStateProvider = new AcDomicialitionStateProvider("/domiciliation")
export default acDomiciliationStateProvider

