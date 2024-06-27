import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const journalList:Signal<Journal[]>=signal([])



export class AcJournalStateFuncs{
    static fetchJournals=async():Promise<Journal[]>=>{
        let {data,status}=await axios.get(getUrl('/journal'))
        if(status==200){
            journalList.value=data.map((e:any)=>({
                id:e["id"],
                code:e["id"],
                libelle:e["libJournal"],
                
            }))
        }
        return journalList.value
    }


}


