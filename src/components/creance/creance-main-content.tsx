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
    padding: 2.5% 2.5% 10.5% 2.5%;
    height: 100vh;
    width: 75vw;
    padding-right: 1%;
    overflow-y: scroll;
    overflow-x: "scroll";
    background-color: ${colors.background};
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
               { data.hasAddbutton!=undefined && data.hasAddbutton? <></> : <Button variant='outline' onClick={submitData} _hover={{color: colors.white, backgroundColor: colors.bleu}} _active={colors.green} size="lg" color={colors.bleu} bg={colors.background} border={`1.5px solid ${colors.bleu}`} >Ajouter</Button>}
            </Flex>
            }
            <Grid templateColumns='repeat(1, 1fr)' gap={data.fields.length!=0? 4 : 0}   overflowX={"scroll"} >
                { data.fields.length!=0 && <CreanceInputsView repeatGridValue={data.columCount??2} fields={data.fields} />}
                <Box h="20px" />
                {data.tabs && <CreanceTabsView  state={data.state} tabs={data.tabs} />}
            </Grid>
        </StyledCreanceMainContent>
    );
}

export default CreanceMainContent;

