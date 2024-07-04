import { AcTypeRegul } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcTypeRegulStateProvider extends ICrudStateProvider<AcTypeRegul> {
    mapDataToJson(data: AcTypeRegul): {} {
        return {
            regulTypeCode: data["id"],
          regulTypeLib: data["libelle"]
        }
    }
    
    mapEntitieFrom(json: any): AcTypeRegul {
        return {
            id: json["regulTypeCode"],
            code: json["regulTypeCode"],
            libelle: json["regulTypeLib"]
        }
    }
}

const acTypeRegulProvider = new AcTypeRegulStateProvider('/type-regul');
export default acTypeRegulProvider;
