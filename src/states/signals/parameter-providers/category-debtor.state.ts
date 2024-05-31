import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const categroyList:Signal<CategorieDebiteur[]>=signal([])



export class CategoryDebtorStateFuncs{
    static fetchCategories=async():Promise<CategorieDebiteur[]>=>{
        let {data,status}=await axios.get(getUrl('/categorieDebiteur'))
        if(status==200){
            categroyList.value=data.map((e:any)=>({
                id:e["id"],
                code:e["code"],
                libelle:e["libelle"],
                
            }))
        }
        return categroyList.value
    }


}


