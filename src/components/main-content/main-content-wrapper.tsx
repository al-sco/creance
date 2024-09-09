import { Grid, GridItem, Spinner } from "@chakra-ui/react"
import { useSignals } from "@preact/signals-react/runtime"
import SubSideBarMenu from "../sidebar-menu/sub-sidebar-menu"
import { Outlet, useNavigation } from "react-router-dom"
import { SubMenuItem } from "../../common/configs/ui/menus/menus.type"
import { Signal } from "@preact/signals-react"
import styled from "styled-components"
import { SubMenuParent } from "../../common/configs/ui/menus/menu.data"

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
    parents?: SubMenuParent[]
}

const MainContentWrapper = ({ subMenus, isHidden, handleHidden, title, parents }: MainContentWrapperProps): JSX.Element => {
    const navigation = useNavigation()
    useSignals()

    return (
        <Grid templateColumns={isHidden.value ? 'minmax(50px, 4.5%) 5fr' : '1fr 5fr'}>
            <GridItem>
                {
                    subMenus && <SubSideBarMenu isHidden={isHidden} handleHidden={handleHidden} title={title} subMenuItems={subMenus} parents={parents} />
                }
            </GridItem>
            <GridItem>
                {
                    navigation.state === "loading" ? <StyledSpinnerDiv><Spinner size='xl' color="orange" /></StyledSpinnerDiv> : <Outlet />
                }
            </GridItem>
        </Grid>
    )
}

export default MainContentWrapper