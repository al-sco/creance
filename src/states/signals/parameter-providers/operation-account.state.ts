import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const operationList:Signal<CompteOperation[]>=signal([])



export class OperationAccountStateFuncs{
    static fetchOperationAccount=async():Promise<CompteOperation[]>=>{
        let {data,status}=await axios.get(getUrl('/compte_operation'))
        if(status==200){
            operationList.value=data.map((e:any)=>({
                id:e["id"],
                numero:e["numero"],
                codeBanqueAgence:e["codeBanqueAgence"],
                codeGroupeCreance:e["codeGroupeCreance"],
                
            }))
        }
        return operationList.value
    }


}


