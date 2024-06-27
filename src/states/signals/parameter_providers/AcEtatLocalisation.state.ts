import { AcEtatLocalisation } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";


class AcSatusRequestLocationStateProvider extends ICrudStateProvider<AcEtatLocalisation> {
    mapEntitieFrom(json: any): AcEtatLocalisation {
      return {
        id: json["etatCode"],
        code: json["etatCode"],
        libelle: json["etatLib"],
      };
    }
  }
  
  const acSatusRequestLocationProvider = new AcSatusRequestLocationStateProvider("/etat-localisation");
  export default acSatusRequestLocationProvider;
