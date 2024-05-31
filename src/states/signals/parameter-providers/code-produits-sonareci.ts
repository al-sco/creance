import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const codeProduitsList:Signal<CodeProduitSonareci[]>=signal([])



export class CodeProduitSonareciStateFuncs{
    static fetchBanks=async():Promise<CodeProduitSonareci[]>=>{
        let {data,status}=await axios.get(getUrl('/code_produit_sonareci'))
        if(status==200){
            codeProduitsList.value=data.map((e:any)=>({
                id:e["id"],
                ancienCompteunibol:e["ancienCompteunibol"],
                code:e["code"],
                compteRegroupeptSaari:e["compteRegroupeptSaari"],
                intituleComptes:e["intituleComptes"],
                libelle:e["libelle"],
                observation:e["observation"],
                
            }))
        }
        console.log(codeProduitsList.toJSON())
        return codeProduitsList.value
    }


}


