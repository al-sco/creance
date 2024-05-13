import { Image, Stack } from '@chakra-ui/react'
import { MenuItemData } from "../../data/parameter-data"
import { StyledMenuItem } from "../../theme/typography"
import colors from '../../theme/color'
import { ChevronRightIcon } from '@chakra-ui/icons'


interface MenuItemProps {
    menu: MenuItemData
    isActive: boolean
    onPressed: (menu: MenuItemData) => void
}

const MenuItem = (props: MenuItemProps) => {
    const menu = props.menu;
    const isSubMenu = props.menu.isSubMenu;
    const isActive = props.isActive;


    const handleClick = (e: any) => {
        e.preventDefault();

        props.onPressed!(props.menu)
    }

    return isSubMenu ?
        (
            <StyledMenuItem $textColor={isActive ? colors.black : colors.lightGray} onClick={handleClick}>
                <Stack direction='row' spacing={4} alignItems="center" >
                    {isActive && <ChevronRightIcon />}
                    <span>{menu.name}</span>
                </Stack>
            </StyledMenuItem>
        ) :
        (<StyledMenuItem $backgroundColor={isActive ? colors.green : undefined} $textColor={isActive ? colors.white : undefined} onClick={handleClick}>
            {
                menu.isSubMenu ?
                    (<Stack direction='row' spacing={4} alignItems="center">
                        {isActive && <ChevronRightIcon />}
                        <span>{menu.name}</span>
                    </Stack>) : (
                        <Stack direction='row' spacing={4} alignItems="center" justifyContent="space-between">
                            <Stack direction="row">
                                <Image src={isActive ? menu.enabledIcon : menu.disabledIcon} alt={menu.name} />
                                <span>{menu.name}</span>
                            </Stack>
                            {isActive && <ChevronRightIcon />}
                        </Stack>
                    )
            }
        </StyledMenuItem >)


}


export default MenuItem
