import { signal } from "@preact/signals-core";
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";

export const villeList: Signal<Ville[]> = signal([]);

export class AcVilleStateFuncs {
    static fetchVilles = async (): Promise<Ville[]> => {
        let { data, status } = await axios.get(getUrl('/ville'));
        if (status === 200) {
            villeList.value = data.map((e: any) => ({
                id: e["villeId"],
                code: e["villeCode"],
                libelle: e["villeLib"]
            }));
        }
        return villeList.value;
    }
}
