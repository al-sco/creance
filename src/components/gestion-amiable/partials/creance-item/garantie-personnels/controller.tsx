import { useEffect, useState } from "react";
import { useGestionAmiableStores } from "../../../use-gestion-amiable-stores";
import { useCreateActesController } from "../../controller";
import * as yup from "yup"
import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GarantiePhyModel } from "../../../../../states/model/garantie-phy.model";
import { GarantiePhyRepository } from "../../../../../states/repository/garantie-phy.repository";

interface InputField {
    id?: string;
    garphysSalNet?: string;
    garphysNom?: string;
};

const schema = yup.object().shape({})
export function useGarantiePhyController() {
    const garantiePhyRepository = new GarantiePhyRepository();
    const [garantiePhys, setGarantiePhs] = useState<GarantiePhyModel[]>([]);
    const acteStores = useGestionAmiableStores();
    const ctrl = useCreateActesController(acteStores.acteCode);
    const [code, setCode] = useState("");

    const fetchMutations = async () => {
        try {
            const result = await garantiePhyRepository.getGarantiePhy();
            result && setGarantiePhs(result);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMutations();
    }, []);

    const initialValues: InputField = Object.assign({}, {
        id: "",
        garphysSalNet: "",
        garphysNom: ""
    });

    const form: UseFormReturn<InputField, any> = useForm<InputField>({
        values: initialValues,
        resolver: yupResolver(schema)
    });

    const getGarantieDetails = async () => {
        try {
            const result = await garantiePhyRepository.getGarantiePhyByCode(code);
            result && form.reset({
                id: result.id,
                garphysSalNet: result.garphysSalNet,
                garphysNom: result.garphysNom,
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getGarantieDetails();
    }, [code])

    const handleChangeGarantiePh = (event: any) => {
        setCode(event.target.value);
        ctrl.form.setValue("garphysCodeUser", event.target.value);
    }

    return {
        garantiePhys,
        onSUbmit: ctrl.onSubmit,
        handleChangeGarantiePh,
        form,
        formGa: ctrl.form,
        alerts: ctrl.alerts,
        code
    }
}