import { useEffect, useState } from "react";
import { CreanceRepository } from "../../../../states/repository/creance.repository";
import { CreanceModel } from "../../../../states/model/creance.model";
import { useAlerts } from "../../../compound-component/Alerts/useAlerts";
import {  UseFormReturn } from "react-hook-form";
import { useFormik } from "formik"
import { InputField } from "../controller";
import { useGestionAmiableStores } from "../../use-gestion-amiable-stores";

let codeCreance: any = []
export function useCreanceController( form: UseFormReturn<InputField, any>, visible?: boolean) {
    const alerts = useAlerts()
    const creanceRepository = new CreanceRepository();
    const [creances, setCreances] = useState<CreanceModel[]>([]);
    const [creanceCode, setCreanceCode] = useState("");
    const stores = useGestionAmiableStores();

    const fetchCreance = async () => {
        try {
            const resut = await creanceRepository.getCreance();
            setCreances(resut);
        } catch (error) {
        }
    }

    const formik = useFormik({
        initialValues:{
            creanceCode: ""
        },
        onSubmit:async(values)=>{
            try {
                const code = stores.codeCreance ? stores.codeCreance : values.creanceCode
                if(!code){
                    alerts.openErrorAlert("Veuillez saisir le champ : code créance !")
                    return false
                }
                    const result =  await creanceRepository.getCreanceByCodeCreance(code ?? "");
                    if (result) {
                        form.setValue("debCode", result.debCode)
                        form.setValue("debiteur", result.nomDebiteurs)
                        form.setValue("groupeCreance", result.grpCreanCode)
                        form.setValue("capitalInitial", result.creanCapitInit)
                        form.setValue("DatePremiereEcheance", result.creanDatrec)
                        form.setValue("dateOctroi", result.creanDatoctroi)
                        form.setValue("duree", result.creanDuree)
                        form.setValue("periodicite", result.periodCode)
                        form.setValue("montantDebloque", result.periodCode)
                        form.setValue("dateFinEcheance", result.creanDatfin)
                        form.setValue("grpCreanceLib", result.grpCreanceLib)
                        form.setValue("objCreanCode", result.objCreanCode);
                        form.setValue("obCreanceLib", result.objCreanceLib);
                        form.setValue("creanNbech", result.creanNbech);
                        form.setValue("creanDatech", result.creanDatech);
                        form.setValue("periodiciteLib", result.periodiciteLib)
                        form.setValue("creanDejRemb", result.creanDejRemb);
                        form.setValue("ovpCode", result.creanOp)
                    }
                     setCreanceCode(code);
                    form.setValue("codeCreance", code);
                    codeCreance.push(code)
               
            } catch (error) {
                alerts.openErrorAlert(error)
            }finally{
                codeCreance.splice(0, codeCreance.length);
            }
        }
    })

    useEffect(()=>{
        if(codeCreance.length > 0){
            setCreanceCode(codeCreance[0] ?? "")
        }
    },[codeCreance[0]])

    useEffect(() => {
        fetchCreance();
    }, []);

    useEffect(()=>{
        if(!visible){
            codeCreance.splice(0, codeCreance.length);
        }
    }, [visible])

    const handleChangeCreance = (event: any) => {
        if(codeCreance.length > 0){
            codeCreance.splice(0, codeCreance.length)
        }
        setCreanceCode(event.target.value);
        codeCreance.push(event.target.value)
    }

    const getCreanceDetail = async () => {
        try {
            const code = stores.codeCreance ? stores.codeCreance : creanceCode
            if(!code){
                return false
            }
                const result =  await creanceRepository.getCreanceByCodeCreance(code ?? "");
                if (result) {
                    form.setValue("debCode", result.debCode)
                    form.setValue("debiteur", result.nomDebiteurs)
                    form.setValue("groupeCreance", result.grpCreanCode)
                    form.setValue("capitalInitial", result.creanCapitInit)
                    form.setValue("DatePremiereEcheance", result.creanDatrec)
                    form.setValue("dateOctroi", result.creanDatoctroi)
                    form.setValue("duree", result.creanDuree)
                    form.setValue("periodicite", result.periodCode)
                    form.setValue("montantDebloque", result.periodCode)
                    form.setValue("dateFinEcheance", result.creanDatfin)
                    form.setValue("grpCreanceLib", result.grpCreanceLib)
                    form.setValue("objCreanCode", result.objCreanCode);
                    form.setValue("obCreanceLib", result.objCreanceLib);
                    form.setValue("creanNbech", result.creanNbech);
                    form.setValue("creanDatech", result.creanDatech);
                    form.setValue("periodiciteLib", result.periodiciteLib)
                    form.setValue("creanDejRemb", result.creanDejRemb);
                    form.setValue("ovpCode", result.creanOp)
                }
                code && setCreanceCode(code);
                form.setValue("codeCreance", code)
           
        } catch (error) {
            alerts.openErrorAlert(error)
        }
    }

    useEffect(() => {
        visible && getCreanceDetail();
    }, [visible])


    const afficher = async ()=>{
      await  getCreanceDetail();
    }
    return {
        creances,
        alerts,
        form,
        handleChangeCreance,
        creanceCode,
        afficher,
        formik
    }
}
