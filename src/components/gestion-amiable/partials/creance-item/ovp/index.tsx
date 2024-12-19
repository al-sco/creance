

import { Row, Col } from "react-bootstrap";
import Calendars from "../../../../compound-component/form/Calendars";
import { CardContent } from "../../../../compound-component/CardContent";
import { CardForm } from "../../../../compound-component/CardForm";
import FormActions from "../../../../compound-component/form/FormActions";
import InputField from "../../../../compound-component/form/InputField";
import SeletectField from "../../../../compound-component/form/SeletectField";
import { PageTitle } from "../../../../compound-component/PageTitle";
import { Controller } from "react-hook-form";
import { useOvpController } from "./controller";


export function Ovp() {
    const ctrl = useOvpController()
    return (
        <CardContent>
            <CardForm>
                <PageTitle title="Ajouter un OVP" />
                <div className="m-2">
                    <Row className="g-2">
                        <Col xs={6} md={6}>
                            <Controller name="id" control={ctrl.form.control}
                                render={({ field }) =>
                                    <SeletectField label="Code" optionLabel="agence" optionValue="id" options={ctrl.ovps}
                                        placeholder="Saisir le code" id="code" {...field} />} />
                        </Col>
                        <Col xs={6} md={6}>
                            <Controller name="ovpNbVirm" control={ctrl.form.control}
                                render={({ field }) =>
                                    <InputField label="Nb. Virement" disabled id="ovpNbVirm" {...field} />} />
                        </Col>
                        <Col xs={6} md={6}>
                            <Controller name="ovpDatdeb" control={ctrl.form.control}
                                render={({ field }) =>
                                    <Calendars label="Date de debut" placeholder="JJ/MM/AA" disabled id="ovpDatdeb" {...field} />} />
                        </Col>
                        <Col xs={6} md={6}>
                            <Controller name="ovpDatfin" control={ctrl.form.control}
                                render={({ field }) =>
                                    <Calendars label="Date de fin" placeholder="JJ/MM/AA" disabled id="ovpDatfin" {...field} />} />
                        </Col>
                        <Col xs={6} md={6}>
                            <Controller name="ovpDatsigne" control={ctrl.form.control}
                                render={({ field }) =>
                                    <Calendars label="Date de signature" placeholder="JJ/MM/AA" disabled id="lot" {...field} />} />
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <FormActions onSave={ctrl.form.handleSubmit(ctrl.onSubmit)} />
                    </div>
                </div>
            </CardForm>

        </CardContent>
    )
}