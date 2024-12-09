import { Col, Row } from "react-bootstrap";
import KeyValueDetails from "../../compound-component/KeyValueDetails";

interface LogementDetailsProps {
  details: any;
}
export function LogementDetails({ details }: LogementDetailsProps) {
  return (
    <Row>
      <Col sx={3} md={3}>
        <KeyValueDetails label="Code de l'acte" value={details.id} />
        <KeyValueDetails label="Type" value={details.acteLib} />
        <KeyValueDetails
          label="Date de la creacne"
          date
          value={details.acteCout}
        />
      </Col>
      <Col sx={3} md={3}>
        <KeyValueDetails
          label="Date de la creacne"
          date
          value={details.acteCout}
        />
        <KeyValueDetails
          label="Date de réaction"
          date
          value={details.acteUserCode}
        />
      </Col>
      <Col sx={3} md={3}>
        <KeyValueDetails label="Ville" value={details.villeCode} />
        <KeyValueDetails label="Nom du débituer" value={details.acteDateCtl} />
      </Col>
    </Row>
  );
}
