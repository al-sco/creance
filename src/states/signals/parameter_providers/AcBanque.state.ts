import { AcBanque } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'





class AcBanqueStateProvider extends ICrudStateProvider<AcBanque>{
    mapEntitieFrom(json: any): AcBanque {
        return {
            id:json["id"],
            code:json["code"],
            libelle:json["libelle"],
            adresse:json["adresse"],
            responsabilite:json["responsabilite"]
        }
    }
}

const acBanqueProvider=new AcBanqueStateProvider('/banque') 
export default acBanqueProvider


