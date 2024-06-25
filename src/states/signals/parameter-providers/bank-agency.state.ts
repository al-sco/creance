import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const bankAgencyList:Signal<ParameterBaseData[]>=signal<ParameterBaseData[]>([])



export class BankAgencyStateFuncs{
    static fetchBankAgency=async():Promise<AgenceBanque[]>=>{
        console.log("Fetching ...")
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

    static updateBankAgency=async(bankAgency:AgenceBanque)=>{
        console.log('Updating ...');
        let {data, status}=await axios.patch(getUrl('/agences'),{
            headers:{
                'ngrok-skip-browser-warning':true
            }, body: {  
                id: bankAgency.id,                                             
                code: bankAgency.code,
                libelle: bankAgency.libelle,
            }
        });
        if(status==200){
            this.fetchBankAgency()
        }
    }
            
    
    static deleteBankAgency= async(bankAgency:AgenceBanque)=>{
        let {status}=await axios.delete(getUrl(`/agences/${bankAgency.id}`),{
            headers:{
                'ngrok-skip-browser-warning':true
            }, 
        });
        if (status==200) {
            await this.fetchBankAgency()            
        }
    }    
}


