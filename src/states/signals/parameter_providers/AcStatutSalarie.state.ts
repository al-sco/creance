import { AcStatutSalarie } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcStatutSalarieStateProvider extends ICrudStateProvider<AcStatutSalarie> {
    mapDataToJson(data: AcStatutSalarie): {} {
        return {
            statsalCode: data["id"],
            statsalLib: data["libelle"]
        };
    }
    
    mapEntitieFrom(json: any): AcStatutSalarie {
        return {
            id: json["statsalCode"],
            code: json["statsalCode"],
            libelle: json["statsalLib"]
        };
    }
}

const acStatutSalarieProvider = new AcStatutSalarieStateProvider('/statut-salarie');
export default acStatutSalarieProvider;
