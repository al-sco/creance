import {
  Box,
  Button,
  GridItem,
  Input,
  Stack,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useTab,
} from "@chakra-ui/react";
import {
  AdditionnalContentType,
  CreanceColumnType,
  CreanceFieldType,
  CreanceTabType,
} from "../../common/configs/ui/creance/creance.type";
import colors from "../../common/theme/colors/colors";
import styled from "styled-components";
import CreanceInputsView from "./creance-inputs-view";
import { useSignals } from "@preact/signals-react/runtime";
import { Signal } from "@preact/signals-react";
import { DrawerComponent } from "../drawler";
import { AcDebiteurStateProvider } from "../../states/signals/creances_providers/AcDebiteur.state";
import { useState } from "react";

type CreanceTabsViewProps = {
  tabs?: CreanceTabType[];
  state: Signal<{}>;
};

const thStyle = {
  fontWeight: "600",
  color: colors.black,
};

const BaseStyledTable = styled.div`
  /* padding: 14px; */
  border-radius: 10px;
  height: 80%;
  width: 100%;
  /* background-color: ${colors.tableBorder}; */
  /* border: 1px solid ${colors.red}; */
  overflow-y: scroll;
  overflow-x: scroll;
`;

const TabNameStyle = styled.div`
  margin: 0 0 2rem 0;
  font-weight: bold;
  font-size: 1%.5;
`

const AdditionnalButtonStyled = styled.div`
  display: flex;
  margin: 1rem 0 0 0;
  justify-content: left;
  align-items: center;
`;

const BuildTabContent = ({
  additionnalContents,
  fields,
  index,
  rowCount,
  tableContent,
  hasAddButton,
  tableHeaders,
  handleSave,
  tabTitle
}: {
  index: number;
  tabTitle: string|undefined;
  hasAddButton?: boolean;
  handleSave?: (data: any[]) => void
  tableHeaders: string[] | undefined;
  tableContent: CreanceColumnType[] | CreanceFieldType[] | undefined;
  fields: CreanceFieldType[] | undefined;
  rowCount: number | undefined;
  additionnalContents:
  | AdditionnalContentType[]
  | undefined;
}) => {
  const [tabRowCount, setTabRowCount] = useState<number>(1);
  const rowFields = new Map<number, Signal<{}>>([[0, new Signal<{}>({})]]);

  const handleTabFieldChanged = (key: string, value: any, rowIndex: number) => {
    let rowData = rowFields.get(rowIndex);
    if (rowData) {
      rowData.value = { ...rowData.value, [key]: value };
      console.log(rowData.value);
    }
  };

  const handleSaveRows = () => {
    if (handleSave !== undefined) {
      let data: any[] = []

      for (let value of rowFields.values()) {
        data.push(value.value)
      }

      handleSave!(data)
    }
  }

  const buildColumn = (
    e: CreanceColumnType | CreanceFieldType,
    rowIndex?: number
  ): JSX.Element => {
    if ((e as CreanceColumnType).label === undefined) {
      return (
        <CreanceInputsView
          onChanged={handleTabFieldChanged}
          rowIndex={rowIndex}
          tabRowState={
            hasAddButton === true ? rowFields.get(rowIndex!) : undefined
          }
          isInputLeftAddOnHidden={true}
          repeatGridValue={1}
          fields={[e as CreanceFieldType]}
        />
      );
    } else {
      const _ = e as CreanceColumnType;
      return <Input name={_.key} placeholder={_.label} size="lg" />;
    }
  };

  return (
    <TabPanel key={index}>    
      {tabTitle && <TabNameStyle>{tabTitle}</TabNameStyle>}      
      {hasAddButton && (
        <Stack direction="row">
          <Button
            bg={colors.white}
            onClick={() => {
              rowFields.set(tabRowCount + 1, new Signal());
              setTabRowCount(() => tabRowCount + 1);
            }}
          >
            Ajouter
          </Button>
          <Box w={2} />
          <Button
            bg={colors.lightGreen}
            onClick={handleSaveRows}
          >
            Sauvergarder
          </Button>
        </Stack>
      )}
      <BaseStyledTable>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                {tableHeaders &&
                  tableHeaders.map((e, index) => (
                    <Th style={thStyle} key={index}>
                      {e}
                    </Th>
                  ))}
              </Tr>
            </Thead>
            <Tbody>
              {tableContent &&
                new Array(tabRowCount).fill(0).map((_, rowIndex) => (
                  <Tr key={rowIndex}>
                    {tableContent!.map((column, i) => (
                      <Td key={i}>{buildColumn(column, rowIndex)}</Td>
                    ))}{" "}
                  </Tr>
                ))}
              {fields && (
                <CreanceInputsView repeatGridValue={rowCount} fields={fields} />
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </BaseStyledTable>
      <AdditionnalButtonStyled>
        {additionnalContents &&
          additionnalContents.map((e) => {
            return <DrawerComponent child={e.child!} title={e.label!} />;
          })}
      </AdditionnalButtonStyled>
    </TabPanel>
  );
};

const CustomTab = (props: any) => {
  // 1. Reuse the `useTab` hook
  const tabProps = useTab({ ...props });
  const isSelected = !!tabProps["aria-selected"];

  return (
    <Button
      __css={{
        background: isSelected ? colors.bleu : "",
        margin: "10px",
        padding: "10px 20px",
        borderRadius: "5px",
        color: isSelected ? colors.white : colors.black,
      }}
      {...tabProps}
    >
      {tabProps.children as string}
    </Button>
  );
};

const CreanceTabsView = ({ tabs, state }: CreanceTabsViewProps) => {
  useSignals();

  const buildTableContent = (tabs: CreanceTabType[]): JSX.Element => {
    return (
      <TabPanels>
        {tabs.map(
          (
            {
              tableContent,
              fields,
              tableHeaders,
              rowCount,
              tabTitle,
              additionnalContents,
              hasAddButton,
              handleTabRowSave
            }: CreanceTabType,
            index
          ) => (
            <BuildTabContent
              index={index}
              tabTitle={tabTitle}
              handleSave={handleTabRowSave}
              tableHeaders={tableHeaders}
              tableContent={tableContent}
              hasAddButton={hasAddButton}
              fields={fields}
              rowCount={rowCount}
              additionnalContents={additionnalContents}
            />
          )
        )}
      </TabPanels>
    );
  };

  var filteredTabs =
    tabs?.filter((tab) =>
      [
        "D",
        (state.value as any)[AcDebiteurStateProvider.debiteurTypeKeyCode] &&
        (state.value as any)[AcDebiteurStateProvider.debiteurTypeKeyCode]
          ?.toString()
          .toUpperCase(),
      ].includes(tab.key)
    ) ?? [];
  if (filteredTabs.length == 0) {
    filteredTabs = tabs!;
  }

  return (
    <>
      <GridItem w="100%">
        {filteredTabs && (
          <Tabs
            size="md"
            variant="soft-rounded"
            background={colors.tableBorder}
            borderRadius={"10px"}
            colorScheme="blue"
          >
            <TabList>
              {filteredTabs.map(({ tabName }: CreanceTabType, index) => (
                <CustomTab key={index}>{tabName}</CustomTab>
              ))}
            </TabList>
            {buildTableContent(filteredTabs)}         
          </Tabs>
        )}
      </GridItem>
    </>
  );
};

export default CreanceTabsView;
