import { effetPaiementComponentData, effetPaiementSelectItem } from "./effet_paiement_data";
import { especePaiementComponentData } from "./espece_paiement_data";
import { PaiementType } from "./paiement.type";
import PaiementComponent from "../../../../components/paiement/paiement_component";

export const especePaiementData: PaiementType = {
    child: <PaiementComponent data={especePaiementComponentData} />
}

export const effetPaiementData: PaiementType = {
    child: <PaiementComponent selectItem={effetPaiementSelectItem} data={effetPaiementComponentData} />
}