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
    nameHeader?: string
    nameColumn?: string
    id: number
    viewName: 'parameter' | undefined
    columns?: ParameterColumnType[]
    headers?:ParameterColumnType[]
    loader?:(params:any)=>any[],
    render?: ()=>JSX.Element,
    path: string
}


