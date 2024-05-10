import { Image, Stack } from '@chakra-ui/react'
import { MenuItemData } from "../../mocks/parameter-mock"
import { StyledMenuItem } from "../../theme/typography"
import colors from '../../theme/color'
import { ChevronRightIcon } from '@chakra-ui/icons'


const MenuItem = (props: MenuItemData) => {
    const { isActive, isSubMenu } = props;
    const handleClick = (e: any) => {
        e.preventDefault();

        props.onPressed!(props.id)
    }

    return isSubMenu ?
        (
            <StyledMenuItem $textColor={isActive ? colors.black : colors.lightGray} onClick={handleClick}>
                <Stack direction='row' spacing={4} alignItems="center" >
                    {isActive && <ChevronRightIcon />}
                    <span>{props.name}</span>
                </Stack>
            </StyledMenuItem>
        ) :
        (<StyledMenuItem $backgroundColor={isActive ? colors.green : undefined} $textColor={isActive ? colors.white : undefined} onClick={handleClick}>
            {
                props.isSubMenu ?
                    (<Stack direction='row' spacing={4} alignItems="center">
                        {isActive && <ChevronRightIcon />}
                        <span>{props.name}</span>
                    </Stack>) : (
                        <Stack direction='row' spacing={4} alignItems="center" justifyContent="space-between">
                            <Stack direction="row">
                                <Image src={isActive ? props.enabledIcon : props.disabledIcon} alt={props.name} />
                                <span>{props.name}</span>
                            </Stack>
                            {isActive && <ChevronRightIcon />}
                        </Stack>
                    )
            }
        </StyledMenuItem >)


}


export default MenuItem
