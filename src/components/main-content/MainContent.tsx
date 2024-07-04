import { Outlet, useNavigation } from 'react-router-dom'
import { SubMenuItem } from '../../common/configs/ui/menus/menus.type'
import SubSideBarMenu from '../../components/sidebar-menu/sub-sidebar-menu'
import styled from 'styled-components'
import { Button, Grid, GridItem, Spinner } from '@chakra-ui/react'
import { signal, useSignal } from '@preact/signals-react'
import { useSignals } from '@preact/signals-react/runtime'
import { useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

type MainContentProps = {
  title: string
  render?: () => JSX.Element,
  subMenus: SubMenuItem[] | undefined
}


const StyledMainContent = styled.div`
  
`;

const StyledSpinnerDiv = styled.div`
display: grid;
height: 100%;
width: 100%;
place-items: center;
`


const MainContent = ({ subMenus, title, render }: MainContentProps) => {
  const navigation = useNavigation()
  const isHidden = signal<boolean>(false)

  const handleHidden = () => {
    console.log(isHidden.value)
    isHidden.value = !isHidden.value
  }

  return (
    <StyledMainContent>
      {render && render()}
      <Grid templateColumns='minmax(290px,10%) 1fr'>
         <GridItem>
          {
            subMenus && <SubSideBarMenu isHidden={isHidden} handleHidden={handleHidden} title={title} subMenuItems={subMenus} />
          }
        </GridItem>
        <GridItem>
          {
            navigation.state === "loading" ? <StyledSpinnerDiv><Spinner size='xl' color="orange" /></StyledSpinnerDiv> : <Outlet />
          }
        </GridItem>
      </Grid>
    </StyledMainContent >
  )
}

export default MainContent
