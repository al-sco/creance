import { AcTypeDomicil } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcTypeDomicilStateProvider extends ICrudStateProvider<AcTypeDomicil> {
    mapDataToJson(data: AcTypeDomicil): {} {
        return {
            typdomCode: data["id"],
            typeDomicilCode: data["code"],
            typdomLib: data["libelle"],
        }
    }
    
    mapEntitieFrom(json: any): AcTypeDomicil {
        return {
            id: json["typdomCode"],
            code: json["typdomCode"],
            libelle: json["typdomLib"],
        }
    }
}

const acTypeDomicilProvider = new AcTypeDomicilStateProvider('/type-domicil');
export default acTypeDomicilProvider;
