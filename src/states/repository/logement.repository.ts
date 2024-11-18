import axios from "axios";
import { getUrl } from "../../common/configs/api/api_configs";
import { LogementModel } from "../model/logment.model";

export class LogementRepository{
    async getLogement(): Promise<LogementModel[]>{
        return (await axios.get<LogementModel[]>(getUrl(`/logement`)))?.data;
    }
    async getLogementByCode(logCode?: string): Promise<LogementModel>{
        return (await axios.get<LogementModel>(getUrl(`/logement/${logCode}`)))?.data;
    }
}