import { AcBanqueAgence, ParameterBaseData } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'





class AcBanqueAgenceStateProvider extends ICrudStateProvider<AcBanqueAgence>{
    mapDataToJson(data: ParameterBaseData): {} {
        return {
            id:data["id"],
            code:data["code"],
            libelle:data["libelle"],
        }
    }


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



