import { Col, Row } from "react-bootstrap";
import KeyValueDetails from "../../compound-component/KeyValueDetails";
import { ActeModel } from "../../../states/model/actes.model";

interface LogementDetailsProps {
  details: ActeModel;
}
export function LogementDetails({ details }: LogementDetailsProps) {
  return (
    <Row>
      <Col sx={4} md={4}>
        <KeyValueDetails label="Code de l'acte" value={details.id} />
        <KeyValueDetails label="Type d'a" value={details.typeLib} />
        <KeyValueDetails
          label="Date de créaction"
          date
          value={details.acteDatecrea}
        />
      </Col>
      <Col sx={4} md={4}>
        <KeyValueDetails
          label="Nom du debuteur"
          value={details.nomDebiteur}
        />
        <KeyValueDetails
          label="Date de réaction "
          date
          value={details.creanDatrea}
        />
        <KeyValueDetails
          label="Numéro de la créance "
          date
          value={details.numCreance}
        />
      </Col>
      <Col sx={4} md={4}>
        <KeyValueDetails label="Logement" value={details.logeCode} />
        <KeyValueDetails label="Terrain" value={details.terCode} />
        <KeyValueDetails label="Mutation" value={details.mutaLib} />
      </Col>
    </Row>
  );
}
