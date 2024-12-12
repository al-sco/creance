import axios from "axios";
import { getUrl } from "../../common/configs/api/api_configs";
import { AuxiliaireJusticeModel } from "../model/auxiliaire-justice.model";

export class AuxiliaireJusticeRepository{
    async getAuxiliaireJustice(): Promise<AuxiliaireJusticeModel[]>{
        return (await axios.get<AuxiliaireJusticeModel[]>(getUrl(`/ac-auxiliaire-justice`)))?.data;
    }

    async getAuxilaireJusticeByCode(code: string): Promise<AuxiliaireJusticeModel>{
        return (await axios.get<AuxiliaireJusticeModel>(getUrl(`/ac-auxiliaire-justice/${code}`)))?.data;
    }
}