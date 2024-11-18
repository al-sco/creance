


import "../../css/index.css"
import PageWrapper from "../compound-component/PageWrapper"
import AcordionStyled from "../compound-component/AcordionStyled"
import { AccordionTab } from "primereact/accordion"
import { CardHeader } from "../compound-component/CardHeader"
import { ListeDesActes } from "./liste-des-acte"
import { GestionLogements } from "./partials/creance-item"


export function GestionAmiable() {

    return (
        <PageWrapper>
            <CardHeader title="Gestion amiables" subTitle="Gestion amiables des créances" />
            <AcordionStyled>
            <AccordionTab header="Gestion des actes" >
                   <ListeDesActes />
                </AccordionTab>
                <AccordionTab header="Gestion des logments" >
                   <GestionLogements />
                </AccordionTab>
            </AcordionStyled>
           
        </PageWrapper>

    )
}