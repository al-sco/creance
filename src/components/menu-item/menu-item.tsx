import { Image, Stack } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { MenuItem } from '../../common/configs/ui/menus/menus.type'
import { StyledMenuItem } from '../../common/theme/typography/typography'
import colors from '../../common/theme/colors/colors'
import { Link } from 'react-router-dom'


interface MenuItemProps {
    menu: MenuItem
    isSelected: boolean
}

const MenuItemComponent = ({ menu, isSelected }: MenuItemProps) => {

    return (<Link to={menu.path}>
        <StyledMenuItem $backgroundColor={isSelected ? colors.green : undefined} $textColor={isSelected ? colors.white : undefined}>
            <Stack direction='row' spacing={4} alignItems="center" justifyContent="space-between">
                <Stack direction="row">
                    <Image src={menu.icon} alt={menu.name} />
                    <span>{menu.name}</span>
                </Stack>
                {isSelected && <ChevronRightIcon />}
            </Stack>
        </StyledMenuItem >
    </Link >)


}


export default MenuItemComponent
