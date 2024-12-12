import axios from "axios";
import { ExportFileModel } from "../model/export-file.model";
import { getUrl } from "../../common/configs/api/api_configs";

export class ExportFileRepository{
    async exportFile(requete: ExportFileModel): Promise<void>{
        return (await axios.post(getUrl(`/ac-acte-reporting/convocation`), requete, { responseType: "blob"}))?.data;
    }
}