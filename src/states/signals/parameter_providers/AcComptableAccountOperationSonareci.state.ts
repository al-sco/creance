import { signal } from "@preact/signals-core";
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";
import { Signal } from "@preact/signals-react";
import ICrudStateProvider from "./ICrudStateProvider";
import { AcCompteComptableOperationSonareci } from "../../AcData.types";

export const compteComptableSonareciList: Signal<
  AcCompteComptableOperationSonareci[]
> = signal([]);

export class AcComptableAccountOperationSonareciStateFuncs {
  static fetchComptableAccountOperations = async (): Promise<
    AcCompteComptableOperationSonareci[]
  > => {
    let { data, status } = await axios.get(
      getUrl("/compte_comptable_operation_sonareci")
    );
    if (status == 200) {
      compteComptableSonareciList.value = data.map((e: any) => ({
        id: e["id"],
        groupeCreance: e["groupeCreance"],
        typeOperation: e["typeOperation"],
        compte: e["compte"],
        journal: e["journal"],
        libelle: e["libelle"],
        sens: e["sens"],
        groupeSonareci: e["groupeSonareci"],
      }));
    }
    return compteComptableSonareciList.value;
  };
}

class AcComptableAccountOperationSonareciStateProvider extends ICrudStateProvider<AcCompteComptableOperationSonareci> {
  mapEntitieFrom(json: any): AcCompteComptableOperationSonareci {
    return {
      id: json["id"],
      groupeCreance: json["groupeCreance"],
      typeOperation: json["typeOperation"],
      compte: json["compte"],
      journal: json["journal"],
      libelle: json["libelle"],
      sens: json["sens"],
      groupeSonareci: json["groupeSonareci"],
    };
  }
}

const acComptableAccountOperationSonareciProvider =
  new AcComptableAccountOperationSonareciStateProvider(
    "/compte_comptable_operation_sonareci"
  );
export default acComptableAccountOperationSonareciProvider;
