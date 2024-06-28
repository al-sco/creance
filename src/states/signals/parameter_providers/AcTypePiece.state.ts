import { AcTypePiece } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcTypePieceStateProvider extends ICrudStateProvider<AcTypePiece> {
    mapDataToJson(data: AcTypePiece): {} {
        return {
          id: data["id"],
          clasCode: data["code"],
          clasLib: data["libelle"]
        }
    }
    
    mapEntitieFrom(json: any): AcTypePiece {
        return {
            id: json["id"],
            code: json["typePieceCode"],
            libelle: json["typePieceLib"]
        }
    }
}

const acTypePieceProvider = new AcTypePieceStateProvider('/type-piece');
export default acTypePieceProvider;
