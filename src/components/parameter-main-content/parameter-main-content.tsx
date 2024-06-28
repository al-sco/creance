import styled from 'styled-components'
import { Stack, Box, Button } from '@chakra-ui/react';
import BaseTable from '../base-table/base-table';
import { StyledTitle } from '../../common/theme/typography/typography';
import colors from '../../common/theme/colors/colors';
import { SubMenuItem } from '../../common/configs/ui/menus/menus.type';
import TableHeaderForm from '../base-table/table-header-form';
import { useNavigation } from 'react-router-dom';



export type ParameterColumnType = {
    label: string;
    key: string

}

type ParameterMainContentProps = {
    title: string
    subMenu: SubMenuItem
    colums: ParameterColumnType[]
}

const StyledParameterMainContent = styled.div`
    padding: 2% 3.5% 3.5% 3.5%;
    height:100vh;
    overflow-y: hidden;
    background-color: ${colors.white};
`;

const ParameterMainContent = ({ colums, subMenu }: ParameterMainContentProps) => {

    return (
        <StyledParameterMainContent>
            <Stack direction="row" justifyContent="space-between">
                <StyledTitle>
                    {subMenu.nameHeader}
                </StyledTitle>
            </Stack>
            <Box h="20px" />
            <TableHeaderForm subMenu={subMenu} />
            <Box h="40px" />
            <BaseTable subMenu={subMenu} columns={colums} />
        </StyledParameterMainContent>
    )
}

export default ParameterMainContent
