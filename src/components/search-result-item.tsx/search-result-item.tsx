import { ListIcon, ListItem } from '@chakra-ui/react'
import colors from '../../common/theme/colors/colors'
import styled from 'styled-components'
import { SelectItem } from '../../common/configs/ui/creance/creance.type'


type SeachProps={
selectItem:SelectItem
onPressed:(SelectItem:SelectItem)=>void
}

const StyledSearchResultItem=styled.div`
cursor: pointer;
`

const SearchResultItem = ({selectItem,onPressed}:SeachProps) => {
  return (
    <StyledSearchResultItem>
        <ListItem onClick={()=>onPressed(selectItem)} bg={colors.lightGreen} borderRadius={10} p={3}>
                  <ListIcon color='green.500' />
                  {selectItem.title}
                </ListItem>
    </StyledSearchResultItem>
  )
}

export default SearchResultItem