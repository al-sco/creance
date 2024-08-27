import styled from "styled-components";
import { PaiementType } from "../../common/configs/ui/paiement/paiement.type";

type PaiementMainContentProps = {
    data: PaiementType
}

const Wrapper = styled.div`
    overflow: "scroll";    
`

const PaiementMainContent = ({ data }: PaiementMainContentProps) => {
    return (
        <Wrapper>
            {data.child}
        </Wrapper>
    )
}

export default PaiementMainContent;