import axios from "axios";
import { getUrl } from "../../common/configs/api/api_configs";
import { CreanceModel } from "../model/creance.model";

export class CreanceRepository{
    async getCreance(): Promise<CreanceModel[]>{
        return (await axios.get<CreanceModel[]>(getUrl(`/ac-creance`)))?.data;
    }

    async getCreanceByCodeCreance(codeCreance: string): Promise<CreanceModel>{
        return (await axios.get<CreanceModel>(getUrl(`/ac-creance/${codeCreance}`)))?.data;
    }
}