import { AcQuartier } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcQuartierStateProvider extends ICrudStateProvider<AcQuartier> {
    mapDataToJson(data: AcQuartier): {} {
        return {
            quartCode: data["id"],
            quartLib: data["libelle"],
            villeCode: data["ville"],
            zoneCode: data["zone"],
        };
    }
    
    mapEntitieFrom(json: any): AcQuartier {
        return {
            id: json["quartCode"],
            code: json["quartCode"],
            libelle: json["quartLib"],
            ville: json["villeCode"],
            zone: json["zoneCode"],
            
        };
    }
}

const acQuartierProvider = new AcQuartierStateProvider('/quartier');
export default acQuartierProvider;
