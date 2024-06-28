import { AcStatutCreance } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcStatutCreanceStateProvider extends ICrudStateProvider<AcStatutCreance> {
    mapDataToJson(data: AcStatutCreance): {} {
        return {
            statCode: data["id"],
            statLib: data["libelle"]
        };
    }
    
    mapEntitieFrom(json: any): AcStatutCreance {
        return {
            id: json["statCode"],
            code: json["statCode"],
            libelle: json["statLib"]
        };
    }
}

const acStatutCreanceProvider = new AcStatutCreanceStateProvider('/status-creance');
export default acStatutCreanceProvider;
