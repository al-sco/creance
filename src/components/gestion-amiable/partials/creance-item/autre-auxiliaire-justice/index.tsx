

import { Row, Col, Button } from "react-bootstrap";
import { CardContent } from "../../../../compound-component/CardContent";
import InputField from "../../../../compound-component/form/InputField";
import { CardForm } from "../../../../compound-component/CardForm";
import { CardSectionItems } from "../../../../compound-component/CardSectionItems";
import FormActions from "../../../../compound-component/form/FormActions";
import SeletectField from "../../../../compound-component/form/SeletectField";
import KeyValueDetails from "../../../../compound-component/KeyValueDetails";
import { PageTitle } from "../../../../compound-component/PageTitle";


export function AutreAxiliaireJustice() {
    return (
        <CardContent>
            <PageTitle title="Lite des auxiliatre de justices" />
            <CardForm>
                <Row className="g-2 d-flex align-items-center justify-content-center mb-4">
                    <Col xs={3} md={3}>
                        <SeletectField label="Code" options={[]} placeholder="Selectionnée une garantue" id="code" />
                    </Col>
                    <Col xs={3} md={3}>
                        <InputField label="Rang" disabled id="lot" />
                    </Col>
                    <Col xs={3} md={3}>
                        <InputField label="Nom" disabled id="nPorte" />
                    </Col>
                    <Col xs={3} md={3}><Button variant="info" className="border-none mt-5">Ajouter</Button></Col>
                </Row>
                <CardSectionItems>
                    <KeyValueDetails label="Code" value="Libelle test " />
                </CardSectionItems>
                <div className="d-flex justify-content-end">
                    <FormActions />
                </div>
            </CardForm>

        </CardContent>
    )
}