import { AcZone } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcZoneStateProvider extends ICrudStateProvider<AcZone> {
    mapDataToJson(data: AcZone): {} {
        return {
          zoneCode: data["id"],
          zoneLib: data["libelle"],
          zoneDescript: data["description"]
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
