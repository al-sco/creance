import { GridItem, Input, Tab, TabList, TabPanel, TabPanels, Table, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { CreanceColumnType, CreanceFieldType, CreanceTabType } from "../../common/configs/ui/creance/creance.type"
import colors from "../../common/theme/colors/colors"
import styled from "styled-components"
import CreanceInputsView from "./creance-inputs-view"
import { useSignals } from "@preact/signals-react/runtime"
import { Signal } from "@preact/signals-react"
import { DrawerComponent } from "../drawler"
import { AcDebiteurStateProvider } from "../../states/signals/creances_providers/AcDebiteur.state"

type CreanceTabsViewProps = {
    tabs?: CreanceTabType[],
    state: Signal<{}>
}

const thStyle = {
    fontWeight: '600',
    color: colors.black,
};

const BaseStyledTable = styled.div`
    padding: 12px;
    border-radius: 12px;
    height: 80%;
    width: 100%;
    border: 1px solid ${colors.tableBorder};
    overflow-y: scroll;
    overflow-x: scroll;
`;

const AdditionnalButtonStyled = styled.div`
    display: flex;
    margin: 1rem 0 0 0;
    justify-content: left;
    align-items: center;
`


const CreanceTabsView = ({ tabs, state }: CreanceTabsViewProps) => {
    useSignals()

    const buildColumn = (e: CreanceColumnType | CreanceFieldType): JSX.Element => {
        if ((e as CreanceColumnType).label === undefined) {
            return (<CreanceInputsView isInputLeftAddOnHidden={true} repeatGridValue={1} fields={[(e as CreanceFieldType)]} />)
        } else {
            const _ = e as CreanceColumnType
            return (
                <Input name={_.key} placeholder={_.label} size='lg' />
            )
        }
    }

    const buildTableContent = (tabs: CreanceTabType[]): JSX.Element => {
        return <TabPanels>
            {tabs.map(({ tableContent, fields, tableHeaders, rowCount, additionnalContents }: CreanceTabType) => <TabPanel>
                <BaseStyledTable>
                    <TableContainer>
                        <Table>
                            <Thead>
                                <Tr>
                                    {tableHeaders && tableHeaders.map((e, index) => (
                                        <Th style={thStyle} key={index}>{e}</Th>
                                    ))}
                                </Tr>
                            </Thead>
                            <Tbody>
                                {tableContent && <Tr>
                                    {
                                        tableContent.map((column, i) => (
                                            <Td
                                                key={i}>
                                                {buildColumn(column)}
                                            </Td>
                                        )
                                        )
                                    }  </Tr>
                                }
                                {
                                    fields && <CreanceInputsView repeatGridValue={rowCount} fields={fields} />
                                }
                            </Tbody>
                        </Table>
                    </TableContainer>
                </BaseStyledTable>
                <AdditionnalButtonStyled>
                    {additionnalContents && additionnalContents.map((e) => {
                        return <DrawerComponent child={e.child} title={e.label} />
                    })}
                </AdditionnalButtonStyled>
            </TabPanel>
            )}
        </TabPanels>
    }


    let filteredTabs = tabs?.filter((tab) => ['D', ((state.value as any)[AcDebiteurStateProvider.debiteurTypeKeyCode] && (state.value as any)[AcDebiteurStateProvider.debiteurTypeKeyCode]?.toString().toUpperCase())].includes(tab.key)) ?? []
    return (
        <>
            <GridItem w='100%' h='10'>
                {filteredTabs && <Tabs size='md' variant='enclosed'>
                    <TabList>
                        {filteredTabs.map(({ tabName }: CreanceTabType) => <Tab>{tabName}</Tab>)}
                    </TabList>
                    {buildTableContent(filteredTabs)}
                </Tabs>}
            </GridItem>
        </>
    )
}

export default CreanceTabsView;