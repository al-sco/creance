import { AcBanqueAgence, AcDomicialition } from "../../AcData.types";
import acBanqueProvider from "../parameter_providers/AcBanque.state";
import acBanqueAgenceProvider from "../parameter_providers/AcBanqueAgence.state";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";




class AcDomicialitionStateProvider extends ICrudStateProvider<AcDomicialition> {
  mapDataToJson(data: AcDomicialition): {} {
    return {
      domCode: data["domCode"],
      bqagCode: data["bqagCode"],
      typdomCode: data["typdomCode"],
      garphysCode: data["garphysCode"],
      debCode: data["debCode"],
      domLib: data["domLib"],
      domDateCtl: data["domDateCtl"],
      ancAg: data["ancAg"],
      villeCode: data["villeCode"],
      numBenef: data["numBenef"],
    };
  }




  mapEntitieFrom(json: any): AcDomicialition {
    return {
      domCode: json["domCode"],
      id: json["domCode"],
      bqagCode: json["bqagCode"],
      typdomCode: json["typdomCode"],
      garphysCode: json["garphysCode"],
      debCode: json["debCode"],
      domLib: json["domLib"],
      domDateCtl: json["domDateCtl"],
      ancAg: json["ancAg"],
      villeCode: json["villeCode"],
      numBenef: json["numBenef"],
    };
  }

  simpleInsert = (key: string, value: any): void => {
    let state = this.getState();
    state.value = { ...state.value, ...{ [key]: value } };
    console.log(state.value)
  };

  setBanqueAgenceCode = (key: string, value: any): void => {
    let state = this.getState();
    state.value = { ...state.value, ...{ [key]: value, 'banque': acBanqueProvider.getBanqueFromId(acBanqueAgenceProvider.getAgenceBanqueById(value)?.bqCode) } };
    console.log(state.value)
  };
}

const acDomiciliationStateProvider = new AcDomicialitionStateProvider("/debiteur-physique", {})
export default acDomiciliationStateProvider

