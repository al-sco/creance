import { AcTypeCpt } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcTypeCptStateProvider extends ICrudStateProvider<AcTypeCpt> {
    mapDataToJson(data: AcTypeCpt): {} {
        return {
            typcptCode: data["id"],
            typcptLib: data["libelle"]
        };
    }
    
    mapEntitieFrom(json: any): AcTypeCpt {
        return {
            id: json["typcptCode"],
            code: json["typcptCode"],
            libelle: json["typcptLib"]
        };
    }
}

const acTypeCptProvider = new AcTypeCptStateProvider('/type-cpt');
export default acTypeCptProvider;
