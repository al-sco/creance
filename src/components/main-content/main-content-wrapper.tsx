import { Grid, GridItem, Spinner } from "@chakra-ui/react"
import { useSignals } from "@preact/signals-react/runtime"
import SubSideBarMenu from "../sidebar-menu/sub-sidebar-menu"
import { Outlet, useNavigation } from "react-router-dom"
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type"
import { Signal } from "@preact/signals-react"
import styled from "styled-components"

const StyledSpinnerDiv = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    place-items: center;
`

type MainContentWrapperProps = {
    subMenus?: SubMenuItem[],
    isHidden: Signal<boolean>,
    handleHidden: () => void,
    title: string,
    parrentPath: string
    hasSubMenusInSideBar?: boolean
}

const MainContentWrapper = ({ subMenus, isHidden, handleHidden, title, parrentPath }: MainContentWrapperProps): JSX.Element => {
    const navigation = useNavigation()
    useSignals()
    
    return (
        <Grid templateColumns={isHidden.value ? 'minmax(50px, 4.5%) 5fr' : subMenus!=undefined && subMenus.length!=0 ? '5fr' : '5fr'}>
            {/* { subMenus!=undefined && subMenus.length!=0 ?
                <GridItem>
                    {
                        <SubSideBarMenu parentPath={parrentPath} isHidden={isHidden} handleHidden={handleHidden} title={title} subMenuItems={subMenus} />
                    }
                </GridItem> : <></>
            } */}
            <GridItem>
                {
                    navigation.state === "loading" ? <StyledSpinnerDiv><Spinner size='xl' color="orange" /></StyledSpinnerDiv> : <Outlet />
                }
            </GridItem>
        </Grid>
    )
}

export default MainContentWrapper