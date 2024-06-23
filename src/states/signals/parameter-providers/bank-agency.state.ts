import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const bankAgencyList:Signal<ParameterBaseData[]>=signal([])



export class BankAgencyStateFuncs{
    static fetchBankAgency=async():Promise<AgenceBanque[]>=>{
        console.log("Calling ...")
        let {data,status}=await axios.get(getUrl('/agences'),{
            headers:{
                'ngrok-skip-browser-warning':true
            }
        })
        if(status==200){
            bankAgencyList.value=data.map((e:any)=>({
                id:e["id"],
                code:e["code"],
                libelle:e["libelle"]
            }))
        }
        console.log(bankAgencyList.value)
        return bankAgencyList.value
    }

    static addBankAgency=(bankAgency:AgenceBanque)=>{

    }
    
    static updateBankAgency=(updatedBankAgency:AgenceBanque)=>{
    
    }
    
    static deleteBankAgency=(bankAgency:AgenceBanque)=>{
        
    }    
}


