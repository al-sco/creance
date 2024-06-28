import { AcCptOperation } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcCptOperationStateProvider extends ICrudStateProvider<AcCptOperation> {
    mapDataToJson(data: AcCptOperation): {} {
        return {
            cptOpId: data["id"],
            cptOpCode: data["code"],
            cptOpLib: data["libelle"],
        };
    }
    
    mapEntitieFrom(json: any): AcCptOperation {
        return {
            id: json["cptOpId"],
            numero: json["cptOpCode"],
            codeBanqueAgence: json["cptOpLib"],
            codeGroupeCreance: json["cptOpDescription"]
        };
    }
}

const acCptOperationProvider = new AcCptOperationStateProvider('/cpt-operation');
export default acCptOperationProvider;
