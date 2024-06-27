import { AcTypePiece } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcTypePieceStateProvider extends ICrudStateProvider<AcTypePiece> {
    mapEntitieFrom(json: any): AcTypePiece {
      return {
        id: json["typePieceCode"],
        code: json["typePieceCode"],
        libelle: json["typePieceLib"],
      };
    }
  }
  
  const acTypePieceProvider = new AcTypePieceStateProvider("/type-piece");
  export default acTypePieceProvider;