import axios from "axios";
import { SelectItem } from "../../../common/configs/ui/creance/creance.type";
import { AcBanqueAgence } from "../../AcData.types";
import ICrudStateProvider from './ICrudStateProvider'
import { getUrl } from "../../../common/configs/api/api_configs";
import { computed, signal, Signal } from "@preact/signals-react";





class AcBanqueAgenceStateProvider extends ICrudStateProvider<AcBanqueAgence> {
    private currentSelectedBanqueItem: Signal<SelectItem | undefined>;
    mapDataToJson(data: AcBanqueAgence): {} {
        return {
            id: data["id"],
            code: data["id"],
            bqCode: this.currentSelectedBanqueItem?.value?.value,
            libelle: data["libelle"],
        }
    }

    constructor(basePath: string, initialState?: {}) {
        super(basePath, initialState)
        this.currentSelectedBanqueItem = signal(undefined)
    }



    filteredAgenceBanque = computed(() => (this.getState().value as AcBanqueAgence[]).filter((agenceBanque) => {
        console.log(this.currentSelectedBanqueItem?.value?.value)
        if (!this.currentSelectedBanqueItem?.value) {
            return true;
        }
        return agenceBanque.bqCode?.toString().toLowerCase() == this.currentSelectedBanqueItem?.value?.value.toString().toLowerCase()
    }))

    setCurrentSelectedBanque = (selectedBanque?: SelectItem) => {
        this.currentSelectedBanqueItem!.value = selectedBanque;
    }





    mapEntitieFrom(json: any): AcBanqueAgence {
        return {
            id: json["id"],
            code: json["id"],
            bqCode: json['bqCode'],
            libelle: json["libelle"],
        }
    }


    find = async (): Promise<AcBanqueAgence[]> => {
        let { data, status } = await axios.get(getUrl(this.basePath),
            {
                headers: {
                    'ngrok-skip-browser-warning': true
                }
            })
        if (status == 200) {

            console.log(data);

            this.getState().value = data.map(this.mapEntitieFrom)
        }
        return this.getState().value as AcBanqueAgence[]
    }

    getSelectItemsWithObjectAsValue = async (): Promise<SelectItem[]> => {
        let typeDebiteurs = this.getState().value as AcBanqueAgence[];
        let _ = typeDebiteurs.map((typeDebiteur) => ({
            title: typeDebiteur.libelle,
            value: typeDebiteur
        }));

        console.log(_)

        return _
    };

    getAgenceBanqueById = (agenceBanqueCode: string): AcBanqueAgence | undefined => {
        let agenceBanques = this.getState().value as AcBanqueAgence[];

        let _ = agenceBanques.find((agenceBanque) => agenceBanque.code.toLowerCase().trim() == agenceBanqueCode.toLowerCase().trim())
        console.log(_)

        return _
    };


}

const acBanqueAgenceProvider = new AcBanqueAgenceStateProvider('/agences')
export default acBanqueAgenceProvider



