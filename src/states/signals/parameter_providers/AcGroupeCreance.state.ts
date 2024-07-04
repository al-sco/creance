import { AcGroupeCreance } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcGroupeCreanceStateProvider extends ICrudStateProvider<AcGroupeCreance> {
    mapDataToJson(data: AcGroupeCreance): {} {
        return {
          grpCreanCode: data["id"],
            grpCreanLib: data["libelle"],
            grpCreanLibLong: data["libelleLong"],
            entiteCode:data["entiteCode"]
        };
    }
    
    mapEntitieFrom(json: any): AcGroupeCreance {
        return {
            id: json["grpCreanCode"],
            code: json["grpCreanCode"],
            libelle: json["grpCreanLib"],
            libelleLong: json["grpCreanLibLong"],
            entiteCode:json["entiteCode"]
        };
    }
}

const acGroupeCreanceProvider = new AcGroupeCreanceStateProvider('/groupe-creance');
export default acGroupeCreanceProvider;
