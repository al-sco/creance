import { createBrowserRouter, } from "react-router-dom"
import { menuItems } from "../common/configs/ui/menus/menu.data"
import ErrorPage from "../pages/error/Error"
import Root from "../pages/Root"
import MainContent from "../components/main-content/MainContent"
import ParameterMainContent from "../components/parameter-main-content/parameter-main-content"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: menuItems.map((menuItem) => (
            {
                path: menuItem.path,
                element: <MainContent subMenus={menuItem.subMenus} title={menuItem.name} />,
                children: menuItem.subMenus?.map((sb) => ({
                    path: sb.path,
                    element: <ParameterMainContent title={sb.name} colums={sb.columns ?? []} />
                }))
            }
        ))
    }
])
export default router