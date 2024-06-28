import { AcEtape } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcEtapeStateProvider extends ICrudStateProvider<AcEtape> {
    mapDataToJson(data: AcEtape): {} {
        return {
          etapCode: data["id"],
          etapLib: data["libelle"],
        };
    }
    
    mapEntitieFrom(json: any): AcEtape {
        return {
            id: json["etapCode"],
            code: json["etapCode"],
            libelle: json["etapLib"],
        };
    }
}

const acEtapeProvider = new AcEtapeStateProvider('/etape');
export default acEtapeProvider;
