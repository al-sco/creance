import { AcCivilite } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcCiviliteStateProvider extends ICrudStateProvider<AcCivilite> {
    mapDataToJson(data: AcCivilite): {} {
        return {
          civCode: data["id"],
          civLib: data["libelle"]
        };
    }
    
    mapEntitieFrom(json: any): AcCivilite {
        return {
            id: json["civCode"],
            code: json["civCode"],
            libelle: json["civLib"]
        };
    }
}

const acCiviliteProvider = new AcCiviliteStateProvider('/civilite');
export default acCiviliteProvider;
