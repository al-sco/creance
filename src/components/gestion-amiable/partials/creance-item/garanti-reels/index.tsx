

import { Row, Col } from "react-bootstrap";
import { CardContent } from "../../../../compound-component/CardContent";
import { CardForm } from "../../../../compound-component/CardForm";
import Calendars from "../../../../compound-component/form/Calendars";
import FormActions from "../../../../compound-component/form/FormActions";
import InputField from "../../../../compound-component/form/InputField";
import SeletectField from "../../../../compound-component/form/SeletectField";
import { PageTitle } from "../../../../compound-component/PageTitle";



export function GarantieReelle() {
    return (
        <CardContent>
            <CardForm>
                <PageTitle title="Lite des garanties réelles" />
                <Row className="g-2">
                    <Col xs={6} md={6}>
                        <SeletectField label="Garantie Réelles" options={[]} placeholder="Selectionnée une garantue" id="code" />
                    </Col>
                    <Col xs={6} md={6}>
                        <InputField label="Libellé" disabled id="lot" />
                    </Col>
                    <Col xs={6} md={6}>
                        <InputField label="Montatnt objet" disabled id="nPorte" />
                    </Col>
                    <Col xs={6} md={6}>
                        <InputField label="N° Objet" disabled id="nPorte" />
                    </Col>
                    <Col xs={6} md={6}>
                        <Calendars label="Date" placeholder="JJ/MM/AA" disabled id="nPorte" />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <FormActions />
                </div>
            </CardForm>
        </CardContent>
    )
}