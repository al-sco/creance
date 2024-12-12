import { useEffect, useState } from "react";
import { useGestionAmiableStores } from "../../../use-gestion-amiable-stores";
import { useCreateActesController } from "../../controller";
import * as yup from "yup"
import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GarantieReelRepository } from "../../../../../states/repository/garantie-reelle.repository";
import { GarantieReelModel } from "../../../../../states/model/garantie-reelle.model";

interface InputField{
    id?: string;
    gareelLib?: string;
    gareelObjMont?: string;
    gareelObjNum?: string;
    gareelDateCtl?: string; 
};

const schema = yup.object().shape({})

export function useGarantieReelController(){
    const garantieReelRepository = new GarantieReelRepository();
    const [garantieRels, setGarantieRels] = useState<GarantieReelModel[]>([]);
    const acteStores = useGestionAmiableStores();
    const ctrl = useCreateActesController(acteStores.acteCode);
    const [code, setCode] = useState("");

    const fetchMutations = async()=>{
        try {
            const result = await garantieReelRepository.getGarantieReelle();
            result && setGarantieRels(result);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchMutations();
    },[]);

    const initialValues: InputField = Object.assign({}, {
        id:"",
        gareelLib: "",
        gareelObjMont: "",
        gareelObjNum: "",
        gareelDateCtl: "",
    });

    const form: UseFormReturn<InputField, any> = useForm<InputField>({
        values: initialValues,
        resolver: yupResolver(schema)
    });

    const getGarantieDetails = async()=>{
        try {
            const result = await garantieReelRepository.getGarantieReelleByCode(code);
            result && form.reset({
                id: result.id,
                gareelLib: result.gareelLib,
                gareelObjMont: result.gareelObjMont,
                gareelObjNum: result.gareelObjNum,
                gareelDateCtl: result.gareelDateCtl,
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getGarantieDetails();
    },[code])

    const handleChangeGarantieR = (event: any)=>{
        setCode(event.target.value);
        ctrl.form.setValue("gareelCode", event.target.value);
    }

    console.log(ctrl.form.getValues())
    return {
        garantieRels,
        onSUbmit: ctrl.onSubmit,
        handleChangeGarantieR,
        CustomElementRegistry,
        form,
        formGa: ctrl.form,
        alerts: ctrl.alerts,
        code
    }
}