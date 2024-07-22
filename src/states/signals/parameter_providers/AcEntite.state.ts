import { SelectItem } from "../../../common/configs/ui/creance/creance.type";
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
        let entitie= {
            id: json["entiteCode"],
            code: json["entiteCode"],
            libelle: json["entiteLib"]?.toUpperCase(),
            responsable: json["entiteResp"],
            libelleLong: json["entiteLibLong"],
            entiteAssign: json["entiteAssign"]
        };
        return entitie
    }
 

    getSelectItems = (): SelectItem[] => {
        let entities = this.getState().value as AcEntite[];
        return entities.map((entitie) => ({
          title: entitie.libelle,
          value: entitie.code,
        }));
      };
    }

const acEntiteProvider = new AcEntiteStateProvider('/entite');
export default acEntiteProvider;
