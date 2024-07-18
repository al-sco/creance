import CreanceMainContent from "../../../../../components/creance/creance-main-content";
import { CreanceDataType } from "../creance.type";


type DetailsGarantisAdditionnalContentProps = {
    data: CreanceDataType
}

export const DetailsGarantisAdditionnalContent = ({data}: DetailsGarantisAdditionnalContentProps): JSX.Element => {    
    return (
        <>
            <CreanceMainContent hasNoHeader={true} data={data} />
        </>
    );
}