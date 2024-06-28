import { AcTypeEcheancier } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcTypeEcheancierStateProvider extends ICrudStateProvider<AcTypeEcheancier> {
    mapDataToJson(data: AcTypeEcheancier): {} {
        return {
            typechCode: data["id"],
            typechLib: data["libelle"]
        };
    }
    
    mapEntitieFrom(json: any): AcTypeEcheancier {
        return {
            id: json["typechCode"],
            code: json["typechCode"],
            libelle: json["typechLib"]
        };
    }
}

const acTypeEcheancierProvider = new AcTypeEcheancierStateProvider('/type-echeancier');
export default acTypeEcheancierProvider;
