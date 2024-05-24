import { MenuItem, SubMenuItem } from "./menus.type"
import Account from '../../../../assets/account.svg';
import Archivre from '../../../../assets/archive.svg';
import Contentieux from '../../../../assets/contentieux.svg';
import Creance from '../../../../assets/creance.svg';
import Help from '../../../../assets/help.svg';
import Operation from '../../../../assets/operation.svg';
import Patrimoine from '../../../../assets/patrimoine.svg';
import FollowClient from '../../../../assets/suiv-client.svg';
import Recovery from '../../../../assets/recovery.svg';
import Settings from '../../../../assets/settings-enable.svg';

type MenuItemType = {
    name: string
    icon: string
    path: string
    subMenu?: string[]
}



const menuItemsData: Array<MenuItemType> = [
    {
        name: "Overview",
        path: "overview",
        icon: Recovery,
    },
    {
        name: "Action",
        path: "action",
        icon: Account,
        subMenu: ["Connexion", "Déconnexion", "Comptabilité", "Utilisateur", "Habilitations", "Modifier mot de passe", "Initialisation du mot de passe", "Quitter"]
    },
    {
        name: "Paramètres",
        icon: Settings,
        path: "settings",
        subMenu: [
            "Agence de banque",
            "Banque",
            "Catégorie de débiteur",
            "Civilité",
            "Classe",
            "Cpte d'opération",
            "Cpte comptable d'operation",
            "Cpte comptable d'operation Sonar",
            "Cpte comptable d'operation Sonar Modif",
            "Codes produits Sonareci",
            "Entité",
            "Etape",
        ],
    },
    {
        name: "Etude de Creance",
        path: "creances",
        icon: Creance,
    },
    {
        name: "Suivi Clientèle",
        path: "followClient",
        icon: FollowClient,
    },
    {
        name: "Suivi Récouv.",
        path: "recovery",
        icon: Recovery,
    },
    {
        name: "Contentieux",
        path: "contentieux",
        icon: Contentieux,
    },
    {
        name: "Patrimoine",
        path: "patrimoine",
        icon: Patrimoine,
    },
    {
        name: "Opérations Div",
        path: "operations",
        icon: Operation,
    },
    {
        name: "Etats",
        path: "etats",
        icon: Archivre,
    },
    {
        name: "Aide",
        icon: Help,
        path: "aide",
    }
]
export const menuItems: MenuItem[] = menuItemsData.map((menuItem, index) => ({
    id: index,
    path: menuItem.path,
    icon: menuItem.icon,
    name: menuItem.name,

    subMenus: menuItem.subMenu?.map((subMenu, index): SubMenuItem => ({
        id: index,
        name: subMenu,
        isParameter: true,
        columns: index % 2 === 0 ? [{ label: "Code" }, { label: "Libéllée" }] : [{ label: "Code" }, { label: "Libéllé" }, { label: "Adress" }],
        path: index.toString()
    }))
}));


