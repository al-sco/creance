import { AcExercice } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcExercicesStateProvider extends ICrudStateProvider<AcExercice> {
    mapEntitieFrom(json: any): AcExercice {
      return {
        id: json["id"],
        annee: json["exoLib"],
        libelle: json["exoLib"],                
        dateAdoptionBud: json["dateAdoptionBud"],
        dateDebut: json["exoDatedeb"],
        dateFin: json["exoDatefin"],
        cloture: json["exoClos"],
      };
    }
  }
  
  const acExercicesProvider = new AcExercicesStateProvider("/exercice");
  export default acExercicesProvider;