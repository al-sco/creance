
import { Accordion } from "primereact/accordion";
import styled from "@emotion/styled";
import { ReactNode, memo } from "react";

export interface AccordionModel {
    label: string;
    content?: React.ReactNode;
}

interface TabsProps {
    activeIndex?: number;
    activeIndex2?: number;
    children?: ReactNode;
}

const StyledAccordion = styled(Accordion)(({ }) => ({
    "& .p-accordion-tab-active .p-accordion-header .p-accordion-header-link": {
        backgroundColor: "#22890f !important",
        color: "var(--primary-color-text) !important",
        borderColor: "var(--primary-color) !important",
    },
    "& .p-accordion-tab-active .p-toggleable-content .p-accordion-content, ": {
        borderColor: "#22890f !important",
    },
    "& .p-accordion-tab": {
        backgroundColor: "#98c582 !important",
    }
}));


function AcordionStyled({ children, activeIndex = 0 }: TabsProps) {
    return (
        <StyledAccordion activeIndex={activeIndex} className="p-4">
            {children}
        </StyledAccordion>
    );
}

export default memo(AcordionStyled);