

import { Row, Col } from "react-bootstrap";
import { CardContent } from "../../../../compound-component/CardContent";
import { CardForm } from "../../../../compound-component/CardForm";
import Calendars from "../../../../compound-component/form/Calendars";
import FormActions from "../../../../compound-component/form/FormActions";
import InputField from "../../../../compound-component/form/InputField";
import SeletectField from "../../../../compound-component/form/SeletectField";
import { PageTitle } from "../../../../compound-component/PageTitle";
import { Controller } from "react-hook-form";
import { useGarantieReelController } from "./controller";
import Alerts from "../../../../compound-component/Alerts";

export function GarantieReelle() {
    const ctrl = useGarantieReelController();
    return (
        <CardContent>
              <Alerts {...ctrl.alerts} />
            <CardForm>
                <PageTitle title="Lite des garanties réelles" />
                <Row className="g-2">
                    <Col xs={6} md={6}>
                        <Controller name="id" control={ctrl.form.control}
                            render={({ field }) =>
                                <SeletectField label="Garantie Réelles" options={ctrl.garantieRels}
                                 optionLabel="gareelLib" optionValue="id" 
                                    placeholder="Selectionnée une garantue" id="code" {...field}
                                    onChange={(event)=>{
                                        ctrl.handleChangeGarantieR(event)
                                     }} value={ctrl.code}/>} />
                    </Col>
                    <Col xs={6} md={6}>
                        <Controller name="gareelLib" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="Libellé" disabled id="lot" {...field} />} />

                    </Col>
                    <Col xs={6} md={6}>
                        <Controller name="gareelObjMont" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="Montant objet" disabled id="lot" {...field} />} />
                    </Col>
                    <Col xs={6} md={6}>
                        <Controller name="gareelObjNum" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="N° Objet" disabled id="lot" {...field} />} />

                    </Col>
                    <Col xs={6} md={6}>
                        <Controller name="gareelDateCtl" control={ctrl.form.control}
                            render={({ field }) =>
                                <Calendars label="Date" placeholder="JJ/MM/AA" disabled id="nPorte" {...field}/>} />

                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                <FormActions onSave={ctrl.formGa.handleSubmit(ctrl.onSUbmit)} />
                </div>
            </CardForm>
        </CardContent>
    )
}