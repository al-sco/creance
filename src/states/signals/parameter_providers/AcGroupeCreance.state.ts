import { computed, signal, Signal } from "@preact/signals-react";
import { AcGroupeCreance } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider';
import { SelectItem } from "../../../common/configs/ui/creance/creance.type";

class AcGroupeCreanceStateProvider extends ICrudStateProvider<AcGroupeCreance> {
    private currentSelectedEntiteItem:Signal<SelectItem|undefined>;

    mapDataToJson(data: AcGroupeCreance): {} {
        return {
          grpCreanCode: data["id"],
            grpCreanLib: data["libelle"],
            grpCreanLibLong: data["libelleLong"],
            entiteCode:this.currentSelectedEntiteItem.value?.value
        };
    }
    
    mapEntitieFrom(json: any): AcGroupeCreance {
        return {
            id: json["grpCreanCode"],
            code: json["grpCreanCode"],
            libelle: json["grpCreanLib"],
            libelleLong: json["grpCreanLibLong"],
            entiteCode:json["entiteCode"]
        };
    }

    constructor(basePath:string,initialState?:{}){
        super(basePath,initialState)
        this.currentSelectedEntiteItem=signal(undefined)
    }


    filteredEntites=computed(()=>(this.getState().value as AcGroupeCreance[]).filter((groupeCreance)=>{
        console.log(this.currentSelectedEntiteItem?.value?.value)
        if(!this.currentSelectedEntiteItem?.value){
            return true;
        }
        return groupeCreance.entiteCode?.toString().toLowerCase()==this.currentSelectedEntiteItem?.value?.value.toString().toLowerCase()
    }))

    setCurrentSelectedEntite=(selectedEntite?: SelectItem)=>{
        this.currentSelectedEntiteItem.value=selectedEntite;
}

}

const acGroupeCreanceProvider = new AcGroupeCreanceStateProvider('/groupe-creance');
export default acGroupeCreanceProvider;
