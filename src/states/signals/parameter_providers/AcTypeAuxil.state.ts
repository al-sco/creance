import { AcTypeAuxil } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcTypeAuxilStateProvider extends ICrudStateProvider<AcTypeAuxil> {
    mapDataToJson(data: AcTypeAuxil): {} {
        return {
            typauxiCode: data["id"],
            typauxiLib: data["libelle"]
        };
    }
    
    mapEntitieFrom(json: any): AcTypeAuxil {
        return {
            id: json["typauxiCode"],
            code: json["typauxiCode"],
            libelle: json["typauxiLib"]
        };
    }
}

const acTypeAuxilProvider = new AcTypeAuxilStateProvider('/type-auxil');
export default acTypeAuxilProvider;
