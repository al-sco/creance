import { AcObjetCreance } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcObjetCreanceStateProvider extends ICrudStateProvider<AcObjetCreance> {
    mapDataToJson(data: AcObjetCreance): {} {
        return {
          objCreanCode: data["id"],
          objCreanLib: data["libelle"]
        };
    }
    
    mapEntitieFrom(json: any): AcObjetCreance {
        return {
            id: json["objCreanCode"],
            code: json["objCreanCode"],
            libelle: json["objCreanLib"]
        };
    }
}

const acObjetCreanceProvider = new AcObjetCreanceStateProvider('/objet-creance');
export default acObjetCreanceProvider;
