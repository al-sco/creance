import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const messagesList:Signal<Messages[]>=signal([])



export class MessagesStateFuncs{
    static fetchBanks=async():Promise<Messages[]>=>{
        let {data,status}=await axios.get(getUrl('/message'))
        if(status==200){
            messagesList.value=data.map((e:any)=>({
                id:e["id"],
                code:e["id"],
                libelle:e["libelleMessage"],
                
            }))
        }
        return messagesList.value
    }


}


