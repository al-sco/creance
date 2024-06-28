import { Box, Button, Input, List, ListIcon, ListItem, Modal, ModalBody,ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import styled from "styled-components"
import colors from "../../common/theme/colors/colors"
import { SearchIcon } from "@chakra-ui/icons"

const SearchStyled = styled.div`
  width: 100%;
  padding: 20px 20px;
`


type ListableSearchableProps ={
  placeholder: string
  searchPlaceholder:string
}


const ListableSearchableItemComponent = ({placeholder,searchPlaceholder}:ListableSearchableProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} w='500px' size='none' bg={colors.lightGreen} style={{ boxShadow: `.3px .3px 2px ${colors.green}, .3px .3px 2px ${colors.green}` }}>
        <SearchStyled>
          <Stack direction='row'>
            <SearchIcon color={colors.lightGray} /> <Box w='10px ' /> <span style={{ color: colors.lightGray }}>{placeholder}</span>
          </Stack>
        </SearchStyled>
      </Button>

      <Modal scrollBehavior="inside" isOpen={isOpen} size='xl' onClose={onClose}>
        <ModalOverlay
          bg="rgba(0,0,0,.5)"
        />
        <ModalContent borderRadius={10}>
          <ModalHeader><Input placeholder={searchPlaceholder} /></ModalHeader>
          <ModalBody p={4}>
            <List spacing={3}>
            {
              new Array(100).fill(0).map((_,index)=>(<ListItem key={index} bg={colors.lightGreen} borderRadius={10} p={3}>
                <ListIcon color='green.500' />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>))
            }
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ListableSearchableItemComponent
