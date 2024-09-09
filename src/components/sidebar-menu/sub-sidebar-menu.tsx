import styled from "styled-components"
import { Box, Stack } from "@chakra-ui/react";
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type";
import { StyledSubTitle } from "../../common/theme/typography/typography";
import SubMenuItemComponent from "../menu-item/sub-menu-item";
import { useEffect, useState } from "react";
import colors from "../../common/theme/colors/colors";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Signal } from "@preact/signals-react";
import { SubMenuParent } from "../../common/configs/ui/menus/menu.data";


const StyledSideBarMenu = styled.div`
  padding: 35px 0 80px 10px;
  height: 100vh;
  width: 100%;
  background-color: ${colors.lightGreen};
  transition: all 1s linear;  
`;

const StyledDiv = styled.div`
    height: 100%;
    overflow-y: scroll;
`;


const StyledTitle = styled.div`
    font-size: 14;
    font-weight: bold;
`;

const HideButtonStyled = styled.div`
    padding: 10px 15px 10px 15px;
    border-radius: 0 10% 10% 0;
    background-color: ${colors.bleu};
`;

type SubSideBarMenuProps = {
    handleHidden: () => void,
    isHidden: Signal<boolean>,
    title: string
    parents?: SubMenuParent[]
    subMenuItems: Array<SubMenuItem>
}

const SubSideBarMenu = ({ title, subMenuItems, handleHidden, isHidden, parents }: SubSideBarMenuProps) => {
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

    const getSubmenus = (menus: SubMenuItem[],parentId: number): SubMenuItem[] => {
        return menus.filter((m) => m.parentId == parentId)
    }

    return (
        <>
            {!isHidden.value &&                
                <StyledSideBarMenu>
                <StyledSubTitle>
                    {title}
                </StyledSubTitle>
                <Box h="37px" />
                <StyledDiv>
                    {
                        parents==undefined? subMenuItems
                        .map((subMenu, index) => (<SubMenuItemComponent key={index} onPressed={handleMenuClick} isSelected={subMenuItem === subMenu.id} subMenu={subMenu} />))
                 : parents.map((p:SubMenuParent) => (                    
                    <Stack marginBottom={5} direction='column' justifyContent="start" spacing={0} alignItems="start" >
                            <StyledTitle>{p.label}</StyledTitle>
                           <span>
                             {
                                getSubmenus(subMenuItems, p.id)
                                .map((subMenu, index) => (<SubMenuItemComponent key={index} onPressed={handleMenuClick} isSelected={subMenuItem === subMenu.id} subMenu={subMenu} />))
                            }</span>
                        </Stack>
                 ))
                        }
                </StyledDiv>
            </StyledSideBarMenu>}
            <Box style={{ margin: '0 0 0 0', position: 'fixed', bottom: '10px',cursor:'pointer' }}>
                <HideButtonStyled onClick={handleHidden} >
                    {isHidden.value ? <ChevronRightIcon color={colors.white} /> : <ChevronLeftIcon color={colors.white} />}
                </HideButtonStyled>
            </Box>
        </>
    )
}

export default SubSideBarMenu
