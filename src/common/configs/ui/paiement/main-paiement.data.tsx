import { PaiementType } from "./paiement.type";
import PaiementComponent from "../../../../components/paiement/paiement_component";
import { effetPaiementSelectItem, effetPaiementComponentData } from "./effet-paiement.data";
import { especePaiementSelectItem, especePaiementComponentData } from "./espece-paiement.data";
import { fraisPaiementComponentData, fraisPaiementSelectItem } from "./fraisPaiement.data";
import { factureEspComponentData, factureEspPaiementSelectItem } from "./factureEspPaiement.data";
import { virementPaiementComponentData, virementPaiementSelectItem } from "./virementPaiementData";
import { fraisCreancePaiementSelectItem, fraisCreanceComponentData } from "./fraisCreancePaiement.data";
import { fraisFacturePaiementSelectItem, fraisFacturePaiementComponentData } from "./fraisFacturePaiement.data";
import { ecranFraisPaiementComponentData, ecranFraisPaiementSelectItem } from "./ecranFraisPrin.data";
export const especePaiementData: PaiementType = {
    child: <PaiementComponent selectItem={especePaiementSelectItem} data={especePaiementComponentData} />
}

export const effetPaiementData: PaiementType = {
    child: <PaiementComponent selectItem={effetPaiementSelectItem} data={effetPaiementComponentData} />
}

export const fraisPaiementData: PaiementType= {
    child: <PaiementComponent selectItem={fraisPaiementSelectItem} data={fraisPaiementComponentData} />
}

export const ecranFraisPaiementData: PaiementType= {
    child: <PaiementComponent selectItem={ecranFraisPaiementSelectItem} data={ecranFraisPaiementComponentData} />
}

export const fraisFacturePaiementData: PaiementType= {
    child: <PaiementComponent selectItem={fraisFacturePaiementSelectItem} data={fraisFacturePaiementComponentData} />
}

export const factureEspPaiementData: PaiementType= {
    child: <PaiementComponent selectItem={factureEspPaiementSelectItem} data={factureEspComponentData} />
}

export const virementPaiementData: PaiementType= {
    child: <PaiementComponent hasNoSelectButton={true} selectItem={virementPaiementSelectItem} data={virementPaiementComponentData} />
}

export const fraisCreancePaiementData: PaiementType={
    child: <PaiementComponent selectItem={fraisCreancePaiementSelectItem} data={fraisCreanceComponentData} />
} 

