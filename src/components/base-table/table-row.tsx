import { Box, Button, ChakraStyledOptions, Grid, GridItem, Stack, Td, Tr} from "@chakra-ui/react"
import colors from "../../common/theme/colors/colors"
import { ParameterColumnType } from "../parameter-main-content/parameter-main-content"
import {  DeleteIcon, EditIcon } from "@chakra-ui/icons"




export type TableRowProps = {
    index: number
    data: any,
    handleDelete:(data:any)=>Promise<void>
    handleEdit:(data:any)=>Promise<void>
    columns: ParameterColumnType[]
} & ChakraStyledOptions

export type TableRowFuncType = {
    onEditPressed: () => void
    onDeletePressed: () => void
}

function lettertoCamelCase(word: string) {
    return word[0].toLowerCase() + word.substring(1)
}

export type TableEditProps = TableRowProps & { onEditPressed: () => void }

type NonEditableTableRowProps = TableRowProps & TableRowFuncType

export const TableRow = ({ index, columns, onDeletePressed, onEditPressed, data }: NonEditableTableRowProps) => {
    return (
        <Tr  bg={index % 2 == 0 ? undefined : colors.gray}>{
            columns.map((column, i) => (
                <Td 
                    key={i}>
                    {i === columns.length - 1 ?
                        (<Grid templateColumns={"1fr 100px"} alignItems="center">
                            <GridItem style={{ overflow: 'hidden', maxWidth: '90%'}}>
                                <span style={{ whiteSpace: 'wrap' }}>
                                    {data[lettertoCamelCase(column.key)]}
                                </span>
                            </GridItem>
                            <GridItem>
                                <Stack direction="row">
                                    <Button backgroundColor={"transparent"} border={`0.5px solid ${colors.bleu}`} onClick={onEditPressed} children={<EditIcon color={colors.bleu} />} />
                                    <Box w={10} />
                                    <Button backgroundColor={"transparent"} border={`0.5px solid ${colors.red}`} onClick={onDeletePressed} children={<DeleteIcon color={colors.red} />} />
                                </Stack>
                            </GridItem>
                        </Grid>) :
                        (<>{data[lettertoCamelCase(column.key)]}</>)}</Td>
            )
            )
        }</Tr>
    )
}

