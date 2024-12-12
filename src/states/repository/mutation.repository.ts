import axios from "axios";
import { getUrl } from "../../common/configs/api/api_configs";
import { MutationModel } from "../model/mutation.model";

export class MutationRepository{
    async getMutation(): Promise<MutationModel[]>{
        return (await axios.get<MutationModel[]>(getUrl(`/ac-mutation`)))?.data;
    }

    async getMutationByCode(codeMutation: string): Promise<MutationModel>{
        return (await axios.get<MutationModel>(getUrl(`/ac-mutation/${codeMutation}`)))?.data;
    }
}