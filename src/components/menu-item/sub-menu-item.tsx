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
max-width: 250px;
padding-right: 1rem;
`

const SubMenuNameStyled = styled.div`
  scrollbar-width: none;
  overflow-y: scroll;
`

const SubMenuItemComponent = ({ subMenu, isSelected, onPressed }: SubMenuItemProps) => {
    return (
        (
            <Link to={subMenu.path.toString()} onClick={() => onPressed(subMenu)}>
                <BorderedStyle>
                    <StyledMenuItem $textColor={isSelected ? colors.black : colors.lightGray}>
                        <Stack direction='row' spacing={4} justifyContent="start" alignItems="center" >
                            {isSelected && <ChevronRightIcon />}
                            <SubMenuNameStyled>{subMenu.name}</SubMenuNameStyled>
                        </Stack>
                    </StyledMenuItem>
                </BorderedStyle>

            </Link>
        )
    )
}

export default SubMenuItemComponent
