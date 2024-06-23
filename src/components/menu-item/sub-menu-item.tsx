import { Link } from "react-router-dom"
import colors from "../../common/theme/colors/colors"
import { StyledMenuItem } from "../../common/theme/typography/typography"
import { Stack } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type"
import styled from "styled-components"


type SubMenuItemProps = {
    subMenu: SubMenuItem,
    isSelected: boolean
    onPressed: (e: SubMenuItem) => void
}

const BorderedStyle = styled.div`
overflow-x: hidden;
padding-right: 1rem;
`

const SubMenuItemComponent = ({ subMenu, isSelected, onPressed }: SubMenuItemProps) => {
    return (
        (

            <Link to={subMenu.path.toString()} onClick={() => onPressed(subMenu)}>
                <BorderedStyle>
                    <StyledMenuItem $textColor={isSelected ? colors.black : colors.lightGray}>
                        <Stack direction='row' spacing={4} justifyContent="start" alignItems="center" >
                            {isSelected && <ChevronRightIcon />}
                            <span>{subMenu.name}</span>
                        </Stack>
                    </StyledMenuItem>
                </BorderedStyle>

            </Link>
        )
    )
}

export default SubMenuItemComponent
