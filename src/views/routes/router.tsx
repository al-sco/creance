import { Route, Routes } from "react-router-dom"
import { menuItems } from "../../common/configs/ui/menus/menu.data"
import AppBaseView from "../screens/AppBaseView"


const MigrationRouter = () => {
    return (
        <Routes>
            {menuItems.map((menuItem, index) => (<Route path={menuItem.path} key={index} element={<AppBaseView title={menuItem.name} path={`${menuItem.path}/*`} subMenus={menuItem.subMenus} />} />))}
        </Routes>)
}

export default MigrationRouter