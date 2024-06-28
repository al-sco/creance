import { AcModeAcquisition } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcModeAcquisitionStateProvider extends ICrudStateProvider<AcModeAcquisition> {
    mapDataToJson(data: AcModeAcquisition): {} {
        return {
          modacCode: data["id"],
            maCode: data["code"],
            modacLib: data["libelle"]
        };
    }
    
    mapEntitieFrom(json: any): AcModeAcquisition {
        return {
            id: json["modacCode"],
            code: json["modacCode"],
            libelle: json["modacLib"]
        };
    }
}

const acModeAcquisitionProvider = new AcModeAcquisitionStateProvider('/mode-aquisition');
export default acModeAcquisitionProvider;
