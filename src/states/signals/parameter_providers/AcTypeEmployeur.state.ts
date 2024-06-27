import { AcTypeEmployeur } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypeEmployeurStateProvider extends ICrudStateProvider<AcTypeEmployeur> {
    mapEntitieFrom(json: any): AcTypeEmployeur {
        return {
            id: json["typempCode"],
            code: json["typempCode"],
            libelle: json["typempLib"],
        };
    }
}

const acTypeEmployeurProvider = new AcTypeEmployeurStateProvider("/type-employeur");
export default acTypeEmployeurProvider;
