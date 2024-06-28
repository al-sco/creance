import { AcZone } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcZoneStateProvider extends ICrudStateProvider<AcZone> {
    mapDataToJson(data: AcZone): {} {
        return {
            id: data["id"],
            code: data["code"],
            libelle: data["libelle"],
            description: data["description"]
        }
    }
    
    mapEntitieFrom(json: any): AcZone {
        return {
            id: json["zoneCode"],
            code: json["zoneCode"],
            libelle: json["zoneLib"],
            description: json["zoneDescript"]
        }
    }
}

const acZoneProvider = new AcZoneStateProvider('/zone');
export default acZoneProvider;
