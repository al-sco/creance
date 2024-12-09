import { useEffect, useState } from "react";
import { LogementRepository } from "../../../../../states/repository/logement.repository";
import { LogementModel } from "../../../../../states/model/logment.model";
import { useGestionAmiableStores } from "../../../use-gestion-amiable-stores";
import { useCreateActesController } from "../../controller";
import * as yup from "yup"
import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface InputField{
    lot?: string;
    bloc?: string;
    nPorte?: string;
    nPiece?: string;
    liot?: string;
    operation?: string;
    quartier?: string;
    tyoeLog?: string;
    modeAcquisition?: string;
    description?: string;
    logeCode?: string;
};

const schema = yup.object().shape({})

export function useLogementController(){
    const logementRepisitory = new LogementRepository();
    const [logements, setLoagments] = useState<LogementModel[]>([]);
    const acteStores = useGestionAmiableStores();

    const ctrl = useCreateActesController(acteStores.acteCode);
    const [codeLogement, setLogement] = useState("");


    const fetchLogements = async()=>{
        try {
            const result = await logementRepisitory.getLogement();
            result && setLoagments(result);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchLogements();
    },[]);

    const initialValues: InputField = Object.assign({}, {
        lot: "",
        bloc: "",
        nPorte: "",
        nPiece: "",
        liot: "",
        operation: "",
        quartier: "",
        tyoeLog: "",
        modeAcquisition: "",
        description: "",
        logeCode: "",
    });

    const form: UseFormReturn<InputField, any> = useForm<InputField>({
        values: initialValues,
        resolver: yupResolver(schema)
    });

    const getLogementDetails = async()=>{
        try {
            const result = await logementRepisitory.getLogementByCode(codeLogement);
            result && form.reset({
                lot: result.logeLotNum,
                bloc: result.logeBlocLib,
                nPorte: result.logePorteNum,
                nPiece: result.logeNbpiece,
                liot: result.logeIlotNum,
                operation: result.operatCode,
                quartier: result.quartCode,
                tyoeLog: result.typeLogeCode,
                modeAcquisition: result.modacCode,
                description: result.ancCreanCode,
                logeCode: result.logeCode,
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getLogementDetails();
    },[codeLogement])

    const handleChangeLogement = (event: any)=>{
        setLogement(event.target.value);
        ctrl.form.setValue("logeCode", event.target.value);
        ctrl.form.setValue("typacteCode", acteStores.typActeCode);
        ctrl.form.setValue("codeCreance", acteStores.codeCreance)
    }

    return {
        logements,
        onSUbmit: ctrl.onSubmit,
        handleChangeLogement,
        codeLogement,
        form,
        alerts: ctrl.alerts,
        formAct: ctrl.form
    }
}