import { AcPeriodicite } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcPeriodiciteStateProvider extends ICrudStateProvider<AcPeriodicite> {
    mapDataToJson(data: AcPeriodicite): {} {
        return {
          periodCode: data["id"],
          periodLib: data["libelle"],
        };
    }
    
    mapEntitieFrom(json: any): AcPeriodicite {
        return {
            id: json["periodCode"],
            code: json["periodCode"],
            libelle: json["periodLib"],
        };
    }
}

const acPeriodiciteProvider = new AcPeriodiciteStateProvider('/periodicite');
export default acPeriodiciteProvider;
