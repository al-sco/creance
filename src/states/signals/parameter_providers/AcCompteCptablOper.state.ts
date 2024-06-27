import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const compteComptableList:Signal<AcCompteOper[]>=signal([])



export class AcComptableAccountOperationStateFuncs{
    static fetchAccountOperations=async():Promise<AcCompteOper[]>=>{
        let {data,status}=await axios.get(getUrl('/compte-oper'))
        if(status==200){
            compteComptableList.value=data.map((e:any)=>({
                id:e["id"],
                cptoperCode:e["cptoperCode"],
                bqagCode:e["bqagCode"],
                grpCreanCode:e["grpCreanCode"],
                
            }))
        }
        return compteComptableList.value
    }


}


