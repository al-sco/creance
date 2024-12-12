import axios from "axios";
import { getUrl } from "../../common/configs/api/api_configs";
import { TerrainModel } from "../model/terain.model";

export class TerrainRepository{
    async getTerrains(): Promise<TerrainModel[]>{
        return (await axios.get<TerrainModel[]>(getUrl(`/ac-terrain`)))?.data;
    }

    async getTerrainByCode(terCode: string): Promise<TerrainModel>{
        return (await axios.get<TerrainModel>(getUrl(`/ac-terrain/${terCode}`)))?.data;
    }
}