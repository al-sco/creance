import styled from "styled-components";
import colors from "../../common/theme/colors/colors";
import { Box, Grid } from "@chakra-ui/react";
import { CreanceFieldType } from "../../common/configs/ui/creance/creance.type";
import { creanceTabs } from "../../common/configs/ui/creance/creance.data";
import CreanceInputsView from "./creance-inputs-view";
import CreanceTabsView from "./creance-tab-view";

type CreanceMainContentProps = {
    creanceFields: CreanceFieldType[]
}

const StyledCreanceMainContent = styled.section`
    padding: 2.5% 2.5% 2.5% 2.5%;
    height: 100vh;
    overflow-y: hidden;
    background-color: ${colors.white};
`

const StyledTitle = styled.h1`
  margin: 0 0 1% 0;
  font-size: 30px;
  font-weight: bold;
  align-content: start;
`;



const CreanceMainContent = ({ creanceFields }: CreanceMainContentProps): JSX.Element => {
    return (
        <StyledCreanceMainContent>
            <StyledTitle>
                Etude de Creance
            </StyledTitle>
            <Box h="20px" />
            <Grid templateColumns='repeat(1, 1fr)' gap={4}>
                <CreanceInputsView fields={creanceFields} />
                <Box h="20px" />
                <CreanceTabsView tabs={creanceTabs} />
            </Grid>
        </StyledCreanceMainContent>
    );
}

export default CreanceMainContent;

