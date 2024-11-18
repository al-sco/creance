
import axios from "axios";
import { getUrl } from "../../common/configs/api/api_configs";
import { ActeModel, CreerActeModel } from "../model/actes.model";

export class ActeRepository{
    async createActes(command: CreerActeModel): Promise<void>{
        return (await axios.post(getUrl(`/acte`), command))?.data;
    }

    async getActeByCode(codeCreance: string): Promise<ActeModel>{
        return (await axios.get<ActeModel>(getUrl(`/creance/${codeCreance}`)))?.data;
    }

    async getListActes(): Promise<ActeModel[]>{
        return (await axios.get<ActeModel[]>(getUrl(`/acte`)))?.data;
    }

    async deleteActe(code: string): Promise<void>{
        return (await axios.delete(getUrl(`/acte/${code}`)))?.data;
    }
}

