import { AcModePaiement } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";


class AcModePaiementStateProvider extends ICrudStateProvider<AcModePaiement> {
    mapEntitieFrom(json: any): AcModePaiement {
      return {
        id: json["modePaieCode"],
        code: json["modePaieCode"],
        libelle: json["modePaieLib"],
      };
    }
  }
  
  const acModePaiementProvider = new AcModePaiementStateProvider("/mode-paiement");
  export default acModePaiementProvider;
