import styled from "styled-components"
import { Box, Stack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { logo } from "../../data/assets";
import MenuItemComponent from "../menu-item/menu-item";
import { menuItems } from "../../common/configs/ui/menus/menu.data";


const StyledSideBarMenu = styled.div`
  padding:50px 18px;
  overflow-y: hidden;
`;


const StyledImage = styled.div`
    margin:0 auto;
    display: table;
    place-items: center;
`;





const SideBarMenu = () => {

    const [currentSideBarMenuId, _] = useState<number>();


    return (
        <StyledSideBarMenu>
            <StyledImage>
                <Image src={logo} w={100} />
            </StyledImage>
            <Box h="48px" />
            <Stack direction="column">
                {
                    menuItems.map((mItem) => (<MenuItemComponent menu={mItem} isSelected={currentSideBarMenuId === mItem.id} key={mItem.id} />))
                }
            </Stack>
        </StyledSideBarMenu>
    )
}

export default SideBarMenu
