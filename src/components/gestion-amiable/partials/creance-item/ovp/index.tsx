

import { Row, Col } from "react-bootstrap";
import Calendars from "../../../../compound-component/form/Calendars";
import { CardContent } from "../../../../compound-component/CardContent";
import { CardForm } from "../../../../compound-component/CardForm";
import FormActions from "../../../../compound-component/form/FormActions";
import InputField from "../../../../compound-component/form/InputField";
import SeletectField from "../../../../compound-component/form/SeletectField";
import { PageTitle } from "../../../../compound-component/PageTitle";



export function Ovp() {
    return (
        <CardContent>
            <CardForm>
                <PageTitle title="Ajouter un OVP" />
                <div className="m-2">
                    <Row className="g-2">
                        <Col xs={6} md={6}>
                            <SeletectField label="Code" options={[]} placeholder="Saisir le code" id="code" />
                        </Col>
                        <Col xs={6} md={6}>
                            <InputField label="Nb. Virement" disabled id="bloc" />
                        </Col>
                        <Col xs={6} md={6}>
                            <Calendars label="Date de debut" placeholder="JJ/MM/AA" disabled id="lot" />
                        </Col>
                        <Col xs={6} md={6}>
                            <Calendars label="Date de fin" placeholder="JJ/MM/AA" disabled id="lot" />
                        </Col>
                        <Col xs={6} md={6}>
                            <Calendars label="Date de signature" placeholder="JJ/MM/AA" disabled id="lot" />
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <FormActions />
                    </div>
                </div>
            </CardForm>

        </CardContent>
    )
}