import styled from "styled-components"
import { Box, Stack } from "@chakra-ui/react";
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type";
import { StyledSubTitle } from "../../common/theme/typography/typography";
import SubMenuItemComponent from "../menu-item/sub-menu-item";
import { useState } from "react";
import colors from "../../common/theme/colors/colors";


const StyledSideBarMenu = styled.div`
  padding:80px 18px;
  height: 100vh;
  background-color: ${colors.gray};
  transition: all 5s linear;
`;


type SubSideBarMenuProps = {
    title: string
    subMenuItems: Array<SubMenuItem>
}

const SubSideBarMenu = ({ title, subMenuItems }: SubSideBarMenuProps) => {
    const [subMenuItem, setSubMenuItem] = useState<number>()

    const handleMenuClick = (subMenu: SubMenuItem) => {
        setSubMenuItem((_) => subMenu.id)
    }

    return <StyledSideBarMenu>
        <StyledSubTitle>
            {title}
        </StyledSubTitle>
        <Box h="37px" />
        <Stack direction="column">
            {
                subMenuItems
                    .map((subMenu, index) => (<SubMenuItemComponent key={index} onPressed={handleMenuClick} isSelected={subMenuItem === subMenu.id} subMenu={subMenu} />))
            }
        </Stack>
    </StyledSideBarMenu>
}

export default SubSideBarMenu
