
import { Col, Row } from "react-bootstrap";
import { CardContent } from "../../../../compound-component/CardContent";
import { CardForm } from "../../../../compound-component/CardForm";
import Calendars from "../../../../compound-component/form/Calendars";
import FormActions from "../../../../compound-component/form/FormActions";
import InputField from "../../../../compound-component/form/InputField";
import SeletectField from "../../../../compound-component/form/SeletectField";
import { PageTitle } from "../../../../compound-component/PageTitle";


export function Mutations() {
    return (
        <CardContent>
            <CardForm>
                <PageTitle title="Ajouter une mutation" />
                <div className="m-2">
                    <Row className="g-2">
                        <Col xs={6} md={6}>
                            <SeletectField label="Code" options={[]} placeholder="Saisir le code" id="code" />
                        </Col>
                        <Col xs={6} md={6}>
                            <Calendars label="Date de saisi" placeholder="JJ/MM/AA" disabled id="bloc" />
                        </Col>
                        <Col xs={6} md={6}>
                            <InputField label="Cessionnaire" disabled id="lot" />
                        </Col>
                        <Col xs={6} md={6}>
                            <InputField label="Propriétaire" disabled id="nPorte" />
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