


import "../../css/index.css"
import PageWrapper from "../compound-component/PageWrapper"
import AcordionStyled from "../compound-component/AcordionStyled"
import { AccordionTab } from "primereact/accordion"
import { CardHeader } from "../compound-component/CardHeader"
import { ListeDesActes } from "./liste-des-acte"
import { GestionLogements } from "./partials/creance-item"
import { useGestionAmiableStores } from "./use-gestion-amiable-stores"


export function GestionAmiable() {
    const stores = useGestionAmiableStores();

    return (
        <PageWrapper>
            <CardHeader title="Gestion amiables des actes" subTitle="Programme de saisi d'un acte amiable" />
            <AcordionStyled>
            <AccordionTab header="Gestion des actes" >
                   <ListeDesActes />
                </AccordionTab>
                <AccordionTab header={stores.accordionLib} >
                   <GestionLogements />
                </AccordionTab>
            </AcordionStyled>
           
        </PageWrapper>

    )
}