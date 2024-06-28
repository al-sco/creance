import { AcNationalite } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcNationaliteStateProvider extends ICrudStateProvider<AcNationalite> {
    mapDataToJson(data: AcNationalite): {} {
        return {
          natCode: data["id"],
          natLib: data["libelle"]
        };
    }
    
    mapEntitieFrom(json: any): AcNationalite {
        return {
            id: json["natCode"],
            code: json["natCode"],
            libelle: json["natLib"]
        };
    }
}

const acNationaliteProvider = new AcNationaliteStateProvider('/nationalite');
export default acNationaliteProvider;
