import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const functionList:Signal<Function[]>=signal([])



export class FunctionStateFuncs{
    static fetchBanks=async():Promise<Function[]>=>{
        let {data,status}=await axios.get(getUrl('/fonction'))
        if(status==200){
            functionList.value=data.map((e:any)=>({
                id:e["id"],
                code:e["code"],
                libelle:e["libelle"],
                
            }))
        }
        return functionList.value
    }


}


