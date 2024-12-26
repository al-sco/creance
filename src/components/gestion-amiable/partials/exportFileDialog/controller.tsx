import { useState } from "react";
import { ExportFileRepository } from "../../../../states/repository/export-file.repository";
import { ExportFileModel } from "../../../../states/model/export-file.model";
import { useAlerts } from "../../../compound-component/Alerts/useAlerts";
import { useGestionAmiableStores } from "../../use-gestion-amiable-stores";

export function useExportFileDialogController(actId?: number, onHide?: () => void) {
    const alerts = useAlerts();
    const [formatFile, setFormatFile] = useState<"PDF" | "EXCEL" | "HTML" | "WORD">();
    const exportRepository = new ExportFileRepository();
    const stores = useGestionAmiableStores();
    const [isLoading, setIsLoading] = useState(false)
    const delay = (milliseconds: any) => new Promise(resolve => setTimeout(resolve, milliseconds));

    const exporter = async (command: ExportFileModel) => {
        command.typeFichier = stores.typeActes
        const bold: any = await exportRepository.exportFile(command)
        alerts.openSuccessAlert("Fichier générer avec succès !");
        stores.setFormatFichiers(command.format);
        if(command.format === "WORD"){
            downloadFileWord(bold);
        }else{
            downloadFilePdf(bold)
        }
       
    }

    const downloadFilePdf = async (bold: any) => {
        const url = window.URL.createObjectURL(new Blob([bold], { type: "application/pdf" }));
        await delay(3000)
        setIsLoading(false)
        onHide && onHide();
        stores.setFirlUrl(url);
        stores.setPreviewFile(true)
    }

    const downloadFileWord = async (bold: any) => {
        await delay(3000)
        setIsLoading(false)
        onHide && onHide();
        stores.setFirlUrl(bold);
        stores.setPreviewFile(true)
    }
    const handleChangeFormat = (evnt: any) => {
        setFormatFile(evnt.target.value)
    }

    const onSubmit = async () => {
        if (!actId) {
            alerts.openErrorAlert("Une erreur s'est produite lors de la soumission !")
            return false;
        }
        try {
            setIsLoading(true)
            await exporter({
                actetId: actId, format: formatFile ? formatFile : "PDF", typeFichier: "CONVOCATION"
            })
        } catch (error) {

        }finally{
            setIsLoading(false)
        }
    }

    return {
        handleChangeFormat,
        formatFile,
        onSubmit,
        isLoading
    }
}