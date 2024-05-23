import {
  ChakraBaseProvider,
  Grid,
  GridItem,
  theme,
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import MigrationRouter from './views/routes/router'
import SideBarMenu from './components/sidebar-menu/sidebar-menu'



const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <BrowserRouter >
        <Grid templateColumns='15% 1fr'>
          <GridItem>
            <SideBarMenu />
          </GridItem>
          <GridItem>
            <MigrationRouter />
          </GridItem>
        </Grid>
      </BrowserRouter>
    </ChakraBaseProvider>
  )
}


export default App