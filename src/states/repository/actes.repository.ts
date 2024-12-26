
import axios from "axios";
import { getUrl } from "../../common/configs/api/api_configs";
import { ActeModel, CreerActeModel } from "../model/actes.model";

export class ActeRepository{
    async createActes(command: CreerActeModel): Promise<void>{
        return (await axios.post(getUrl(`/ac-acte/creer`), command))?.data;
    }

    async modifierActe(command: CreerActeModel): Promise<void>{
        return (await axios.post(getUrl(`/ac-acte/modifier`), command))?.data;
    }

    async getActeByCode(code: string): Promise<ActeModel>{
        return (await axios.get<ActeModel>(getUrl(`/ac-acte/${code}`)))?.data;
    }

    async getListActes(): Promise<ActeModel[]>{
        return (await axios.get<ActeModel[]>(getUrl(`/ac-acte/liste-acte`)))?.data;
    }

    async deleteActe(code: string): Promise<void>{
        return (await axios.delete(getUrl(`/ac-acte/${code}`)))?.data;
    }
}

