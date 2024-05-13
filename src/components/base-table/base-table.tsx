import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import styled from "styled-components"
import colors from "../../theme/color";
import { tableParametersMockData } from "../../data/parameter-data";


const BaseStyledTable = styled.div`
padding : 12px;
border-radius: 12px;
height: 80%;
border: 1px solid ${colors.tableBorder};
overflow-y: scroll;
`;

const BaseTable = () => {
    return (
        <BaseStyledTable>
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Code</Th>
                            <Th>Libelle</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            tableParametersMockData.map((row, index) => (<Tr
                                key={index}
                                bg={index % 2 == 0 ? undefined : colors.gray}>
                                <Td>{row.code}</Td>
                                <Td>{row.libelle}</Td>
                            </Tr>)
                            )
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </BaseStyledTable>
    )
}

export default BaseTable
