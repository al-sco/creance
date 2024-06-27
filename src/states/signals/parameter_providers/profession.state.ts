import { signal } from "@preact/signals-core";
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";

export const professionList: Signal<Profession[]> = signal([]);

export class ProfessionStateFuncs {
    static fetchProfessions = async (): Promise<Profession[]> => {
        let { data, status } = await axios.get(getUrl('/profession'));
        if (status == 200) {
            professionList.value = data.map((e: any) => ({
                id: e["profesCode"],
                code: e["profesCode"],
                libelle: e["profesLib"],
            }));
        }
        return professionList.value;
    }
}
