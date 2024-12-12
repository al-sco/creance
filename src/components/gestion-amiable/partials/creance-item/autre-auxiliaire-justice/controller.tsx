import { useEffect, useState } from "react";
import { useGestionAmiableStores } from "../../../use-gestion-amiable-stores";
import { useCreateActesController } from "../../controller";
import * as yup from "yup"
import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuxiliaireJusticeRepository } from "../../../../../states/repository/auxiliaire-justice.repository copy";
import {  AuxiliaireJusticeModel } from "../../../../../states/model/auxiliaire-justice.model";

interface InputField{
    autAuxilRang?: string;
    autAuxilDate?: string;
    auxiCode?: string;
    auxiNom?: string;
};

const schema = yup.object().shape({})

export function useAuxiliaireJusticeController(){
    const auxilaireJusticeRepository = new AuxiliaireJusticeRepository();
    const [auxilairesJusticies, setAuxiliaireJustcices] = useState<AuxiliaireJusticeModel[]>([]);
    const acteStores = useGestionAmiableStores();
    const ctrl = useCreateActesController(acteStores.acteCode);
    const [code, setCode] = useState("");

    const fetchAuxilaires = async()=>{
        try {
            const result = await auxilaireJusticeRepository.getAuxiliaireJustice();
            result && setAuxiliaireJustcices(result);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        fetchAuxilaires();
    },[]);

    const initialValues: InputField = Object.assign({}, {
        autAuxilRang:"",
        autAuxilDate: "",
        auxiCode: "",
        auxiNom:""
    });

    const form: UseFormReturn<InputField, any> = useForm<InputField>({
        values: initialValues,
        resolver: yupResolver(schema)
    });

    const getAuxilaireDetails = async()=>{
        try {
            const result = await auxilaireJusticeRepository.getAuxilaireJusticeByCode(code);
            result && form.reset({
                autAuxilRang: result.autAuxilRang?.toString(),
                autAuxilDate: result.autAuxilDate,
                auxiCode: result.auxiCode,
                auxiNom: result.auxiNom
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getAuxilaireDetails();
    },[code])

    const handleChangeAuxilaire = (event: any)=>{
        setCode(event.target.value);
        ctrl.form.setValue("auxiCode", event.target.value);
    }

   
    return {
        auxilairesJusticies,
        onSUbmit: ctrl.onSubmit,
        handleChangeAuxilaire,
        form,
        formAux: ctrl.form,
        alerts: ctrl.alerts,
        code
    }
}