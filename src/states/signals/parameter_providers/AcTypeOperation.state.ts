import { AcTypeOperation } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypeOperationStateProvider extends ICrudStateProvider<AcTypeOperation> {
    mapDataToJson(data: AcTypeOperation): {} {
        return {
            typoperCode: data["id"],
            typoperLib: data["libelle"],
            modePaieCode: data["modePaie"],
            typaieCode: data["typePaie"]
        };
    }
    
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

const acTypeOperationProvider = new AcTypeOperationStateProvider('/type-operation');
export default acTypeOperationProvider;
