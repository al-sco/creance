import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const categroyList:Signal<AcCategorieDebiteur[]>=signal([])



export class AcCategoryDebtorStateFuncs{
    static fetchCategories=async():Promise<AcCategorieDebiteur[]>=>{
        let {data,status}=await axios.get(getUrl('/categorie-debiteur'))
        if(status==200){
            categroyList.value=data.map((e:any)=>({
                id:e["categDebCode"],
                code:e["categDebCode"],
                libelle:e["categDebLib"],
                
            }))
        }
        return categroyList.value
    }


}


