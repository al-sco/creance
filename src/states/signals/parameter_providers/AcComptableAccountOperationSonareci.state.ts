import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const compteComptableSonareciList:Signal<CompteComptableOperationSonareci[]>=signal([])



export class AcComptableAccountOperationSonareciStateFuncs{
    static fetchComptableAccountOperations=async():Promise<CompteComptableOperationSonareci[]>=>{
        let {data,status}=await axios.get(getUrl('/compte_comptable_operation_sonareci'))
        if(status==200){
            compteComptableSonareciList.value=data.map((e:any)=>({
                id:e["id"],
                groupeCreance:e["groupeCreance"],
                typeOperation:e["typeOperation"],
                compte:e["compte"],
                journal:e["journal"],
                libelle:e["libelle"],
                sens:e["sens"],
                groupeSonareci:e["groupeSonareci"],
                
            }))
        }
        return compteComptableSonareciList.value
    }


}


