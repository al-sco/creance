import { CreanceStaticDataType, SelectItem } from "../../../common/configs/ui/creance/creance.type";
import { AcCreance, AcDebiteur } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import acDebiteurProvider from "./AcDebiteur.state";


class AcCreanceStateProvider extends ICrudStateProvider<AcCreance> {
  mapDataToJson(data: AcCreance): {} {
    return {
      creanCode: data.categCode,
      // periodCode: data["periodCode"],
      // entiteLib: data["entiteLib"],
      objCreanCode: data["objCreanCode"],
      creanCodeGlob: data["creanCodeGlob"],
      debCode: data["debCode"],
      creanCapitInit: data["creanCapitInit"],
      creanMontDu: data["creanMontDu"],
      creanDejRemb: data["creanDejRemb"],
      creanPenalite: data["creanPenalite"],
      creanEncours: data["creanEncours"],
      creanSoldeInit: data["creanSoldeInit"],
      creanMontImpaye: data["creanMontImpaye"],
      creanMontIc: data["creanMontIc"],
      creanMontIr: data["creanMontIr"],
      creanMontAss: data["creanMontAss"],
      creanMontDebloq: data["creanMontDebloq"],
      creanFrais: data["creanFrais"],
      creanCommBanq: data["creanCommBanq"],
      creanObjet: data["creanObjet"],
      creanTauxic: data["creanTauxic"],
      creanTauxir: data["creanTauxir"],
      creanNbech: data["creanNbech"],
      creanDateft: data["creanDateft"],
      creanDatech: data["creanDatech"],
      creanDuree: data["creanDuree"],
      creanDatoctroi: data["creanDatoctroi"],
      creanStatrecouv: data["creanStatrecouv"],
      creanDatrec: data["creanDatrec"],
      creanDatecrea: data["creanDatecrea"],
      creanCommStecaut: data["creanCommStecaut"],
      creanCodePrec: data["creanCodePrec"],
      creanCodeAnc: data["creanCodeAnc"],
      creanUserCode: data["creanUserCode"],
      creanDatfin: data["creanDatfin"],
      creanMontIcPaye: data["creanMontIcPaye"],
      creanMotifIrrecouv: data["creanMotifIrrecouv"],
      creanValide: data["creanValide"],
      creanDateCtl: data["creanDateCtl"],
      creanCodeCharg: data["creanCodeCharg"],
      creanMajDate: data["creanMajDate"],
      creanTropPercu: data["creanTropPercu"],
      pcCode: data["pcCode"],
      categCode: data["categCode"],
      creanMontAncInit: data["creanMontAncInit"],
      delegCode: data["delegCode"],
      creanRef: data["creanRef"],
      cpteCliNum: data["cpteCliNum"],
      // typeStructOrgcode: data["typeStructOrgcode"],
      // typeStructOrglib: data["typeStructOrglib"],
      creanUserCpte: data["creanUserCpte"],
      creanDateCpte: data["creanDateCpte"],
      cpteRegrp: data["cpteRegrp"],
      cptoperCode: data["cptoperCode"],
      creanClasse: data["creanClasse"],
      typoperCode: data["typoperCode"],
      creanOp: data["creanOp"],
      creanIdentAgtresor: data["creanIdentAgtresor"],
      creanStab: data["creanStab"],
      creanSoldAvantLiq: data["creanSoldAvantLiq"],
      grpCreanCode: data["grpCreanCode"]
    };
  }

  mapEntitieFrom(json: any): AcCreance {
    return {
      // ordoCode:,

      id: json["creanCode"],
      code: json["periodCode"],
      objCreanCode: json["objCreanCode"],
      creanCodeGlob: json["creanCodeGlob"],
      debCode: json["debCode"],
      creanCapitInit: json["creanCapitInit"],
      creanMontDu: json["creanMontDu"],
      creanDejRemb: json["creanDejRemb"],
      creanPenalite: json["creanPenalite"],
      creanEncours: json["creanEncours"],
      creanSoldeInit: json["creanSoldeInit"],
      creanMontImpaye: json["creanMontImpaye"],
      creanMontIc: json["creanMontIc"],
      creanMontIr: json["creanMontIr"],
      creanMontAss: json["creanMontAss"],
      creanMontDebloq: json["creanMontDebloq"],
      creanFrais: json["creanFrais"],
      creanCommBanq: json["creanCommBanq"],
      creanObjet: json["creanObjet"],
      creanTauxic: json["creanTauxic"],
      creanTauxir: json["creanTauxir"],
      creanNbech: json["creanNbech"],
      creanDateft: json["creanDateft"],
      creanDatech: json["creanDatech"],
      creanDuree: json["creanDuree"],
      creanDatoctroi: json["creanDatoctroi"],
      creanStatrecouv: json["creanStatrecouv"],
      creanDatrec: json["creanDatrec"],
      creanDatecrea: json["creanDatecrea"],
      creanCommStecaut: json["creanCommStecaut"],
      creanCodePrec: json["creanCodePrec"],
      creanCodeAnc: json["creanCodeAnc"],
      creanUserCode: json["creanUserCode"],
      creanDatfin: json["creanDatfin"],
      creanMontIcPaye: json["creanMontIcPaye"],
      creanMotifIrrecouv: json["creanMotifIrrecouv"],
      creanValide: json["creanValide"],
      creanDateCtl: json["creanDateCtl"],
      creanCodeCharg: json["creanCodeCharg"],
      creanMajDate: json["creanMajDate"],
      creanTropPercu: json["creanTropPercu"],
      pcCode: json["pcCode"],
      categCode: json["categCode"],
      creanMontAncInit: json["creanMontAncInit"],
      delegCode: json["delegCode"],
      creanRef: json["creanRef"],
      cpteCliNum: json["cpteCliNum"],
      creanUserCpte: json["creanUserCpte"],
      creanDateCpte: json["creanDateCpte"],
      cpteRegrp: json["cpteRegrp"],
      cptoperCode: json["cptoperCode"],
      creanClasse: json["creanClasse"],
      typoperCode: json["typoperCode"],
      creanOp: json["creanOp"],
      creanIdentAgtresor: json["creanIdentAgtresor"],
      creanStab: json["creanStab"],
      creanSoldAvantLiq: json["creanSoldAvantLiq"],
      grpCreanCode: json["grpCreanCode"],
      // periodCode: json["periodCode"]
    };
  }



  simpleInsert = (key: string, value: any): void => {
    let state = this.getState();
    state.value = { ...state.value, ...{ [key]: value } }
    console.log(state.value)
  }

  getSelectItems = (provider: any): () => Promise<SelectItem[]> => {
    return async () => {
      let typeDebiteurs = (await provider.find()) as any[];
      return typeDebiteurs.map((typeDebiteur) => ({
        title: typeDebiteur.libelle,
        value: typeDebiteur.code
      }));
    }
  }

  getDebiteursItems = async (): Promise<SelectItem[]> => {
    let typeDebiteurs = await acDebiteurProvider.find() as AcDebiteur[];
    return typeDebiteurs.map((typeDebiteur) => ({
      title: typeDebiteur.debEmail,
      value: typeDebiteur.debAdrpost,
    }));
  };
}


const acCreanceProvider = new AcCreanceStateProvider(
  "/creance", {}
);
export default acCreanceProvider;

export const booleanProvider = async (): Promise<SelectItem[]> => {
  let status: boolean[] = [
    true, false
  ]

  return status.map((e) => ({
    title: e ? 'Oui' : 'Non',
    value: e ? 'Oui' : 'Non'
  }))

}

export const classCreanceProvider = async (): Promise<SelectItem[]> => {
  let creantTypes: CreanceStaticDataType[] = [
    {
      label: 'Creance normal',
      value: 'creance normal'
    },
    {
      label: 'Creance contentieuse',
      value: 'creance contentieuse'
    },
    {
      label: 'Creance irrecouvrable',
      value: 'creance irrecouvrable'
    },
  ]

  return creantTypes.map((e) => ({ title: e.label, value: e.value }))
}