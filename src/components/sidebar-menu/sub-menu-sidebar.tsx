import styled from "styled-components"
import { subMenus } from "../../mocks/parameter-mock"
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


const SubSideBarMenu = () => {

    const [currentSubSideBarMenuId, setCurrentMenu] = useState<number>();

    const onMenuItemSelect = (id: number) =>
        setCurrentMenu((_) => id);

    return (
        <StyledSideBarMenu>
            <StyledSubTitle>
                Parametres
            </StyledSubTitle>
            <Box h="37px" />
            <Stack direction="column">
                {
                    subMenus.map((menuItem) => (<MenuItem isSubMenu={menuItem.isSubMenu} onPressed={onMenuItemSelect} isActive={currentSubSideBarMenuId === menuItem.id} key={menuItem.id} id={menuItem.id} name={menuItem.name} enabledIcon={menuItem.enabledIcon} disabledIcon={menuItem.disabledIcon} />))
                }
            </Stack>
        </StyledSideBarMenu>
    )
}

export default SubSideBarMenu
