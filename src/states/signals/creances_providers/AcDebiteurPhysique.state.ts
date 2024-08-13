import axios from "axios";
import { AcDebiteurPhysique } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import { getUrl } from "../../../common/configs/api/api_configs";




export class AcDebiteurPhysiqueStateProvider extends ICrudStateProvider<AcDebiteurPhysique> {
  mapDataToJson(data: AcDebiteurPhysique): {} {
    let state = this.getState().value as any
    let _data = {
      debCode: data.debiteurCode,
      quartCode: state["quartCode"],
      profesCode: state["profesCode"],
      natCode: state["natCode"],
      empCode: state["empCode"],
      statsalCode: state["statsalCode"],
      fonctCode: state["fonctCode"],
      debNom: state["debNom"],
      debPren: state["debPren"],
      debDatnaiss: state["debDatnaiss"],
      debLieunaiss: state["debLieunaiss"],
      debDatdec: state["debDatdec"],
      debTeldom: state["debTeldom"],
      debNatpident: state["debNatpident"],
      debNumpident: state["debNumpident"],
      debDatetpident: state["debDatetpident"],
      debLieuetpident: state["debLieuetpident"],
      debSitmatri: state["debSitmatri"],
      debRue: state["debRue"],
      debNmere: state["debNmere"],
      debPrmere: state["debPrmere"],
      debNpere: state["debNpere"],
      debPrpere: state["debPrpere"],
      debNbrEnf: state["debNbrEnf"],
      debSexe: state["debSexe"],
      debMatric: state["debMatric"],
      civCode: state["civCode"],
      debCjNom: state["debCjNom"],
      debCjPren: state["debCjPren"],
      debCjDatnaiss: state["debCjDatnaiss"],
      debCjTel: state["debCjTel"],
      debCjAdr: state["debCjAdr"],
      debCjNumpident: state["debCjNumpident"],
      debDateCtl: state["debDateCtl"],
      debEmployeur: state["debEmployeur"],
      debCodeAnc: state["debCodeAnc"],
      ancCiv: state["ancCiv"],
      debDatcreat: state["debDatcreat"],
      ancNat: state["ancNat"],
      debCodeCharg: state["debCodeCharg"],
      debAncDatnaiss: state["debAncDatnaiss"],
      debAncSituat: state["debAncSituat"],
      debFonction: state["debFonction"],
      regmatCode: state["regmatCode"]
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



  mapEntitieFrom(json: any): AcDebiteurPhysique {
    return {
      id: json["id"],
      debiteurCode: json["debCode"],
      quartCode: json["quartCode"],
      profesCode: json["profesCode"],
      natCode: json["natCode"],
      empCode: json["empCode"],
      statsalCode: json["statsalCode"],
      fonctCode: json["fonctCode"],
      debNom: json["debNom"],
      debPren: json["debPren"],
      debDatnaiss: json["debDatnaiss"],
      debLieunaiss: json["debLieunaiss"],
      debDatdec: json["debDatdec"],
      debTeldom: json["debTeldom"],
      debNatpident: json["debNatpident"],
      debNumpident: json["debNumpident"],
      debDatetpident: json["debDatetpident"],
      debLieuetpident: json["debLieuetpident"],
      debSitmatri: json["debSitmatri"],
      debRue: json["debRue"],
      debNmere: json["debNmere"],
      debPrmere: json["debPrmere"],
      debNpere: json["debNpere"],
      debPrpere: json["debPrpere"],
      debNbrEnf: json["debNbrEnf"],
      debSexe: json["debSexe"],
      debMatric: json["debMatric"],
      civCode: json["civCode"],
      debCjNom: json["debCjNom"],
      debCjPren: json["debCjPren"],
      debCjDatnaiss: json["debCjDatnaiss"],
      debCjTel: json["debCjTel"],
      debCjAdr: json["debCjAdr"],
      debCjNumpident: json["debCjNumpident"],
      debDateCtl: json["debDateCtl"],
      debEmployeur: json["debEmployeur"],
      debCodeAnc: json["debCodeAnc"],
      ancCiv: json["ancCiv"],
      debDatcreat: json["debDatcreat"],
      ancNat: json["ancNat"],
      debCodeCharg: json["debCodeCharg"],
      debAncDatnaiss: json["debAncDatnaiss"],
      debAncSituat: json["debAncSituat"],
      debFonction: json["debFonction"],
      regmatCode: json["regmatCode"]
    };
  }

  simpleInsert = (key: string, value: any): void => {
    let state = this.getState();
    state.value = { ...state.value, ...{ [key]: value } };
    console.log(state.value)
  };
}

const acDebiteurPhysiqueProvider = new AcDebiteurPhysiqueStateProvider("/debiteur-physique", {})
export default acDebiteurPhysiqueProvider