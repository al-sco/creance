import axios from "axios";
import {
  CreanceStaticDataType,
  SelectItem,
} from "../../../common/configs/ui/creance/creance.type";
import { AcDebiteur, AcDebiteurMoral, AcDebiteurPhysique } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import { getUrl } from "../../../common/configs/api/api_configs";
import { signal } from "@preact/signals-react";
import acDebiteurMoralProvider from "./AcDebiteurMoral.state";
import acDebiteurPhysiqueProvider from "./AcDebiteurPhysique.state";
import acDomiciliationStateProvider from "./AcDomiciliation.state";

type ReturnProvider = () => Promise<SelectItem[]>;
export class AcDebiteurStateProvider extends ICrudStateProvider<AcDebiteur> {
  static domiciliationTypeCode = 'D';
  static physiqueTypeCode = 'P';
  static moralTypeCode = 'M';
  static debiteurTypeKeyCode = 'typdebCode';

  debiteursListState = signal<AcDebiteur[]>([]);

  mapDataToJson(_: {}): {} {
    let state = this.getState().value as any;
    return {
      debCode: state["code"],
      categDebCode: state["categDebCode"],
      debAdrpost: state["debAdrpost"],
      debCel: state["debCel"],
      debCodeAnc: state["debCodeAnc"],
      debCodeCharg: state["debCodeCharg"],
      debDateCtl: state["debDateCtl"],
      debEmail: state["debEmail"],
      debFax: state["debFax"],
      debTelbur: state["debTelbur"],
      debTeldom: state["debTeldom"],
      garphysCode: state["garphysCode"],
      propCode: state["propCode"],
      typdebCode: state["typdebCode"],
    };
  }

  create = async (passedData: {}): Promise<AcDebiteur | void> => {
    console.log(this.mapDataToJson(passedData));
    let { status, data } = await axios.post(
      getUrl(this.basePath),
      this.mapDataToJson(passedData),
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": true,
        },
      }
    );
    if (status == 201) {
      await this.find()
      this.getState().value = {};
      return this.mapEntitieFrom(data)
    }

  };


  update = async (passedData: {}): Promise<void> => {
    console.log(this.mapDataToJson(passedData));
    let { status, data } = await axios.patch(
      getUrl(this.basePath),
      this.mapDataToJson(passedData),
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": true,
        },
      }
    );
    console.log(data)
    if (status == 200) {
      await this.find()
      this.getState().value = {};
    }
  };

  find = async (): Promise<AcDebiteur[]> => {
    let { data, status } = await axios.get(getUrl(this.basePath), {
      headers: {
        "ngrok-skip-browser-warning": true,
      },
    });
    if (status == 200) {
      console.log(data)
      this.debiteursListState.value = data.map(this.mapEntitieFrom);
    }
    return this.debiteursListState.value;
  };

  mapEntitieFrom(json: any): AcDebiteur {
    return {
      id: json["id"],
      debCode: json["id"],
      categDebCode: json["categDebCode"],
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
  };

  simpleInsertWithRefresh = (key: string, value: any): void => {
    let state = this.getState();
    let existingValueIndex = this.debiteursListState.value.findIndex((acDebiteur) => acDebiteur.debCode == value);

    if (existingValueIndex != -1) {
      let existingDebiteur = this.debiteursListState.value[existingValueIndex]
      state.value = { ...{ [key]: value }, ...existingDebiteur };

      acDebiteurMoralProvider.findOne(parseInt(value))
      acDebiteurPhysiqueProvider.findOne(parseInt(value))
      return;
    }
    state.value = { ...{ [key]: value } };

    // call external providers
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

  getDebiteursSelectItems = async (): Promise<SelectItem[]> => {
    let typeDebiteurs = (await acDebiteurProvider.find());
    return typeDebiteurs.map((typeDebiteur) => ({
      title: typeDebiteur.debCode.toString(),//TODO add debiteur name
      value: typeDebiteur.debCode,
    }));
  };


  createDebiteurFully = async (): Promise<void> => {
    let debCode = (this.getState().value as any)["code"]
    if (!debCode) {
      let debiteur = await this.create({})
      console.log(debiteur)

      if (debiteur) {

        await acDomiciliationStateProvider.create({ debCode: debiteur.id })

        if (debiteur.typdebCode == 'M') {
          await acDebiteurMoralProvider.create({ debCode: debiteur.id } as AcDebiteurMoral)
        }
        else if (debiteur.typdebCode == 'P') {
          let data = { debiteurCode: parseInt(debiteur.id), id: parseInt(debiteur.id) } as AcDebiteurPhysique;
          await acDebiteurPhysiqueProvider.create(data)
        }
        return;
      }

      await this.update({})
      // for (let provider of providers) {
      //   await provider.update({ debCode: debCode })
      // }
    }
  }

}

const acDebiteurProvider = new AcDebiteurStateProvider("/debiteur", {});
export default acDebiteurProvider;

export const sexeProvider = async (): Promise<SelectItem[]> => {
  const sexe: Array<CreanceStaticDataType> = [
    {
      label: "Masculin",
      value: "M",
    },
    {
      label: "Feminin",
      value: "F",
    },
  ];

  return sexe.map((s) => ({ title: s.label, value: s.value }));
};

export const regimeMariageProvider = async (): Promise<SelectItem[]> => {
  const regimeMariage: Array<CreanceStaticDataType> = [
    {
      label: "Communaute de biens",
      value: "C",
    },
    {
      label: "Separation de bien",
      value: "S",
    },
  ];
  return regimeMariage.map((s) => ({ title: s.label, value: s.value }));
};

export const naturePieceIdentite = async (): Promise<SelectItem[]> => {
  const naturePiece: CreanceStaticDataType[] = [
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
      value: "carte d'identite francaise",
    },
  ];

  return naturePiece.map((s) => ({ title: s.label, value: s.value }));
};

export const statusMatrimonialProvider = async (): Promise<SelectItem[]> => {
  const statusMatrimonial: CreanceStaticDataType[] = [
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
  return statusMatrimonial.map((s) => ({ title: s.label, value: s.value }));
};
