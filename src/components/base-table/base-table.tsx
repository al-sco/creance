import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import styled from "styled-components"
import { tableParametersMockData } from "../../data/parameter-data";
import colors from "../../common/theme/colors/colors";
import { ParameterColumnType } from "../parameter-main-content/parameter-main-content";



type ParameterTableProps = {
    columns: ParameterColumnType[]
}

const BaseStyledTable = styled.div`
padding : 12px;
border-radius: 12px;
height: 80%;
border: 1px solid ${colors.tableBorder};
overflow-y: scroll;
`;

const BaseTable = ({ columns }: ParameterTableProps) => {
    const nbres: number[] = [];
    for (let index = 0; index < 100; index++) {
        nbres.push(index)
    }
    return (
        <BaseStyledTable>
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            {
                                columns.map((column, index) => (<Th key={index}>{column.label}</Th>))
                            }

                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            nbres.map((nbre, index) => (
                                <Tr bg={index % 2 == 0 ? undefined : colors.gray}>{
                                    columns.map((column, i) => (
                                        <Td
                                            key={i}>
                                            {column.label} {nbre}</Td>
                                    )
                                    )
                                }</Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </BaseStyledTable>
    )
}

export default BaseTable
