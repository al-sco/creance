import { AcClasse } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcClasseStateProvider extends ICrudStateProvider<AcClasse> {
    mapDataToJson(data: AcClasse): {} {
        return {
            clasCode: data["id"],
            clasLib: data["libelle"]
        };
    }
    
    mapEntitieFrom(json: any): AcClasse {
        return {
            id: json["clasCode"],
            code: json["clasCode"],
            libelle: json["clasLib"]
        };
    }
}

const acClasseProvider = new AcClasseStateProvider('/classe');
export default acClasseProvider;
