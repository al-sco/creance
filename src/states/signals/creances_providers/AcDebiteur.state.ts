import {
  CreanceStaticDataType,
  SelectItem,
} from "../../../common/configs/ui/creance/creance.type";
import { AcDebiteur } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";

type ReturnProvider = () => Promise<SelectItem[]>;
class AcDebiteurStateProvider extends ICrudStateProvider<AcDebiteur> {
  mapDataToJson(data: AcDebiteur): {} {
    return {
      categDebCode: data["id"],
      categDebLib: data["libelle"],
      debAdrpost: data["debAdrpost"],
      debCel: data["debCel"],
      debCodeAnc: data["debCodeAnc"],
      debCodeCharg: data["debCodeCharg"],
      debDateCtl: data["debDateCtl"],
      debEmail: data["debEmail"],
      debFax: data["debFax"],
      debTelbur: data["debTelbur"],
      debTeldom: data["debTeldom"],
      garphysCode: data["garphysCode"],
      propCode: data["propCode"],
      typdebCode: data["typdebCode"],
    };
  }
  mapEntitieFrom(json: any): AcDebiteur {
    return {
      id: json["id"],
      code: json["id"],
      libelle: json["categDebCode"],
      debAdrpost: json["debAdrpost"],
      debCel: json["debCel"],
      debCodeAnc: json["debCodeAnc"],
      debCodeCharg: json["debCodeCharg"],
      debDateCtl: json["debDateCtl"],
      debEmail: json["debEmail"],
      debFax: json["debFax"],
      debTelbur: json["debTelbur"],
      debTeldom: json["debTeldom"],
      garphysCode: json["garphysCode"],
      propCode: json["propCode"],
      typdebCode: json["typdebCode"],
    };
  }

  simpleInsert = (key: string, value: any): void => {
    let state = this.getState();
    state.value = { ...state.value, ...{ [key]: value } };
    console.log(state.value);
  };

  getSelectItems = (provider: any): ReturnProvider => {
    return async () => {
      let typeDebiteurs = (await provider.find()) as any[];
      return typeDebiteurs.map((typeDebiteur) => ({
        title: typeDebiteur.libelle,
        value: typeDebiteur.code,
      }));
    };
  };
}

const acDebiteurProvider = new AcDebiteurStateProvider("/debiteur", {});
export default acDebiteurProvider;

export const sexe: CreanceStaticDataType[] = [
  {
    label: "Masculin",
    value: "M",
  },
  {
    label: "Feminin",
    value: "F",
  },
];

export const regimeMariage: CreanceStaticDataType[] = [
  {
    label: "Communaute de biens",
    value: "communauteDeBiens",
  },
  {
    label: "Separation de bien",
    value: "separationDeBien",
  },
];

export const naturePieceIdentite: CreanceStaticDataType[] = [
  {
    label: "CNI",
    value: "cni",
  },
  {
    label: "Passeport",
    value: "passeport",
  },
  {
    label: "Carte consulaire",
    value: "carteConsulaire",
  },
  {
    label: "Carte de sejour",
    value: "carteDeSejour",
  },
  {
    label: "Attestation d'identie",
    value: "attestation d'identie",
  },
  {
    label: "Permis de conduire",
    value: "permis de conduire",
  },
  {
    label: "Carte d'identite francaise",
    value: "carte d'identite francaise"
  }
];

export const statusMatrimonial: CreanceStaticDataType[] = [
  {
    label: "Marié(e)",
    value: "marié(e)",
  },
  {
    label: "Celibataire",
    value: "celibataire",
  },
  {
    label: "Divorce(e)",
    value: "divorce(e)",
  },
  {
    label: "Veuf(ve)",
    value: "veuf(ve)",
  },
];
