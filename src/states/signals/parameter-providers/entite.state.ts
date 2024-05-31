import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const entiteList:Signal<Entite[]>=signal([])



export class EntityStateFuncs{
    static fetchBanks=async():Promise<Entite[]>=>{
        let {data,status}=await axios.get(getUrl('/entite'))
        if(status==200){
            entiteList.value=data.map((e:any)=>({
                id:e["id"],
                code:e["code"],
                libelle:e["libelle"],
                libelleLong:e["libelleLong"],
                responsable:e["responsable"]
            }))
        }
        return entiteList.value
    }


}


