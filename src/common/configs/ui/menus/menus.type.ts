import { ParameterColumnType } from "../../../../components/parameter-main-content/parameter-main-content"

export type MenuItem = {
    name: string
    id: number
    path: string
    icon: string
    subMenus?: SubMenuItem[]
}

export type SubMenuItem = {
    name: string
    id: number
    isParameter: boolean
    columns?: ParameterColumnType[]
    path: string
}


