import { signal } from "@preact/signals-core";
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";


export const paramGenerauxList: Signal<AcParam[]> = signal([]);

export class AcParamGenerauxStateFuncs {
 
    static fetchParamGeneraux = async (): Promise<AcParam[]> => {
        let { data, status } = await axios.get(getUrl('/param'));
        if (status === 200) {
            paramGenerauxList.value = data.map((e: any) => ({
                id: e["id"],
                code: e["id"],
                libelle: e["paramLib"],
                commentaire:e["paramComment"],
                valeur:e["paramValeur"]
            }));
        }
        return paramGenerauxList.value;
    }
}
