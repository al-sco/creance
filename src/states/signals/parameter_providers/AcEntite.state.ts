import { AcEntite } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcEntiteStateProvider extends ICrudStateProvider<AcEntite> {
    mapDataToJson(data: AcEntite): {} {
        return {
          entiteCode: data["id"],
          entiteLib: data["libelle"],
          entiteLibLong: data["libelleLong"],
          entiteResp: data["responsable"],
          entiteAssign: data["entiteAssign"]
        };
    }
    
    mapEntitieFrom(json: any): AcEntite {
        let o= {
            id: json["entiteCode"],
            code: json["entiteCode"],
            libelle: json["entiteLib"],
            responsable: json["entiteResp"],
            libelleLong: json["entiteLibLong"],
            entiteAssign: json["entiteAssign"]
        };
        return o
    }
}

const acEntiteProvider = new AcEntiteStateProvider('/entite');
export default acEntiteProvider;
