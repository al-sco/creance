import { AcBanqueAgence } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'





class AcBanqueAgenceStateProvider extends ICrudStateProvider<AcBanqueAgence>{
    mapEntitieFrom(json: any): AcBanqueAgence {
        return {
            id:json["id"],
            code:json["code"],
            libelle:json["libelle"],
        }
    }
}

const acBanqueAgenceProvider=new AcBanqueAgenceStateProvider('/agences') 
export default acBanqueAgenceProvider



