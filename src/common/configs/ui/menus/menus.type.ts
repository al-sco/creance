import { ParameterColumnType } from "../../../../components/parameter-main-content/parameter-main-content"
import { SubMenuParent, SubMenuType } from "./menu.data"

export type MenuItem = {
    name: string
    id: number
    path: string
    icon: string
    parents?: SubMenuParent[]
    subMenus?: SubMenuItem[]
    render?: () => JSX.Element,
}

export type SubMenuItem = {
    name: string
    nameHeader?: string
    nameColumn?: string
    subMenuType?: SubMenuType
    id: number
    viewName?: 'parameter' | undefined
    columns?: ParameterColumnType[]
    headers?: ParameterColumnType[]
    loader?: (params: any) => any[],
    render?: () => JSX.Element,
    path: string
    parentId?: number
}


