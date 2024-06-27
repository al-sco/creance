import { signal } from "@preact/signals-core";
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";

export const typeSaisieList: Signal<TypeSaisie[]> = signal([]);

export class AcTypeSaisieStateFuncs {
    static fetchTypeSaisie = async (): Promise<TypeSaisie[]> => {
        let { data, status } = await axios.get(getUrl('/type-saisie'));
        if (status === 200) {
            typeSaisieList.value = data.map((e: any) => ({
                id: e["typeSaisieId"],
                code: e["typeSaisieCode"],
                libelle: e["typeSaisieLib"]
            }));
        }
        return typeSaisieList.value;
    }
}
