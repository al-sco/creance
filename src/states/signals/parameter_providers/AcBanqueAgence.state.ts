import { signal } from "@preact/signals-core";
import axios from "axios";
import {  getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";



export const bankAgencyList:Signal<ParameterBaseData[]>=signal<ParameterBaseData[]>([])


export class AcBanqueAgenceStateFuncs{
    static fetchBankAgencies=async():Promise<AcBanqueAgence[]>=>{
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
        return bankAgencyList.value
    }

    static updateBankAgency=async(bankAgency:AcBanqueAgence)=>{
        let {status}=await axios.patch(getUrl('/agences'),{
            headers:{
                'ngrok-skip-browser-warning':true
            }, body: {  
                id: bankAgency.id,                                             
                code: bankAgency.code,
                libelle: bankAgency.libelle,
            }
        });
        if(status==200){
            this.fetchBankAgencies()
        }
    }
            
    
    static deleteBankAgency= async(bankAgency:AcBanqueAgence)=>{
        let {status}=await axios.delete(getUrl(`/agences/${bankAgency.id}`),{
            headers:{
                'ngrok-skip-browser-warning':true
            }, 
        });
        if (status==200) {
            await this.fetchBankAgencies()            
        }
    }    
}


