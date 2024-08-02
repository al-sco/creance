import axios from "axios";
import { AcDebiteurPhysique } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import { getUrl } from "../../../common/configs/api/api_configs";




 export class AcDebiteurPhysiqueStateProvider extends ICrudStateProvider<AcDebiteurPhysique> {
    mapDataToJson(data: AcDebiteurPhysique): {} {
      let state=this.getState().value as any
        return {
          id: data["id"],
          quartCode: data["quartCode"],
          profesCode: data["profesCode"],
          natCode: data["natCode"],
          empCode: data["empCode"],
          statsalCode: data["statsalCode"],
          fonctCode: data["fonctCode"],
          debNom: data["debNom"],
          debPren: data["debPren"],
          debDatnaiss: data["debDatnaiss"],
          debLieunaiss: data["debLieunaiss"],
          debDatdec: data["debDatdec"],
          debTeldom: data["debTeldom"],
          debNatpident: data["debNatpident"],
          debNumpident: data["debNumpident"],
          debDatetpident: data["debDatetpident"],
          debLieuetpident: data["debLieuetpident"],
          debSitmatri: data["debSitmatri"],
          debRue: data["debRue"],
          debNmere: data["debNmere"],
          debPrmere: data["debPrmere"],
          debNpere: data["debNpere"],
          debPrpere: data["debPrpere"],
          debNbrEnf: data["debNbrEnf"],
          debSexe: data["debSexe"],
          debMatric: data["debMatric"],
          civCode: data["civCode"],
          debCjNom: data["debCjNom"],
          debCjPren: data["debCjPren"],
          debCjDatnaiss: data["debCjDatnaiss"],
          debCjTel: data["debCjTel"],
          debCjAdr: data["debCjAdr"],
          debCjNumpident: data["debCjNumpident"],
          debDateCtl: data["debDateCtl"],
          debEmployeur: data["debEmployeur"],
          debCodeAnc: data["debCodeAnc"],
          ancCiv: data["ancCiv"],
          debDatcreat: data["debDatcreat"],
          ancNat: data["ancNat"],
          debCodeCharg: data["debCodeCharg"],
          debAncDatnaiss: data["debAncDatnaiss"],
          debAncSituat: data["debAncSituat"],
          debFonction: data["debFonction"],
          regmatCode: data["regmatCode"]
        };
      }


      findOne = async (id:number): Promise<void> => {
        let { data, status } = await axios.get(getUrl(`${this.basePath}/${id}`), {
          headers: {
            "ngrok-skip-browser-warning": true,
          },
        });
        console.log(data)
        if (status == 200) {
          this.getState().value=this.mapEntitieFrom(data)
        }
      };
    
      
    
      mapEntitieFrom(json: any): AcDebiteurPhysique {
        return {
          id: json["id"],
          debiteurCode:json["debCode"],
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

const acDebiteurPhysiqueProvider= new AcDebiteurPhysiqueStateProvider("/debiteur-physique", {})
export default acDebiteurPhysiqueProvider