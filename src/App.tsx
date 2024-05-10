import BaseView from "./views/base-view"
import {
    ChakraBaseProvider,
    theme,
  } from '@chakra-ui/react'


const App = ()=>{
    return (
    <ChakraBaseProvider theme={theme}>
      <BaseView />
    </ChakraBaseProvider>
    )
}


export default App