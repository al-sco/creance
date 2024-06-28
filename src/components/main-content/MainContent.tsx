import { Outlet, useNavigation } from 'react-router-dom'
import { SubMenuItem } from '../../common/configs/ui/menus/menus.type'
import SubSideBarMenu from '../../components/sidebar-menu/sub-sidebar-menu'
import styled from 'styled-components'
import { Grid, GridItem,Spinner } from '@chakra-ui/react'

type MainContentProps = {
  title: string
  subMenus: SubMenuItem[] | undefined
}


const StyledMainContent = styled.div`
  
`;

const StyledSpinnerDiv=styled.div`
display: grid;
height: 100%;
width: 100%;
place-items: center;
`


const MainContent = ({ subMenus, title }: MainContentProps) => {
  const navigation = useNavigation()
  
  return (
    <StyledMainContent>
      <Grid templateColumns='minmax(270px,10%) 1fr'>
        <GridItem>
          {
            subMenus && <SubSideBarMenu title={title} subMenuItems={subMenus} />
          }
        </GridItem>
        <GridItem>
          {
            navigation.state==="loading"? <StyledSpinnerDiv><Spinner size='xl' /></StyledSpinnerDiv>:<Outlet />
          }
        </GridItem>
      </Grid>
    </StyledMainContent >
  )
}

export default MainContent
