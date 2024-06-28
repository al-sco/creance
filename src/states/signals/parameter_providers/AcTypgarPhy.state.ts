import { AcTypgarPhy } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'

class AcTypgarPhyStateProvider extends ICrudStateProvider<AcTypgarPhy> {
    mapDataToJson(data: AcTypgarPhy): {} {
        return {
            typgarPhysCode: data["id"],
            typgarPhysLib: data["libelle"]
        }
    }
    
    mapEntitieFrom(json: any): AcTypgarPhy {
        return {
            id: json["typgarPhysCode"],
            code: json["typgarPhysCode"],
            libelle: json["typgarPhysLib"]
        }
    }
}

const acTypgarPhyProvider = new AcTypgarPhyStateProvider('/typgar-phy');
export default acTypgarPhyProvider;
