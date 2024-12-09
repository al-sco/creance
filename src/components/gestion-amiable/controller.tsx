import { useEffect, useState } from "react";
import { ActeRepository } from "../../states/repository/actes.repository";
import { useAlerts } from "../compound-component/Alerts/useAlerts";
import { ActeModel } from "../../states/model/actes.model";

const data = [
    { acteCode: "code 01", bloc: "bloc 01", lot: "lot 01", nPorte: "0125365M" },
    { acteCode: "code 02", bloc: "bloc 02", lot: "lot 03", nPorte: "0125365M" },
    { acteCode: "code 03", bloc: "bloc 03", lot: "lot 02", nPorte: "0125365M" }
]

export function useListeActeController() {
    const alerts = useAlerts();
    const acteRepository = new ActeRepository();
    const [actes, setActes] = useState<ActeModel[]>(data as any[]);
    const [visible, setVisible] = useState(false);
    const [acteCode, setActeCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isPdfShow, setIsPadfShow] = useState(false)
   

    const fetchActes = async () => {
        try {
            setIsLoading(true);
            const result = await acteRepository.getListActes();
            result && setActes(result);
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchActes();
    }, []);

    const openCreateFormDialog = () => {
        setVisible(true);
    }

    const openUpdateFormDIalog = (id?: string) => {
        setVisible(true);
        setActeCode(id ?? "");
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

    return {
        actes,
        alerts,
        openCreateFormDialog,
        openUpdateFormDIalog,
        closeCreateFormDIalog,
        acteCode,
        visible,
        deleteActe,
        refreshData: fetchActes,
        isLoading,
        setIsPadfShow,
        isPdfShow

    }
}