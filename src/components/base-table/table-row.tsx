import { Box, Button, ChakraStyledOptions, Grid, GridItem, Input, Stack, Td, Tr } from "@chakra-ui/react"
import colors from "../../common/theme/colors/colors"
import { ParameterColumnType } from "../parameter-main-content/parameter-main-content"
import { useState } from "react"
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"




type TableRowProps = {
    index: number
    columns: ParameterColumnType[]
} & ChakraStyledOptions

type TableRowFuncType = {
    onEditPressed: () => void
    onDeletePressed: () => void
}


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

const TableRowEdit = ({ index, columns }: TableRowProps) => {

    const handleSubmit = () => {
        alert("CLicked");
    }

    return (



        <Tr onSubmit={() => alert("Hello there")} bg={index % 2 == 0 ? undefined : colors.gray}>{
            columns.map((column, i) => (
                    <Td 
                        key={i}>
                        <Input  name={column.label} placeholder={column.label} size='lg' />
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
            <TableRowEdit  {...baseStyle} columns={columns} index={index} /> :
            <TableRow onEditPressed={switchToEdit} onDeletePressed={switchToEdit} {...baseStyle} columns={columns} index={index} />
    )
}


export default TableRowEditable
