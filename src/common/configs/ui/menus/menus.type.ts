
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
    path: number
}


