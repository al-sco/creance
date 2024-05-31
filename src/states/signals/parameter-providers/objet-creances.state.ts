import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const creancesList:Signal<ObjetCreances[]>=signal([])



export class ObjetCreancesStateFuncs{
    static fetchBanks=async():Promise<ObjetCreances[]>=>{
        let {data,status}=await axios.get(getUrl('/objet_creances'))
        if(status==200){
            creancesList.value=data.map((e:any)=>({
                id:e["id"],
                code:e["code"],
                libelle:e["libelle"],
                
            }))
        }
        return creancesList.value
    }


}


