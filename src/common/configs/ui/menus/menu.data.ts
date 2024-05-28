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
import { BankAgencyStateFuncs,bankAgencyList } from "../../../../states/signals/parameter-providers/bank-agency.state";
import { Signal } from "@preact/signals-react";
import { buildTableContent } from "../../../../components/base-table/base-table";
import { bankList, BankStateFuncs } from "../../../../states/signals/parameter-providers/banks.state";





type SubMenuType={
    name:string
    loader?:(e:any)=>any,
    dataProvider?:Signal,
    columns?: ParameterColumnType[]
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
        subMenu: [{
            name: "Connexion",
        },{
            name:"Déconnexion"
        },{
            name: "Comptabilité"
        },{
            name: "Utilisateur"
        },{
            name:"Habilitations"
        },{
            name:"Modifier mot de passe"
        },{
            name:"Initialisation du mot de passe"
        },{
            name: "Quitter"
        }]

    },
    {
        name: "Paramètres",
        icon: Settings,
        path: "/settings",
        subMenu: [
           {
            name:"Agence de banque",
            loader:BankAgencyStateFuncs.fetchBankAgency,
            dataProvider:bankAgencyList,
            columns:[
                {
                    label:"Code",
                },

                {
                    label: "Libelle"
                }
            ]
           }
            ,
            {
                name:"Banque",
                dataProvider:bankList,
            loader:BankStateFuncs.fetchBanks,
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                    {
                        label:"Adresse"
                    },
                    {
                        label:"Responsabilite"
                    },
                    
                ]
            },
            {
                name:"Catégorie de débiteur",
                columns:[
                    
                        {
                            label:"Code"
                        },
                        {
                            label:"Libelle"
                        }, 
                ]
            },
            {
                name:"Civilité",
                columns:[
                    
                        {
                            label:"Code"
                        },
                        {
                            label:"Libelle"
                        }, 
                    
                ]
            },
            
            {
                name:"Classe",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },

            {
                name:"Cpte d'opération",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Compte d'operation",
                columns:[
                    {
                     label:"N°Compte"
                    }, 
                    {
                        label:"Code Banque Agence"
                    },
                    {
                        label:"Code Groupe Créance"
                    }
                ]
            },
            {
                name:"Cpte Comptable d'Opération",
                columns:[
                    {
                        label:"Compte"
                    },
                    {
                        label:"Libelle"
                    },
                    {
                        label:"Sens"
                    },
                    {
                        label:"Journal"
                    }
                ]
            },
            {
                name:"Cpte comptable d'operation Sonar",
                columns:[
                    {
                        label:"Compte"
                    },
                    {
                        label:"Libelle"
                    },
                    {
                        label:"Sens"
                    },
                    {
                        label:"Journal"
                    }
                ]
            },
            {
                name:"Cpte comptable d'operation Sonar Modif",
                columns:[
                    {
                        label:"Compte"
                    },
                    {
                        label:"Libelle"
                    },
                    {
                        label:"Sens"
                    },
                    {
                        label:"Journal"
                    }
                ]
            },
            {
                name: "Codes produits Sonareci",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Intitulé de Comptes"
                    },
                    {
                        label:"Anc.Cpte Unibol (Cpte de Regrpt)"
                    },
                    {
                        label:"Cpte Regroupt"
                    },
                    {
                        label:"Saari"
                    },
                    {
                        label:"Libelle"
                    },
                    {
                        label:"Observation"
                    }
                ]
            },

            {
                name: "Entité",
                columns:[
                    {
                            label:"Code"
                        },
                        {
                            label:"Libelle"
                        }, 
                        {
                            label:"Responsable ou Fondé de pourvoirs"
                        },
                        {
                            label:"Libellé Long"
                        }
                    
                ]
            },
            {
                name:   "Etape",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:  "Etat de la demande de Localisation",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Exercice",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                    {
                        label:"Date Adopt Bud"
                    },
                    {
                        label:"Date Debut"
                    },
                    {
                        label:"Date Fin"
                    },
                    {
                        label:"Cloture"
                    }
                ]
            },
            {
                name:"Fonction",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Groupe Créance",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                    {
                        label:"Libellé Long"
                    }
                ]
            },
            {
                name:"Journal",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                 name:"Message",
                 columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                 ]
            },
            {
                name:"Mode d'Acquisition",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Mode de Paiement",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Nationalité",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Objet créance",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Opération",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Périodicité",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:   "Paramètre Généraux",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                    {
                        label:"Valeur"
                    },
                    {
                        label:"Commentaire"
                    }
                ]
            },
            {
                name: "Poste Comptable",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Poste Comptable"
                    }, 
                ]
            },
            {
                name: "Profession",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Quartier",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                    {
                        label:"Ville"
                    },
                    {
                        label:"Zone"
                    }
                ]
            },
            {
                name: "Statut Créance",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Staut Salarié",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type d'Acte",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                    {
                        label:"Delai"
                    }
                ]
            },
            {
                name:  "Type d'Auxiliaire",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name: "Type d'Echéancier",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type de Charge",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                    {
                        label:"Sens"
                    }
                ]
            },
            {
                name:"Type de Compte",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name: "Type de Contrat",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name: "Type Débiteur",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name: "Type de Domiciliation",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:  "Type Effet",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type Employeur",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type de Frais",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name :"Type Garantie Réelle",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type Garantie Personnelle",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type Logement",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type Opération",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                    {
                        label:"Mode"

                    },
                    {
                        label:"Paie"
                    },
                    {
                        label:"Type"
                    },
                    {
                        label:"Paie"
                    }
                ]
            },
            {
                name:"Type OVP",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type Pièce",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type Régularisation",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:  "Type Saisie",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Ville",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Zone",
                columns:[
                    {
                        label:"Code"
                    },
                    {
                        label:"Libelle"
                    }, 
                    {
                        label:"Description"
                    }
                ]
            }
            
            
        ],
    },
    {
        name: "Etude de Creance",
        path: "/creances",
        icon: Creance,
        subMenu: [
            
            {
                name:"Enregistrement"
            },

            {
                name:"Mise à jour"
            },
            {
                name:"Consultation"
            }
        ]
    },
    {
        name: "Suivi Clientèle",
        path: "/followClient",
        icon: FollowClient,
        subMenu: [
            {
                name:"Enregistrement"
            },
            {
                name:"Mise }à jour",
            },
            {
                name:"Annulation"
            },
            {
                name:"Consultation"
            },
            {
                name:"Suivi }des actes de Recouvrement"
            }
        ]
    },
    {
        name: "Suivi Récouv.",
        path: "/recovery",
        icon: Recovery,
        subMenu: [
            {name :"Enregistrement"},
        {name :"Mise à jour"},
        {name :"Consultation"}]
    },
    {
        name: "Contentieux",
        path: "/contentieux",
        icon: Contentieux,
        subMenu: [
            {name :"Enregistrement"},
            {name :"Mise à jour"},
            {name :"Consultation"},
            {name :"Suivi des Actes de Recouvrement"}
        ]
    },
    {
        name: "Patrimoine",
        path: "/patrimoine",
        icon: Patrimoine,
        subMenu: [
            {name :"Enregistrement"},
        {name :"Mise à jour"},
        {name :"Consultation"}]
    },
    {
        name: "Opérations Div",
        path: "/operations",
        icon: Operation,
        subMenu: [
            {name :"Enregistrement"},
            {name :"Mise à jour"},
            {name :"Consultation"},
            {name :"Budget"},
            {name :"Remboursement des Créanciers"},
            {name :"Gestion de Carnet"},
            {name :"Tableau de Bord-Direction ACCC"},
            {name :"Gestion des Stocks"}
        ]
    },
    {
        name: "Etats",
        path: "/etats",
        icon: Archivre,
        subMenu: [
            {name :"Etude créance"},
            {name :"Suivi Clientèle"},
            {name :"Suivi Recouvrement"},
            {name :"Contentieux"},
            {name :"Patrimoine"},
            {name :"Autres"}
        ]
    },
    {
        name: "Aide",
        icon: Help,
        path: "/aide",
        subMenu: [
            {name :"Apropos"},
            {name :"Manuel"},
            {name :"Aide Oracle"}
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
        name: subMenu.name,
        viewName: getViewName(menuItem),
        loader:subMenu.loader,
        render:subMenu.dataProvider && subMenu.columns ? ()=>buildTableContent(subMenu.dataProvider!,subMenu.columns!):undefined,
        columns: subMenu.columns,
        path: formatLabelToPath(subMenu)
    }))
}));


function getViewName(menuItem: MenuItemType): "parameter" | undefined {
    return parametersViewsPaths.findIndex((path) => path.toLowerCase() == menuItem.path.toLowerCase()) !== -1 ? 'parameter' : undefined;
}



function formatLabelToPath(subMenu: SubMenuType){
    

    let formattedPath=subMenu.name.trim().replaceAll(' ','_').toLowerCase()
    for(let key of letters.keys()){
        formattedPath.replaceAll(key,letters.get(key)!.valueOf())
    }

    return formattedPath
}

