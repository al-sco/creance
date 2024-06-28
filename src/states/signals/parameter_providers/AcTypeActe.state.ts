import { AcTypeActe } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcTypeActeStateProvider extends ICrudStateProvider<AcTypeActe> {
    mapDataToJson(data: AcTypeActe): {} {
        return {
            typacteCode: data["id"],
            typacteLib: data["libelle"],
            typacteDelai: data["delai"]

        };
    }
    
    mapEntitieFrom(json: any): AcTypeActe {
        return {
            id: json["typacteCode"],
            code: json["typeActeCode"],
            libelle: json["typacteLib"],
            delai: json["typacteDelai"]
        };
    }
}

const acTypeActeProvider = new AcTypeActeStateProvider('/type-acte');
export default acTypeActeProvider;
