import styled from "styled-components"
import { Box, Button } from "@chakra-ui/react";
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type";
import { StyledSubTitle } from "../../common/theme/typography/typography";
import SubMenuItemComponent from "../menu-item/sub-menu-item";
import { useEffect, useState } from "react";
import colors from "../../common/theme/colors/colors";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";


const StyledSideBarMenu = styled.div`
  padding: 35px 20px 80px 0;
  height: 100vh;
  width: 100%;
  background-color: ${colors.lightGreen};
  transition: all 1s linear;
`;

const StyledDiv = styled.div`
    height: 100%;
    overflow-y: scroll;
`;


type SubSideBarMenuProps = {
    handleHidden: () => void,
    isHidden: Signal<boolean>,
    title: string
    subMenuItems: Array<SubMenuItem>
}

const SubSideBarMenu = ({ title, subMenuItems, handleHidden, isHidden }: SubSideBarMenuProps) => {
    const [subMenuItem, setSubMenuItem] = useState<number>()

    useEffect(() => {
        let currentMenu = subMenuItems.find((subMenu) => window.location.pathname.includes(encodeURI(subMenu.path)))
        if (currentMenu) {
            setSubMenuItem(() => currentMenu.id)
        }
    }, [])


    const handleMenuClick = (subMenu: SubMenuItem) => {
        setSubMenuItem((_) => subMenu.id)
    }

    return (
        <StyledSideBarMenu>
            <StyledSubTitle>                
                {title}
            </StyledSubTitle>
            <Box h="37px" />
            <StyledDiv>
                {
                    subMenuItems
                        .map((subMenu, index) => (<SubMenuItemComponent key={index} onPressed={handleMenuClick} isSelected={subMenuItem === subMenu.id} subMenu={subMenu} />))
                }
            </StyledDiv>
            <Box style={{margin: '0 0 0 10px', position: 'fixed', bottom: '10px'}}>
                <Button colorScheme='blue' onClick={handleHidden} >
                    {isHidden.value? <ChevronRightIcon /> :  <ChevronLeftIcon />}
                </Button>
            </Box>
        </StyledSideBarMenu>
    )
}

export default SubSideBarMenu
