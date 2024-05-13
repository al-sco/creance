import styled from "styled-components"
import { MenuItemData } from "../../data/parameter-mock"
import { StyledSubTitle } from "../../theme/typography"
import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "../menu-item/menu-item";
import { useState } from "react";
import colors from "../../theme/color";


const StyledSideBarMenu = styled.div`
  padding:80px 18px;
  height: 100vh;
  border-right: 2px solid ${colors.anotherGray};
`;


interface SubMenuProps {
    subMenus: Array<MenuItemData>
}

const SubSideBarMenu = (props: SubMenuProps) => {

    const [currentSubSideBarMenuId, setCurrentMenu] = useState<number>();

    const onMenuItemSelect = (menu: MenuItemData) =>
        setCurrentMenu((_) => menu.id);

    return (
        <StyledSideBarMenu>
            <StyledSubTitle>
                Parametres
            </StyledSubTitle>
            <Box h="37px" />
            <Stack direction="column">
                {
                    props.subMenus && props.subMenus!
                        .map((menuItem) => (<MenuItem onPressed={onMenuItemSelect} menu={menuItem} isActive={currentSubSideBarMenuId === menuItem.id} key={menuItem.id} />))
                }
            </Stack>
        </StyledSideBarMenu>
    )
}

export default SubSideBarMenu
