
import SettingsDisable from '../assets/settings-disable.svg'
import SettingsEnable from '../assets/settings-enable.svg'


export const SettingsDisableIcon = SettingsDisable
export const SettingsEnableIcon = SettingsEnable

export interface BaseParameterTableData {
    code: string,
    libelle: string
}


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