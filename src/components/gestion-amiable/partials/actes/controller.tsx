import { useEffect,  useState } from "react";
import { TypeActeModel } from "../../../../states/model/type-acte.model";
import { TypeActeRepository } from "../../../../states/repository/type-actes.repository ";
import { UseFormReturn } from "react-hook-form";
import { InputField } from "../controller";
export function useActeController(form: UseFormReturn<InputField, any>){
    const typeActeRepository = new TypeActeRepository();
    const [typeActes, setTypeActes] = useState<TypeActeModel[]>([]);
    const [typeActeCode, setTypeActeCode] = useState<any>("");
    const [typeActeLibelle, setTypeActeLibelle] = useState<any>("");
  

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

    // useEffect(()=>{
    //     form.setValue("acteDatecrea",( new Date()).toDateString())
    // })

    const getTypeActesDetails = ()=>{
        const typeCode = form.getValues().typacteCode ? form.getValues().typacteCode : typeActeCode
        try {
            const result = typeActes.find((item: TypeActeModel) => item.typeActeCode === typeCode);
            if(result){
                form.setValue("acteDelai", result.typacteDelai);
                setTypeActeLibelle(result.typacteLib ?? "");
                form.setValue("typeActeLibelle", result.typacteLib);
                form.setValue("acterCode", typeActeCode)
                form.setValue("typacteOrdEmis", result.typacteOrdEmis)
            };
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchTypeActes();
        getTypeActesDetails();
        setTypeActeCode(form.getValues().typacteCode)
    },[typeActeCode,form.getValues().typacteCode]);

   
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