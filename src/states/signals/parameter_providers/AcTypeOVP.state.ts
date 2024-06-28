import { AcTypeOvp } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypeOvpStateProvider extends ICrudStateProvider<AcTypeOvp> {
    mapDataToJson(data: AcTypeOvp): {} {
        return {
            typovpCode: data["id"],
            typovpLib: data["libelle"],
        };
    }
    
    mapEntitieFrom(json: any): AcTypeOvp {
        return {
            id: json["typovpCode"],
            code: json["typovpCode"],
            libelle: json["typovpLib"],
        };
    }
}

const acTypeOvpProvider = new AcTypeOvpStateProvider('/type-ovp');
export default acTypeOvpProvider;
