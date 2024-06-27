import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";

export const posteComptableList: Signal<PosteComptable[]> = signal([]);

export class PosteComptableStateFuncs {
    static  fetchPosteComptable= async(): Promise<PosteComptable[]> =>{
        let { data, status } = await axios.get(getUrl('/postecomptable'));
        if (status == 200) {
            posteComptableList.value = data.map((e: any) => ({
                id: e["pcCode"],
                code: e["pcCode"],
                libelle: e["pcLib"]
            }));
        }
        return posteComptableList.value;
    }
}
