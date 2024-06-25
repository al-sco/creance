import { signal } from "@preact/signals-core";
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";

export const parametresGenerauxList: Signal<ParametresGeneraux[]> = signal([]);

export class ParamGenerauxService {
    static fetchParamGeneraux = async (): Promise<ParametresGeneraux[]> => {
        let { data, status } = await axios.get(getUrl('/param-generaux'));
        if (status === 200) {
            parametresGenerauxList.value = data.map((e: any) => ({
                id: e["paramId"],
                code: e["paramCode"],
                libelle: e["paramLib"]
            }));
        }
        return parametresGenerauxList.value;
    }
}
