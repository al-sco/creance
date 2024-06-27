import { TMessage } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";


class AcMessagesStateProvider extends ICrudStateProvider<TMessage> {
  mapEntitieFrom(json: any): TMessage {
    return {
      id: json["id"],
      code: json["id"],
      libelle: json["libelleMessage"],
    };
  }
}

const acMessagesProvider = new AcMessagesStateProvider("/message");
export default acMessagesProvider;
