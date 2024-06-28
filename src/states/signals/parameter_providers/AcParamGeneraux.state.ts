import { AcParam } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcParamStateProvider extends ICrudStateProvider<AcParam> {
    mapDataToJson(data: AcParam): {} {
        return {
          id: data["id"],
            paramCode: data["code"],
            paramLib: data["libelle"],
            paramValeur: data["valeur"],
            paramComment:data["commentaire"]
        };
    }
    
    mapEntitieFrom(json: any): AcParam {
        return {
            id: json["id"],
            code: json["id"],
            libelle: json["paramLib"],
            valeur: json["paramValeur"],
            commentaire:json["paramComment"]
        };
    }
}

const acParamProvider = new AcParamStateProvider('/param');
export default acParamProvider;
