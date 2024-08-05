import axios from "axios";
import { AcGarantiePhy, Identifiable } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import { getUrl } from "../../../common/configs/api/api_configs";

export class AcGarantiePhyStateProvider extends ICrudStateProvider<AcGarantiePhy> {
  mapDataToJson(data: AcGarantiePhy): {} {
    let state = this.getState().value as any;
    let _data = {
      id: data.id,
      profesCode: state["profesCode"],
      typgarPhysCode: state["typgarPhysCode"],
      empCode: state["empCode"],
      statsalCode: state["statsalCode"],
      quartCode: state["quartCode"],
      fonctCode: state["fonctCode"],
      debCode: state["debCode"],
      garphysNom: state["garphysNom"],
      garphysPren: state["garphysPren"],
      garphysDatnaiss: state["garphysDatnaiss"],
      garphysLieunaiss: state["garphysLieunaiss"],
      garphysDatdec: state["garphysDatdec"],
      garphysAdrpost: state["garphysAdrpost"],
      garphysSalbrut: state["garphysSalbrut"],
      garphysTeldom: state["garphysTeldom"],
      garphysCel: state["garphysCel"],
      garphysEmail: state["garphysEmail"],
      garphysRue: state["garphysRue"],
      garphysTelbur: state["garphysTelbur"],
      garphysSitmat: state["garphysSitmat"],
      garphysSexe: state["garphysSexe"],
      garphysSalNet: state["garphysSalNet"],
      garphysDatRetr: state["garphysDatRetr"],
      garphysMatric: state["garphysMatric"],
      garphysNompere: state["garphysNompere"],
      garphysNommere: state["garphysNommere"],
      garphysNatpident: state["garphysNatpident"],
      garphysNumpident: state["garphysNumpident"],
      garphysLieuetab: state["garphysLieuetab"],
      garphysDatevalidit: state["garphysDatevalidit"],
      garphysDatetablt: state["garphysDatetablt"],
      garphysDateCtl: state["garphysDateCtl"],
      garphysCharg: state["garphysCharg"],
      indic: state["indic"],
      natCode: state["natCode"],
      civCode: state["civCode"],
      garphysCodeUser: state["garphysCodeUser"]
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

  mapEntitieFrom(json: any): AcGarantiePhy {
    return {
      id: json["id"],
      profesCode: json["profesCode"],
      typgarPhysCode: json["typgarPhysCode"],
      empCode: json["empCode"],
      statsalCode: json["statsalCode"],
      quartCode: json["quartCode"],
      fonctCode: json["fonctCode"],
      debCode: json["debCode"],
      garphysNom: json["garphysNom"],
      garphysPren: json["garphysPren"],
      garphysDatnaiss: json["garphysDatnaiss"],
      garphysLieunaiss: json["garphysLieunaiss"],
      garphysDatdec: json["garphysDatdec"],
      garphysAdrpost: json["garphysAdrpost"],
      garphysSalbrut: json["garphysSalbrut"],
      garphysTeldom: json["garphysTeldom"],
      garphysCel: json["garphysCel"],
      garphysEmail: json["garphysEmail"],
      garphysRue: json["garphysRue"],
      garphysTelbur: json["garphysTelbur"],
      garphysSitmat: json["garphysSitmat"],
      garphysSexe: json["garphysSexe"],
      garphysSalNet: json["garphysSalNet"],
      garphysDatRetr: json["garphysDatRetr"],
      garphysMatric: json["garphysMatric"],
      garphysNompere: json["garphysNompere"],
      garphysNommere: json["garphysNommere"],
      garphysNatpident: json["garphysNatpident"],
      garphysNumpident: json["garphysNumpident"],
      garphysLieuetab: json["garphysLieuetab"],
      garphysDatevalidit: json["garphysDatevalidit"],
      garphysDatetablt: json["garphysDatetablt"],
      garphysDateCtl: json["garphysDateCtl"],
      garphysCharg: json["garphysCharg"],
      indic: json["indic"],
      natCode: json["natCode"],
      civCode: json["civCode"],
      garphysCodeUser: json["garphysCodeUser"]
    };
  }

  simpleInsert = (key: string, value: any): void => {
    let state = this.getState();
    state.value = { ...state.value, ...{ [key]: value } };
    console.log(state.value);
  };
}

const acGarantiePhyProvider = new AcGarantiePhyStateProvider("/garantie-phy", {});
export default acGarantiePhyProvider;
