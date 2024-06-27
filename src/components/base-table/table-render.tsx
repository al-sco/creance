import { Signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import colors from "../../common/theme/colors/colors";
import { ParameterColumnType } from "../parameter-main-content/parameter-main-content";
import TableRowEditable from "./table-editable";
import { SubMenuType } from "../../common/configs/ui/menus/menu.data";

type TableRenderProps= {
    signal: Signal<any[]>,
    columns: ParameterColumnType[],
    subMenu:SubMenuType
}

const TableContentRender = ({ signal, columns,subMenu} : TableRenderProps) => {
    useSignals()
    return (
      <>
        {signal.value.map((data: any, index: number) => (
          <TableRowEditable
          
          handleEdit={subMenu.handleEdit!}
          handleDelete={subMenu.handleDelete!}
            data={data}
            key={index}
            columns={columns}
            index={index}
            bg={index % 2 == 0 ? undefined : colors.gray}
          />
        ))
        }
      </>
    )
  }
  
  
  export const buildTableContent = (
    props: TableRenderProps
  ) => {
    return <TableContentRender  {...props} />
  };