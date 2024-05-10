
import SettingsDisable from '../assets/settings-disable.svg'
import SettingsEnable from '../assets/settings-enable.svg'

export interface MenuItemData {
    name: string
    id: number
    enabledIcon?: string
    disabledIcon?: string
    isActive?: boolean
    isSubMenu?: boolean
    onPressed?: (id: number) => void
}

export const menuItems: Array<MenuItemData> = ["Action", "Parametres", "Etude de Creance", "Suivi CLientèle", "Suivi Recouv.", "Contentieux", "Patrimoine", "Operations Div.", "Etats", "Aide"].map((name, index): MenuItemData => ({ name, disabledIcon: SettingsDisable, enabledIcon: SettingsEnable, id: index }))

export const subMenus: Array<MenuItemData> = ["Menu 1", "Menu 2", "Menu 3"].map((name, index): MenuItemData => ({ name, disabledIcon: SettingsDisable, enabledIcon: SettingsEnable, id: index, isSubMenu: true }))