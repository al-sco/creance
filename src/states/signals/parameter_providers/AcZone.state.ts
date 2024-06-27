import { signal } from "@preact/signals-core";
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";

export const zoneList: Signal<Zone[]> = signal([]);

export class AcZoneStateFuncs {
    static fetchZones = async (): Promise<Zone[]> => {
        let { data, status } = await axios.get(getUrl('/zone'));
        if (status === 200) {
            zoneList.value = data.map((e: any) => ({
                id: e["zoneId"],
                code: e["zoneCode"],
                libelle: e["zoneLib"]
            }));
        }
        return zoneList.value;
    }
}
