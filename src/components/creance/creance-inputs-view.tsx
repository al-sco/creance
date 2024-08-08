import {
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import {
  CreanceFieldType,
  InputType,
} from "../../common/configs/ui/creance/creance.type";
import colors from "../../common/theme/colors/colors";
import { SelectableItem } from "../selectable-item";
import { useSignals } from "@preact/signals-react/runtime";
import { Signal } from "@preact/signals-react";

type OnChangedFunc = (key: string, value: any, rowIndex: number) => void;

type CreanceInputsViewProps = {
  fields: CreanceFieldType[];
  repeatGridValue?: number;
  rowIndex?: number;
  onChanged?: OnChangedFunc;
  tabRowState?: Signal<{}>;
  isInputLeftAddOnHidden?: boolean;
};

const CreanceInputsView = ({
  fields,
  repeatGridValue,
  isInputLeftAddOnHidden,
  onChanged,
  rowIndex,
  tabRowState,
}: CreanceInputsViewProps) => {
  useSignals();

  const switchInputType = ({
    inputItem,
    state,
    key,
    onInsert,
    handleFieldChanged,
  }: CreanceFieldType & {
    handleFieldChanged: OnChangedFunc | undefined;
  }): JSX.Element => {
    let hasTabContentHandleChangedDefined =
      rowIndex !== undefined && handleFieldChanged !== undefined;
    switch (inputItem?.inputType) {
      case InputType.number:
        return (
          <NumberInput width="100%">
            <NumberInputField
              backgroundColor={colors.white}
              onKeyDown={(e) =>
                e.key == "Enter"
                  ? (hasTabContentHandleChangedDefined &&
                      handleFieldChanged!(
                        key,
                        e.currentTarget.value,
                        rowIndex!
                      )) ||
                    (onInsert && onInsert(key, e.currentTarget.value))
                  : undefined
              }
              readOnly={!inputItem.isEditable}
              value={getCurrentValue(tabRowState, key, state)()}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        );
      case InputType.text:
        return (
          <Input
            borderColor={colors.white}
            _disabled={{ backgroundColor: `${colors.white}` }}
            backgroundColor={colors.white}
            onKeyDown={(e) =>
              e.key == "Enter"
                ? (hasTabContentHandleChangedDefined &&
                    handleFieldChanged!(
                      key,
                      e.currentTarget.value,
                      rowIndex!
                    )) ||
                  (onInsert && onInsert(key, e.currentTarget.value))
                : undefined
            }
            isRequired={true}
            isDisabled={!inputItem.isEditable}
            value={getCurrentValue(tabRowState, key, state)()}
            placeholder={inputItem.placeholder}
            isReadOnly={!inputItem.isEditable}
          />
        );
      case InputType.date:
        return (
          <Input
            style={{
              border: `2px solid ${colors.white}`,
              borderRadius: "4px",
              padding: "0 7px",
              margin: "0",
            }}
            onChange={(e) =>
              (hasTabContentHandleChangedDefined &&
                handleFieldChanged!(key, e.target.value, rowIndex!)) ||
              (onInsert && onInsert(key, e.target.value))
            }
            value={getCurrentValue(tabRowState, key, state)()}
            aria-label="Date"
            type="date"
          />
        );
      default:
        return <></>;
    }
  };

  let columns = Math.round(fields.length / (repeatGridValue ?? 3));
  return (
    <Grid
      gridAutoFlow="column"
      gridTemplateRows={`repeat(${columns}, 1fr)`}
      gap={4}
      overflowX={"scroll"}
      overflowY={"scroll"}
    >
      {fields.map((e: CreanceFieldType) => (
        <Flex>
          <GridItem
            w={e.inputItem && e.inputItem.placeholder ? "100%" : ""}
            h="10"
          >
            <InputGroup
              style={{
                alignItems: "center",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
              }}
            >
              {isInputLeftAddOnHidden && isInputLeftAddOnHidden ? (
                <></>
              ) : (
                <InputLeftAddon>{e.name}</InputLeftAddon>
              )}
              {e.inputItem &&
                switchInputType({ ...e, ...{ handleFieldChanged: onChanged } })}
              {e.selectItems && (
                <SelectableItem
                  onSelectChanged={(value) =>
                    (rowIndex !== undefined &&
                      onChanged !== undefined &&
                      onChanged(e.key, value, rowIndex)) ||
                    (e.onInsert && e.onInsert(e.key, value))
                  }
                  promisedSelectItems={e.selectItems}
                />
              )}
            </InputGroup>
          </GridItem>
        </Flex>
      ))}
    </Grid>
  );
};

export default CreanceInputsView;

function getCurrentValue(
  tabRowState: Signal<{}> | undefined,
  key: string,
  state: Signal<{}> | undefined
) {
  return () => {
    if (tabRowState !== undefined) {
      return (tabRowState.value as any)[key];
    }
    return (state?.value as any)[key] ?? "";
  };
}
