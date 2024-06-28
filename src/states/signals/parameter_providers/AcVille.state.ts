import { AcVille } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcVilleStateProvider extends ICrudStateProvider<AcVille> {
    mapDataToJson(data: AcVille): {} {
        return {
          villeCode: data["id"],
          villeLib: data["libelle"]
        }
    }
    
    mapEntitieFrom(json: any): AcVille {
        return {
            id: json["villeCode"],
            code: json["villeCode"],
            libelle: json["villeLib"]
        }
    }
}

const acVilleProvider = new AcVilleStateProvider('/ville');
export default acVilleProvider;
