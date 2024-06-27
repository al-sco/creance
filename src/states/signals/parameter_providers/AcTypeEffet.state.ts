import { AcTypeEffet } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypeEffetStateProvider extends ICrudStateProvider<AcTypeEffet> {
    mapEntitieFrom(json: any): AcTypeEffet {
        return {
            id: json["typeftCode"],
            code: json["typeftCode"],
            libelle: json["typeftLib"],
        };
    }
}

const acTypeEffetProvider = new AcTypeEffetStateProvider("/type-effet");
export default acTypeEffetProvider;
