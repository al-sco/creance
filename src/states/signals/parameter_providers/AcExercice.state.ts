import { AcExercice } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcExerciceStateProvider extends ICrudStateProvider<AcExercice> {
    mapDataToJson(data: AcExercice): {} {
        return {
            id: data["id"],
            exoLib: data["annee"],
            dateAdoptionBud: data["dateAdoptionBud"],
            exoDatedeb:data["dateDebut"],
            exoDatefin:data["dateFin"],
            exoClos:data["cloture"]
            
        };
    }
    
    mapEntitieFrom(json: any): AcExercice {
        return {
            id: json["id"],
            annee: json["exoLib"],
            libelle: json["exerciceLib"],
            dateAdoptionBud: json["dateAdoptionBud"],
            dateDebut:json["exoDatedeb"],
            dateFin:json["exoDatefin"],
            cloture:json["exoClos"]
        };
    }
}

const acExerciceProvider = new AcExerciceStateProvider('/exercice');
export default acExerciceProvider;
