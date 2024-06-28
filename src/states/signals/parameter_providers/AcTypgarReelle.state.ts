import { AcTypgarReelle } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcTypgarReelleStateProvider extends ICrudStateProvider<AcTypgarReelle> {
    mapDataToJson(data: AcTypgarReelle): {} {
        return {
            regulTypeCode: data["id"],
          regulTypeLib: data["libelle"]
        }
    }
    
    mapEntitieFrom(json: any): AcTypgarReelle {
        return {
            id: json["regulTypeCode"],
            code: json["regulTypeCode"],
            libelle: json["regulTypeLib"]
        }
    }
}

const acTypgarReelleProvider = new AcTypgarReelleStateProvider('/typgar-reelle');
export default acTypgarReelleProvider;
