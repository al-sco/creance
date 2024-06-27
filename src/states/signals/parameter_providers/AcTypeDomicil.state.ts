import { AcTypeDomicil } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypeDomicilStateProvider extends ICrudStateProvider<AcTypeDomicil> {
    mapEntitieFrom(json: any): AcTypeDomicil {
        return {
            id: json["typdomCode"],
            code: json["typdomCode"],
            libelle: json["typdomLib"],
        };
    }
}

const acTypeDomicilProvider = new AcTypeDomicilStateProvider("/type-domicil");
export default acTypeDomicilProvider;
