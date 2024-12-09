
import axios from "axios";
import { getUrl } from "../../common/configs/api/api_configs";
import { TypeActeModel } from "../model/type-acte.model";

export class TypeActeRepository{

    async getTypeActes(): Promise<TypeActeModel[]>{
        return (await axios.get<TypeActeModel[]>(getUrl(`/ac-type-acte`)))?.data;
    }

    async getTypeActesByCode(code: string): Promise<TypeActeModel>{
        return (await axios.get<TypeActeModel>(getUrl(`/ac-type-acte/${code}`)))?.data;
    }
}