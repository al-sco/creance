import { AcTypeSaisie } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcTypeSaisieStateProvider extends ICrudStateProvider<AcTypeSaisie> {
    mapDataToJson(data: AcTypeSaisie): {} {
        return {
          typsaisCode: data["id"],
          typsaisLib: data["libelle"]
        }
    }
    
    mapEntitieFrom(json: any): AcTypeSaisie {
        return {
            id: json["typsaisCode"],
            code: json["typsaisCode"],
            libelle: json["typsaisLib"]
        }
    }
}

const acTypeSaisieProvider = new AcTypeSaisieStateProvider('/type-saisie');
export default acTypeSaisieProvider;
