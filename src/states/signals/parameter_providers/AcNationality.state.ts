import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const nationalityList:Signal<AcNationalite[]>=signal([])



export class AcNationalityStateFuncs{
    static fetchNationalities=async():Promise<AcNationalite[]>=>{
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


