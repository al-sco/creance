import { CloseIcon } from "@chakra-ui/icons";
import { Tr, Td, Input, Button } from "@chakra-ui/react";
import { useState, useRef } from "react";
import colors from "../../common/theme/colors/colors";
import { ParameterColumnType } from "../parameter-main-content/parameter-main-content";
import { TableEditProps } from "./table-row";

export const TableRowEdit = ({ index, columns, onEditPressed, data }: TableEditProps) => {
    let inputsValuesStates = new Map<ParameterColumnType, [string, React.Dispatch<React.SetStateAction<string>>]>([
        ...columns.map((col) => [col, useState<string>(data[col.label.toLowerCase()])])
    ]);

    let inputRefs = columns.map((_) => useRef<HTMLInputElement>(null))



    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>, inputIndex: number) => {
        if (e.key == 'Enter') {
            if (inputIndex < inputRefs.length - 1) {
                let nextInput = inputRefs[inputIndex + 1]
                nextInput.current?.focus()
            }
            else {
                columns.forEach((col) => {
                    const [value, _] = inputsValuesStates.get(col)!
                    console.log(`${col.label} : ${value}`)
                })
                
                onEditPressed();
            }
        }
    }


    return (
        <Tr bg={index % 2 == 0 ? undefined : colors.gray}>
            {
                columns.map((column, i) => (
                    <Td
                        key={i}>
                        <Input w="90%" ref={inputRefs[i]} value={inputsValuesStates.get(column)?.[0]} onChange={() => inputsValuesStates.get(column)?.[1](() => inputRefs[i].current!.value)} onKeyDown={(e) => handleSubmit(e, i)} name={column.label} placeholder={column.label} size='lg' />
                        {i == columns.length - 1 && <Button style={{ marginLeft: "3%" }} onClick={onEditPressed} children={<CloseIcon />} />}
                    </Td>
                )
                )}  </Tr>
    )
}
