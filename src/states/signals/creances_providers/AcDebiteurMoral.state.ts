import axios from "axios";
import { AcDebiteurMoral } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import { getUrl } from "../../../common/configs/api/api_configs";




export class AcDebiteurMoralStateProvider extends ICrudStateProvider<AcDebiteurMoral> {
    mapDataToJson(parentProviderData: AcDebiteurMoral): {} {
      console.log(parentProviderData)
    let state = this.getState().value as any;
        return {
          id: state['id'],
          debCode:  parentProviderData.debCode,
          debRaisSociale: state["debRaisSociale"],
          debRegistcom: state["debRegistcom"],
          debDatcreat: state["debDatcreat"],
          debCapitsocial: state["debCapitsocial"],
          debFormJurid: state["debFormJurid"],
          debDomActiv: state["debDomActiv"],
          debSiegSocial: state["debSiegSocial"],
          debNomGerant: state["debNomGerant"],
          ancCiv: state["ancCiv"],
          debCodeCharg: state["debCodeCharg"],
          debCpteContrib: state["debCpteContrib"],
          civGerant: state["civGerant"]
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
    
      mapEntitieFrom(json: any): AcDebiteurMoral {
        return { 
          id:json['debCode'],
          debCode: json["debCode"],
          debRaisSociale: json["debRaisSociale"],
          debRegistcom: json["debRegistcom"],
          debDatcreat: json["debDatcreat"],
          debCapitsocial: json["debCapitsocial"],
          debFormJurid: json["debFormJurid"],
          debDomActiv: json["debDomActiv"],
          debSiegSocial: json["debSiegSocial"],
          debNomGerant: json["debNomGerant"],
          ancCiv: json["ancCiv"],
          debCodeCharg: json["debCodeCharg"],
          debCpteContrib: json["debCpteContrib"],
          civGerant: json["civGerant"]
        };
      } 


    simpleInsert = (key: string, value: any): void => {
        let state = this.getState();
        state.value = { ...state.value, ...{ [key]: value } };
        console.log(state.value)
      };
    
}      

const acDebiteurMoralProvider = new AcDebiteurMoralStateProvider("/debiteur-moral", {});
export default acDebiteurMoralProvider;