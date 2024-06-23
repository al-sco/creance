<<<<<<< HEAD
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Stack } from "@chakra-ui/react"
import styled from "styled-components"
import colors from "../../theme/color";
import { tableParametersMockData } from "../../data/parameter-data";
=======
import {
    Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import styled from "styled-components";
import colors from "../../common/theme/colors/colors";
import { ParameterColumnType } from "../parameter-main-content/parameter-main-content";
import TableRowEditable from "./table-row";
import { Signal } from "@preact/signals-react";
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type";
import { logo } from "../../common/theme/assets";
import { color } from "framer-motion";
>>>>>>> 82ffa8bf519690948f19f35ba80f2e0fc9e15782

type ParameterTableProps = {
  subMenu: SubMenuItem;
  columns: ParameterColumnType[];
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

<<<<<<< HEAD
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
=======
const StyledTitle = styled.h1`
  margin: 0 0 1% 0;
  font-size: 30px;
  font-weight: bold;
  align-content: start;
`;
>>>>>>> 82ffa8bf519690948f19f35ba80f2e0fc9e15782

const thStyle = {
  fontWeight: '700',
  fontSize: '15px',
  color: colors.black,
};


export const buildTableContent = (
  signal: Signal<any>,
  columns: ParameterColumnType[]
) => {
  return (
    <>
      {signal.value.map((data: any, index: number) => (
        <TableRowEditable        
          data={data}
          key={index}
          columns={columns}
          index={index}
          bg={index % 2 == 0 ? undefined : colors.gray}
        />
      ))}
    </>
  );
};

const BaseTable = ({ columns, subMenu }: ParameterTableProps) => {
  return (
    <>
      {columns.length != 0 &&(
        <>
          <StyledTitle>{subMenu.nameColumn}</StyledTitle>
          <BaseStyledTable>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    {columns.map((column, index) => (
                      <Th style={thStyle} key={index}>{column.label}</Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>{subMenu.render && subMenu.render()}</Tbody>
              </Table>
            </TableContainer>
          </BaseStyledTable>
        </>
      )}
    </>
  );
};

export default BaseTable;
