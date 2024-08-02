import { Badge, Box, Button, Input, InputGroup, InputLeftElement, List, ListIcon, ListItem, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import styled from "styled-components"
import colors from "../../common/theme/colors/colors"
import { SearchIcon } from "@chakra-ui/icons"
import { Signal } from "@preact/signals-react"
import { useRef, useState } from "react"
import { useSignals } from "@preact/signals-react/runtime"
import { SelectItem } from "../../common/configs/ui/creance/creance.type"
import SearchResultBuilder from "../search-result-item.tsx/search-result-builder"

const SearchStyled = styled.div`
  width: 100%;
  padding: 20px 20px;
`

const SearchFieldStyled = styled.div`
  width: 100%;
  padding: 10px 10px;
`

const StyledBadge = styled.div`
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 700;
  color: ${colors.white};
  background-color: ${colors.green};
`


type ListableSearchableProps = {
  placeholder: string
  asSearchField: boolean
  searchPlaceholder: string
  signal?: Signal<any[]>
  data?: SelectItem[]
  handleResultSelection?: (selectedItem: SelectItem) => void
}


const ListableSearchableItemComponent = ({ placeholder, searchPlaceholder, asSearchField, signal, data, handleResultSelection }: ListableSearchableProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currentModalSearchValue, setCurrentModalSearchValue] = useState<string | undefined>()
  const [currentSelectedItem, setCurrentSelectedItem] = useState<SelectItem | undefined>()

  const [currentResult, setCurrentResult] = useState<SelectItem[] | undefined>(data)


  const onModalTextEditting = (value?: string) => {
    setCurrentModalSearchValue(() => value)

    if (value && value !== '') {
      let result = data?.filter((e) => e.title.toLowerCase().includes(value.toLowerCase()))
      setCurrentResult(() => result)
      return;
    }
    setCurrentResult(() => data)
  }

  const currentContent = signal?.value ?? [];
  const searchRef = useRef<HTMLInputElement>(null)
  useSignals()

  const handleSearch = () => {
    if (signal) {
      let searchFieldContent = searchRef.current?.value
      if (searchFieldContent && searchFieldContent != "") {
        signal!.value = currentContent.filter((e) => e['code'].toString().toLowerCase().includes(searchFieldContent.toLowerCase()) || e['libelle'].toString().toLowerCase().includes(searchFieldContent.toLowerCase()))
        return
      }

      signal.value = currentContent
    }
  }

  const onResultSelectionPressed = (selectItem: SelectItem) => {
    onClose()
    handleResultSelection && handleResultSelection(selectItem)
    setCurrentSelectedItem(() => selectItem)
  }

  return asSearchField ?
    <Button w='500px' size='none' bg={colors.lightGreen} style={{ boxShadow: `.3px .3px 2px ${colors.green}, .3px .3px 2px ${colors.green}` }}>
      <SearchFieldStyled>
        <InputGroup border='none' p={0}>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color={colors.lightGray} /> <Box w='10px ' />
          </InputLeftElement>
          <Input type='tel' onChange={handleSearch} ref={searchRef} focusBorderColor="transparent" placeholder='rechercher ici' />
        </InputGroup>
      </SearchFieldStyled>

    </Button> :
    <>

      <Stack direction="row" alignItems="center">
        <Button onClick={!asSearchField ? onOpen : undefined} w='500px' size='none' bg={colors.lightGreen} style={{ boxShadow: `.3px .3px 2px ${colors.green}, .3px .3px 2px ${colors.green}` }}>
          <SearchStyled>
            <Stack direction='row'>
              <SearchIcon color={colors.lightGray} /> <Box w='10px ' />
              <span style={{ color: colors.lightGray }}>{placeholder}</span>
            </Stack>
          </SearchStyled>

        </Button>
        <Box w={100} />
        {
          currentSelectedItem && (<StyledBadge>
            <span>{currentSelectedItem.title}</span>
          </StyledBadge>)
        }
      </Stack>



      <Modal scrollBehavior="inside" isOpen={isOpen} size='xl' onClose={onClose}>
        <ModalOverlay
          bg="rgba(0,0,0,.5)"
        />
        <ModalContent borderRadius={10}>
          <ModalHeader><Input value={currentModalSearchValue} onChange={(e) => onModalTextEditting(e.target.value)} placeholder={searchPlaceholder} /></ModalHeader>
          <ModalBody p={4}>
            {
              currentResult && <SearchResultBuilder results={currentResult} onResultPressed={onResultSelectionPressed} />
            }
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
}

export default ListableSearchableItemComponent
