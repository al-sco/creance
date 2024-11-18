import { useEffect, useState } from "react";
import { TypeActeModel } from "../../../../states/model/type-acte.model";
import { TypeActeRepository } from "../../../../states/repository/type-actes.repository ";
import { UseFormReturn } from "react-hook-form";
import { InputField } from "../controller";

export function useActeController(form: UseFormReturn<InputField, any>){
    const typeActeRepository = new TypeActeRepository();
    const [typeActes, setTypeActes] = useState<TypeActeModel[]>([]);
    const [typeActeCode, setTypeActeCode] = useState("")

    const fetchTypeActes = async()=>{
        try {
            const result = await typeActeRepository.getTypeActes();
            result && setTypeActes(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchTypeActes();
    },[]);

    const getTypeActesDetails = async()=>{
        try {
            const result = await typeActeRepository.getTypeActesByCode(typeActeCode ?? "");
            if(result){
                form.setValue("acteDelai", result.typacteDelai);
            };
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getTypeActesDetails();
    },[typeActeCode]);

    const handleChangeTypeActe =(event: any)=>{
       setTypeActeCode(event.target.value)
    }

    return {
        typeActes,
        handleChangeTypeActe
    }
}