import {useCallback, useRef, useState} from "react";
import {Toast} from "primereact/toast";
import {confirmPopup} from "primereact/confirmpopup";

export function useAlerts() {
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const toast = useRef<Toast>(null);
    const tagKey = 'key' + Math.random() * 1000;

    const openSuccessAlert = useCallback((sucessMessage: string) => {
        toast.current?.show({detail: sucessMessage, summary: "Succès !", severity: "success"});
    }, []);

    const openErrorAlert = useCallback((error: any) => {
        if (error?.response?.data?.erreurs) {
            setErrorMessage(error.response.data.erreurs.map((item: any, index: number) => `${index + 1} - ${item}`).join("\n ---------------- \n"));
        } else if (error?.response?.data?.detail) {
            setErrorMessage(error.response.data.detail);
        } else if (error.response?.status === 400) {
            setErrorMessage("Formulaire mal formé. Veuillez vérifier que vous avez correctement renseigné tous les champs !");

        } else if (error.response?.status === 500) {
            setErrorMessage("Une erreur non identifiée liée au serveur est survenue. Veuillez contacter le service technique !");
        } else if (error.response?.status === 404) {
            setErrorMessage("La ressource recherché est inexistante !");
        } else if (error.response?.status === 401) {
            setErrorMessage("Vous ne disposez pas des droits nécessaires pour effectuer cette action !");
        } else if (error.message) {
            setErrorMessage(error.message);
        } else {
            setErrorMessage(error);
        }
        setErrorVisible(true);
    }, []);

    const openConfirmAlert = useCallback((event: any, message: string, accept?: () => void, reject?: () => void) => {
        confirmPopup({
            target: event.currentTarget as HTMLInputElement,
            message: message,
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: "Oui",
            rejectLabel: "Non",
            className: "AtlConfirmDialog",
            accept,
            reject,
        });
    }, []);

    const closeErrorAlert = useCallback(() => {
        setErrorVisible(false);
    }, []);

    return {
        errorVisible, errorMessage, closeErrorAlert, openConfirmAlert,
        openErrorAlert, openSuccessAlert, toast, tagKey
    }
}
