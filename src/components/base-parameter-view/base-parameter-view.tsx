import styled from 'styled-components'
import colors from '../../theme/color';
import { Stack, Image, Box, Input, Button } from '@chakra-ui/react';
import { StyledTitle } from '../../theme/typography';
import MoreIcon from '../../assets/menu-button.svg'
import BaseTable from '../base-table/base-table';



const StyledBaseParameterView = styled.div`
    padding: 71px 92px;
    height:100%;
    overflow-y: hidden;
    background-color: ${colors.white};
`;

const BaseParameterView = () => {
    return (
        <StyledBaseParameterView>
            <Stack direction="row" justifyContent="space-between">
                <StyledTitle>
                    Banks
                </StyledTitle>
                <Image src={MoreIcon} />
            </Stack>
            <Box h="48px" />
            <Stack spacing={8} direction="row" justifyContent="space-between">
                <Stack direction="row">
                    <Input placeholder='Code' size='lg' width='auto' />
                    <Input placeholder='Libellé' size='lg' />
                </Stack>
                <Button variant='outline' color={colors.green} size='lg' style={{ border: `1px solid ${colors.green}` }}>Ajouter</Button>
            </Stack>
            <Box h="24px" />
            <BaseTable />
        </StyledBaseParameterView>
    )
}

export default BaseParameterView
