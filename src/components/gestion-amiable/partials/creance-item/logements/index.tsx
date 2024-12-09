
import { Row, Col } from "react-bootstrap";
import { CardContent } from "../../../../compound-component/CardContent";
import { CardForm } from "../../../../compound-component/CardForm";
import FormActions from "../../../../compound-component/form/FormActions";
import InputField from "../../../../compound-component/form/InputField";
import InputsTextarea from "../../../../compound-component/form/InputsTextarea";
import SeletectField from "../../../../compound-component/form/SeletectField";
import { PageTitle } from "../../../../compound-component/PageTitle";
import { useLogementController } from "./controller";
import { Controller } from "react-hook-form";
import Alerts from "../../../../compound-component/Alerts";



export function LogementForm() {
    const ctrl = useLogementController();

    return (
        <CardContent>
            <Alerts {...ctrl.alerts} />
            <CardForm>
                <PageTitle title="Ajouter un logement" />
                <Row className="g-2">
                    <Col xs={4} md={4}>
                        <SeletectField label="Code" options={ctrl.logements} optionLabel="logeIlotNum" optionValue="logeCode"
                            placeholder="Selectionnée un élement" id="code" onChange={(event) => {
                                ctrl.handleChangeLogement(event);
                            }} value={ctrl.codeLogement}/>
                    </Col>

                    <Col xs={4} md={4}>
                        <Controller name="bloc" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="Bloc" disabled id="bloc" {...field} />} />
                    </Col>

                    <Col xs={4} md={4}>
                        <Controller name="lot" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="Lot" disabled id="lot" {...field} />} />
                    </Col>

                    <Col xs={4} md={4}>
                        <Controller name="nPorte" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="N° de porte" disabled id="nPorte" {...field} />} />
                    </Col>

                    <Col xs={4} md={4}>
                        <Controller name="liot" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="Liot" disabled id="liot" {...field} />} />
                    </Col>

                    <Col xs={4} md={4}>
                        <Controller name="operation" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="N° de pièce" disabled id="nPiece" {...field} />} />
                    </Col>

                    <Col xs={4} md={4}>
                        <Controller name="operation" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="Opération" disabled id="operation" {...field} />} />
                    </Col>

                    <Col xs={4} md={4}>
                        <Controller name="quartier" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="Quartier" disabled id="quartier" {...field} />} />
                    </Col>

                    <Col xs={4} md={4}>
                        <Controller name="tyoeLog" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="Type de logement" disabled id="tyoeLog" {...field} />} />
                    </Col>

                    <Col xs={4} md={4}>
                        <Controller name="modeAcquisition" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="Mode d'aquisition" disabled id="modeAcquisition" {...field} />} />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={12}>
                        <Controller name="modeAcquisition" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputsTextarea label="Description" disabled id="bloc" row={5} cols={60} {...field} />} />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <FormActions onSave={ctrl.formAct.handleSubmit(ctrl.onSUbmit)} />
                </div>
            </CardForm>
        </CardContent>
    )
}