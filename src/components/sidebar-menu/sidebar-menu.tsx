import styled from "styled-components"
import { MenuItemData } from "../../data/parameter-mock"
import { StyledTitle } from "../../theme/typography"
import { Box, Stack } from "@chakra-ui/react";
import { useState } from "react";
import MenuItem from "../menu-item/menu-item";


const StyledSideBarMenu = styled.div`
  padding:50px 18px;
  overflow-y: hidden;
`;





interface SideBarMenuProps {
    subMenus: Array<MenuItemData>
    onMenuPressed: (menuItem: MenuItemData) => void
}


const SideBarMenu = (props: SideBarMenuProps) => {

    const [currentSideBarMenuId, setCurrentMenu] = useState<number>();


    const onMenuItemSelect = (menuItem: MenuItemData) => {
        setCurrentMenu((_) => menuItem.id);

        props.onMenuPressed(menuItem)
    };


    return (
        <StyledSideBarMenu>
            <StyledTitle>
                Menu
            </StyledTitle>
            <Box h="48px" />
            <Stack direction="column">
                {
                    props.subMenus.map((mItem) => (<MenuItem onPressed={onMenuItemSelect} menu={mItem} isActive={currentSideBarMenuId === mItem.id} key={mItem.id} />))
                }
            </Stack>
        </StyledSideBarMenu>
    )
}

export default SideBarMenu
