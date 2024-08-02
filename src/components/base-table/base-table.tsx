import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import styled from "styled-components";
import colors from "../../common/theme/colors/colors";
import { ParameterColumnType } from "../parameter-main-content/parameter-main-content";
import { Signal } from "@preact/signals-react";
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type";
import { CreanceColumnType } from "../../common/configs/ui/creance/creance.type";

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
  background-color: ${colors.white};
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

export type  TableRenderProps = {
  signal: Signal<any[]>,
  columns: ParameterColumnType[] | CreanceColumnType[]
};



const BaseTable = ({ columns, subMenu }: ParameterTableProps) => {
  return (
    <>
      {columns.length != 0 && (
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
