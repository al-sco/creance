import { Row, Col } from "react-bootstrap";
import Calendars from "../../../compound-component/form/Calendars";
import InputText from "../../../compound-component/form/InputField";
import SeletectField from "../../../compound-component/form/SeletectField";
import { useCreanceController } from "./controller";
import { Controller, UseFormReturn } from "react-hook-form";
import { InputField } from "../controller";

interface Props {
    form: UseFormReturn<InputField, any>
}
export function CreanceDialog({form}: Props) {
    const ctrl = useCreanceController(form);
    return (
        <div className="m-2">
            <Row className="g-2">
                <Col xs={4} md={4} className="pt-3">
                    <span className="pt-4">
                        <Controller name="codeCreance" control={form.control}
                            render={({ field, fieldState }) =>
                                <SeletectField label="Code" options={ctrl.creances || []} optionLabel="creanCode" optionValue="creanCode"
                                    placeholder="Selectionnée" id="codeCreance" {...field} error={fieldState.error?.message}/>} />
                    </span>
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="debiteur" control={form.control}
                        render={({ field }) =>
                            <InputText disabled label="Débiteur" id="logeCode" {...field} />} />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="groupeCreance" control={form.control}
                        render={({ field }) =>
                            <InputText disabled label="Groupe créance" id="groupeCreance" {...field} />} />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="objet" control={form.control}
                        render={({ field }) =>
                            <InputText disabled label="Objet" id="objet" {...field} />} />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="capitalInitial" control={form.control}
                        render={({ field }) =>
                            <InputText disabled label="Capital initial" id="capitalInitial" {...field} />} />
                </Col>
                <Col xs={4} md={4}>
                    <Calendars label="Date de 1ère Echt" placeholder="JJ/MM/AA" disabled id="bloc" />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="dateOctroi" control={form.control}
                        render={({ field }) =>
                            <Calendars disabled label="Date de Octroi" placeholder="JJ/MM/AA" id="dateOctroi" {...field} />}
                    />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="duree" control={form.control}
                        render={({ field }) =>
                            <InputText disabled label="Durée" id="duree" {...field} />} />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="periodicite" control={ctrl.form.control}
                        render={({ field }) =>
                            <InputText disabled label="Périodicité" id="periodicite" {...field} />} />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="montantDebloque" control={form.control}
                        render={({ field }) =>
                            <InputText disabled label="Montant debloqué" id="montantDebloque" {...field} />} />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="nbEcheance" control={form.control}
                        render={({ field }) =>
                            <InputText disabled label="Nb Ech" id="nbEcheance" {...field} />} />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="dateFinEcheance" control={form.control}
                        render={({ field }) =>
                            <Calendars disabled label="Date fin Ech" placeholder="JJ/MM/AA" id="status" {...field} />}
                    />
                </Col>
            </Row>
        </div>
    )
}