import axios from 'axios';
import { 
  CreanceDTO, 
  CreanceVM, 
  Debiteur, 
  GroupeCreance, 
  ObjetCreance, 
  Periodicite, 
  Ordonnateur, 
  TypeStructOrga 
} from '../model/creances.model';

export class CreanceRepository {
  private readonly BASE_URL = 'http://localhost:8281/api/v1';
  
  // Méthode pour récupérer le token CSRF
 
  
  // Méthode pour ajouter le header CSRF aux requêtes qui modifient des données
  private getHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
    };
  }
  
  // Méthodes CRUD pour les créances
  
  // Récupérer toutes les créances
  async getAllCreances(): Promise<CreanceVM[]> {
    try {
      const response = await axios.get<CreanceVM[]>(`${this.BASE_URL}/creances`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des créances:', error);
      throw error;
    }
  }
  
  // Récupérer une créance par son code
  async getCreanceByCode(code: string): Promise<CreanceVM> {
    try {
      const response = await axios.get<CreanceVM>(`${this.BASE_URL}/creances/${code}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la créance ${code}:`, error);
      throw error;
    }
  }
  
  // Créer une nouvelle créance
async createCreance(data: CreanceDTO): Promise<CreanceVM> {
  try {
    const headers = this.getHeaders();
    const response = await axios.post<CreanceVM>(
      `${this.BASE_URL}/creances`,
      data,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de la créance:', error);
    throw error;
  }
}

// Mettre à jour une créance existante
async updateCreance(code: string, data: Partial<CreanceDTO>): Promise<CreanceVM> {
  try {
    const headers = this.getHeaders();
    const response = await axios.put<CreanceVM>(
      `${this.BASE_URL}/creances/${code}`,
      data,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la créance ${code}:`, error);
    throw error;
  }
}
  
  // Récupérer tous les débiteurs
  async getAllDebiteurs(): Promise<Debiteur[]> {
    try {
      const response = await axios.get<Debiteur[]>(`${this.BASE_URL}/referentiels/debiteurs`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des débiteurs:', error);
      throw error;
    }
  }
  
 // À ajouter dans creances.repository.ts
 async getDebiteurByCode(code: number): Promise<Debiteur | undefined> {
  try {
    const response = await axios.get<Debiteur>(`${this.BASE_URL}/referentiels/debiteurs/${code}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return undefined;
    }
    console.error(`Erreur lors de la récupération du débiteur ${code}:`, error);
    throw error;
  }
}
  
  // Récupérer tous les groupes de créance
  async getAllGroupesCreance(): Promise<GroupeCreance[]> {
    try {
      const response = await axios.get<GroupeCreance[]>(`${this.BASE_URL}/referentiels/groupes-creance`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des groupes de créance:', error);
      throw error;
    }
  }
  
  // Récupérer un groupe de créance par son code
  async getGroupeCreanceByCode(code: string): Promise<GroupeCreance> {
    try {
      const response = await axios.get<GroupeCreance>(`${this.BASE_URL}/referentiels/groupes-creance/${code}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du groupe de créance ${code}:`, error);
      throw error;
    }
  }
  
  // Récupérer tous les objets de créance
  async getAllObjetsCreance(): Promise<ObjetCreance[]> {
    try {
      const response = await axios.get<ObjetCreance[]>(`${this.BASE_URL}/referentiels/objets-creance`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des objets de créance:', error);
      throw error;
    }
  }
  
  // Récupérer toutes les périodicités
  async getAllPeriodicites(): Promise<Periodicite[]> {
    try {
      const response = await axios.get<Periodicite[]>(`${this.BASE_URL}/referentiels/periodicites`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des périodicités:', error);
      throw error;
    }
  }
  
  // Récupérer tous les ordonnateurs
  async getAllOrdonnateurs(): Promise<Ordonnateur[]> {
    try {
      const response = await axios.get<Ordonnateur[]>(`${this.BASE_URL}/referentiels/ordonnateurs`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des ordonnateurs:', error);
      throw error;
    }
  }
  
  // Récupérer tous les types de structure organisationnelle
  async getAllTypesStructOrga(): Promise<TypeStructOrga[]> {
    try {
      const response = await axios.get<TypeStructOrga[]>(`${this.BASE_URL}/referentiels/types-struct-orga`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des types de structure organisationnelle:', error);
      throw error;
    }
  }
}