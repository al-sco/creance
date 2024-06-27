import { AcZone } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcZoneStateProvider extends ICrudStateProvider<AcZone> {
    mapEntitieFrom(json: any): AcZone {
        return {
            id: json["zoneCode"],
            code: json["zoneCode"],
            libelle: json["zoneLib"],
            description: json["zoneDescript"]
        };
    }
}

const acZoneProvider = new AcZoneStateProvider("/zone");
export default acZoneProvider;
