import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const locationList:Signal<EtatDemandelocalisation[]>=signal([])



export class SatusRequestLocationStateFuncs{
    static fetchBanks=async():Promise<EtatDemandelocalisation[]>=>{
        let {data,status}=await axios.get(getUrl('/etat-localisation'))
        if(status==200){
            locationList.value=data.map((e:any)=>({
                id:e["etatCode"],
                code:e["etatCode"],
                libelle:e["etatLib"],
                
            }))
        }
        return locationList.value
    }


}


