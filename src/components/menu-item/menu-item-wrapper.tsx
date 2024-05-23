// import { MenuItem, SubMenuItem } from "../../common/configs/ui/menus/menus.type"
// import MenuItemComponent from "./menu-item"
// import SubMenuItemComponent from "./sub-menu-item"


// type MenuItemWrapperType = {
//     menu: MenuItem
//     subMenu: never
//     type: 'menu'
// }

// type SubMenuItemWrapperType = {
//     menu: never
//     subMenu: SubMenuItem
//     type: 'sub-menu'
// }


// type MenuItemWrapperProps = {
//     menu: SubMenuItemWrapperType | MenuItemWrapperType
//     isSelected: boolean
// }


// const MenuItemWrapper = ({ menu, isSelected }: MenuItemWrapperProps) => {
//     if (menu.type == 'menu') {
//         return <MenuItemComponent isSelected={isSelected} menu={menu.menu} />
//     }
//     if (menu.type == 'sub-menu') {
//         return <SubMenuItemComponent isSelected={isSelected} subMenu={menu.menu} />
//     }
// }

// export default MenuItemWrapper
