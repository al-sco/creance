import axios from "axios";
import { getUrl } from "../../common/configs/api/api_configs";
import { GarantieReelModel } from "../model/garantie-reelle.model";

export class GarantieReelRepository{
    async getGarantieReelle(): Promise<GarantieReelModel[]>{
        return (await axios.get<GarantieReelModel[]>(getUrl(`/ac-garantie-reelle`)))?.data;
    }

    async getGarantieReelleByCode(code: string): Promise<GarantieReelModel>{
        return (await axios.get<GarantieReelModel>(getUrl(`/ac-garantie-reelle/${code}`)))?.data;
    }
}