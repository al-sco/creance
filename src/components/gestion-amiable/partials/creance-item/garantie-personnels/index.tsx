
import { Col, Row } from "react-bootstrap";
import { CardContent } from "../../../../compound-component/CardContent";
import { CardForm } from "../../../../compound-component/CardForm";
import FormActions from "../../../../compound-component/form/FormActions";
import InputField from "../../../../compound-component/form/InputField";
import SeletectField from "../../../../compound-component/form/SeletectField";
import { PageTitle } from "../../../../compound-component/PageTitle";
import { Controller } from "react-hook-form";
import { useGarantiePhyController } from "./controller";



export function GarantiePersonnels() {
    const ctrl = useGarantiePhyController()
    return (
        <CardContent>
            <CardForm>
                <PageTitle title="Ajouter une garanties psersonnelles" />
                <Row className="g-2 aligin-items-center">
                    <Col xs={6} md={6}>
                        <Controller name="id" control={ctrl.form.control}
                            render={({ field }) =>
                                <SeletectField label="Garantie personnelle" options={ctrl.garantiePhys} {...field} id="id" optionLabel="garphysNom" optionValue="id"
                                    onChange={(event) => {
                                        ctrl.handleChangeGarantiePh(event)
                                    }} />
                            } />
                    </Col>
                    <Col xs={6} md={6}>
                        <Controller name="id" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField disabled id="lot" {...field} />} />
                    </Col>
              
                <Col xs={6} md={6}>
                        <Controller name="garphysSalNet" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField disabled label="Montatnt supporté" id="lot" {...field} />} />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <FormActions onSave={ctrl.form.handleSubmit(ctrl.onSUbmit)} />
                </div>
            </CardForm>
        </CardContent>
    )
}