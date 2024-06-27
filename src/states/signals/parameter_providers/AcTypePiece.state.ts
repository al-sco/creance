import { signal } from "@preact/signals-core";
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";

export const typePieceList: Signal<AcTypePiece[]> = signal([]);

export class AcTypePieceStateFuncs {
    static fetchTypePiece = async (): Promise<AcTypePiece[]> => {
        let { data, status } = await axios.get(getUrl('/type-piece'));
        if (status === 200) {
            typePieceList.value = data.map((e: any) => ({
                id: e["typePieceCode"],
                code: e["typePieceCode"],
                libelle: e["typePieceLib"]
            }));
        }
        return typePieceList.value;
    }
}
