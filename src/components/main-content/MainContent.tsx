import { Outlet } from 'react-router-dom'
import { SubMenuItem } from '../../common/configs/ui/menus/menus.type'
import SubSideBarMenu from '../../components/sidebar-menu/sub-sidebar-menu'
import styled from 'styled-components'
import { Grid, GridItem, Stack } from '@chakra-ui/react'

type MainContentProps = {
  title: string
  subMenus: SubMenuItem[] | undefined
}


const StyledMainContent = styled.div`
  
`;


const MainContent = ({ subMenus, title }: MainContentProps) => {

  return (
    <StyledMainContent>
      <Grid templateColumns='minmax(270px,10%) 1fr'>
        <GridItem>
          {
            subMenus && <SubSideBarMenu title={title} subMenuItems={subMenus} />
          }
        </GridItem>
        <GridItem>
          <Outlet />
        </GridItem>
      </Grid>
    </StyledMainContent >
  )
}

export default MainContent
