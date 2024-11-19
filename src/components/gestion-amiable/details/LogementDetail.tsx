import { Col, Row } from "react-bootstrap"
import KeyValueDetails from "../../compound-component/KeyValueDetails"

interface LogementDetailsProps{
    details: any
}
export function LogementDetails({details}: LogementDetailsProps){
   
    return(
       <Row>
         <Col sx={3} md={3}>
            <KeyValueDetails label="Code" value={details.id} />
            <KeyValueDetails label="Libelle" value={details.acteLib} />
            <KeyValueDetails label="Coût" value={details.acteCout} />
        </Col>
        <Col sx={3} md={3}>
            <KeyValueDetails label="Utilisateur" value={details.acteUserCode} />
            <KeyValueDetails label="Date de contôle" value={details.acteDateCtl} />
            <KeyValueDetails label="Ville" value={details.villeCode} />
        </Col>
        <Col sx={3} md={3}>
            <KeyValueDetails label="Rang" value={details.actRg} />
            <KeyValueDetails label="Date de retrai" value={details.acteRepDateRetrait} />
            <KeyValueDetails label="Date d'execution" value={details.acteDateExecut} />
        </Col>
        <Col sx={3} md={3}>
            <KeyValueDetails label="Reférence" value={details.acteRefAccc} />
            <KeyValueDetails label="Action de justice" value={details.actionJustice} />
            <KeyValueDetails label="Date de création" value={details.lot} />
        </Col>
       </Row>
    )
}