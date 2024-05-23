import { Link } from "react-router-dom"
import colors from "../../common/theme/colors/colors"
import { StyledMenuItem } from "../../common/theme/typography/typography"
import { Stack } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type"


type SubMenuItemProps = {
    subMenu: SubMenuItem,
    isSelected: boolean
    onPressed: (e: SubMenuItem) => void
}

const SubMenuItemComponent = ({ subMenu, isSelected, onPressed }: SubMenuItemProps) => {
    return (
        (

            <Link to={subMenu.path.toString()} onClick={() => onPressed(subMenu)}>
                <StyledMenuItem $textColor={isSelected ? colors.black : colors.lightGray}>
                    <Stack direction='row' spacing={4} alignItems="center" >
                        {isSelected && <ChevronRightIcon />}
                        <span>{subMenu.name}</span>
                    </Stack>
                </StyledMenuItem>
            </Link>
        )
    )
}

export default SubMenuItemComponent
