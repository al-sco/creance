import { PaiementType } from "./paiement.type";
import PaiementComponent from "../../../../components/paiement/paiement_component";
import { effetPaiementSelectItem, effetPaiementComponentData } from "./effet-paiement.data";
import { especePaiementSelectItem, especePaiementComponentData } from "./espece-paiement.data";
import { factureAntComponentData } from "./factureAntPaiement.data";
import { fraisPaiementComponentData, fraisPaiementSelectItem } from "./fraisPaiement.data";
import { factureEspComponentData, factureEspPaiementSelectItem } from "./factureEspPaiement.data";
import { virementPaiementComponentData, virementPaiementSelectItem } from "./virementPaiementData";
import { fraisCreancePaiementSelectItem, fraisCreanceComponentData } from "./fraisCreancePaiement.data";

export const especePaiementData: PaiementType = {
    child: <PaiementComponent selectItem={especePaiementSelectItem} data={especePaiementComponentData} />
}

export const effetPaiementData: PaiementType = {
    child: <PaiementComponent selectItem={effetPaiementSelectItem} data={effetPaiementComponentData} />
}

export const fraisPaiementData: PaiementType= {
    child: <PaiementComponent selectItem={fraisPaiementSelectItem} data={fraisPaiementComponentData} />
}

export const factureAntPaiementData: PaiementType= {
    child: <PaiementComponent selectItem={fraisPaiementSelectItem} data={factureAntComponentData} />
}

export const factureEspPaiementData: PaiementType= {
    child: <PaiementComponent selectItem={factureEspPaiementSelectItem} data={factureEspComponentData} />
}

export const virementPaiementData: PaiementType= {
    child: <PaiementComponent selectItem={virementPaiementSelectItem} data={virementPaiementComponentData} />
}

export const fraisCreancePaiementData: PaiementType={
    child: <PaiementComponent selectItem={fraisCreancePaiementSelectItem} data={fraisCreanceComponentData} />
} 