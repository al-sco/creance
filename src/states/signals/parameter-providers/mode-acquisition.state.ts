import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const acquisitionList:Signal<ModeAcquisition[]>=signal([])



export class ModeAcquisitionStateFuncs{
    static fetchBanks=async():Promise<ModeAcquisition[]>=>{
        let {data,status}=await axios.get(getUrl('/mode-aquisition'))
        if(status==200){
            acquisitionList.value=data.map((e:any)=>({
                id:e["modacCode"],
                code:e["modacCode"],
                libelle:e["modacLib"],
                
            }))
        }
        return acquisitionList.value
    }


}


