import { Col, Row } from "react-bootstrap";
import InputText from "../../../compound-component/form/InputField";

export function DelegationLoyers() {
    return (
        <div className="m-2">
            <Row className="g-2">
                <Col xs={4} md={4}>
                    <InputText label="Solde au debiteur au" placeholder="Saisir le code" id="code" />
                </Col>
                <Col xs={4} md={4} className="pt-3">
                    <span className="pt-4">   <InputText label="" placeholder="Saisir le solde" id="nPorte" /></span>
                </Col>
                <Col xs={4} md={4}>
                    <InputText label="Auxiliaire de justice" disabled id="nPorte" />
                </Col>
                <Col xs={4} md={4}>
                    <InputText label="Extrait de compte" disabled id="bloc" />
                </Col>
                <Col xs={4} md={4}>
                    <InputText label="Rech. Debiteur" disabled id="bloc" />
                </Col>
                <Col xs={4} md={4}>
                    <InputText label="Rech. N° créance" disabled id="bloc" />
                </Col>
            </Row>
        </div>
    )
}