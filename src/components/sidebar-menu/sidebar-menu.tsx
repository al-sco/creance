import styled, { keyframes } from "styled-components"
import { Box, Stack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { logo } from "../../common/theme/assets";
import MenuItemComponent from "../menu-item/menu-item";
import { menuItems } from "../../common/configs/ui/menus/menu.data";
import colors from "../../common/theme/colors/colors";
import { MenuItem } from "../../common/configs/ui/menus/menus.type";

const StyledSideBarMenu = styled.div`
  padding: 50px 0 18px 10px;
  height: 100vh;
  background-color: ${colors.darkGreen};
  overflow-y: hidden;
`;

const scaleLogo = keyframes`
    0% {
        transition: scale(1);
        rotate: 0deg;
    }
    50% {
        transform: scale(1.2);
    }
    60%{
        rotate: 10deg;
    }
    100%{
        rotate: 0deg;
        transition: scale(1);
    }
`

const StyledImage = styled.div`
    margin:0 auto;
    display: table;
    place-items: center;
    transform: scale(1.5);
    /* animation: ${scaleLogo} 5s infinite  ease-in; */
`;

const SideBarMenu = () => {
    
    const [currentSideBarMenuId, setCurrentItem] = useState<number>();
    const [isClose, setIsClose] = useState<boolean>(true);

    useEffect(()=>{
        let currentMenu : any =menuItems.find((menuItem)=>window.location.pathname.startsWith(menuItem.path))        
        if(currentMenu){
            setCurrentItem(()=>currentMenu.id)
        }
    },[])

    const handleChangeCurrentItem = (menu: MenuItem) => {
        setIsClose(currentSideBarMenuId === menu.id && !isClose);
        setCurrentItem((_) => menu.id)
    }

    return (        
        <StyledSideBarMenu>
            <StyledImage>
                <Image src={logo} w={100} />
            </StyledImage>
            <Box h="48px" />
            <Stack direction="column" style={{
                height:"85%", overflowY:"scroll", overflowX:"hidden"
            }}>
                {
                    menuItems.map((mItem) => (<MenuItemComponent isClose={isClose} onPressed={handleChangeCurrentItem} menu={mItem} isSelected={currentSideBarMenuId === mItem.id} key={mItem.id} />))
                }
            </Stack>
        </StyledSideBarMenu>
    )
}

export default SideBarMenu
