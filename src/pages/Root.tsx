import { ChakraBaseProvider, Grid, GridItem, theme } from "@chakra-ui/react"
import SideBarMenu from "../components/sidebar-menu/sidebar-menu"
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <ChakraBaseProvider theme={theme}>
            <Grid templateColumns='15% 1fr'>
                <GridItem>
                    <SideBarMenu />
                </GridItem>
                <GridItem>
                    <Outlet />
                </GridItem>
            </Grid>
        </ChakraBaseProvider>
    )
}

export default Root
