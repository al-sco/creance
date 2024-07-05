import { GridItem, Input, Tab, TabList, TabPanel, TabPanels, Table, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { creanceTabs } from "../../common/configs/ui/creance/creance.data"
import { CreanceTabType } from "../../common/configs/ui/creance/creance.type"
import colors from "../../common/theme/colors/colors"
import styled from "styled-components"

type CreanceTabsViewProps = {
    tabs: CreanceTabType[]
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
    return (
        <>
            <GridItem w='100%' h='10'>
                <Tabs size='md' variant='enclosed'>
                    <TabList>
                        {creanceTabs.map(({ tabName }: CreanceTabType) => <Tab>{tabName}</Tab>
                        )}
                    </TabList>
                    <TabPanels>
                        {tabs.map(({ headers, tableContent }: CreanceTabType, index) => <TabPanel>
                            <BaseStyledTable>
                                <TableContainer>
                                    <Table>
                                        <Thead>
                                            <Tr>
                                                {headers.map((e, index) => (
                                                    <Th style={thStyle} key={index}>{e}</Th>
                                                ))}
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr bg={ index  % 2 == 0 ? undefined : colors.gray}>
                                                {
                                                    tableContent.map((column, i) => (
                                                        <Td
                                                            key={i}>
                                                            <Input w="90%" name={column.key} placeholder={column.label} size='lg' />                                                            
                                                        </Td>
                                                    )
                                                    )}  </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </BaseStyledTable>
                        </TabPanel>
                        )}
                    </TabPanels>
                </Tabs>
            </GridItem>
        </>
    )
}

export default CreanceTabsView;