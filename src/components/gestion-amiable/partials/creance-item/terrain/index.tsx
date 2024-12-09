

import { Row, Col } from "react-bootstrap";
import { CardContent } from "../../../../compound-component/CardContent";
import { CardForm } from "../../../../compound-component/CardForm";
import FormActions from "../../../../compound-component/form/FormActions";
import InputField from "../../../../compound-component/form/InputField";
import InputsTextarea from "../../../../compound-component/form/InputsTextarea";
import SeletectField from "../../../../compound-component/form/SeletectField";
import { PageTitle } from "../../../../compound-component/PageTitle";
import { Controller } from "react-hook-form";
import { useTerrainController } from "./controller";



export function Terrain() {
    const ctrl = useTerrainController()
    return (
        <CardContent>
            <CardForm>
                <PageTitle title="Ajouter un terrain" />
                <Row className="g-2">
                    <Col xs={6} md={6}>
                        <SeletectField label="Code" options={ctrl.terrains} optionLabel="terCode" optionValue="terCode"
                            onChange={(event: any) => {
                                ctrl.handleChangeTerrain(event)
                            }}
                            placeholder="Saisir le code" id="code" />
                    </Col>
                    <Col xs={6} md={6}>
                        <Controller name="numExt" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="N° Externe" disabled id="numExt" {...field} />} />
                    </Col>
                    <Col xs={6} md={6}>
                        <Controller name="superficie" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="Superficie" disabled id="superficie" {...field} />} />
                    </Col>
                    <Col xs={6} md={6}>
                        <Controller name="operation" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputField label="Opération" disabled id="operation" {...field} />} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <Controller name="description" control={ctrl.form.control}
                            render={({ field }) =>
                                <InputsTextarea label="Description" id="description" row={5} cols={60}  {...field} />} />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <FormActions />
                </div>
            </CardForm>
        </CardContent>
    )
}