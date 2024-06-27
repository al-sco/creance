import { useState } from "react"
import { Button, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { TableRowEdit } from "./table-edit"
import { TableRow, TableRowProps } from "./table-row"

const TableRowEditable = ({ index, columns, baseStyle, data,handleDelete,handleEdit }: TableRowProps) => {
    const [isEditable, setSetEditable] = useState<boolean>()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const switchToEdit = () => {
        setSetEditable(() => !isEditable)
    }

    const _handleDelete = async () => {
        if(handleDelete){
            handleDelete(data);
        }
        onClose();
    }


    return (
        isEditable ?
            <TableRowEdit handleDelete={handleDelete} handleEdit={handleEdit} data={data} onEditPressed={switchToEdit}  {...baseStyle} columns={columns} index={index} /> :
            <>
                <TableRow handleEdit={handleEdit} handleDelete={_handleDelete} data={data} onEditPressed={switchToEdit} onDeletePressed={onOpen} {...baseStyle} columns={columns} index={index} />
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Voulez vous supprimer</ModalHeader>
                        <ModalCloseButton />
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Non
                            </Button>
                            <Button variant='ghost' onClick={_handleDelete}>Oui</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
    )
}


export default TableRowEditable
