import { PaiementType } from "../../common/configs/ui/paiement/paiement.type";

type PaiementMainContentProps = {
    data: PaiementType
}

const PaiementMainContent = ({ data }: PaiementMainContentProps) => {
    return (
        data.child
    )
}

export default PaiementMainContent;