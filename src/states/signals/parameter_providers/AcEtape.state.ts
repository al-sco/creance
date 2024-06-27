import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const etapeList:Signal<AcEtape[]>=signal([])



export class AcEtapeStateFuncs{
    static fetchEtapes=async():Promise<AcEtape[]>=>{
        let {data,status}=await axios.get(getUrl('/etape'))
        if(status==200){
            etapeList.value=data.map((e:any)=>({
                id:e["id"],
                code:e["etapCode"],
                libelle:e["etapLib"],
                
            }))
        }
        return etapeList.value
    }


}


