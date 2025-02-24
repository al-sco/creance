// Interfaces principales
export interface AcDebiteur {
  // Champs obligatoires
  debAdrpost: string;
  categDebCode: string;
  typdebCode: string;
  
  // Champs optionnels
  debCel?: string;
  debEmail?: string;
  debTelbur?: string;
  debFax?: string;
  debCodeCharg?: string;
  debCodeAnc?: string;
  debLocalisat?: string;
  debTeldom?: string;
  propCode?: string;
  garphysCode?: string;
  debCode?: number;
}



export interface DebiteurCompletCreationDTO {

  debCode?: number;
  // Informations débiteur (obligatoires)
  typdebCode: string;         // "P" ou "M"
  categDebCode: string;       // Code catégorie
  debAdrpost: string;        // Adresse postale
  
  // Informations communes optionnelles
  debEmail?: string;
  debTelbur?: string;
  debFax?: string;
  debCel?: string;
  debTeldom?: string;
  debLocalisat?: string;

  // Informations débiteur physique (si typdebCode = "P")
  debNom?: string;
  debPren?: string;
  debDatnaiss?: Date;
  debLieunaiss?: string;
  
  // Informations familiales
  debNmere?: string;
  debPrmere?: string;
  debNpere?: string;
  debPrpere?: string;
  debNbrEnf?: string;
  
  // Informations conjoint
  debCjNom?: string;
  debCjPren?: string;
  debCjDatnaiss?: Date;
  debCjTel?: string;
  debCjAdr?: string;
  debCjNumpident?: string;
  debDatdec?: Date;
  debDatcreat?: Date;
  debCjNatpident?: string;
  

  debSexe?: string;
  debSitmatri?: string;
  

  debMatric?: string;
  debNumpident?: string;
  debSitFam?: string;
  debNatpident?: string;
  debDatetpident?: Date;

  debLieuetpident?: string;
  debNatio?: string;
  debRue?: string;

  civCode?: string;
  civLib?: string;
  quartCode?: string;
  quartLib?: string;
  profesCode?: string;
  profesLib?: string;
  natCode?: string;
  natLib?: string;
  empCode?: string;
  empNom?: string;
  statsalCode?: string;
  statsalLib?: string;
  fonctLib?: string;
  fonctCode?: string;







  debRaisSociale?: string;
  debRegistcom?: string;
  debCapitsocial?: number;
  debFormJurid?: string;
  debDomActiv?: string;
  debSiegSocial?: string;
  debNomGerant?: string;
  
}

export interface AcDebiteurMoral {
  // Informations spécifiques au débiteur moral
  debRaisSociale: string;
  debRegistcom: string;
  debCapitsocial?: number;
  debFormJurid?: string;
  debDomActiv?: string;
  debSiegSocial?: string;
  debNomGerant?: string;
  debDatcreat?: Date;
}


export interface AcDebiteurPhysique {
  // Informations personnelles obligatoires
  debNom?: string;
  debPren?: string;
  debDatnaiss?: Date;
  debLieunaiss?: string;
  
  // Informations personnelles optionnelles
  debNatpident?: string;
  debNumpident?: string;
  debDatetpident?: Date;
  debLieuetpident?: string;
  debSitmatri?: string;
  debSexe?: string;
  debMatric?: string;
  debDatdec?: Date;
  debDatcreat?: Date;

  // Adresse et famille
  debRue?: string;
  debNmere?: string;
  debPrmere?: string;
  debNpere?: string;
  debPrpere?: string;
  debNbrEnf?: string;
  

  // Informations conjoint
  debCjNom?: string;
  debCjPren?: string;
  debCjDatnaiss?: Date;
  debCjTel?: string;
  debCjAdr?: string;
  debCjNumpident?: string;

  debSitFam?: string;
  debNatio?: string;
  debCjNatpident?: string;
  debTeldom?: string;

  // Relations
  quartCode?: string;
  quartLib?: string;
  profesCode?: string;
  profesLib?: string;
  natCode?: string;
  natLib?: string;
  empCode?: string;
  empNom?: string;
  statsalCode?: string;
  statsalLib?: string;
  fonctCode?: string;
  civCode?: string;
  civLib?: string;
  fonctLib?: string;
}


// Interfaces de référence
export interface TypeDebiteur {
  typdebCode: string;
  typdebLib: string;
}

export interface CategorieDebiteur {
  categDebCode: string;
  categDebLib: string;
}

// Interface de réponse
export interface DebiteurResponse {
  debCode: number;
}












// Interface pour le type de domiciliation
export interface TypeDomiciliation {
  typdomCode: string;
  typdomLib: string;
}

// Interface pour l'agence bancaire
export interface BanqueAgence {
  bqagCode: string;
  bqagLib: string;
  bqCode: {
      bqCode: string;
      bqLib: string;
  };
}

// Interface pour la domiciliation
export interface Domiciliation {
  domCode: string;        // Clé primaire (saisie manuelle)
  debCode: number;        // Clé étrangère vers le débiteur
  typdomCode: string;     // Code type domiciliation
  typdomLib: string;      // Libellé type domiciliation
  domLib: string;        // Libellé domiciliation
  bqagCode: string;      // Code agence bancaire
  bqagLib: string;       // Libellé agence
  bqCode: string;        // Code banque
  bqLib: string;         // Libellé banque
}

// DTO pour la création/modification de domiciliation
export interface DomiciliationDTO {
  domCode: string;
  debCode: number;
  typdomCode: string;
  domLib: string;
  bqagCode: string;
}