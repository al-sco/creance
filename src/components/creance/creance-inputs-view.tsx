import { Flex, Grid, GridItem, Input, InputGroup, InputLeftAddon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";
import { CreanceFieldType, CreanceInputItem, InputType, SelectItem } from "../../common/configs/ui/creance/creance.type";
import styled from "styled-components";
import colors from "../../common/theme/colors/colors";


type CreanceInputsViewProps = {
    fields: CreanceFieldType[]
}

const DateInputStyled = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 10px 0 10px;
`

const CreanceInputsView = ({ fields }: CreanceInputsViewProps) => {

    const switchInputType = (input: CreanceInputItem): JSX.Element => {
        switch (input.inputType) {
            case InputType.number:
                return (<NumberInput width='100%' >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>)
            case InputType.text:
                return (<Input borderColor={colors.gray} isRequired={true} isDisabled={!input.isEditable} value={input.isEditable && !input.isEditable ? input.placeholder : undefined} type='tel' placeholder={input.placeholder} isReadOnly={input.isEditable && input.isEditable} />)
            case InputType.date:
                return (<DateInputStyled><input aria-label="Date" type="date" /></DateInputStyled>)
            default:
                return <></>
        }
    }

    return (<Grid templateColumns='repeat(3, 1fr)' gap={4}>
        {fields.map((e: CreanceFieldType) => <Flex gap={2}>
            <GridItem w={e.inputItem && e.inputItem.placeholder ? '100%' : ''} h='10'>
                <InputGroup>
                    <InputLeftAddon>{e.name}</InputLeftAddon>
                    {e.inputItem && switchInputType(e.inputItem)}
                </InputGroup>
            </GridItem>
            {e.selectItems &&
                <Select placeholder=''>
                    {e.selectItems.map((s: SelectItem) => <option value={s.value}>{s.title}</option>
                    )}
                </Select>}
        </Flex>
        )}
    </Grid>);
}

export default CreanceInputsView;