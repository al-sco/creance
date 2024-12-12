import { useEffect, useState } from "react";
import { CreanceRepository } from "../../../../states/repository/creance.repository";
import { CreanceModel } from "../../../../states/model/creance.model";
import { useAlerts } from "../../../compound-component/Alerts/useAlerts";
import {  UseFormReturn } from "react-hook-form";

import { InputField } from "../controller";
import { useGestionAmiableStores } from "../../use-gestion-amiable-stores";

export function useCreanceController( form: UseFormReturn<InputField, any>) {
    const alerts = useAlerts()
    const creanceRepository = new CreanceRepository();
    const [creances, setCreances] = useState<CreanceModel[]>([]);
    const [creanceCode, setCreanceCode] = useState("");
    const stores = useGestionAmiableStores()
    const fetchCreance = async () => {
        try {
            const resut = await creanceRepository.getCreance();
            setCreances(resut);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCreance();
    }, []);

    const handleChangeCreance = (event: any) => {
        setCreanceCode(event.target.value)
    }

    const getCreanceDetail = async () => {
        try {
            const code = stores.codeCreance ? stores.codeCreance : creanceCode
                const resut =  await creanceRepository.getCreanceByCodeCreance(code ?? "");;
                if (resut) {
                    form.setValue("debiteur", resut.debCode)
                    form.setValue("groupeCreance", resut.grpCreanCode)
                    form.setValue("capitalInitial", resut.creanCapitInit)
                    form.setValue("DatePremiereEcheance", resut.creanDatrec)
                    form.setValue("dateOctroi", resut.creanDatoctroi)
                    form.setValue("duree", resut.creanDuree)
                    form.setValue("periodicite", resut.periodCode)
                    form.setValue("montantDebloque", resut.periodCode)
                    form.setValue("dateFinEcheance", resut.creanDatfin)
                }
                code && setCreanceCode(code);
                form.setValue("codeCreance", code)
           
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCreanceDetail();
    }, [creanceCode, stores.codeCreance ])


    return {
        creances,
        alerts,
        form,
        handleChangeCreance,
        creanceCode
    }
}
