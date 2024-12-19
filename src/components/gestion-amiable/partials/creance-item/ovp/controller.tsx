import { useEffect, useState } from "react";
import { useGestionAmiableStores } from "../../../use-gestion-amiable-stores";
import { useCreateActesController } from "../../controller";
import * as yup from "yup"
import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { OvpRepository } from "../../../../../states/repository/ovp.repository";
import { OvpModel } from "../../../../../states/model/ovp.model";

interface InputField {
    id?: string;
    ovpDatsigne?: string;
    ovpDatdeb?: string;
    ovpDatfin?: string;
    ovpNbVirm?: string;
 
};

const schema = yup.object().shape({})
export function useOvpController() {
    const ovpRepository = new OvpRepository();
    const [ovps, setOvps] = useState<OvpModel[]>([]);
    const acteStores = useGestionAmiableStores();
    const ctrl = useCreateActesController(acteStores.acteCode);
    const [code, setCode] = useState("");

    const fetchOvp = async () => {
        try {
            const result = await ovpRepository.getOvp();
            result && setOvps(result);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchOvp();
    }, []);

    const initialValues: InputField = Object.assign({}, {
        id: "",
        ovpNbVirm: "",
        ovpDatdeb: "",
        ovpDatfin:"",
        ovpDatsigne:""
    });

    const form: UseFormReturn<InputField, any> = useForm<InputField>({
        values: initialValues,
        resolver: yupResolver(schema)
    });

    const getGarantieDetails = async () => {
        try {
            const result = await ovpRepository.getOvpDetail(code);
            result && form.reset({
                id: result.id?.toString() ?? "",
                ovpNbVirm: result.ovpNbVirm?.toString(),
                ovpDatdeb: result.ovpDatdeb,
                ovpDatfin: result.ovpDatfin,
                ovpDatsigne: result.ovpDatsigne
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getGarantieDetails();
    }, [code])

    const handleChangeOvp = (event: any) => {
        setCode(event.target.value);
        ctrl.form.setValue("ovpCode", event.target.value);
    }

    return {
        ovps,
        onSubmit: ctrl.onSubmit,
        handleChangeOvp,
        form,
        formGa: ctrl.form,
        alerts: ctrl.alerts,
        code
    }
}