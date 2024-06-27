import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const operationList:Signal<AcCptOperation[]>=signal([])



export class AcOperationAccountStateFuncs{
    static fetchAccountOperations=async():Promise<AcCptOperation[]>=>{
        let {data,status}=await axios.get(getUrl('/compte-oper'))
        console.log(data)
        if(status==200){
            operationList.value=data.map((e:any)=>({
                id:e["cptoperCode"],
                numero:e["cptoperCode"],
                codeBanqueAgence:e["bqagCode"],
                codeGroupeCreance:e["grpCreanCode"],
                
            }))
        }
        return operationList.value
    }


}


