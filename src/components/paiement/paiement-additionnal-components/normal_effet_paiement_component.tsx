import { Button, Flex, InputGroup, InputLeftAddon, Select } from "@chakra-ui/react";
import { ComponentBuilderType } from "../component_builder";
import colors from "../../../common/theme/colors/colors";
import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import PaiementAdditionalLayoutBuilder from "../paiement_additionnal_layout_builder";

type CreanceMainContentProps = {
    selectItem?: ComponentBuilderType[]
}

const NormalEffetPaiementComponents = ({ selectItem }: CreanceMainContentProps) => {
    useSignals()

    const selected = signal<ComponentBuilderType>(selectItem![0])
    const onSelectChanged = (value: string) => {
        selected.value = selectItem!.find((e) => e.label == value)!
        console.log(selected.value.label)
    }

    return (
        <>
            <Flex justifyContent='space-between'>
                <Flex>
                    <InputGroup>
                        <InputLeftAddon w={100}>Option</InputLeftAddon>
                        <Select w={200} onChange={(e) => onSelectChanged(e.target.value)}>
                            {
                                selectItem?.map((e) =>
                                    <option value={e.label}>{e.label}</option>
                                )
                            }
                        </Select>
                    </InputGroup>
                </Flex>
                <Button variant='outline' _hover={{ color: colors.white, backgroundColor: colors.bleu }} size="md" color={colors.white} bg={colors.bleu} border={`1.5px solid ${colors.bleu}`} >Paiement de Frais</Button>
            </Flex>
            <PaiementAdditionalLayoutBuilder  childAsComponentBuilder={selected} />            

            <></>
        </>
    )
}

export default NormalEffetPaiementComponents