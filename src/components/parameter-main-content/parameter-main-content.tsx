import styled from 'styled-components'
import { Stack, Image, Box, Input, Button } from '@chakra-ui/react';
import MoreIcon from '../../assets/menu-button.svg'
import BaseTable from '../base-table/base-table';
import { StyledTitle } from '../../common/theme/typography/typography';
import colors from '../../common/theme/colors/colors';
import { SubMenuItem } from '../../common/configs/ui/menus/menus.type';



export type ParameterColumnType = {
    label: string;
    key:string

}

type ParameterMainContentProps = {
    title: string
    subMenu:SubMenuItem
    colums: ParameterColumnType[] 
}

const StyledParameterMainContent = styled.div`
    padding: 3.5%;
    height:100vh;
    overflow-y: hidden;
    background-color: ${colors.white};
`;

const ParameterMainContent = ({colums,subMenu }: ParameterMainContentProps) => {
    console.log(subMenu)
    return (
        <StyledParameterMainContent>
            <Stack direction="row" justifyContent="space-between">
                <StyledTitle>
                    {subMenu.nameHeader}
                </StyledTitle>
            </Stack>
            <Box h="48px" />
            <Stack spacing={8} direction="row" justifyContent="space-between">
                <Stack direction="row">
                    {subMenu.headers!.map((header,index) => <Input border={`1px solid ${colors.lightGray}`} variant={"outline"} key={index}  placeholder={header.label} size='lg' />)}
                </Stack>
            </Stack>
            <Box h="24px" />
            <BaseTable subMenu={subMenu}  columns={colums} />
        </StyledParameterMainContent>
    )
}

export default ParameterMainContent
