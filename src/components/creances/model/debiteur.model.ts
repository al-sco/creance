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
}



export interface DebiteurCompletCreationDTO {
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

  civCode?: string;
  quartCode?: string;
  profesCode?: string;
  natCode?: string;
  empCode?: string;
  statsalCode?: string;
  fonctCode?: string;
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