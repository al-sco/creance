import styled from 'styled-components'
import { Stack, Image, Box, Input, Button } from '@chakra-ui/react';
import MoreIcon from '../../assets/menu-button.svg'
import BaseTable from '../base-table/base-table';
import { StyledTitle } from '../../common/theme/typography/typography';
import colors from '../../common/theme/colors/colors';




export type ParameterColumnType = {
    label: string
}

type ParameterMainContentProps = {
    title: string
    colums: ParameterColumnType[]
}

const StyledParameterMainContent = styled.div`
    padding: 71px 92px;
    height:100%;
    overflow-y: hidden;
    background-color: ${colors.white};
`;

const ParameterMainContent = ({ title, colums }: ParameterMainContentProps) => {
    return (
        <StyledParameterMainContent>
            <Stack direction="row" justifyContent="space-between">
                <StyledTitle>
                    {title}
                </StyledTitle>
                <Image src={MoreIcon} />
            </Stack>
            <Box h="48px" />
            <Stack spacing={8} direction="row" justifyContent="space-between">
                <Stack direction="row">
                    {colums.map((column) => <Input placeholder={column.label} size='lg' />)}
                </Stack>
                <Button variant='outline' color={colors.green} size='lg' style={{ border: `1px solid ${colors.green}` }}>Ajouter</Button>
            </Stack>
            <Box h="24px" />
            <BaseTable />
        </StyledParameterMainContent>
    )
}

export default ParameterMainContent
