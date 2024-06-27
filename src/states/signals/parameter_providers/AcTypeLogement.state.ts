import { AcTypeLogement } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypeLogementStateProvider extends ICrudStateProvider<AcTypeLogement> {
    mapEntitieFrom(json: any): AcTypeLogement {
        return {
            id: json["typeLogeCode"],
            code: json["typeLogeCode"],
            libelle: json["typeLogeLib"],
        };
    }
}

const acTypeLogementProvider = new AcTypeLogementStateProvider("/type-logement");
export default acTypeLogementProvider;
