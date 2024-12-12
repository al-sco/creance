

import { Row, Col } from "react-bootstrap";
import { CardContent } from "../../../../compound-component/CardContent";
import InputField from "../../../../compound-component/form/InputField";
import { CardForm } from "../../../../compound-component/CardForm";
import FormActions from "../../../../compound-component/form/FormActions";
import SeletectField from "../../../../compound-component/form/SeletectField";
import { PageTitle } from "../../../../compound-component/PageTitle";
import { Controller } from "react-hook-form";
import { useAuxiliaireJusticeController } from "./controller";
import Alerts from "../../../../compound-component/Alerts";


export function AutreAxiliaireJustice() {
    const ctrl = useAuxiliaireJusticeController()
    return (
        <CardContent>
             <Alerts {...ctrl.alerts} />
            <PageTitle title="Lite des auxiliatre de justices" />
            <CardForm>
                <Row className="g-2 d-flex align-items-center justify-content-center mb-4">
                    <Col xs={4} md={4}>
                        <div className="mt-4">
                        <Controller name="auxiCode" control={ctrl.form.control}
                        render={({field}) => 
                        <SeletectField label="Code" options={ctrl.auxilairesJusticies}  optionLabel="auxiNom" optionValue="auxiCode"
                        placeholder="Selectionnée une garantue" id="code" {...field}
                        onChange={(event)=>{
                            ctrl.handleChangeAuxilaire(event)
                        }} value={ctrl.code}/>} />
                        </div>
                    </Col>
                    <Col xs={4} md={4}>
                    <Controller name="autAuxilRang" control={ctrl.form.control}
                        render={({field}) => 
                        <InputField label="Rang" disabled id="lot"  {...field}/>}/>
                    </Col>
                    <Col xs={4} md={4}>
                    <Controller name="auxiNom" control={ctrl.form.control}
                        render={({field}) => 
                        <InputField label="Nom" disabled id="lot"  {...field}/>}/>
                    </Col>
                </Row>
               
                <div className="d-flex justify-content-end">
                <FormActions onSave={ctrl.formAux.handleSubmit(ctrl.onSUbmit)} />
                </div>
            </CardForm>

        </CardContent>
    )
}