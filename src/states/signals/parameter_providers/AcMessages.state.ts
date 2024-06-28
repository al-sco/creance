import { TMessage } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcMessageStateProvider extends ICrudStateProvider<TMessage> {
    mapDataToJson(data: TMessage): {} {
        return {
            id: data["id"],
            libelleMessage: data["libelle"]
        };
    }
    
    mapEntitieFrom(json: any): TMessage {
        return {
            id: json["id"],
            code: json["id"],
            libelle: json["libelleMessage"]
        };
    }
}

const acMessageProvider = new AcMessageStateProvider('/message');
export default acMessageProvider;
