import CreanceMainContent from "../../../../../components/creance/creance-main-content";
import { CreanceDataType } from "../creance.type";


type GarantiesPersonneellesAdditionnalContentProps = {
    data: CreanceDataType
}

export const GarantiesPersonnellesAdditionnalContent = ({data}: GarantiesPersonneellesAdditionnalContentProps): JSX.Element => {    
    return (
        <>
            <CreanceMainContent hasNoHeader={true} data={data} />
        </>
    );
}