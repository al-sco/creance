
import axios from "axios";
import { getUrl } from "../../common/configs/api/api_configs";
import { GarantieReelModel } from "../model/garantie-reelle.model";
import { GarantiePhyModel } from "../model/garantie-phy.model";

export class GarantiePhyRepository{
    async getGarantiePhy(): Promise<GarantiePhyModel[]>{
        return (await axios.get<GarantieReelModel[]>(getUrl(`/ac-garantie-phy`)))?.data;
    }

    async getGarantiePhyByCode(id: string): Promise<GarantiePhyModel>{
        return (await axios.get<GarantiePhyModel>(getUrl(`/ac-garantie-phy/${id}`)))?.data;
    }
}