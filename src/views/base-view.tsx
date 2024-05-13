import { Grid, GridItem } from "@chakra-ui/react"
import colors from "../theme/color"
import SideBarMenu from "../components/sidebar-menu/sidebar-menu"
import SubSideBarMenu from "../components/sidebar-menu/sub-menu-sidebar"
import BaseParameterView from "../components/base-parameter-view/base-parameter-view"
import { useState } from "react"
import { mainSideBarMenus, MenuItemData } from "../data/parameter-mock"




const BaseView = () => {
    const [currentSideBarMenu, setCurrentSideBarMenu] = useState(mainSideBarMenus[0]);

    const handleCurrentSideBarChange = (menu: MenuItemData) => {
        setCurrentSideBarMenu((_) => menu);
    }


    return (
        <Grid templateColumns='15% 1fr'>
            <GridItem bg={colors.gray}>
                <SideBarMenu onMenuPressed={handleCurrentSideBarChange} subMenus={mainSideBarMenus} />
            </GridItem>
            <GridItem bg={colors.white}>
                <Grid templateColumns={currentSideBarMenu.subMenus ? '15% 1fr' : '1fr'}>
                    {
                        currentSideBarMenu.subMenus ? (<>
                            <GridItem>
                                <SubSideBarMenu subMenus={currentSideBarMenu.subMenus} />
                            </GridItem>
                            <GridItem h="100vh">
                                <BaseParameterView />
                            </GridItem>
                        </>
                        ) : (<GridItem h="100vh">
                            <BaseParameterView />
                        </GridItem>)
                    }

                </Grid>
            </GridItem>
        </Grid>
    )
}

export default BaseView
