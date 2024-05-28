import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import styled from "styled-components"
import colors from "../../common/theme/colors/colors";
import { ParameterColumnType } from "../parameter-main-content/parameter-main-content";
import TableRowEditable from "./table-row";
import { bankAgencyList } from "../../states/signals/parameter-providers/bank-agency.state";
import { Signal } from "@preact/signals-react";
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type";



type ParameterTableProps = {
    subMenu:SubMenuItem,
    columns: ParameterColumnType[]
}

const BaseStyledTable = styled.div`
padding : 12px;
border-radius: 12px;
height: 80%;
border: 1px solid ${colors.tableBorder};
overflow-y: scroll;
`;


export const buildTableContent=(signal:Signal<any>,columns:ParameterColumnType[])=>{
    return (<>
        {
            signal.value.map((data:any, index:number) => (
                <TableRowEditable data={data}  key={index} columns={columns} index={index} bg={index % 2 == 0 ? undefined : colors.gray} />
            ))
        }
        </>
    )
}

const BaseTable = ({ columns,subMenu }: ParameterTableProps) => {
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
                            subMenu.render && subMenu.render()
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </BaseStyledTable>
    )
}

export default BaseTable
