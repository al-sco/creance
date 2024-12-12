import { useEffect, useState } from "react";
import { ActeRepository } from "../../states/repository/actes.repository";
import { useAlerts } from "../compound-component/Alerts/useAlerts";
import { useGestionAmiableStores } from "./use-gestion-amiable-stores";

export function useListeActeController() {
    const alerts = useAlerts();
    const acteRepository = new ActeRepository();
    const [visible, setVisible] = useState(false);
    const [acteCode, setActeCode] = useState("");
     const [actId, setActId] = useState<any>();
     const [exportFileVisible, setExportFileVisible] = useState(false)
    const stores = useGestionAmiableStores();


    const fetchActes = async () => {
        try {
            stores.setActeLoading(true);
            const result = await acteRepository.getListActes();
            result && stores.setActes(result);
        } catch (error) {
            console.log(error);
        }finally{
            stores.setActeLoading(false);
        }
    }

    useEffect(() => {
        fetchActes();
    }, []);

    const openCreateFormDialog = () => {
        setVisible(true);
    }

    const openUpdateFormDIalog = (data?: any) => {
        setVisible(true);
        setActeCode(data.id ?? "");
        stores.setCodeCreance(data?.codeCreande);
        stores.setActId(data.id ?? "")
    }

    const closeCreateFormDIalog = () => {
        setVisible(false);
        setActeCode("");
    }

    const deleteActe = async (acteCode?: string) => {
        try {
            await acteRepository.deleteActe(acteCode ?? "");
            fetchActes();
            alerts.openSuccessAlert("Acte supprimé avec succès!");
            fetchActes();
        } catch (error) {
            console.log(error);
            alerts.openErrorAlert("Erreur lors de la suppression de l'acte!");
        }
    }

    const openExportFileDialog =(id?: string, typeActCode?: string) =>{
        if(typeActCode !== "60" && typeActCode !== "55"){
            alerts.openErrorAlert("ce type de fichier est en cours de conception !");
            return false
        }
        setActId(id);
        setExportFileVisible(true)
    }

    const closeExportFileDialog =() =>{
        setActId("");
        setExportFileVisible(false)
    }
    return {
        alerts,
        openCreateFormDialog,
        openUpdateFormDIalog,
        closeCreateFormDIalog,
        acteCode,
        visible,
        deleteActe,
        refreshData: fetchActes,
        openExportFileDialog,
        closeExportFileDialog,
        actId,
        exportFileVisible
    }
}