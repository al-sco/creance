import styled from 'styled-components'
import { Image } from '@chakra-ui/react'
import colors from '../../theme/color'


const StyledSvg = styled.svg<{ $color?: string }>`
    fill: ${props => colors.white};
`

const SvgIcon = (props: {
    icon?: string,
    color: string
    name?: string
}) => {

    return (
        <StyledSvg $color={props.color}>
            <svg></svg>
            <Image src={props.icon} alt={props.name} />
        </StyledSvg>
    )
}

export default SvgIcon
