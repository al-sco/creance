import { GridItem, Input, Tab, TabList, TabPanel, TabPanels, Table, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { CreanceColumnType, CreanceFieldType, CreanceTabType } from "../../common/configs/ui/creance/creance.type"
import colors from "../../common/theme/colors/colors"
import styled from "styled-components"
import CreanceInputsView from "./creance-inputs-view"

type CreanceTabsViewProps = {
    tabs?: CreanceTabType[],
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


const CreanceTabsView = ({ tabs }: CreanceTabsViewProps) => {
    const buildColumn = (e: CreanceColumnType | CreanceFieldType): JSX.Element => {
        if ((e as CreanceColumnType).key === undefined) {
            return (<CreanceInputsView isInputLeftAddOnHidden={true} repeatGridValue={1} fields={[(e as CreanceFieldType)]} />)
        } else {
            const _ = e as CreanceColumnType
            return (
                <Input w="90%" name={_.key} placeholder={_.label} size='lg' />
            )
        }
    }

    return (
        <>
            <GridItem w='100%' h='10'>
                {tabs && <Tabs size='md' variant='enclosed'>
                    <TabList>
                        {tabs.map(({ tabName }: CreanceTabType) => <Tab>{tabName}</Tab>
                        )}
                    </TabList>
                    <TabPanels>
                        {tabs.map(({ tableContent, fields, tableHeaders, rowCount }: CreanceTabType, index) => <TabPanel>
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
                                            {tableContent && <Tr bg={index % 2 == 0 ? undefined : colors.gray}>
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
                        </TabPanel>
                        )}
                    </TabPanels>
                </Tabs>}
            </GridItem>
        </>
    )
}

export default CreanceTabsView;