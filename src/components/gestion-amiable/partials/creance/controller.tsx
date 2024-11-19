import { useEffect, useState } from "react";
import { CreanceRepository } from "../../../../states/repository/creance.repository";
import { CreanceModel } from "../../../../states/model/creance.model";
import { useAlerts } from "../../../compound-component/Alerts/useAlerts";
import {  UseFormReturn } from "react-hook-form";

import { InputField } from "../controller";

export function useCreanceController( form: UseFormReturn<InputField, any>) {
    const alerts = useAlerts()
    const creanceRepository = new CreanceRepository();
    const [creances, setCreances] = useState<CreanceModel[]>([]);
    const [creanceCode, setCreanceCode] = useState("")

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

    const getCreanceDetail =  () => {
        try {
            const resut =  creances.find((item: CreanceModel) => item.creanCode == creanceCode);
            if (resut) {
                form.reset({
                    debiteur: resut.debCode,
                    groupeCreance: resut.grpCreanCode,
                    objet: resut.creanObjet,
                    capitalInitial: resut.creanCapitInit,
                    DatePremiereEcheance: resut.creanDatrec,
                    dateOctroi: resut.creanDatoctroi,
                    duree: resut.creanDuree,
                    periodicite: resut.periodCode,
                    montantDebloque: resut.creanMontDebloq,
                    nbEcheance: "",
                    dateFinEcheance: resut.creanDatfin,
                })
                form.setValue("codeCreance", creanceCode)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCreanceDetail();
    }, [creanceCode])


    return {
        creances,
        alerts,
        form,
        handleChangeCreance,
        creanceCode
    }
}
