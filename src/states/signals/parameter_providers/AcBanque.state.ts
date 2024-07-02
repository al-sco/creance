import { AcBanque } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'





class AcBanqueStateProvider extends ICrudStateProvider<AcBanque>{
    mapDataToJson(data: AcBanque): {} {
        console.log(data)
        return {
            id:data["id"],
            libelle:data["libelle"],
            code:data["code"],
            adresse:data["adresse"],
            responsable:data["responsabilite"]
        }
    }
    
    mapEntitieFrom(json: any): AcBanque {
        return {
            id:json["code"],
            code:json["code"],
            libelle:json["libelle"],
            adresse:json["adresse"],
            responsabilite:json["responsable"]
        }
    }
}

const acBanqueProvider=new AcBanqueStateProvider('/banque') 
export default acBanqueProvider


