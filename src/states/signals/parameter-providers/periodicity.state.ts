import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const periodicityList:Signal<Periodicite[]>=signal([])



export class PeriodicityStateFuncs{
    static fetchBanks=async():Promise<Periodicite[]>=>{
        let {data,status}=await axios.get(getUrl('/periodicite'))
        if(status==200){
            periodicityList.value=data.map((e:any)=>({
                id:e["periodCode"],
                code:e["periodCode"],
                libelle:e["periodLib"],
                
            }))
        }
        return periodicityList.value
    }


}


