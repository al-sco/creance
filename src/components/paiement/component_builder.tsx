import { Box } from "@chakra-ui/react"
import { CreanceFieldType } from "../../common/configs/ui/creance/creance.type"
import CreanceInputsView from "../creance/creance-inputs-view"
import styled from "styled-components"

export type ComponentBuilderType = {
    label?: string
    child?: CreanceFieldType[]|JSX.Element
}

const TitleStyle = styled.h1`
    font-weight: bold;
    font-size: 1.2rem;
`

const ComponentBuilder = ({ label, child }: ComponentBuilderType) => {

    const buildBody = (child: any) => {
       return (child as CreanceFieldType).name != undefined? 
        <CreanceInputsView fields={child!} /> : child
    }

    return (
        <Box>
            <TitleStyle>{label}</TitleStyle>
            <Box p={2} />
            { buildBody(child) }
        </Box>
    )
}

export default ComponentBuilder;