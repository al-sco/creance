import { AcTypeOvp } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypeOvpStateProvider extends ICrudStateProvider<AcTypeOvp> {
    mapEntitieFrom(json: any): AcTypeOvp {
        return {
            id: json["typovpCode"],
            code: json["typovpCode"],
            libelle: json["typovpLib"],
        };
    }
}

const acTypeOVPProvider = new AcTypeOvpStateProvider("/type-ovp");
export default acTypeOVPProvider;
