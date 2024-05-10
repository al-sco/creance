import styled from "styled-components"
import { menuItems } from "../../mocks/parameter-mock"
import { StyledTitle } from "../../theme/typography"
import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "../menu-item/menu-item";
import { useState } from "react";


const StyledSideBarMenu = styled.div`
  padding:50px 18px;
`;


const SideBarMenu = () => {

    const [currentSideBarMenuId, setCurrentMenu] = useState<number>();

    const onMenuItemSelect = (id: number) =>
        setCurrentMenu((_) => id);

    return (
        <StyledSideBarMenu>
            <StyledTitle>
                Menu
            </StyledTitle>
            <Box h="48px" />
            <Stack direction="column">
                {
                    menuItems.map((menuItem) => (<MenuItem onPressed={onMenuItemSelect} isActive={currentSideBarMenuId === menuItem.id} key={menuItem.id} id={menuItem.id} name={menuItem.name} enabledIcon={menuItem.enabledIcon} disabledIcon={menuItem.disabledIcon} />))
                }
            </Stack>
        </StyledSideBarMenu>
    )
}

export default SideBarMenu
