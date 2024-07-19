import { AcCreance, AcDebiteurMoral, AcDebiteurPhysique } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";




class AcCreanceStateProvider extends ICrudStateProvider<AcDebiteurMoral> {
    mapDataToJson(data: AcDebiteurMoral): {} {
        return {
          id: data["id"],
          acDebiteur: data["debiteur"],
          debRaisSociale: data["debRaisSociale"],
          debRegistcom: data["debRegistcom"],
          debDatcreat: data["debDatcreat"],
          debCapitsocial: data["debCapitsocial"],
          debFormJurid: data["debFormJurid"],
          debDomActiv: data["debDomActiv"],
          debSiegSocial: data["debSiegSocial"],
          debNomGerant: data["debNomGerant"],
          ancCiv: data["ancCiv"],
          debCodeCharg: data["debCodeCharg"],
          debCpteContrib: data["debCpteContrib"],
          civGerant: data["civGerant"]
        };
      }
      
      
    
      mapEntitieFrom(json: any): AcDebiteurMoral {
        return {
          id: json["id"],
          debiteur: json["acDebiteur"],
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
      
}      