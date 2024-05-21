import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Stack } from "@chakra-ui/react"
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
    const handleEdit = (code: String) => {
        // Logique de modification
        console.log(`Modification ${code}`);
    };

    const handleDelete = (code: String) => {
        // Logique de suppression
        console.log(`Suppression ${code}`);
    };
    return (
        <BaseStyledTable>
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Code</Th>
                            <Th>Libelle</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            tableParametersMockData.map((row, index) => (<Tr
                                key={index}
                                bg={index % 2 == 0 ? undefined : colors.gray}>
                                <Td>{row.code}</Td>
                                <Td>{row.libelle}</Td>
                                <Td>
                                <Stack direction="row" spacing={4}>
                                        <Button onClick={() => handleEdit(row.code)}
                                        // Modification de la couleur
                                          bg="cyan.500" 
                                          color="white"
                                          _hover={{ bg: "cyan.600" }}
                                        >Modifier</Button>
                                        <Button onClick={() => handleDelete(row.code)}
                                        // Modification de la couleur
                                          bg="red.500" 
                                          color="white"
                                          _hover={{ bg: "red.600" }}
                                        >Supprimer</Button>
                                    </Stack>
                                </Td>
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
