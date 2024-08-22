import { Signal } from "@preact/signals-react"
import { AdditionnalContentType } from "../../common/configs/ui/creance/creance.type"
import { useSignals } from "@preact/signals-react/runtime"
import styled from "styled-components"

type LayoutProps = {
    child: Signal<AdditionnalContentType>
}

const Wrapper = styled.div`
    padding: 1rem 1rem;
`

const PaiementAdditionalLayoutBuilder = ({ child }: LayoutProps) => {
    useSignals()

    return (
        <Wrapper>
            {child.value.child}
        </Wrapper>
    )
}

export default PaiementAdditionalLayoutBuilder;