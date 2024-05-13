
import SettingsDisable from '../assets/settings-disable.svg'
import SettingsEnable from '../assets/settings-enable.svg'

export interface MenuItemData {
    name: string
    id: number
    enabledIcon?: string
    disabledIcon?: string
    isActive?: boolean
    isSubMenu?: boolean,
    subMenus?: Array<MenuItemData>
}


export const SettingsDisableIcon = SettingsDisable
export const SettingsEnableIcon = SettingsEnable

export interface BaseParameterTableData {
    code: string,
    libelle: string
}

export const mainSideBarMenus: Array<MenuItemData> = ["Action", "Parametres", "Etude de Creance", "Suivi CLientèle", "Suivi Recouv.", "Contentieux", "Patrimoine", "Operations Div.", "Etats", "Aide"].map((name, index): MenuItemData => {
    let menu: MenuItemData =
        { name, disabledIcon: SettingsDisable, enabledIcon: SettingsEnable, id: index }
    if (name === "Action") {
        const actionSubMenus: Array<MenuItemData> = ["Menu 1", "Menu 2", "Menu 3"].map((name, index): MenuItemData => ({ name, disabledIcon: SettingsDisable, enabledIcon: SettingsEnable, id: index, isSubMenu: true }))
        menu = { ...menu, subMenus: actionSubMenus }
    }

    return menu
})


export const tableParametersMockData: Array<BaseParameterTableData> = (() => {
    const data: Array<BaseParameterTableData> = [];
    for (let index = 0; index < 100; index++) {
        data.push({
            code: `Code ${index}`,
            libelle: `Libelle ${index}`
        })
    }

    return data;
})()