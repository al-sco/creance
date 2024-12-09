import { Box, Image, Stack } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { MenuItem, SubMenuItem } from '../../common/configs/ui/menus/menus.type'
import { StyledMenuItem } from '../../common/theme/typography/typography'
import colors from '../../common/theme/colors/colors'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SubMenuItemComponent from './sub-menu-item'
import { useState, useEffect } from 'react'


interface MenuItemProps {
    menu: MenuItem
    isSelected: boolean
    isClose: boolean
    onPressed: (mn: MenuItem) => void
}

const SubMenusStyled = styled.div`
    margin-left: 1rem;
`

const StyledDiv = styled.div`
    height: 100%;
    overflow-y: hidden;
`;


const MenuItemComponent = ({ menu, isSelected, onPressed, isClose }: MenuItemProps) => {
    const [subMenuItem, setSubMenuItem] = useState<number>()

    useEffect(() => {
        if (menu.subMenus) {

            let currentMenu: any = menu.subMenus.find((subMenu) => window.location.pathname.includes(encodeURI(subMenu.path)))
            if (currentMenu) {
                setSubMenuItem(() => currentMenu.id)
            }
        }
    }, [])


    const handleMenuClick = (subMenu: SubMenuItem) => {
        setSubMenuItem((_) => subMenu.id)
    }

    return (<><Link to={menu.path} onClick={() => onPressed(menu)}>
        <StyledMenuItem $backgroundColor={isSelected ? colors.green : undefined} $textColor={colors.white}>
            <Stack direction='column'>
                <Stack direction='row' spacing={4} alignItems="center" justifyContent="space-between">
                    <Stack direction="row">
                        <Image src={menu.icon} alt={menu.name} />
                        <Box />
                        <span>{menu.name}</span>
                    </Stack>
                    {isSelected && <ChevronRightIcon />}
                </Stack>
            </Stack>
        </StyledMenuItem >
        </Link >
        {
            menu.subMenus && <SubMenusStyled style={{ display: isSelected && !isClose ? 'block' : 'none' }}>
                <StyledDiv>
                    {
                        menu.subMenus
                            .map((subMenu, index) => (<SubMenuItemComponent parrentPath={menu.path} key={index} onPressed={handleMenuClick} isSelected={subMenuItem === subMenu.id} subMenu={subMenu} />))
                    }
                </StyledDiv>
            </SubMenusStyled>
        }
   </>)


}


export default MenuItemComponent
