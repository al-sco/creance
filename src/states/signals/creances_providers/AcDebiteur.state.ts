import axios from "axios";
import {
  CreanceStaticDataType,
  SelectItem,
} from "../../../common/configs/ui/creance/creance.type";
import { AcDebiteur } from "../../AcData.types";
import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";
import { getUrl } from "../../../common/configs/api/api_configs";

type ReturnProvider = () => Promise<SelectItem[]>;
class AcDebiteurStateProvider extends ICrudStateProvider<AcDebiteur> {
  mapDataToJson(_: {}): {} {
    let state=this.getState().value as any

    return {
      categDebCode: state["categorie"],
      debAdrpost: state["adressePostale"],
      debCel: state["cel"],
      debCodeAnc: state[""],
      debCodeCharg: "", //TODO,
      debDateCtl:  state[""], //TODO,
      debEmail: state["email"],
      debFax: state["fax"],
      debTelbur: state["tel"],
      debTeldom: "", // TODO
      garphysCode: "", //TODO
      propCode: "", //TODO,
      typdebCode:state["type"],
    };
  }

  create=async(passedData:{}):Promise<void>=>{
    console.log(this.mapDataToJson(passedData))
    let {status,data}=await axios.post(getUrl(this.basePath),this.mapDataToJson(passedData),{
        headers:{
            'Content-Type':'application/json',
            'ngrok-skip-browser-warning':true
        }
    })
    if(status==201){
      console.log(data)
      this.getState().value={}
    }
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




















export const sexeProvider=async():Promise<SelectItem[]>=>{
  const sexe:Array<CreanceStaticDataType>=[
    {
      label: "Masculin",
      value: "M",
    },
    {
      label: "Feminin",
      value: "F",
    },
  ]

  return sexe.map((s)=>({title:s.label,value:s.value}))
}

export const regimeMariageProvider=async():Promise<SelectItem[]>=>{
  const regimeMariage:Array<CreanceStaticDataType>=[{
    label: "Communaute de biens",
    value: "communauteDeBiens",
  },
  {
    label: "Separation de bien",
    value: "separationDeBien",
  },
]
  return regimeMariage.map((s)=>({title:s.label,value:s.value}))
}

export const naturePieceIdentite=async():Promise<SelectItem[]>=>{

  const naturePiece:CreanceStaticDataType[]=[{
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

return naturePiece.map((s)=>({title:s.label,value:s.value}))
}




export const statusMatrimonialProvider=async():Promise<SelectItem[]>=>{
  const statusMatrimonial:CreanceStaticDataType[]= [{
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
return statusMatrimonial.map((s)=>({title:s.label,value:s.value}))
}
