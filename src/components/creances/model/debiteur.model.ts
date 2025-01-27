export interface DebiteurModel {
  id: string;
  categorie: 'proprietaire' | 'gar_phys';
  physique: {
    cheline: string;
    ileon: string;
    dateNaissance: Date;
    // ... autres champs
  };

  domiciliation?: {
    adresse: string;
    codePostal: string;
    dateEmenagement: Date;
  };
}