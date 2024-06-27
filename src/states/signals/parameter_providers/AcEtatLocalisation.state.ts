import { AcEtatLocalisation } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";


class AcEtatLocalisationStateProvider extends ICrudStateProvider<AcEtatLocalisation> {
    mapEntitieFrom(json: any): AcEtatLocalisation {
      return {
        id: json["etatCode"],
        code: json["etatCode"],
        libelle: json["etatLib"],
      };
    }
  }
  
  const acEtatLocalisationProvider = new AcEtatLocalisationStateProvider("/etat-localisation");
  export default acEtatLocalisationProvider;
