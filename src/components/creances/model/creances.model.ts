export interface CreanceModel {
  id: string;
  code: string; // N°Créance
  debiteur: string;
  entite: string;
  groupeCreance: string; // Grpe Créance
  objetCreance: string; // Objet Créance
  typeObjet: string;
  periodicite: 'M' | 'T' | 'A';
  capitalInitial: number;
  montantDecaisse: number; // Mont. Décaissé
  societeCaution: string; // Sté Caution
  statutRecouvrement: string; // Stat Recouv.
  numeroPrecedent: string; // N° Précédent
  numeroAncien: string; // N° Ancien
  typeStructure: string;
  classeCreance: string; // Class Créance
  montantAssurance: number; // Mont Ass.
  dateReconnaissance: Date; // Date Reconnais.
  datePremiereEcheance: Date;
  dateDerniereEcheance: Date; // Date Dern Ech
  dateOctroi: Date;
  datePremierPrecompte: Date; // Date 1er Precompte
  creanceSoldeAvantLiquidation: boolean; // Crean Sold Avt Liq
  commission: number;
  interetConventionnelPourcent: number; // Int. conv. %
  montantInvestissementConventionnelPaye: number; // Mont. Inv Conv. Payé
  interetRetard: number; // Int. Ret.
  ordonnateur: string;
  montantARembourser: number; // Mont à Remb.
  montantDu: number; // Mont. Dů
  montantDejaRembourse: number; // Mont. Deja Remb.
  montantImpaye: number; // Mont. Impayé
  diversFrais: number; // Divers Frais
  encours: number;
  totalDu: number; // Total Dū
  penaliteUnPourcent: number; // Pénalité 1%
  totalARecouvrer:number;
  dateCreation: Date;
  statut?: 'en_cours' | 'payee' | 'impayee';



    piece?: {
      type: string;
      reference: string;
      libelle: string;
      dateEmission: Date;
      dateReception: Date;
    };

    garantiePersonnelle?: {
      employeur: string;
      statusSal: string;
      details: {
        numeroCreance: string;
        numeroGarantie: string;
        type: string;
        natPieceIdent: string;
        salaireBrut: number;
        salaireNet: number;
        // ... ajouter tous les autres champs de l'image
      }
    };
}