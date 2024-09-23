import styled from "styled-components"
import ComponentBuilder, { ComponentBuilderType } from "./component_builder"
import { Box, InputGroup, InputLeftAddon, Select } from "@chakra-ui/react"
import { AdditionnalContentType } from "../../common/configs/ui/creance/creance.type"
import { useSignals } from "@preact/signals-react/runtime"
import { signal } from "@preact/signals-react"
import PaiementAdditionalLayoutBuilder from "./paiement_additionnal_layout_builder"

const ComponentWrapper = styled.section`
    padding: 1rem 1rem;
    overflow: auto;
    height: 100vh;
    /*  width: 75vw; */
`

type ComponentProps = {
    data: ComponentBuilderType[]
    selectItem?: AdditionnalContentType[]
}

const Wrapper = styled.div`
    margin: 0.5rem 0 2rem 0;
`

const PaiementComponent = ({ data, selectItem }: ComponentProps) => {
    useSignals()

    const selected = signal<AdditionnalContentType>(selectItem![0])
    const onSelectChanged = (value: string) => {
        selected.value = selectItem!.find((e) => e.label == value)!
    }

    return (
        <ComponentWrapper>
            {
                data.map((e) => <Wrapper>
                    <ComponentBuilder label={e.label} child={e.child} />
                </Wrapper>
                )
            }
            <Box p={2} />
            <InputGroup>
                <InputLeftAddon w={100}>Type</InputLeftAddon>
                <Select w={300} onChange={(e) => onSelectChanged(e.target.value)}>
                    {
                        selectItem?.map((e) =>
                            <option value={e.label}>{e.label}</option>
                        )
                    }
                </Select>
            </InputGroup>
            <PaiementAdditionalLayoutBuilder childAsAdditionnalContent={selected} />
        </ComponentWrapper>
    )
}

export default PaiementComponent