import styled from "styled-components"
import { Box} from "@chakra-ui/react";
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type";
import { StyledSubTitle } from "../../common/theme/typography/typography";
import SubMenuItemComponent from "../menu-item/sub-menu-item";
import { useEffect, useState } from "react";
import colors from "../../common/theme/colors/colors";


const StyledSideBarMenu = styled.div`
  padding:80px 18px;
  height: 100vh;
  background-color: ${colors.gray};
  transition: all 5s linear;
`;

const StyledDiv=styled.div`
    height: 100%;
    overflow-y: scroll;
`;


type SubSideBarMenuProps = {
    title: string
    subMenuItems: Array<SubMenuItem>
}

const SubSideBarMenu = ({ title, subMenuItems }: SubSideBarMenuProps) => {
    const [subMenuItem, setSubMenuItem] = useState<number>()

    useEffect(()=>{
        console.log(window.location.pathname)
        let currentMenu=subMenuItems.find((subMenu)=>window.location.pathname.includes(encodeURI(subMenu.path)))        
        if(currentMenu){
            setSubMenuItem(()=>currentMenu.id)
        }
    },[])

    const handleMenuClick = (subMenu: SubMenuItem) => {
        setSubMenuItem((_) => subMenu.id)
    }

    return <StyledSideBarMenu>
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
    </StyledSideBarMenu>
}

export default SubSideBarMenu
