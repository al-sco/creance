import axios from "axios";
import { getUrl } from "../../common/configs/api/api_configs";
import { OvpModel } from "../model/ovp.model";


export class OvpRepository{
    async getOvp(): Promise<OvpModel[]>{
        return (await axios.get<OvpModel[]>(getUrl(`/ovp`)))?.data;
    }
}