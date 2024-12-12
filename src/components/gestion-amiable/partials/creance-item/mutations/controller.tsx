import { useEffect, useState } from "react";
import { useGestionAmiableStores } from "../../../use-gestion-amiable-stores";
import { useCreateActesController } from "../../controller";
import * as yup from "yup"
import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MutationRepository } from "../../../../../states/repository/mutation.repository";
import { MutationModel } from "../../../../../states/model/mutation.model";

interface InputField{
    code?: string;
    cesCode?: string;
    propCode?: string;
    mutDatecrea?: string;
    logeCode?: string;
    terCode?: string;
    mutValide?: string;
    mutUser?: string;
    dateCtl?: string;
    grpCreanCode?: string;
};

const schema = yup.object().shape({})

export function useMutationController(){
    const mutationRepisitory = new MutationRepository();
    const [mutations, setMutations] = useState<MutationModel[]>([]);
    const acteStores = useGestionAmiableStores();
    const ctrl = useCreateActesController(acteStores.acteCode);
    const [codeMutation, setCodeMutation] = useState("");

    const fetchMutations = async()=>{
        try {
            const result = await mutationRepisitory.getMutation();
            console
            result && setMutations(result);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchMutations();
    },[]);

    const initialValues: InputField = Object.assign({}, {
        code: "",
        cesCode: "",
        propCode: "",
        mutDatecrea: "",
        logeCode: "",
        dateCtl: "",
        mutValide: "",
        grpCreanCode: "",
    });

    const form: UseFormReturn<InputField, any> = useForm<InputField>({
        values: initialValues,
        resolver: yupResolver(schema)
    });

    const getTerrainDetails = async()=>{
        try {
            const result = await mutationRepisitory.getMutationByCode(codeMutation);
            result && form.reset({
                code: result.id,
                cesCode: result.cesCode,
                mutDatecrea: result.mutDatecrea,
                logeCode: result.logeCode,
                dateCtl: result.dateCtl,
                mutValide: result.mutValide,
                grpCreanCode: result.grpCreanCode,
                mutUser: result.mutUser	
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getTerrainDetails();
    },[codeMutation])

    const handleChangeMutation = (event: any)=>{
        setCodeMutation(event.target.value);
        ctrl.form.setValue("mutCode", event.target.value);
    }

    console.log(ctrl.form.getValues())
    return {
        mutations,
        onSUbmit: ctrl.onSubmit,
        handleChangeMutation,
        codeMutation,
        form,
        formMut: ctrl.form,
        alerts: ctrl.alerts
    }
}