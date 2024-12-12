
import { Col, Row } from "react-bootstrap";
import { CardContent } from "../../../../compound-component/CardContent";
import { CardForm } from "../../../../compound-component/CardForm";
import Calendars from "../../../../compound-component/form/Calendars";
import FormActions from "../../../../compound-component/form/FormActions";
import InputField from "../../../../compound-component/form/InputField";
import SeletectField from "../../../../compound-component/form/SeletectField";
import { PageTitle } from "../../../../compound-component/PageTitle";
import { Controller } from "react-hook-form";
import { useMutationController } from "./controller";
import Alerts from "../../../../compound-component/Alerts";


export function Mutations() {
    const ctrl = useMutationController();
    return (
        <CardContent>
            <Alerts {...ctrl.alerts} />
            <CardForm>
                <PageTitle title="Ajouter une mutation" />
                <div className="m-2">
                    <Row className="g-2">
                        <Col xs={6} md={6}>
                            <Controller
                                name="code" control={ctrl.form.control}
                                render={({ field }) =>
                                    <SeletectField label="Code" options={ctrl.mutations} optionLabel={"mutUser"} optionValue="id"
                                        placeholder="Saisir le code" id="code" {...field}  
                                        onChange={(event)=>{
                                            ctrl.handleChangeMutation(event)
                                        }} value={ctrl.codeMutation}/>} />
                        </Col>
                        <Col xs={6} md={6}>
                            <Controller name="mutDatecrea" control={ctrl.form.control}
                                render={({ field }) =>
                                    <Calendars label="Date de saisi" placeholder="JJ/MM/AA" disabled id="bloc" {...field} />} />
                        </Col>
                        <Col xs={6} md={6}>
                            <Controller name="mutUser" control={ctrl.form.control}
                                render={({ field }) =>
                                    <InputField label="Cessionnaire" disabled id="lot" {...field} />} />
                        </Col>

                        <Col xs={6} md={6}>
                            <Controller name="mutUser" control={ctrl.form.control}
                                render={({ field }) =>
                                    <InputField label="Propriétaire" disabled id="lot" {...field} />} />
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <FormActions onSave={ctrl.formMut.handleSubmit(ctrl.onSUbmit)} />
                    </div>
                </div>
            </CardForm>
        </CardContent>
    )
}