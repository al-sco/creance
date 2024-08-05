import axios from "axios";
import { AcPiece, Identifiable } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import { getUrl } from "../../../common/configs/api/api_configs";

export class AcPieceStateProvider extends ICrudStateProvider<AcPiece> {
  mapDataToJson(data: AcPiece): {} {
    let state = this.getState().value as any;
    let _data = {
      pieceCode: data.pieceCode,
      typePieceCode: state["typePieceCode"],
      creanCode: state["creanCode"],
      pieceLib: state["pieceLib"],
      pieceRef: state["pieceRef"],
      pieceDateRecept: state["pieceDateRecept"],
      pieceDateEmis: state["pieceDateEmis"]
    };

    console.log(_data);
    return _data;
  }

  findOne = async (id: string): Promise<void> => {
    let { data, status } = await axios.get(getUrl(`${this.basePath}/${id}`), {
      headers: {
        "ngrok-skip-browser-warning": true,
      },
    });
    console.log(data);
    if (status == 200) {
      this.getState().value = this.mapEntitieFrom(data);
    }
  };

  mapEntitieFrom(json: any): AcPiece {
    return {
      pieceCode: json["pieceCode"],
      typePieceCode: json["typePieceCode"],
      creanCode: json["creanCode"],
      pieceLib: json["pieceLib"],
      pieceRef: json["pieceRef"],
      pieceDateRecept: json["pieceDateRecept"],
      pieceDateEmis: json["pieceDateEmis"]
    };
  }

  simpleInsert = (key: string, value: any): void => {
    let state = this.getState();
    state.value = { ...state.value, ...{ [key]: value } };
    console.log(state.value);
  };
}

const acPieceProvider = new AcPieceStateProvider("/piece", {});
export default acPieceProvider;
