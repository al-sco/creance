import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const paiementList:Signal<ModePaiement[]>=signal([])



export class AcModePaiementStateFuncs{
    static fetchPaimentModes=async():Promise<ModePaiement[]>=>{
        let {data,status}=await axios.get(getUrl('/mode-paiement'))
        if(status==200){
            paiementList.value=data.map((e:any)=>({
                id:e["modePaieCode"],
                code:e["modePaieCode"],
                libelle:e["modePaieLib"],
                
            }))
        }
        return paiementList.value
    }


}


