import { Route, Routes } from 'react-router-dom'
import { SubMenuItem } from '../../common/configs/ui/menus/menus.type'
import SubSideBarMenu from '../../components/sidebar-menu/sub-sidebar-menu'

type AppBaseViewProps = {
  path: string
  title: string
  subMenus: SubMenuItem[] | undefined
}

const AppBaseView = ({ subMenus, title }: AppBaseViewProps) => {

  return (
    <div>
      {
        subMenus && <SubSideBarMenu title={title} subMenuItems={subMenus} />
      }
      <Routes>
        {
          subMenus?.map((mn, index) => <Route element={<h1>{mn.name}</h1>} key={index} path={mn.path.toString()} />)
        }
      </Routes>
    </div>
  )
}

export default AppBaseView
