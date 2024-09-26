import { Signal } from "@preact/signals-react"
import { AdditionnalContentType } from "../../common/configs/ui/creance/creance.type"
import { useSignals } from "@preact/signals-react/runtime"
import styled from "styled-components"
import ComponentBuilder, { ComponentBuilderType } from "./component_builder"

type LayoutProps = {
    childAsAdditionnalContent?: Signal<AdditionnalContentType|undefined>
    childAsComponentBuilder?: Signal<ComponentBuilderType>
}

const Wrapper = styled.div`
    padding: 2rem 0rem;
`

const PaiementAdditionalLayoutBuilder = ({ childAsAdditionnalContent, childAsComponentBuilder }: LayoutProps) => {
    useSignals()

    return (
        <Wrapper>
            {childAsAdditionnalContent && childAsAdditionnalContent.value && childAsAdditionnalContent.value.child}
            {childAsComponentBuilder && <ComponentBuilder label={childAsComponentBuilder.value.label} child={childAsComponentBuilder.value.child} fields={childAsComponentBuilder.value.fields} />}
        </Wrapper>
    )
}

export default PaiementAdditionalLayoutBuilder;