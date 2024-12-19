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
    hasLeftIndicator?: boolean
    onPressed: (e: SubMenuItem) => void
    parrentPath: string
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

const SubMenuItemComponent = ({ subMenu, isSelected, onPressed, hasLeftIndicator, parrentPath }: SubMenuItemProps) => {

    return (
        (
            <Link to={subMenu.subMenus!=undefined? parrentPath+'/'+subMenu.path.toString() : parrentPath+'/'+subMenu.path.toString()} onClick={() => onPressed(subMenu)}>
                <BorderedStyle>
                    <StyledMenuItem $textColor={isSelected ? colors.green : colors.lightGray}>
                            {hasLeftIndicator!=undefined && hasLeftIndicator?
                            <Stack direction='row' spacing={4} justifyContent="start" alignItems="center" >
                            {isSelected && <ChevronRightIcon />}
                            <SubMenuNameStyled> {isSelected?<></> : <span>-</span>} {subMenu.name}</SubMenuNameStyled>
                        </Stack>
                            :
                        <Stack direction='row' spacing={4} justifyContent="start" alignItems="center" >
                            {isSelected && <ChevronRightIcon />}
                            <SubMenuNameStyled>{subMenu.name}</SubMenuNameStyled>
                        </Stack>
                        }
                    </StyledMenuItem>
                </BorderedStyle>
            </Link>
        )
    )
}

export default SubMenuItemComponent
