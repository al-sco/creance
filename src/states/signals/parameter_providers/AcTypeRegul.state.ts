import { signal } from "@preact/signals-core";
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";

export const typeRegulList: Signal<AcTypeRegul[]> = signal([]);

export class AcTypeRegulStateFuncs {
    static fetchTypeRegul = async (): Promise<AcTypeRegul[]> => {
        let { data, status } = await axios.get(getUrl('/type-regul'));
        if (status === 200) {
            typeRegulList.value = data.map((e: any) => ({
                id: e["regulTypeCode"],
                code: e["regulTypeCode"],
                libelle: e["regulTypeLib"]
            }));
        }
        return typeRegulList.value;
    }
}
