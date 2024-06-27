import { AcTypeFrai } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypeFraiStateProvider extends ICrudStateProvider<AcTypeFrai> {
    mapEntitieFrom(json: any): AcTypeFrai {
        return {
            id: json["typfraisCode"],
            code: json["typfraisCode"],
            libelle: json["typfraisLib"],
        };
    }
}

const acTypeFraiProvider = new AcTypeFraiStateProvider("/type-frai");
export default acTypeFraiProvider;
