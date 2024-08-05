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

const CreanceInputsView = ({ fields, repeatGridValue, isInputLeftAddOnHidden }: CreanceInputsViewProps) => {
    useSignals()

    const switchInputType = ({ inputItem, state, key, onInsert }: CreanceFieldType): JSX.Element => {
        switch (inputItem?.inputType) {
            case InputType.number:
                return (<NumberInput width='100%' >
                    <NumberInputField backgroundColor={colors.white} onChange={(e) => onInsert && onInsert(key, e.target.value)} readOnly={!inputItem.isEditable} value={(state?.value as any)[key] ?? ''} />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>)
            case InputType.text:
                return (<Input borderColor={colors.white} _disabled={{ backgroundColor: `${colors.white}` }} backgroundColor={colors.white} onChange={(e) => onInsert && onInsert(key, e.target.value)}
                    isRequired={true} isDisabled={!inputItem.isEditable} value={(state?.value as any)[key] ?? ''} placeholder={inputItem.placeholder} isReadOnly={!inputItem.isEditable} />)
            case InputType.date:
                return (<Input style={{ border: `2px solid ${colors.white}`, borderRadius: '4px', padding: '0 7px', margin: '0' }} onChange={(e) => onInsert && onInsert(key, e.target.value)} aria-label="Date" type="date" />)
            default:
                return <></>
        }
    }
    // ${repeatGridValue ?? 3}
    let columns=Math.round((fields.length/(repeatGridValue?? 3)))
    return (<Grid gridAutoFlow="column" gridTemplateRows={`repeat(${columns}, 1fr)`} gap={4} overflowX={"scroll"} overflowY={"scroll"}  >
        {fields.map((e: CreanceFieldType) => <Flex>
            <GridItem w={e.inputItem && e.inputItem.placeholder ? '100%' : ''} h='10'>
                <InputGroup style={{
                    alignItems: "center",
                    display: 'grid', gridTemplateColumns: 'auto 1fr auto',
                }}>
                    {
                        isInputLeftAddOnHidden && isInputLeftAddOnHidden ? <></> :
                            <InputLeftAddon>{e.name}</InputLeftAddon>
                    }
                    {e.inputItem && switchInputType(e)}
                    {e.selectItems &&
                        <SelectableItem onSelectChanged={(value) => e.onInsert && e.onInsert(e.key, value)} promisedSelectItems={e.selectItems} />
                    }
                </InputGroup>
            </GridItem>
        </Flex>
        )}
    </Grid>);
}

export default CreanceInputsView;