import { AcTypeOperation } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypeOperationStateProvider extends ICrudStateProvider<AcTypeOperation> {
    mapEntitieFrom(json: any): AcTypeOperation {
        return {
            id: json["typoperCode"],
            code: json["typoperCode"],
            libelle: json["typoperLib"],
            modePaie: json["modePaieCode"],
            typePaie: json["typaieCode"]
        };
    }
}

const acTypeOperationProvider = new AcTypeOperationStateProvider("/type-operation");
export default acTypeOperationProvider;
