import styled from "styled-components";
import colors from "../../common/theme/colors/colors";
import { Box, Grid } from "@chakra-ui/react";
import { CreanceDataType } from "../../common/configs/ui/creance/creance.type";
import CreanceInputsView from "./creance-inputs-view";
import CreanceTabsView from "./creance-tab-view";

type CreanceMainContentProps = {
    data: CreanceDataType
}

const StyledCreanceMainContent = styled.section`
    padding: 2.5% 2.5% 2.5% 2.5%;
    height: 100vh;
    overflow-y: auto;
    background-color: ${colors.white};
`

const StyledTitle = styled.h1`
  margin: 0 0 1% 0;
  font-size: 30px;
  font-weight: bold;
  align-content: start;
`;



const CreanceMainContent = ({ data }: CreanceMainContentProps): JSX.Element => {
    return (
        <StyledCreanceMainContent>
            <StyledTitle>
                {data.title}
            </StyledTitle>
            <Box h="20px" />
            <Grid templateColumns='repeat(1, 1fr)' gap={4}>
                <CreanceInputsView fields={data.fields} />
                <Box h="20px" />
                {data.tabs && <CreanceTabsView tabs={data.tabs} />}
            </Grid>
        </StyledCreanceMainContent>
    );
}

export default CreanceMainContent;

