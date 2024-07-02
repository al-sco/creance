import { Flex, Grid, GridItem, Input, InputGroup, InputLeftAddon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";
import { CreanceFieldType, InputType, SelectItem } from "../../common/configs/ui/creance/creance.type";

type CreanceInputsViewProps = {
    fields: CreanceFieldType[]
}

const CreanceInputsView = ({fields}: CreanceInputsViewProps) => {
    return (<Grid templateColumns='repeat(2, 1fr)' gap={4}>
        {fields.map((e: CreanceFieldType) => <Flex gap={2}>
            <GridItem w={e.inputItem && e.inputItem.placeholder ? '100%' : '12%'} h='10'>
                <InputGroup>
                    <InputLeftAddon>{e.name}</InputLeftAddon>
                    {e.inputItem && (e.inputItem.inputType == InputType.text ? <Input isRequired={true} isDisabled={!e.inputItem.isEditable} value={!e.inputItem.isEditable ? e.name : undefined} type='tel' placeholder={e.inputItem.placeholder} isReadOnly={e.inputItem.isEditable} /> : <NumberInput>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>)}
                </InputGroup>
            </GridItem>
            {e.selectItems &&
                <Select placeholder='Select option'>
                    {e.selectItems.map((s: SelectItem) => <option value={s.value}>{s.title}</option>
                    )}
                </Select>}
        </Flex>
        )}
    </Grid>);
}

export default CreanceInputsView;