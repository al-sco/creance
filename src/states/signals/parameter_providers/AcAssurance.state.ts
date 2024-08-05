import axios from "axios";
import { AcAssurance, Identifiable } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import { getUrl } from "../../../common/configs/api/api_configs";

export class AcAssuranceStateProvider extends ICrudStateProvider<AcAssurance> {
  mapDataToJson(data: AcAssurance): {} {
    let state = this.getState().value as any
    let _data = {
      assureCode: data.assureCode,
      id: state["creanCode"],
      assurCode: state["assurCode"],
      assurPolice: state["assurPolice"],
      assurDatdeb: state["assurDatdeb"],
      assurPrime: state["assurPrime"],
      assurDatsigne: state["assurDatsigne"],
      assurDateCtl: state["assurDateCtl"],
      assurUser: state["assurUser"]
    };

    console.log(_data)
    return _data
  }

  findOne = async (id: number): Promise<void> => {
    let { data, status } = await axios.get(getUrl(`${this.basePath}/${id}`), {
      headers: {
        "ngrok-skip-browser-warning": true,
      },
    });
    console.log(data)
    if (status == 200) {
      this.getState().value = this.mapEntitieFrom(data)
    }
  };

  mapEntitieFrom(json: any): AcAssurance {
    return {
      id: json["creanCode"],
      assureCode: json["assureCode"],
      creanCode: json["creanCode"],
      assurCode: json["assurCode"],
      assurPolice: json["assurPolice"],
      assurDatdeb: json["assurDatdeb"],
      assurPrime: json["assurPrime"],
      assurDatsigne: json["assurDatsigne"],
      assurDateCtl: json["assurDateCtl"],
      assurUser: json["assurUser"]
    };
  }

  simpleInsert = (key: string, value: any): void => {
    let state = this.getState();
    state.value = { ...state.value, ...{ [key]: value } };
    console.log(state.value)
  };
}

const acAssuranceProvider = new AcAssuranceStateProvider("/assurance", {})
export default acAssuranceProvider
