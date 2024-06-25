import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const nationalityList:Signal<Nationalite[]>=signal([])



export class NationalityStateFuncs{
    static fetchBanks=async():Promise<Nationalite[]>=>{
        let {data,status}=await axios.get(getUrl('/nationalite'))
        if(status==200){
            nationalityList.value=data.map((e:any)=>({
                id:e["natCode"],
                code:e["natCode"],
                libelle:e["natLib"],
                
            }))
        }
        return nationalityList.value
    }


}


