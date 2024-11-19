
"use client"
import * as yup from "yup";
import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreerActeModel } from "../../../states/model/actes.model";
import { ActeRepository } from "../../../states/repository/actes.repository";
import { useAlerts } from "../../compound-component/Alerts/useAlerts";
import { useEffect } from "react";


export interface InputField {
    acterCode?: string;
    logeCode?: string;
    codeCreance?: string;
    typacteCode?: string;
    gestCode?: string;
    auxiCode?: string;
    ovpCode?: string;
    gareelCode?: string;
    mutCode?: string;
    acteDatecrea?: string;
    acteDemand?: string;
    acteDelai?: string;
    acteCout?: string;
    acteRang?: string;
    acteDatrem?: string;
    acteRef?: string;
    saisCode?: string;
    acteCodeGlob?: string
    acteLib?: string;
    agentPours?: string;
    acteDatreact?: string;
    actionJustice?: string;
    acteUserCode?: string;
    acteDateCtl?: string;
    cesCode?: string;
    assureCode?: string;
    villeCode?: string;
    actJustChambre?: string;
    actRg?: string;
    acteDateSignat?: string;
    acteNatReact?: string;
    acteDatrecepAgsuivi?: string;
    acteDatdepAgsuivi?: string;
    acteRepDateRetrait?: string;
    actRepRemGest?: string;
    propCode?: string;
    acteDateExecut?: string;
    acteSuiteExecut?: string;
    acteMontLettre?: string;
    acteRefAccc?: string;
    pcCode?: string;
    destCode?: string;
    acteAutRefGest?: string;
    acteRefNot?: string;
    actePoste?: string;
    terCode?: string;
    typeActeLibelle?: string;

    debiteur?: string;
    groupeCreance?: string;
    objet?: string;
    capitalInitial?: string;
    DatePremiereEcheance?: string;
    dateOctroi?: string;
    duree?: string;
    periodicite?: string;
    montantDebloque?: string;
    nbEcheance?: string;
    dateFinEcheance?: string;
  

}
const schema = yup.object({});

export function useCreateActesController(acteCode?: string, onHide?:()=> void, visible?: boolean) {
    const delay = (milliseconds: any) => new Promise(resolve => setTimeout(resolve, milliseconds));
    const alerts = useAlerts();
    const acteRepository = new ActeRepository();
 
    const initialValues: InputField = Object.assign({}, {
        acterCode: "",
        logeCode: "",
        codeCreance: "",
        typacteCode: "",
        gestCode: "",
        auxiCode: "",
        ovpCode: "",
        gareelCode: "",
        mutCode: "",
        acteDatecrea: "",
        acteDemand: "",
        acteDelai: "",
        acteRang: "",
        acteDatrem: "",
        acteRef: "",
        saisCode: "",
        acteCodeGl: "",
        acteLib: "",
        agentPours: "",
        acteDatreact: "",
        actionJustice: "",
        acteUserCode: "",
        acteDateCtl: "",
        cesCod: "",
        assureCo: "",
        villeCode: "",
        actJustChambre: "",
        actRg: "",
        propCode: "",
        acteDateSignat: "",
        acteNatReact: "",
        acteDatrecepAgsuivi: "",
        acteDatdepAgsuivi: "",
        acteRepDateRetrait: "",
        actRepRemGest: "",
        propCod: "",
        acteDateExecut: "",
        acteSuiteExecut: "",
        acteMontLettre: "",
        acteRefAccc: "",
        pcCode: "",
        destCode: "",
        acteAutRefGest: "",
        acteRefNot: "",
        acteCout: '',
        actePoste: "",
        cesCode: "",
        terCode:"" ,
        typeActeLibelle:'',

        debiteur: "",
        groupeCreance: "",
        objet: "",
        capitalInitial: "",
        DatePremiereEcheance: "",
        dateOctroi: "",
        duree: "",
        periodicite: "",
        montantDebloque: "",
        nbEcheance: "",
        dateFinEcheance: "",
    });

    const form: UseFormReturn<InputField, any> = useForm<InputField>({
        values: initialValues,
        resolver: yupResolver(schema)
    });

    const getActeDetail = async()=>{
        try {
            const result = await acteRepository.getActeByCode(acteCode ?? "");
            form.reset({
                acterCode: result.acterCode,
                logeCode: result.logeCode,
                codeCreance: result.codeCreance,
                typacteCode: result.typacteCode,
                gestCode: result.gestCode,
                auxiCode: result.auxiCode,
                ovpCode: result.ovpCode,
                gareelCode: result.gareelCode,
                mutCode: result.mutCode,
                acteDatecrea: result.acteDatecrea,
                acteDemand: result.acteDemand,
                acteDelai: result.acteDelai? result.acteDelai.toString() : '',
                acteRang: result.acteRang? result.acteRang.toString() : '',
                acteDatrem: result.acteDatrem,
                acteRef: result.acteRef,
                saisCode: result.saisCode,
                acteCodeGlob: result.acteCodeGlob?.toString(),
                acteLib: result.acteLib,
                agentPours: result.agentPours,
                acteDatreact: result.acteDatreact,
                actionJustice: result.actionJustice,
                acteUserCode: result.acteUserCode,
                acteDateCtl: result.acteDateCtl,
                villeCode: result.villeCode,
                actJustChambre: result.actJustChambre,
                actRg: result.actRg,
                propCode: result.propCode?.toString(),
                acteDateSignat: result.acteDateSignat,
                acteNatReact: result.acteNatReact,
                acteDatrecepAgsuivi: result.acteDatrecepAgsuivi,
                acteDatdepAgsuivi: result.acteDatdepAgsuivi,
                acteRepDateRetrait: result.acteRepDateRetrait,
                actRepRemGest: result.actRepRemGest,
                acteDateExecut: result.acteDateExecut,
                acteSuiteExecut: result.acteSuiteExecut,
                acteMontLettre: result.acteMontLettre,
                acteRefAccc: result.acteRefAccc,
                pcCode: result.pcCode,
                destCode: result.destCode,
                acteAutRefGest: result.acteAutRefGest,
                acteRefNot: result.acteRefNot,
                acteCout: result.acteCout?.toString(),
                actePoste: result.actePoste,
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getActeDetail();
    }, [acteCode, visible]);

    const createActes = async (command: CreerActeModel) => {
        await acteRepository.createActes(command);
        alerts.openSuccessAlert("L'acte a été créé avec succès.");
        await delay(5000)
        onHide && onHide();
    }

    const onSubmit = async (data: InputField) => {
        try {
            await createActes({
                acterCode: data.acterCode,
                logeCode: data.logeCode,
                codeCreance: data.codeCreance,
                typacteCode: data.typacteCode,
                gestCode: data.gestCode,
                auxiCode: data.auxiCode,
                ovpCode: data.ovpCode,
                gareelCode: data.gareelCode,
                mutCode: data.mutCode,
                acteDatecrea: data.acteDatecrea,
                acteDemand: data.acteDemand,
                acteDelai: data.acteDelai ? parseInt(data.acteDelai) : 0,
                acteRang: data.acteRang ? parseInt(data.acteRang) : 0,
                acteDatrem: data.acteDatrem,
                acteRef: data.acteRef,
                saisCode: data.saisCode,
                acteLib: data.acteLib,
                agentPours: data.agentPours,
                acteDatreact: data.acteDatreact,
                actionJustice: data.actionJustice,
                acteUserCode: data.acteUserCode,
                acteDateCtl: data.acteDateCtl,
                villeCode: data.villeCode,
                actJustChambre: data.actJustChambre,
                actRg: data.actRg,
                propCode: data.propCode ? parseInt(data.propCode) : 0,
                acteDateSignat: data.acteDateSignat,
                acteNatReact: data.acteNatReact,
                acteDatrecepAgsuivi: data.acteDatrecepAgsuivi,
                acteDatdepAgsuivi: data.acteDatdepAgsuivi,
                acteRepDateRetrait: data.acteRepDateRetrait,
                actRepRemGest: data.actRepRemGest,
                acteDateExecut: data.acteDateExecut,
                acteSuiteExecut: data.acteSuiteExecut,
                acteMontLettre: data.acteMontLettre,
                acteRefAccc: data.acteRefAccc,
                pcCode: data.pcCode,
                destCode: data.destCode,
                acteAutRefGest: data.acteAutRefGest,
                acteRefNot: data.acteRefNot,
                acteCout: data.acteCout ? parseInt(data.acteCout) : 0,
                actePoste: data.actePoste,
                typeActeLibelle: data.typeActeLibelle

            })
        } catch (error) {
           alerts.openErrorAlert(error)
        }
    }

    return {
        form,
        alerts,
        onSubmit
    }

}