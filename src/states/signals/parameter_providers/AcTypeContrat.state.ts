import { AcTypeContrat } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypeContratStateProvider extends ICrudStateProvider<AcTypeContrat> {
    mapEntitieFrom(json: any): AcTypeContrat {
        return {
            id: json["typcontCode"],
            code: json["typcontCode"],
            libelle: json["typcontLib"],
        };
    }
}

const acTypeContratProvider = new AcTypeContratStateProvider("/type-contrat");
export default acTypeContratProvider;
