import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const bankList:Signal<AcBanque[]>=signal([])



export class AcBankStateFuncs{
    static fetchBanks=async():Promise<AcBanque[]>=>{
        let {data,status}=await axios.get(getUrl('/banque'))
        if(status==200){
            bankList.value=data.map((e:any)=>({
                id:e["id"],
                code:e["code"],
                libelle:e["libelle"],
                adresse:e["adresse"],
                responsabilite:e["responsabilite"]
            }))
        }
        return bankList.value
    }


}


