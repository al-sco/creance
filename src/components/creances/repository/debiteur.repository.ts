import axios from 'axios';
import { 
    CategorieDebiteur, 
    DebiteurCompletCreationDTO, 
    TypeDebiteur 
} from '../model/debiteur.model';

export class DebiteurRepository {
  private readonly BASE_URL = 'http://localhost:8281/api/v1';
  private readonly API_URL = `${this.BASE_URL}/debiteurs-complet`;

    async createDebiteurComplet(data: DebiteurCompletCreationDTO): Promise<any> {
        try {
          console.log('Données envoyées au backend:', data);
          const response = await axios.post(this.API_URL, data); // Correction ici
          return response.data;
        } catch (error: any) {
          console.error('Erreur création débiteur:', error);
          throw error;
        }
    }

   // Dans DebiteurRepository.ts
 
  
   // Dans DebiteurRepository.ts
async saveDebiteurComplet(data: DebiteurCompletCreationDTO): Promise<any> {
  try {
    const isModification = Boolean(data.debCode);
    
    if (isModification) {
      const url = `${this.API_URL}/${data.debCode}`;
      console.log('URL modification:', url);
      console.log('Données à modifier:', data);
      
      const response = await axios.put(url, data, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      console.log('Réponse modification:', response.data);
      return response.data;
    } else {
      // Mode création
      return axios.post(this.API_URL, data, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    console.error('Erreur saveDebiteurComplet:', error);
    throw error;
  }
}
  



    // Ajout de la méthode de mise à jour
 

    async getDebiteurByCode(debCode: number): Promise<DebiteurCompletCreationDTO> {
      try {
          console.log('Appel API getDebiteurByCode avec code:', debCode);
          
          const response = await axios.get(`${this.API_URL}/${debCode}`, {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              }
          });
          
          console.log('Réponse brute:', response);
          console.log('Données reçues:', response.data);
          
          if (!response.data || typeof response.data === 'string') {
              throw new Error('Format de réponse invalide');
          }
          
          return response.data;
      } catch (error: any) {
          console.error('Erreur récupération débiteur:', {
              message: error.message,
              status: error.response?.status,
              data: error.response?.data
          });
          throw new Error(`Erreur lors de la récupération du débiteur: ${error.message}`);
      }
  }

    // Ajout de la méthode de récupération
    async getDebiteurComplet(debCode: string): Promise<DebiteurCompletCreationDTO> {
        try {
            const response = await axios.get(`${this.API_URL}/${debCode}`); // Correction ici
            return response.data;
        } catch (error: any) {
            console.error('Erreur récupération débiteur:', error);
            throw error;
        }
    }
    // Méthodes pour récupérer les données de référence
    async getCategories(): Promise<CategorieDebiteur[]> {
        const response = await axios.get(`${this.BASE_URL}/ac-categorie-debiteur`);
        return response.data;
    }

    async getTypes(): Promise<TypeDebiteur[]> {
        const response = await axios.get(`${this.BASE_URL}/ac-type-debiteur`);
        return response.data;
    }

    async getQuartiers() {
        const response = await axios.get(`${this.BASE_URL}/ac-quartier`);
        return response.data;
    }

    async getNationalites() {
        const response = await axios.get(`${this.BASE_URL}/ac-nationalite`);
        return response.data;
    }

    async getProfessions() {
        const response = await axios.get(`${this.BASE_URL}/ac-profession`);
        return response.data;
    }

    async getFonctions() {
        const response = await axios.get(`${this.BASE_URL}/ac-fonction`);
        return response.data;
    }

    async getCivilites(): Promise<{ civCode: string; civLib: string }[]> {
        const response = await axios.get(`${this.BASE_URL}/ac-civilite`);
        return response.data;
    }

    async getEmployeurs() {
        const response = await axios.get(`${this.BASE_URL}/ac-employeur`);
        return response.data;
    }

    async StatutSalaries() {
        const response = await axios.get(`${this.BASE_URL}/ac-statut-salarie`);
        return response.data;
    }

    // Méthodes de consultation
 


}