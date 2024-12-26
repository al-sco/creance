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
        } catch (error) {}finally{
            stores.setActeLoading(false);
        }
    }

    useEffect(() => {
        fetchActes();
    }, []);

    useEffect(()=>{
        if(!visible){
            setActeCode("")
            stores.setActId("")
        }
    },[acteCode])

    const openCreateFormDialog = () => {
        setVisible(true);
    }

    const openUpdateFormDIalog = (data?: any) => {
        setActeCode(data.id ?? "");
        stores.setCodeCreance(data?.codeCreande);
        setVisible(true);
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

    const openExportFileDialog =(id?: string, typActeLib?: string) =>{
        setTypaActes(typActeLib)
        setActId(id);
        setExportFileVisible(true)
    }

    const setTypaActes =(typeActe?: string) =>{
        if(typeActe?.toUpperCase()?.includes("CONVOCATION")){
            stores.setTypeActes("CONVOCATION")
        }else if(typeActe?.includes("RAPPEL")){
            stores.setTypeActes("LETTRE_RAPPEL")
        }else if(typeActe?.toUpperCase().includes("DEMEURE")){
            stores.setTypeActes("MISE_EN_DEMEURE")
        }else if(typeActe?.toUpperCase().includes("SOMMATION")){
            stores.setTypeActes("SOMMATION_DE_PAYER")
        }
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