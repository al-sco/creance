import axios from 'axios';
import { 
    CategorieDebiteur, 
 
   
    DebiteurCompletCreationDTO, 
 
   
    TypeDebiteur 
} from '../model/debiteur.model';

const BASE_URL = 'http://localhost:8281/api/v1';

export class DebiteurRepository {
    private apiUrl = `${BASE_URL}/debiteurs-complet`;

    async createDebiteurComplet(data: DebiteurCompletCreationDTO): Promise<any> {
        try {
          console.log('Données envoyées au backend:', data);
          const response = await axios.post(this.apiUrl, data);
          return response.data;
        } catch (error: any) {
          console.error('Erreur création débiteur:', error);
          throw error;
        }
      }

    // Ajout de la méthode de mise à jour
    async updateDebiteurComplet(debCode: string, data: DebiteurCompletCreationDTO): Promise<any> {
        try {
            const response = await axios.put(`${this.apiUrl}/${debCode}`, data);
            return response.data;
        } catch (error: any) {
            console.error('Erreur mise à jour débiteur:', error);
            throw error;
        }
    }

    // Ajout de la méthode de récupération
    async getDebiteurComplet(debCode: string): Promise<DebiteurCompletCreationDTO> {
        try {
            const response = await axios.get(`${this.apiUrl}/${debCode}`);
            return response.data;
        } catch (error: any) {
            console.error('Erreur récupération débiteur:', error);
            throw error;
        }
    }
    // Méthodes pour récupérer les données de référence
    async getCategories(): Promise<CategorieDebiteur[]> {
        const response = await axios.get(`${BASE_URL}/ac-categorie-debiteur`);
        return response.data;
    }

    async getTypes(): Promise<TypeDebiteur[]> {
        const response = await axios.get(`${BASE_URL}/ac-type-debiteur`);
        return response.data;
    }

    async getQuartiers() {
        const response = await axios.get(`${BASE_URL}/ac-quartier`);
        return response.data;
    }

    async getNationalites() {
        const response = await axios.get(`${BASE_URL}/ac-nationalite`);
        return response.data;
    }

    async getProfessions() {
        const response = await axios.get(`${BASE_URL}/ac-profession`);
        return response.data;
    }

    async getFonctions() {
        const response = await axios.get(`${BASE_URL}/ac-fonction`);
        return response.data;
    }

    async getCivilites(): Promise<{ civCode: string; civLib: string }[]> {
        const response = await axios.get(`${BASE_URL}/ac-civilite`);
        return response.data;
    }

    async getEmployeurs() {
        const response = await axios.get(`${BASE_URL}/ac-employeur`);
        return response.data;
    }

    async StatutSalaries() {
        const response = await axios.get(`${BASE_URL}/ac-statut-salarie`);
        return response.data;
    }

    // Méthodes de consultation
 


}