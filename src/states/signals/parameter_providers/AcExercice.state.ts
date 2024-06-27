import { signal } from "@preact/signals-core";
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";

export const exerciceServiceList: Signal<AcExercice[]> = signal([]);

export class AcExercicesService {
    static fetchExercices = async (): Promise<AcExercice[]> => {
        let { data, status } = await axios.get(getUrl('/exercice'));
        if (status === 200) {
            exerciceServiceList.value = data.map((e: any) => ({
                id: e["id"],
                annee: e["exoLib"],
                libelle: e["exoLib"],                
                dateAdoptionBud: e["dateAdoptionBud"],
                dateDebut: e["exoDatedeb"],
                exoDatefin: e["exoDatefin"],
                cloture: e["exoClos"],
            }));
        }
        return exerciceServiceList.value;
    }
}
