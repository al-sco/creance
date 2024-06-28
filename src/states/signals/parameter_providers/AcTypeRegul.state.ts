import { AcTypeRegul } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcTypeRegulStateProvider extends ICrudStateProvider<AcTypeRegul> {
    mapDataToJson(data: AcTypeRegul): {} {
        return {
          contSolTypeCode: data["id"],
          contSolTypeLib: data["libelle"]
        }
    }
    
    mapEntitieFrom(json: any): AcTypeRegul {
        return {
            id: json["contSolTypeCode"],
            code: json["contSolTypeCode"],
            libelle: json["contSolTypeLib"]
        }
    }
}

const acTypeRegulProvider = new AcTypeRegulStateProvider('/type-regul');
export default acTypeRegulProvider;
