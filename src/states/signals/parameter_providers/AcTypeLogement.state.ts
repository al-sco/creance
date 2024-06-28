import { AcTypeLogement } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcTypeLogementStateProvider extends ICrudStateProvider<AcTypeLogement> {
    mapDataToJson(data: AcTypeLogement): {} {
        return {
            typeLogeCode: data["id"],
            typeLogeLib: data["libelle"]
            
        }
    }
    
    mapEntitieFrom(json: any): AcTypeLogement {
        return {
            id: json["typeLogeCode"],
            code: json["typeLogeCode"],
            libelle: json["typeLogeLib"],
            
        }
    }
}

const acTypeLogementProvider = new AcTypeLogementStateProvider('/type-logement');
export default acTypeLogementProvider;
