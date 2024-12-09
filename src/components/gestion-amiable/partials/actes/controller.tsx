import { useEffect,  useState } from "react";
import { TypeActeModel } from "../../../../states/model/type-acte.model";
import { TypeActeRepository } from "../../../../states/repository/type-actes.repository ";
import { UseFormReturn } from "react-hook-form";
import { InputField } from "../controller";
export function useActeController(form: UseFormReturn<InputField, any>){
    const typeActeRepository = new TypeActeRepository();
    const [typeActes, setTypeActes] = useState<TypeActeModel[]>([]);
    const [typeActeCode, setTypeActeCode] = useState("");
    const [typeActeLibelle, setTypeActeLibelle] = useState("");
  

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

    const getTypeActesDetails = ()=>{
        try {
            const result = typeActes.find((item: TypeActeModel) => item.typeActeCode === typeActeCode);
            if(result){
                form.setValue("acteDelai", result.typacteDelai);
                setTypeActeLibelle(result.typacteLib ?? "");
                form.setValue("typeActeLibelle", result.typacteLib);
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
        handleChangeTypeActe,
        typeActeCode,
        typeActeLibelle,
        confirm,
    }
}