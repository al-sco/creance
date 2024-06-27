import { signal } from "@preact/signals-core";
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";

export const groupeCreanceList: Signal<AcGroupeCreance[]> = signal([]);

export class AcGroupeCreanceStateFuncs {
    static fetchGroupeCreances = async (): Promise<AcGroupeCreance[]> => {
        let { data, status } = await axios.get(getUrl('/groupe-creance'));
        if (status == 200) {
            groupeCreanceList.value = data.map((e: any) => ({
                id: e["grpCreanCode"],
                code: e["grpCreanCode"],
                libelle: e["grpCreanLib"],
                libelleLong: e["grpCreanLibLong"]
            }));
        }
        return groupeCreanceList.value;
    }
}
