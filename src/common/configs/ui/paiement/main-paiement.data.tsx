import { PaiementType } from "./paiement.type";
import PaiementComponent from "../../../../components/paiement/paiement_component";
import { effetPaiementSelectItem, effetPaiementComponentData } from "./effet-paiement.data";
import { especePaiementSelectItem, especePaiementComponentData } from "./espece-paiement.data";

export const especePaiementData: PaiementType = {
    child: <PaiementComponent selectItem={especePaiementSelectItem} data={especePaiementComponentData} />
}

export const effetPaiementData: PaiementType = {
    child: <PaiementComponent selectItem={effetPaiementSelectItem} data={effetPaiementComponentData} />
}