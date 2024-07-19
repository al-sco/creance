import CreanceMainContent from "../../../../../components/creance/creance-main-content";
import { CreanceDataType } from "../creance.type";


type GarantiesReellesAdditionnalContentProps = {
    data: CreanceDataType
}

export const GarantiesReellesAdditionnalContentContent = ({data}: GarantiesReellesAdditionnalContentProps): JSX.Element => {    
    return (
        <>
            <CreanceMainContent hasNoHeader={true} data={data} />
        </>
    );
}