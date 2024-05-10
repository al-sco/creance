import { Grid, GridItem } from "@chakra-ui/react"
import colors from "../theme/color"
import SideBarMenu from "../components/sidebar-menu/sidebar-menu"
import SubSideBarMenu from "../components/sidebar-menu/sub-menu-sidebar"
import BaseParameterView from "../components/base-parameter-view/base-parameter-view"

const BaseView = () => {
    return (
        <Grid templateColumns='15% 1fr' h="100vh">
            <GridItem bg={colors.gray}>
                <SideBarMenu />
            </GridItem>
            <GridItem bg={colors.white}>
                <Grid templateColumns='15% 1fr'>
                    <GridItem >
                        <SubSideBarMenu />
                    </GridItem>
                    <GridItem>
                        <BaseParameterView />
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    )
}

export default BaseView
