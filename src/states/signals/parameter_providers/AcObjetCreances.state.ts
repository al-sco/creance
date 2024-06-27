import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const creancesList:Signal<AcObjetCreance[]>=signal([])



export class AcObjetCreancesStateFuncs{
    static fetchCreancesObjects=async():Promise<AcObjetCreance[]>=>{
        let {data,status}=await axios.get(getUrl('/objet-creance'))
        if(status==200){
            creancesList.value=data.map((e:any)=>({
                id:e["objCreanCode"],
                code:e["objCreanCode"],
                libelle:e["objCreanLib"],
                
            }))
        }
        return creancesList.value
    }


}


