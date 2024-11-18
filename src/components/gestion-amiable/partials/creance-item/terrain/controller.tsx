import { useEffect, useState } from "react";
import { useGestionAmiableStores } from "../../../use-gestion-amiable-stores";
import { useCreateActesController } from "../../controller";
import * as yup from "yup"
import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TerrainRepository } from "../../../../../states/repository/terrain.repository";
import { TerrainModel } from "../../../../../states/model/terain.model";

interface InputField{
    lot?: string;
    numExt?: string;
    superficie?: string;
    operation?: string;
    description?: string;
};

const schema = yup.object().shape({})

export function useTerrainController(){
    const terrianRepisitory = new TerrainRepository();
    const [terrains, setTerrains] = useState<TerrainModel[]>([]);
    const acteStores = useGestionAmiableStores();
    const ctrl = useCreateActesController(acteStores.acteCode);
    const [codeTerrain, setCodeTerrain] = useState("");

    const fetchTerrains = async()=>{
        try {
            const result = await terrianRepisitory.getTerrains();
            result && setTerrains(result);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchTerrains();
    },[]);

    const initialValues: InputField = Object.assign({}, {
        lot: "",
        numExt: "",
        superficie: "",
        operation: "",
        description: "",
    });

    const form: UseFormReturn<InputField, any> = useForm<InputField>({
        values: initialValues,
        resolver: yupResolver(schema)
    });

    const getTerrainDetails = async()=>{
        try {
            const result = await terrianRepisitory.getTerrainByCode(codeTerrain);
            result && form.reset({
                lot: result.terLotNum,
                numExt: result.terExtNum,
                superficie: result.terSuperf?.toString(),
                operation: result.operatCode,
                description: result.contVteCode?.toString()
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getTerrainDetails();
    },[codeTerrain])

    const handleChangeTerrain = (event: any)=>{
        setCodeTerrain(event.target.value);
        ctrl.form.setValue("terCode", event.target.value);
    }

    return {
        terrains,
        onSUbmit: ctrl.onSubmit,
        handleChangeTerrain,
        codeTerrain,
        form
    }
}