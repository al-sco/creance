import { AcPosteComptable } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcPosteComptableStateProvider extends ICrudStateProvider<AcPosteComptable> {
    mapDataToJson(data: AcPosteComptable): {} {
        return {
          periodCode: data["id"],
            pcLib: data["libelle"],
        };
    }
    
    mapEntitieFrom(json: any): AcPosteComptable {
        return {
            id: json["pcCode"],
            code: json["pcCode"],
            libelle: json["pcLib"],
        };
    }
}

const acPosteComptableProvider = new AcPosteComptableStateProvider('/postecomptable');
export default acPosteComptableProvider;
