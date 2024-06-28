import { AcFonction } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcFonctionStateProvider extends ICrudStateProvider<AcFonction> {
    mapDataToJson(data: AcFonction): {} {
        return {
          fonctCode: data["id"],
          fonctLib: data["libelle"],
        };
    }
    
    mapEntitieFrom(json: any): AcFonction {
        return {
            id: json["fonctCode"],
            code: json["fonctCode"],
            libelle: json["fonctLib"],
        };
    }
}

const acFonctionProvider = new AcFonctionStateProvider('/fonction');
export default acFonctionProvider;
