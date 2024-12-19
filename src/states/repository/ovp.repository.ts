import axios from "axios";
import { getUrl } from "../../common/configs/api/api_configs";
import { OvpModel } from "../model/ovp.model";


export class OvpRepository{
    async getOvp(): Promise<OvpModel[]>{
        return (await axios.get<OvpModel[]>(getUrl(`/ac-ovp`)))?.data;
    };
    async getOvpDetail(id: string): Promise<OvpModel>{
        return (await axios.get<OvpModel>(getUrl(`/ac-ovp/${id}`)))?.data;
    }
}