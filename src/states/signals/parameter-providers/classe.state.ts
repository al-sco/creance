import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const classeList:Signal<Classe[]>=signal([])



export class ClasseStateFuncs{
    static fetchClasse=async():Promise<Classe[]>=>{
        let {data,status}=await axios.get(getUrl('/classe'))
        if(status==200){
            classeList.value=data.map((e:any)=>({
                id:e["id"],
                code:e["clasCode"],
                libelle:e["clasLib"],
                
            }))
        }
        return classeList.value
    }


}


