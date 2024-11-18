import { Col, Row } from "react-bootstrap"
import KeyValueDetails from "../../compound-component/KeyValueDetails"

interface LogementDetailsProps{
    details: any
}
export function LogementDetails({details}: LogementDetailsProps){
    return(
       <Row>
         <Col sx={3} md={3}>
            <KeyValueDetails label="Code" value={details.code} />
            <KeyValueDetails label="Bloc" value={details.bloc} />
            <KeyValueDetails label="Lot" value={details.lot} />
        </Col>
        <Col sx={3} md={3}>
            <KeyValueDetails label="Code" value={details.code} />
            <KeyValueDetails label="Bloc" value={details.bloc} />
            <KeyValueDetails label="Lot" value={details.lot} />
        </Col>
        <Col sx={3} md={3}>
            <KeyValueDetails label="Code" value={details.code} />
            <KeyValueDetails label="Bloc" value={details.bloc} />
            <KeyValueDetails label="Lot" value={details.lot} />
        </Col>
        <Col sx={3} md={3}>
            <KeyValueDetails label="Code" value={details.code} />
            <KeyValueDetails label="Bloc" value={details.bloc} />
            <KeyValueDetails label="Lot" value={details.lot} />
        </Col>
       </Row>
    )
}