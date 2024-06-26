import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";

export const civilityList:Signal<Civilite[]>=signal([])


export class CilivityStateFuncs{
    static fetchCivility=async():Promise<Civilite[]>=>{
        let {data,status}=await axios.get(getUrl('/civilite'))
        if(status==200){
            civilityList.value=data.map((e:any)=>({
                id:e["civCode"],
                code:e["civCode"],
                libelle:e["civLib"]
                
            }))
        }
        return civilityList.value
    }


}


