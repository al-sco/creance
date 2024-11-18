
import { Col, Row } from "react-bootstrap";
import { CardContent } from "../../../../compound-component/CardContent";
import { CardForm } from "../../../../compound-component/CardForm";
import FormActions from "../../../../compound-component/form/FormActions";
import InputField from "../../../../compound-component/form/InputField";
import SeletectField from "../../../../compound-component/form/SeletectField";
import { PageTitle } from "../../../../compound-component/PageTitle";



export function GarantiePersonnels() {
    return (
        <CardContent>
            <CardForm>
                <PageTitle title="Ajouter une garanties psersonnelles" />
                    <Row className="g-2">
                        <Col xs={6} md={6}>
                            <SeletectField label="Garantie personnelle" options={[]} placeholder="Saisir le code" id="code" />
                        </Col>
                        <Col xs={6} md={6}>
                            <InputField disabled id="lot" />
                        </Col>
                        <Col xs={6} md={6}>
                            <InputField label="Montatnt supporté" disabled id="nPorte" />
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <FormActions />
                    </div>
            </CardForm>
        </CardContent>
    )
}