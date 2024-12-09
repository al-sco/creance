export interface CreanceModel{
    creanCode?: string;
    periodCode?:string
    objCreanCode?:string
    creanCodeGlo?:string
    debCode?:string
    creanCapitInit?:string
    creanMontDu?:string
    creanDejRemb?:string
    creanPenalite?:string
    creanEncours?:string
    creanSoldeInit?:string
    creanMontImpaye?:string
    creanMontIc?:string
    creanMontIr?:string
    creanMontAss?:string
    creanMontDebloq?:string
    creanFrais?:string
    creanCommBanq?:string
    creanObjet?:string
    creanTauxic?:string
    creanTauxir?:string
    creanDateft?: string
    creanDatech?: string
    creanDuree?: string
    creanDatoctroi?: string
    creanStatrecouv?: string
    creanDatrec?: string
    creanDatecrea?: string
    creanCommStecaut?: string
    creanCodePrec?: string
    creanCodeAnc?: string
    creanUserCode?: string
    creanDatfin?: string
    creanMontIcPaye?: string
    creanMotifIrrecouv?: string
    creanValide?: string
    creanDateCtl?: string
    creanCodeCharg?: string
    creanMajDate?: string
    creanTropPercu?: string
    pcCode?: string
    categCode?: string
    creanMontAncInit?: string
    delegCode?: string
    creanRef?: string
    cpteCliNum?: string
    creanUserCpte?: string
    creanDateCpte?: string
    cpteRegrp?: string
    cptoperCode?: null
    creanClasse?: string
    typoperCode?: string
    creanOp?: string
    creanIdentAgtresor?: string
    creanStab?: string
    creanSoldAvantLiq?: string
    grpCreanCode?:string
}

export interface CreerCreanceModel{
    creanCode?: string;
    debiteur?: string;
    groupeCreance?: string;
    objet?: string;
    capitalInitial?: string;
    DatePremiereEcheance?: string;
    dateOctroi?: string;
    duree?: string;
    periodicite?: string;
    montantDebloque?: string;
    nbEcheance?: string;
    dateFinEcheance?: string;

}