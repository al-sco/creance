import { AcBanqueAgence, ParameterBaseData } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'





class AcBanqueAgenceStateProvider extends ICrudStateProvider<AcBanqueAgence>{
    mapDataToJson(data: ParameterBaseData): {} {
        return {
            bqagCode:data["id"],
            bqCode:data["code"],
            bqagLib:data["libelle"],
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



