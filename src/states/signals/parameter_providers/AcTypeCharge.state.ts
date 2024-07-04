import { AcTypeCharge } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcTypeChargeStateProvider extends ICrudStateProvider<AcTypeCharge> {
    mapDataToJson(data: AcTypeCharge): {} {
        return {
            typchargCode: data["id"],
            typchargLib: data["libelle"],
            typchargSens: data["sens"]
        };
    }
    
    mapEntitieFrom(json: any): AcTypeCharge {
        return {
            id: json["typchargCode"],
            code: json["typchargCode"],
            libelle: json["typchargLib"],
            sens: json["typchargSens"]
        };
    }
}

const acTypeChargeProvider = new AcTypeChargeStateProvider('/type-charge');
export default acTypeChargeProvider;
