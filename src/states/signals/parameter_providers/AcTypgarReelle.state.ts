import { AcTypgarReelle } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypgarReelleStateProvider extends ICrudStateProvider<AcTypgarReelle> {
    mapEntitieFrom(json: any): AcTypgarReelle {
        return {
            id: json["typgarReelCode"],
            code: json["typgarReelCode"],
            libelle: json["typgarReelLib"],
        };
    }
}

const acTypgarReelleProvider = new AcTypgarReelleStateProvider('typgar-reelle');
export default acTypgarReelleProvider;
