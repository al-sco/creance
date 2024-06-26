import { Box, Button, ChakraStyledOptions, Grid, GridItem, Input, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Td, Tr, useDisclosure } from "@chakra-ui/react"
import colors from "../../common/theme/colors/colors"
import { ParameterColumnType } from "../parameter-main-content/parameter-main-content"
import { useRef, useState } from "react"
import { CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { AcBankAgencyStateFuncs } from "../../states/signals/parameter_providers/AcBankAgency.state"




type TableRowProps = {
    index: number
    data: any,
    columns: ParameterColumnType[]
} & ChakraStyledOptions

type TableRowFuncType = {
    onEditPressed: () => void
    onDeletePressed: () => void
}

function lettertoCamelCase(word: string) {

    return word[0].toLowerCase() + word.substring(1)

}

type TableEditProps = TableRowProps & { onEditPressed: () => void }

type NonEditableTableRowProps = TableRowProps & TableRowFuncType

const TableRow = ({ index, columns, onDeletePressed, onEditPressed, data }: NonEditableTableRowProps) => {
    return (
        <Tr bg={index % 2 == 0 ? undefined : colors.gray}>{
            columns.map((column, i) => (
                <Td
                    key={i}>
                    {i === columns.length - 1 ?
                        (<Grid templateColumns={"1fr 100px"}>
                            <GridItem style={{ overflow: 'hidden', maxWidth: '90%' }}>
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

const TableRowEdit = ({ index, columns, onEditPressed, data }: TableEditProps) => {
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

const TableRowEditable = ({ index, columns, baseStyle, data }: TableRowProps) => {
    const [isEditable, setSetEditable] = useState<boolean>()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const switchToEdit = () => {
        setSetEditable(() => !isEditable)
    }

    const handleDelete = async () => {
        await AcBankAgencyStateFuncs.deleteBankAgency(data);
        onClose();
    }

    return (
        isEditable ?
            <TableRowEdit data={data} onEditPressed={switchToEdit}  {...baseStyle} columns={columns} index={index} /> :
            <>
                <TableRow data={data} onEditPressed={switchToEdit} onDeletePressed={onOpen} {...baseStyle} columns={columns} index={index} />
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Voulez vous supprimer</ModalHeader>
                        <ModalCloseButton />
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Non
                            </Button>
                            <Button variant='ghost' onClick={handleDelete}>Oui</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
    )
}


export default TableRowEditable
