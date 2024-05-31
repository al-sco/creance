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
import { CategoryDebtorStateFuncs, categroyList } from "../../../../states/signals/parameter-providers/category-debtor.state";
import { CilivityStateFuncs, civilityList } from "../../../../states/signals/parameter-providers/civility.state";
import { ClasseStateFuncs, classeList } from "../../../../states/signals/parameter-providers/classe.state";
import { OperationAccountStateFuncs, operationList } from "../../../../states/signals/parameter-providers/operation-account.state";
import { AccountingAccountOperationStateFuncs, compteComptableList } from "../../../../states/signals/parameter-providers/accounting-account-operation.state";
import { AccountingAccountOperationSonareciStateFuncs, compteComptableSonareciList } from "../../../../states/signals/parameter-providers/accounting-account-operation-sonareci.state";
import { CodeProduitSonareciStateFuncs, codeProduitsList } from "../../../../states/signals/parameter-providers/code-produits-sonareci";
import { EntityStateFuncs, entiteList } from "../../../../states/signals/parameter-providers/entite.state";
import { EtapeStateFuncs, etapeList } from "../../../../states/signals/parameter-providers/etape.state";
import { FunctionStateFuncs, functionList } from "../../../../states/signals/parameter-providers/function.state";
import { ObjetCreancesStateFuncs, creancesList } from "../../../../states/signals/parameter-providers/objet-creances.state";
import { JournalStateFuncs, journalList } from "../../../../states/signals/parameter-providers/journal.state";
import { MessagesStateFuncs, messagesList } from "../../../../states/signals/parameter-providers/messages.state";
import { ModeAcquisitionStateFuncs, acquisitionList } from "../../../../states/signals/parameter-providers/mode-acquisition.state";
import { ModePaiementStateFuncs, paiementList } from "../../../../states/signals/parameter-providers/mode-paiement.state";
import { NationalityStateFuncs, nationalityList } from "../../../../states/signals/parameter-providers/nationality.state";
import { PeriodicityStateFuncs, periodicityList } from "../../../../states/signals/parameter-providers/periodicity.state";
import { SatusRequestLocationStateFuncs, locationList } from "../../../../states/signals/parameter-providers/status-request-location.state";





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
                    key:"Code",
                },

                {
                    label: "Libelle",
                    key: "Libelle"
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
                        label:"Code",
                        key:"Code"
                    },
                    {
                        label:"Libelle",
                        key:"Libelle"
                    }, 
                    {
                        label:"Adresse",
                        key:"Adresse"
                    },
                    {
                        label:"Responsabilite",
                        key:"Responsabilite"
                    },
                    
                ]
            },
            {
                name:"Catégorie de débiteur",
                loader:CategoryDebtorStateFuncs.fetchCategories,
                dataProvider: categroyList,
                columns:[
                    
                        {
                            label:"Code",
                            key:"Code"
                        },
                        {
                            label:"Libelle",
                            key:"Libelle"
                        }, 
                ]
            },
            {
                name:"Civilité",
                loader:CilivityStateFuncs.fetchCivility,
                dataProvider:civilityList,
                columns:[
                    
                        {
                            label:"Code",
                            key:"Code"
                        },
                        {
                            label:"Libelle",
                            key:"Libelle"
                        }, 
                    
                ]
            },
            
            {
                name:"Classe",
                loader: ClasseStateFuncs.fetchClasse,
                dataProvider:classeList,
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Compte d'operation",
                loader:OperationAccountStateFuncs.fetchOperationAccount,
                dataProvider: operationList,
                columns:[
                    {
                    key:"numero",
                     label:"N°Compte"
                    }, 
                    {
                        key:"codeBanqueAgence",
                        label:"Code Banque Agence"
                    },
                    {
                        key:"codeGroupeCreance",
                        label:"Code Groupe Créance"
                    }
                ]
            },
            {
                name:"Cpte Comptable d'Opération",
                loader: AccountingAccountOperationStateFuncs.fetchBanks,
                dataProvider:compteComptableList,
                columns:[
                    {
                        key:"Compte",
                        label:"Compte"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    },
                    {
                        key:"Sens",
                        label:"Sens"
                    },
                    {
                        key:"Journal",
                        label:"Journal"
                    }
                ]
            },
            {
                name:"Cpte comptable d'operation Sonar",
                loader: AccountingAccountOperationSonareciStateFuncs.fetchBanks,
                dataProvider: compteComptableSonareciList,
                columns:[
                    {
                        key:"Compte",
                        label:"Compte"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    },
                    {
                        key:"Sens",
                        label:"Sens"
                    },
                    {
                        key:"Journal",
                        label:"Journal"
                    },
                    {
                        key:"groupeSonareci",
                        label:"groupe Sonareci"
                    }
                ]
            },
            {
                name:"Cpte comptable d'operation Sonar Modif",
                loader: AccountingAccountOperationSonareciStateFuncs.fetchBanks,
                dataProvider:compteComptableSonareciList,
                columns:[
                    {
                        key:"Compte",
                        label:"Compte"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    },
                    {
                        key:"Sens",
                        label:"Sens"
                    },
                    {
                        key:"Journal",
                        label:"Journal"
                    },{
                        key:"groupeSonareci",
                        label:"groupe Sonareci"
                    }
                ]
            },
            {
                name: "Codes produits Sonareci",
                loader: CodeProduitSonareciStateFuncs.fetchBanks,
                dataProvider: codeProduitsList,
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"intituleComptes",
                        label:"Intitulé de Comptes"
                    },
                    {
                        key:"ancienCompteunibol",
                        label:"Anc.Cpte Unibol (Cpte de Regrpt)"
                    },
                    {
                        key:"compteRegroupeptSaari",
                        label:"Cpte Regroupt"
                    },
                    // {
                    //     key:"saari",
                    //     label:"Saari"
                    // },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    },
                    {
                        key:"observation",
                        label:"Observation"
                    }
                ]
            },

            {
                name: "Entité",
                loader: EntityStateFuncs.fetchBanks,
                dataProvider: entiteList,
                columns:[
                    {
                            key:"Code",
                            label:"Code"
                        },
                        {
                            key:"Libelle",
                            label:"Libelle"
                        }, 
                        {
                            key:"responsable",
                            label:"Responsable ou Fondé de pourvoirs"
                        },
                        {
                            key:"libelleLong",
                            label:"Libellé Long"
                        }
                    
                ]
            },
            {
                name:   "Etape",
                loader:EtapeStateFuncs.fetchBanks,
                dataProvider:etapeList,
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:  "Etat de la demande de Localisation",
                loader:SatusRequestLocationStateFuncs.fetchBanks,
                dataProvider:locationList,
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Exercice",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                    {
                        key:"dateAdoptionBud",
                        label:"Date Adopt Bud"
                    },
                    {
                        key:"dateDebut",
                        label:"Date Debut"
                    },
                    {
                        key:"dateFin",
                        label:"Date Fin"
                    },
                    {
                        key:"cloture",
                        label:"Cloture"
                    }
                ]
            },
            {
                name:"Fonction",
                loader: FunctionStateFuncs.fetchBanks,
                dataProvider:functionList,
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Groupe Créance",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                    {
                        key:"Libellé Long",
                        label:"Libellé Long"
                    }
                ]
            },
            {
                name:"Journal", 
                loader: JournalStateFuncs.fetchBanks,
                dataProvider:journalList,
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                 name:"Message",
                 loader:MessagesStateFuncs.fetchBanks,
                 dataProvider: messagesList,
                 columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                 ]
            },
            {
                name:"Mode d'Acquisition",
                loader: ModeAcquisitionStateFuncs.fetchBanks,
                dataProvider:acquisitionList,
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Mode de Paiement",
                loader: ModePaiementStateFuncs.fetchBanks,
                dataProvider:paiementList,
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Nationalité",
                loader:NationalityStateFuncs.fetchBanks,
                dataProvider:nationalityList,
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Objet créance",
                loader: ObjetCreancesStateFuncs.fetchBanks,
                dataProvider:creancesList,
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Opération",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Périodicité",
                loader:PeriodicityStateFuncs.fetchBanks,
                dataProvider:periodicityList,
                columns:[
                    {
                        label:"Code",
                        key:"Code",
                    },
                    {
                        label:"Libelle",
                        key:"Libelle"
                    }, 
                ]
            },
            {
                name:   "Paramètre Généraux",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                    {
                        key:"Valeur",
                        label:"Valeur"
                    },
                    {
                        key:"Commentaire",
                        label:"Commentaire"
                    }
                ]
            },
            {
                name: "Poste Comptable",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"posteComptable",
                        label:"Poste Comptable"
                    }, 
                ]
            },
            {
                name: "Profession",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Quartier",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                    {
                        key:"Ville",
                        label:"Ville"
                    },
                    {
                        key:"Zone",
                        label:"Zone"
                    }
                ]
            },
            {
                name: "Statut Créance",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Staut Salarié",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type d'Acte",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                    {
                        key:"Delai",
                        label:"Delai"
                    }
                ]
            },
            {
                name:  "Type d'Auxiliaire",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name: "Type d'Echéancier",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type de Charge",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                    {
                        key:"Sens",
                        label:"Sens"
                    }
                ]
            },
            {
                name:"Type de Compte",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name: "Type de Contrat",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name: "Type Débiteur",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name: "Type de Domiciliation",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:  "Type Effet",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type Employeur",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type de Frais",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name :"Type Garantie Réelle",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type Garantie Personnelle",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type Logement",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type Opération",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                    {
                        key:"Mode",
                        label:"Mode"

                    },
                    {
                        key:"Paie",
                        label:"Paie"
                    },
                    {
                        key:"Type",
                        label:"Type"
                    },
                    {
                        key:"Paie",
                        label:"Paie"
                    }
                ]
            },
            {
                name:"Type OVP",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type Pièce",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Type Régularisation",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:  "Type Saisie",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Ville",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                ]
            },
            {
                name:"Zone",
                columns:[
                    {
                        key:"Code",
                        label:"Code"
                    },
                    {
                        key:"Libelle",
                        label:"Libelle"
                    }, 
                    {
                        key:"Description",
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

