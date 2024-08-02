import styled from 'styled-components'
import { Stack, Image, Box, Input, Button } from '@chakra-ui/react';
import MoreIcon from '../../assets/menu-button.svg'
import BaseTable from '../base-table/base-table';
import colors from '../../common/theme/colors/colors';
import { StyledTitle } from '../../common/theme/typography/typography';
 


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
                <Button variant='outline' _hover={{color: colors.white, backgroundColor: colors.bleu}} _active={colors.green} size="lg" color={colors.bleu} bg={colors.background} border={`1.5px solid ${colors.bleu}`} >Ajouter</Button>
            </Stack>
            <Box h="24px" />
            <BaseTable subMenu={{
                name: '',
                nameHeader: undefined,
                nameColumn: undefined,
                subMenuType: undefined,
                id: 0,
                viewName: undefined,
                columns: undefined,
                headers: undefined,
                loader: undefined,
                render: undefined,
                path: ''
            }} columns={[]} />
        </StyledBaseParameterView>
    )
}

export default BaseParameterView
