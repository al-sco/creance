import { Box, Button, ChakraStyledOptions, Grid, GridItem, Input, Stack, Td, Tr } from "@chakra-ui/react"
import colors from "../../common/theme/colors/colors"
import { ParameterColumnType } from "../parameter-main-content/parameter-main-content"
import { useRef, useState } from "react"
import { CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons"




type TableRowProps = {
    index: number
    columns: ParameterColumnType[]
} & ChakraStyledOptions

type TableRowFuncType = {
    onEditPressed: () => void
    onDeletePressed: () => void
}

type TableEditProps=TableRowProps & {onEditPressed: () => void}

type NonEditableTableRowProps = TableRowProps & TableRowFuncType

const TableRow = ({ index, columns, onDeletePressed, onEditPressed }: NonEditableTableRowProps) => {
    return (
        <Tr bg={index % 2 == 0 ? undefined : colors.gray}>{
            columns.map((column, i) => (
                <Td
                    key={i}>
                    {i === columns.length - 1 ?
                        (<Grid templateColumns={"1fr 100px"}>
                            <GridItem>
                                {column.label} {index}
                            </GridItem>
                            <GridItem>
                                <Stack direction="row">
                                    <Button onClick={onEditPressed} children={<EditIcon />} />
                                    <Box w={10} />
                                    <Button onClick={onDeletePressed} children={<DeleteIcon />} />
                                </Stack>
                            </GridItem>
                        </Grid>) :
                        (<>{column.label} {index}</>)}  </Td>
            )
            )
        }</Tr>
    )
}

const TableRowEdit = ({ index, columns,onEditPressed }: TableEditProps) => {
    let inputsValuesStates=new Map<ParameterColumnType,[string, React.Dispatch<React.SetStateAction<string>>]>([
        ...columns.map((col)=>[col,useState<string>('')])
    ]);

    let inputRefs=columns.map((_)=>useRef<HTMLInputElement>(null))



    const handleSubmit=(e:React.KeyboardEvent<HTMLInputElement>,inputIndex:number)=>{
            if(e.key=='Enter'){
                if(inputIndex<inputRefs.length-1){
                    let nextInput=inputRefs[inputIndex+1]
                        nextInput.current?.focus()
                }
                else {
                    columns.forEach((col)=>{
                        const [value,_]=inputsValuesStates.get(col)!
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
                    <Input w="90%" ref={inputRefs[i]} value={inputsValuesStates.get(column)?.[0]} onChange={()=>inputsValuesStates.get(column)?.[1](()=>inputRefs[i].current!.value)} onKeyDown={(e)=>handleSubmit(e,i)}  name={column.label} placeholder={column.label} size='lg' />
                    {i==columns.length-1 && <Button style={{marginLeft:"3%"}} onClick={onEditPressed} children={<CloseIcon />} />}
                </Td>
            )
            )}  </Tr>
    )
}

const TableRowEditable = ({ index, columns, baseStyle }: TableRowProps) => {
    const [isEditable, setSetEditable] = useState<boolean>()
    const switchToEdit = () => {
        setSetEditable(() => !isEditable)
    }

    return (
        isEditable ?
            <TableRowEdit onEditPressed={switchToEdit}  {...baseStyle} columns={columns} index={index} /> :
            <TableRow onEditPressed={switchToEdit} onDeletePressed={switchToEdit} {...baseStyle} columns={columns} index={index} />
    )
}


export default TableRowEditable
