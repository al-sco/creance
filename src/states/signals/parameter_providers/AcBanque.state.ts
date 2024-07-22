import { SelectItem } from "../../../common/configs/ui/creance/creance.type";
import { AcBanque } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'





class AcBanqueStateProvider extends ICrudStateProvider<AcBanque>{
    mapDataToJson(data: AcBanque): {} {
        console.log(data)
        return {
            id:data["id"],
            libelle:data["libelle"],
            code:data["code"],
            adresse:data["adresse"],
            responsable:data["responsabilite"]
        }
    }
    
    mapEntitieFrom(json: any): AcBanque {
        return {
            id:json["code"],
            code:json["code"],
            libelle:json["libelle"].toString().toUpperCase(),
            adresse:json["adresse"],
            responsabilite:json["responsable"]
        }
    }

    getSelectItems = (): SelectItem[] => {
          let typeDebiteurs = this.getState().value as AcBanque[];
          return typeDebiteurs.map((typeDebiteur) => ({
            title: typeDebiteur.libelle,
            value: typeDebiteur.code,
          }));
        };
      }

const acBanqueProvider=new AcBanqueStateProvider('/banque') 
export default acBanqueProvider


