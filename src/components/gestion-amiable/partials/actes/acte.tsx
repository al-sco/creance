import { Row, Col } from "react-bootstrap";
import { SectionTitle } from "../../../compound-component/SectionTitle";
import Calendars from "../../../compound-component/form/Calendars";
import InputText from "../../../compound-component/form/InputField";
import SeletectField from "../../../compound-component/form/SeletectField";
import { Controller, UseFormReturn } from "react-hook-form";
import { useActeController } from "./controller";
import { InputField } from "../controller";

interface Props {
    form: UseFormReturn<InputField, any>
}

export function Acte({ form }: Props) {
    const ctrl = useActeController(form);
   

    return (
        <div className="m-2">
            <Row className="g-2">
                <Col xs={4} md={4}>
                    <Controller name="typacteCode" control={form.control}
                        render={({ field }) =>
                            <SeletectField label="Type d'acte" options={ctrl.typeActes} optionLabel={"typacteLib"}
                                optionValue={"typeActeCode"}
                                placeholder="Selectionnée" id="bloc" {...field}
                                onChange={(event) => {
                                    field.onChange(event);
                                    ctrl.handleChangeTypeActe(event)
                                }} value={ctrl.typeActeCode} />} />
                </Col>
                <Col xs={4} md={4} className="pt-">
                    <span className="pt-4">
                        <Controller name="acterCode" control={form.control}
                            render={({ field }) =>
                                <InputText disabled id="code" {...field} />} />
                    </span>
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="acteDelai" control={form.control}
                        render={({ field }) =>
                            <InputText disabled label="Délait Acte (Jour)" id="acteDelai" {...field} />} />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="acteDatecrea" control={form.control}
                        render={({ field }) =>
                            <Calendars label="Date de création" id="bloc" {...field} />} />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="acteDatecrea" control={form.control}
                        render={({ field }) =>
                            <SeletectField label="Initial-gestionnaire" options={[]} optionLabel={"typacteLib"}
                                optionValue={"typacteCode"}
                                placeholder="Selectionnée" id="bloc" {...field} />} />

                </Col>
                <Col xs={4} md={4}>
                    <SeletectField options={[]} label="Acte lié (procédure)" placeholder="Selectionnée" id="bloc" />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="acteRang" control={form.control}
                        render={({ field }) =>
                            <InputText label="Rang de l'acte" id="acteRang" {...field} />} />
                </Col>
                <Col xs={4} md={4}>
                    <Controller name="logeCode" control={form.control}
                        render={({ field }) =>
                            <InputText disabled label="Type de logement" id="logeCode" {...field} />} />
                </Col>
            </Row>
            {
                ctrl.typeActeLibelle !== "CONVOCATION" && (
                    <>
                        <Row>
                            <SectionTitle title="Auxiliaire de justice" subTitle="Ajouter un auxiliaire de justice" />
                            <Row className="g-2">
                                <Col xs={4} md={4}>
                                    <SeletectField options={[]} label="Code" placeholder="Selectionnée" id="bloc" />
                                </Col>
                                <Col xs={4} md={4}>
                                    <InputText label="Type auxiliaire" disabled id="nPorte" />
                                </Col>
                                <Col xs={4} md={4}>
                                    <InputText placeholder="L'initial de l'auxiliaire" disabled id="bloc" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={2} md={2}>
                                    <InputText label="Nom" disabled id="bloc" />
                                </Col>
                                <Col xs={10} md={10}>
                                    <InputText placeholder="L'initial du nom " disabled id="bloc" />
                                </Col>
                            </Row>
                        </Row>
                        <SectionTitle title="Agent de poursuite" subTitle="Ajouter un agent de justice" className="pb-1" />
                        <Row className="g-2">
                            <Col xs={4} md={4}>
                                <SeletectField options={[]} label="Code" placeholder="Selectionnée" id="bloc" />
                            </Col>

                            <Col xs={4} md={4}>
                                <InputText label="Type Agent" disabled id="nPorte" />

                            </Col>
                            <Col xs={4} md={4}>
                                <InputText placeholder="L'initial de l'agent de poursuite" disabled id="bloc" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} md={2}>
                                <InputText label="Nom" disabled id="bloc" />
                            </Col>
                            <Col xs={10} md={10}>
                                <InputText placeholder="L'initial du nom" disabled id="bloc" />
                            </Col>
                        </Row>
                    </>
                )
            }

        </div>
    )
}