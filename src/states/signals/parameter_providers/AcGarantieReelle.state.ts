import axios from "axios";
import { AcGarReelle, Identifiable } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import { getUrl } from "../../../common/configs/api/api_configs";

export class AcGarReelleStateProvider extends ICrudStateProvider<AcGarReelle> {
  mapDataToJson(data: AcGarReelle): {} {
    let state = this.getState().value as any;
    let _data = {
      id: data.id,
      terCode: state["terCode"],
      creanCode: state["creanCode"],
      logeCode: state["logeCode"],
      typgarReelCode: state["typgarReelCode"],
      gareelLib: state["gareelLib"],
      gareelObjNum: state["gareelObjNum"],
      gareelModeAcq: state["gareelModeAcq"],
      gareelObjMont: state["gareelObjMont"],
      gareelDatinscrip: state["gareelDatinscrip"],
      gareelDateCtl: state["gareelDateCtl"],
      gareelType: state["gareelType"],
      gareelNumSerieType: state["gareelNumSerieType"]
    };

    console.log(_data);
    return _data;
  }

  findOne = async (id: string): Promise<void> => {
    let { data, status } = await axios.get(getUrl(`${this.basePath}/${id}`), {
      headers: {
        "ngrok-skip-browser-warning": true,
      },
    });
    console.log(data);
    if (status == 200) {
      this.getState().value = this.mapEntitieFrom(data);
    }
  };

  mapEntitieFrom(json: any): AcGarReelle {
    return {
      id: json["id"],
      terCode: json["terCode"],
      creanCode: json["creanCode"],
      logeCode: json["logeCode"],
      typgarReelCode: json["typgarReelCode"],
      gareelLib: json["gareelLib"],
      gareelObjNum: json["gareelObjNum"],
      gareelModeAcq: json["gareelModeAcq"],
      gareelObjMont: json["gareelObjMont"],
      gareelDatinscrip: json["gareelDatinscrip"],
      gareelDateCtl: json["gareelDateCtl"],
      gareelType: json["gareelType"],
      gareelNumSerieType: json["gareelNumSerieType"]
    };
  }

  simpleInsert = (key: string, value: any): void => {
    let state = this.getState();
    state.value = { ...state.value, ...{ [key]: value } };
    console.log(state.value);
  };
}

const acGarReelleProvider = new AcGarReelleStateProvider("/garantie-reelle", {});
