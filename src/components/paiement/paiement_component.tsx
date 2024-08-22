import styled from "styled-components"
import ComponentBuilder, { ComponentBuilderType } from "./component_builder"
import { Box, Select } from "@chakra-ui/react"
import { AdditionnalContentType } from "../../common/configs/ui/creance/creance.type"

const ComponentWrapper = styled.section`
    padding: 1rem 1rem;
`

type ComponentProps = {
    data: ComponentBuilderType[]
    selectItem?: AdditionnalContentType[]
}

const Wrapper = styled.div`
    margin: 0.5rem 0 2rem 0;
`

const PaiementComponent = ({ data, selectItem }: ComponentProps) => {
    return (
        <ComponentWrapper>
            {
                data.map((e) => <Wrapper>
                    <ComponentBuilder label={e.label} child={e.child} />
                </Wrapper>
                )
            }
            <Box p={2} />
            <Select placeholder='Select option'>
                {
                    selectItem?.map((e) =>
                        <option value='option1'>{e.label}</option>
                    )
                }
            </Select>
        </ComponentWrapper>
    )
}

export default PaiementComponent