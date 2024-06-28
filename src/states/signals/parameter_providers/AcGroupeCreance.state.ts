import { AcGroupeCreance } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcGroupeCreanceStateProvider extends ICrudStateProvider<AcGroupeCreance> {
    mapDataToJson(data: AcGroupeCreance): {} {
        return {
          grpCreanCode: data["id"],
            code: data["code"],
            grpCreanLib: data["libelle"],
            grpCreanLibLong: data["libelleLong"]
        };
    }
    
    mapEntitieFrom(json: any): AcGroupeCreance {
        return {
            id: json["grpCreanCode"],
            code: json["grpCreanCode"],
            libelle: json["grpCreanLib"],
            libelleLong: json["grpCreanLibLong"]
        };
    }
}

const acGroupeCreanceProvider = new AcGroupeCreanceStateProvider('/groupe-creance');
export default acGroupeCreanceProvider;
