import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const entiteList:Signal<Entite[]>=signal([])



export class AcEntityStateFuncs{
    static fetchEntities=async():Promise<Entite[]>=>{
        let {data,status}=await axios.get(getUrl('/entite'))
        if(status==200){
            entiteList.value=data.map((e:any)=>({
                id:e["entiteCode"],
                code:e["entiteCode"],
                libelle:e["entiteLib"],
                libelleLong:e["entiteLibLong"],
                responsable:e["entiteResp"],
                entiteAssign:e["entiteAssign"]
            }))
        }
        return entiteList.value
    }


}


