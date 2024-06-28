import { AcTypeContrat } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcTypeContratStateProvider extends ICrudStateProvider<AcTypeContrat> {
    mapDataToJson(data: AcTypeContrat): {} {
        return {
            typcontCode: data["id"],
            typcontLib: data["libelle"],
        }
    }
    
    mapEntitieFrom(json: any): AcTypeContrat {
        return {
            id: json["typcontCode"],
            code: json["typcontCode"],
            libelle: json["typcontLib"],
        }
    }
}

const acTypeContratProvider = new AcTypeContratStateProvider('/type-contrat');
export default acTypeContratProvider;
