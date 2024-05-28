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
import { ParameterColumnType } from "../../../../components/parameter-main-content/parameter-main-content";

type SubMenuType={
    name:string
    columns: ParameterColumnType[]
}

type MenuItemType = {
    name: string
    icon: string
    path: string
    subMenu?: SubMenuType[]
}


const parametersViewsPaths=['/settings']
const letters=new Map<string, string>([['é','e'],
['à','a'],
['\'','']
])

const menuItemsData: Array<MenuItemType> = [
    {
        name: "Overview",
        path: "/overview",
        icon: Recovery,
    },
    {
        name: "Action",
        path: "/action",
        icon: Account,
        subMenu: ["Connexion", "Déconnexion", "Comptabilité", "Utilisateur", "Habilitations", "Modifier mot de passe", "Initialisation du mot de passe", "Quitter"]
    },
    {
        name: "Paramètres",
        icon: Settings,
        path: "/settings",
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
            "Etat de la demande de Localisation",
            "Exercice",
            "Fonction",
            "Groupe Créance",
            "Journal",
            "Message",
            "Mode d'Acquisition",
            "Mode de Paiement",
            "Nationalité",
            "Objet créance",
            "Opération",
            "Périodicité",
            "Paramètre Généraux",
            "Poste Comptable",
            "Profession",
            "Quartier",
            "Statut Créance",
            "Staut Salarié",
            "Type d'Acte",
            "Type d'Auxiliaire",
            "Type d'Echéancier",
            "Type de Charge",
            "Type de Compte",
            "Type de Contrat",
            "Type Débiteur",
            "Type de Domiciliation",
            "Type Effet",
            "Type Employeur",
            "Type de Frais",
            "Type Garantie Réelle",
            "Type Garantie Personnelle",
            "Type Logement",
            "Type Opération",
            "Type OVP",
            "Type Pièce",
            "Type Régularisation",
            "Type Saisie",
            "Ville",
            "Zone"
        ],
    },
    {
        name: "Etude de Creance",
        path: "/creances",
        icon: Creance,
        subMenu: [
            "Enregistrement",
            "Mise à jour",
            "Consultation"
        ]
    },
    {
        name: "Suivi Clientèle",
        path: "/followClient",
        icon: FollowClient,
        subMenu: [
            "Enregistrement",
            "Mise à jour",
            "Annulation",
            "Consultation",
            "Suivi des actes de Recouvrement"
        ]
    },
    {
        name: "Suivi Récouv.",
        path: "/recovery",
        icon: Recovery,
        subMenu: [
            "Enregistrement",
        "Mise à jour",
        "Consultation"]
    },
    {
        name: "Contentieux",
        path: "/contentieux",
        icon: Contentieux,
        subMenu: [
            "Enregistrement",
            "Mise à jour",
            "Consultation",
            "Suivi des Actes de Recouvrement"
        ]
    },
    {
        name: "Patrimoine",
        path: "/patrimoine",
        icon: Patrimoine,
        subMenu: [
            "Enregistrement",
        "Mise à jour",
        "Consultation"]
    },
    {
        name: "Opérations Div",
        path: "/operations",
        icon: Operation,
        subMenu: [
            "Enregistrement",
            "Mise à jour",
            "Consultation",
            "Budget",
            "Remboursement des Créanciers",
            "Gestion de Carnet",
            "Tableau de Bord-Direction ACCC",
            "Gestion des Stocks"
        ]
    },
    {
        name: "Etats",
        path: "/etats",
        icon: Archivre,
        subMenu: [
            "Etude créance",
            "Suivi Clientèle",
            "Suivi Recouvrement",
            "Contentieux",
            "Patrimoine",
            "Autres"
        ]
    },
    {
        name: "Aide",
        icon: Help,
        path: "/aide",
        subMenu: [
            "Apropos",
            "Manuel",
            "Aide Oracle"
        ]
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
        viewName: getViewName(menuItem),
        columns: index % 2 === 0 ? [{ label: "Code" }, { label: "Libéllée" }] : [{ label: "Code" }, { label: "Libéllé" }, { label: "Adress" }],
        path: formatLabelToPath(subMenu)
    }))
}));


function getViewName(menuItem: MenuItemType): "parameter" | undefined {
    return parametersViewsPaths.findIndex((path) => path.toLowerCase() == menuItem.path.toLowerCase()) !== -1 ? 'parameter' : undefined;
}



function formatLabelToPath(path: string){
    

    let formattedPath=path.trim().replaceAll(' ','_').toLowerCase()
    console.log(formattedPath)
    for(let key of letters.keys()){
        formattedPath.replaceAll(key,letters.get(key)!.valueOf())
    }

    return formattedPath
}

