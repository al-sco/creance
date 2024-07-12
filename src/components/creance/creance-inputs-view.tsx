import { Flex, Grid, GridItem, Input, InputGroup, InputLeftAddon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { CreanceFieldType, InputType } from "../../common/configs/ui/creance/creance.type";
import styled from "styled-components";
import colors from "../../common/theme/colors/colors";
import { SelectableItem } from "../selectable-item";
import { useSignals } from "@preact/signals-react/runtime";


type CreanceInputsViewProps = {
    fields: CreanceFieldType[],
    repeatGridValue?: number,
    isInputLeftAddOnHidden?: boolean
}

const DateInputStyled = styled.div` 
    display: flex;
    justify-content: center;
    padding: 0 10px 0 10px;
`

const CreanceInputsView = ({ fields, repeatGridValue, isInputLeftAddOnHidden }: CreanceInputsViewProps) => {
    useSignals()
    
    const switchInputType = ({inputItem,state,key,onInsert}:CreanceFieldType): JSX.Element => {
        switch (inputItem?.inputType) {
            case InputType.number:
                return (<NumberInput width='100%' >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>)
            case InputType.text:
                return (<Input borderColor={colors.gray}  onChange={(e)=>onInsert && onInsert(key,e.target.value)} 
 isRequired={true} isDisabled={!inputItem.isEditable} value={(state?.value as any)[key]} placeholder={inputItem.placeholder} isReadOnly={!inputItem.isEditable} />)
            case InputType.date:
                return (<DateInputStyled><input onChange={(e)=>onInsert && onInsert(key,e.target.value)} aria-label="Date" type="date" /></DateInputStyled>)
            default:
                return <></>
        }
    }

    return (<Grid templateColumns={`repeat(${repeatGridValue ? repeatGridValue : 3}, 1fr)`} gap={4}>
        {fields.map((e: CreanceFieldType) => <Flex gap={2}>
            <GridItem w={e.inputItem && e.inputItem.placeholder ? '100%' : ''} h='10'>
                <InputGroup>
                    {
                        isInputLeftAddOnHidden && isInputLeftAddOnHidden? <></> : 
                        <InputLeftAddon>{e.name}</InputLeftAddon>
                    }
                    {e.inputItem && switchInputType(e)}
                </InputGroup>
            </GridItem>
            {e.selectItems &&
                <SelectableItem onSelectChanged={(value)=>e.onInsert && e.onInsert(e.key,value)} promisedSelectItems={e.selectItems} />
                }
        </Flex>
        )}
    </Grid>);
}

export default CreanceInputsView;