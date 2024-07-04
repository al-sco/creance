import { Box, Button, Input, InputGroup, InputLeftElement, List, ListIcon, ListItem, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import styled from "styled-components"
import colors from "../../common/theme/colors/colors"
import { SearchIcon } from "@chakra-ui/icons"
import { Signal, useSignal } from "@preact/signals-react"
import { useRef } from "react"

const SearchStyled = styled.div`
  width: 100%;
  padding: 20px 20px;
`

const SearchFieldStyled = styled.div`
  width: 100%;
  padding: 10px 10px;
`


type ListableSearchableProps = {
  placeholder: string
  asSearchField: boolean
  searchPlaceholder: string
  signal?: Signal<any[]>
}


  const ListableSearchableItemComponent = ({ placeholder, searchPlaceholder, asSearchField,signal }: ListableSearchableProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const currentContent=signal?.value??[];
  const searchRef=useRef<HTMLInputElement>(null)
  useSignal()
  
  const handleSearch=()=>{
    if(signal){
      let searchFieldContent=searchRef.current?.value
      if(searchFieldContent && searchFieldContent!=""){
        signal!.value=currentContent.filter((e)=>e['code'].toString().toLowerCase().includes(searchFieldContent.toLowerCase()) || e['libelle'].toString().toLowerCase().includes(searchFieldContent.toLowerCase()))
        return
      }

      signal.value=currentContent
    }
  }
  return asSearchField ?
    <Button  w='500px' size='none' bg={colors.lightGreen} style={{ boxShadow: `.3px .3px 2px ${colors.green}, .3px .3px 2px ${colors.green}` }}>
        <SearchFieldStyled>

      <InputGroup p={0}>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color={colors.lightGray} /> <Box w='10px ' />
        </InputLeftElement>
        <Input type='tel' onChange={handleSearch} ref={searchRef} focusBorderColor="transparent" placeholder='Phone number' />
      </InputGroup>
      </SearchFieldStyled>

    </Button> :
    <>
      <Button onClick={!asSearchField ? onOpen : undefined} w='500px' size='none' bg={colors.lightGreen} style={{ boxShadow: `.3px .3px 2px ${colors.green}, .3px .3px 2px ${colors.green}` }}>
        <SearchStyled>
          <Stack direction='row'>
            <SearchIcon color={colors.lightGray} /> <Box w='10px ' />
            <span style={{ color: colors.lightGray }}>{placeholder}</span>
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
                new Array(100).fill(0).map((_, index) => (<ListItem key={index} bg={colors.lightGreen} borderRadius={10} p={3}>
                  <ListIcon color='green.500' />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>))
              }
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
}

export default ListableSearchableItemComponent
