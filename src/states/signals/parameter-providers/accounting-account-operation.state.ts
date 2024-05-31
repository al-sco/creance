import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const compteComptableList:Signal<CompteComptableOperation[]>=signal([])



export class AccountingAccountOperationStateFuncs{
    static fetchBanks=async():Promise<CompteComptableOperation[]>=>{
        let {data,status}=await axios.get(getUrl('/code_comptable_operation'))
        if(status==200){
            compteComptableList.value=data.map((e:any)=>({
                id:e["id"],
                groupeCreance:e["groupeCreance"],
                typeOperation:e["typeOperation"],
                compte:e["compte"],
                journal:e["journal"],
                libelle:e["libelle"],
                sens:e["sens"],
                
            }))
        }
        return compteComptableList.value
    }


}


