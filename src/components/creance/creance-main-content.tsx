import styled from "styled-components";
import colors from "../../common/theme/colors/colors";
import { Box, Button, Flex, Grid, useToast } from "@chakra-ui/react";
import { CreanceDataType } from "../../common/configs/ui/creance/creance.type";
import CreanceInputsView from "./creance-inputs-view";
import CreanceTabsView from "./creance-tab-view";
import { toastify } from "../../common/helper/toast_helper";

type CreanceMainContentProps = {
    data: CreanceDataType
    hasNoHeader?: boolean
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



const CreanceMainContent = ({ data, hasNoHeader }: CreanceMainContentProps): JSX.Element => {
    const toast=useToast()

  
    const submitData=async()=>{ 
        toastify(toast,data.create({}),{
            description: 'Donnée enregistrée',
            title: ''
          })
        }

    return (
        <StyledCreanceMainContent>
            {
                (hasNoHeader && hasNoHeader==true)? <></> : <Flex justifyContent='space-between'>
                <StyledTitle>
                    {data.title}
                </StyledTitle>
                <Button variant='outline' onClick={submitData} color={colors.green} size='lg' style={{ border: `1px solid ${colors.green}` }}>Ajouter</Button>
            </Flex>
            }
            <Box h="20px" />
            <Grid templateColumns='repeat(1, 1fr)' gap={4}>
                <CreanceInputsView repeatGridValue={data.columCount??2} fields={data.fields} />
                <Box h="20px" />
                {data.tabs && <CreanceTabsView  state={data.state} tabs={data.tabs} />}
            </Grid>
        </StyledCreanceMainContent>
    );
}

export default CreanceMainContent;

