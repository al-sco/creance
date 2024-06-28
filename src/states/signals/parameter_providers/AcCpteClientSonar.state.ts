import { AcCodeProduitSonareci } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';

class AcCodeProduitSonareciStateProvider extends ICrudStateProvider<AcCodeProduitSonareci> {
    mapDataToJson(data: AcCodeProduitSonareci): {} {
        return {
            id: data["id"],
            cpteCliCode: data["code"],
            cpteCliLib: data["libelle"],
            cpteCliSaari: data["compteRegroupeptSaari"],
            cpteCliUnibol: data["ancienCompteunibol"],
            cpteCliObserv: data["observation"],
            planCptaNum: data["intituleComptes"],
        };
    }
    
    mapEntitieFrom(json: any): AcCodeProduitSonareci {
        return {
            id: json["id"],
            code: json["cpteCliCode"],
            libelle: json["cpteCliLib"],
            compteRegroupeptSaari: json["cpteCliSaari"],
            ancienCompteunibol: json["cpteCliUnibol"],
            observation: json["cpteCliObserv"],
            intituleComptes: json["planCptaNum"],
        };
    }
}

const acCodeProduitSonareciProvider = new AcCodeProduitSonareciStateProvider('/cpte-client-sonar');
export default acCodeProduitSonareciProvider;
