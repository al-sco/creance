import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const paiementList:Signal<ModePaiement[]>=signal([])



export class ModePaiementStateFuncs{
    static fetchBanks=async():Promise<ModePaiement[]>=>{
        let {data,status}=await axios.get(getUrl('/mode_paiement'))
        if(status==200){
            paiementList.value=data.map((e:any)=>({
                id:e["id"],
                code:e["code"],
                libelle:e["libelle"],
                
            }))
        }
        return paiementList.value
    }


}


