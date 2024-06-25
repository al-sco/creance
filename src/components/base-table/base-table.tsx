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

const StyledTitle = styled.h1`
  margin: 0 0 1% 0;
  font-size: 30px;
  font-weight: bold;
  align-content: start;
`;

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
