import acCreanceProvider from "../../../../../states/signals/creances_providers/AcCreance.state";
import acDebiteurProvider, { sexeProvider, statusMatrimonialProvider } from "../../../../../states/signals/creances_providers/AcDebiteur.state";
import acBanqueAgenceProvider from "../../../../../states/signals/parameter_providers/AcBanqueAgence.state";
import acTypeDomicilProvider from "../../../../../states/signals/parameter_providers/AcTypeDomicil.state";
import { CreanceDataType, InputType } from "../creance.type";

export const detailGarantisAditionnalData: CreanceDataType = {
    create: acCreanceProvider.create,
    title: '',
    columCount: 2,
    state: acDebiteurProvider.getState(),
    fields: [
        {
            name: 'N° Creance',
            key: 'numCreance',                
            selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        },
        {
            name: 'N° Garantie',
            key: 'numGarant',                
            selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        },
        {
            name: 'Type',
            key: 'type',                
            selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
        },
        {
            name: 'Nat. piece ident',
            key: 'nat',
            selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
        },
        {
            name: 'Salaire brut',
            key: 'salaire',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        },
        {
            name: 'N° Piece ident',
            key: 'numPiece',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.number,
                isEditable: true
            }
        },
        {
            name: 'Salaire net',
            key: 'salaire',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        },
        {
            name: 'Nom',
            key: 'nom',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        },
        {
            name: 'Prémons',
            key: 'prenoms',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        },
        {
            name: 'Matricule',
            key: 'matricule',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        },
        {
            name: 'Date de naissance',
            key: 'dt',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.date,
            }
        },
        {
            name: 'Date de retraite',
            key: 'dtRetraite',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.date,
            }
        },
        {
            name: 'Date de decès',
            key: 'dtRetraite',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.date,
            }
        },
        {
            name: 'Lieu de naissance',
            key: 'lieuNaiss',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        },        
        {
            name: 'Sexe',
            key: 'sexe',
            selectItems: sexeProvider,
        },
        {
            name: 'Situation Matrimonial',
            key: 'sitMatri',
            selectItems:statusMatrimonialProvider,
        },
        {
            name: 'Address postal',
            key: 'addr',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        }, 
        {
            name: 'Lieu etablis',
            key: 'lieuEtablis',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        }, 
        {
            name: 'Telephone domicile',
            key: 'tellDomicile',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        }, 
        {
            name: 'Telephone bureau',
            key: 'tellBureau',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        }, 
        {
            name: 'Date etablis',
            key: 'dtEtablis',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.date,
                isEditable: true
            }
        },
        {
            name: 'Numéro celulaire',
            key: 'cell',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        }, 
        {
            name: 'Email',
            key: 'email',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        }, 
        {
            name: 'Nom Père',
            key: 'nomPere',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        }, 
        {
            name: 'Nom Mère',
            key: 'nomMère',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        }, 
        {
            name: 'Rue',
            key: 'rue',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text,
                isEditable: true
            }
        }, 
        {
            name: 'Quartier',
            key: 'quartier',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text                                                ,
                isEditable: false
            },
            selectItems:statusMatrimonialProvider,
        },
        {
            name: 'Civilité',
            key: 'civilite',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text                                                ,
                isEditable: false
            },
            selectItems:statusMatrimonialProvider,
        },
        {
            name: 'Profession',
            key: 'profession',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text                                                ,
                isEditable: false
            },
            selectItems:statusMatrimonialProvider,
        },
        {
            name: 'Fonction',
            key: 'fonction',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text                                                ,
                isEditable: false
            },
            selectItems:statusMatrimonialProvider,
        },
        {
            name: 'Employeur',
            key: 'emp',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text                                                ,
                isEditable: false
            },
            selectItems:statusMatrimonialProvider,
        },
        {
            name: 'Status salarial',
            key: 'statusSal',
            state: acDebiteurProvider.getState(),
            inputItem: {
                inputType: InputType.text                                                ,
                isEditable: false
            },
            selectItems:statusMatrimonialProvider,
        },
    ],
    tabs: [
        {
            tabName: "Domiciliation",
            key: 'D',
            tableHeaders: ["Type", "N°Compte", "Libellé", "Banque agence", "Banque"],
            tableContent: [
              {
                name: "Type",
                key: 'domiciliationType',
                state: acDebiteurProvider.getState(),
                onInsert: acDebiteurProvider.simpleInsert,
                selectItems: acDebiteurProvider.getSelectItems(acTypeDomicilProvider),
                inputItem: {
                  inputType: InputType.text,
                  isEditable: false,
                  placeholder: "type",
                },        
              },
              {
                name: "N°Compte",
                key: 'nCompte',
                state: acDebiteurProvider.getState(),
                inputItem: {
                  inputType: InputType.number,
                  isEditable: true,
                  placeholder: "num. compte",
                },
              },
              {
                name: "Libellé",
                key: 'libelle',
                state: acDebiteurProvider.getState(),
                inputItem: {
                  inputType: InputType.text,
                  isEditable: true,
                  placeholder: "libelle",
                },
              },
              {
                name: "Banque Agence",
                key: 'banqueAgence',
                state: acDebiteurProvider.getState(),
                inputItem: {
                  inputType: InputType.text,
                  isEditable: false,
                  placeholder: "bq. agence",
                },
                onInsert: acDebiteurProvider.simpleInsert,
                selectItems: acDebiteurProvider.getSelectItems(acBanqueAgenceProvider),
              },
              {
                name: "Banque",
                key: 'banque',
                state: acDebiteurProvider.getState(),
                inputItem: {
                  inputType: InputType.text,
                  isEditable: false,
                },
              },
            ],
          },
    ]
}