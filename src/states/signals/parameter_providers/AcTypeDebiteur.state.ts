import { AcTypeDebiteur } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcTypeDebiteurStateProvider extends ICrudStateProvider<AcTypeDebiteur> {
    mapDataToJson(data: AcTypeDebiteur): {} {
        return {
            typdebCode: data["id"],
            typdebLib: data["libelle"],
        }
    }
    
    mapEntitieFrom(json: any): AcTypeDebiteur {
        return {
            id: json["typdebCode"],
            code: json["typdebCode"],
            libelle: json["typdebLib"],
        }
    }
}

const acTypeDebiteurProvider = new AcTypeDebiteurStateProvider('/type-debiteur');
export default acTypeDebiteurProvider;
