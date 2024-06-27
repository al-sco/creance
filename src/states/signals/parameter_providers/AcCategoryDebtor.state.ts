import { AcCategorieDebiteur } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcCategoryDebtorStateProvider extends ICrudStateProvider<AcCategorieDebiteur> {
  mapEntitieFrom(json: any): AcCategorieDebiteur {
    return {
      id: json["categDebCode"],
      code: json["categDebCode"],
      libelle: json["categDebLib"],
    };
  }
}

const acCategoryDebtorProvider = new AcCategoryDebtorStateProvider(
  "/categorie-debiteur"
);
export default acCategoryDebtorProvider;
