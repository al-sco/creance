import axios from 'axios';
import { 
    CategorieDebiteur, 
    DebiteurCompletCreationDTO, 
    TypeDebiteur,
    AcDebiteurMoral // Ajout de l'import manquant
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



    async fetchDebiteurByCode(debCode: number): Promise<DebiteurCompletCreationDTO> {
        try {
          console.log('Fetching from URL:', `${this.BASE_URL}/debiteurs-moral/${debCode}`);
          
          const response = await axios.get(`${this.BASE_URL}/debiteurs-moral/${debCode}`);
          console.log('API Response:', response.data);
          
          // Vérification et transformation des données
          const data = response.data;
          return {
            ...data,
            debCapitsocial: data.debCapitsocial ? Number(data.debCapitsocial) : 0,
            debDatcreat: data.debDatcreat ? new Date(data.debDatcreat) : null
          };
        } catch (error) {
          console.error('Error fetching debtor:', error);
          throw error;
        }
      }



    async saveDebiteurComplet(data: DebiteurCompletCreationDTO): Promise<any> {
        try {
            const isModification = Boolean(data.debCode);
            const isMoral = data.typdebCode === 'M';
            
            // Correction de l'URL selon la documentation
            const url = isMoral 
                ? `${this.BASE_URL}/debiteurs-moral${isModification ? `/${data.debCode}` : ''}`
                : `${this.BASE_URL}/debiteurs-complet${isModification ? `/${data.debCode}` : ''}`;
            
            console.log('URL utilisée:', url);
            console.log('Données envoyées:', data);
            
            const method = isModification ? 'put' : 'post';
            const response = await axios[method](url, data);
            
            console.log('Réponse du serveur:', response.data);
            return response.data;
            
        } catch (error) {
            console.error('Erreur lors de la sauvegarde:', error);
            throw error;
        }
    }

    async getDebiteurByCode(debCode: number): Promise<DebiteurCompletCreationDTO> {
        try {
            console.log('Fetching debtor by code:', debCode);
            const response = await axios.get(`${this.API_URL}/${debCode}`);
            console.log('Debtor data received:', response.data);
            return response.data;
        } catch (error: any) {
            console.error('Error fetching debtor:', error);
            throw new Error(`Failed to fetch debtor: ${error.message}`);
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

    async getQuartiers(): Promise<{ quartCode: string; quartLib: string }[]> {
        const response = await axios.get(`${this.BASE_URL}/ac-quartier`);
        return response.data;
    }

    async getNationalites(): Promise<{ natCode: string; natLib: string }[]> {
        const response = await axios.get(`${this.BASE_URL}/ac-nationalite`);
        return response.data;
    }

    async getProfessions(): Promise<{ profesCode: string; profesLib: string }[]> {
        const response = await axios.get(`${this.BASE_URL}/ac-profession`);
        return response.data;
    }

    async getFonctions(): Promise<{ fonctCode: string; fonctLib: string }[]> {
        const response = await axios.get(`${this.BASE_URL}/ac-fonction`);
        return response.data;
    }

    async getCivilites(): Promise<{ civCode: string; civLib: string }[]> {
        const response = await axios.get(`${this.BASE_URL}/ac-civilite`);
        return response.data;
    }

    async getEmployeurs(): Promise<{ empCode: string; empNom: string }[]> {
        const response = await axios.get(`${this.BASE_URL}/ac-employeur`);
        return response.data;
    }

    async StatutSalaries() : Promise<{ statsalCode: string; statsalLib: string }[]> {
        const response = await axios.get(`${this.BASE_URL}/ac-statut-salarie`);
        return response.data;
    }

    // Méthodes de consultation
    async createDebiteurMoral(data: DebiteurCompletCreationDTO): Promise<any> {
        try {
            console.log('Creating moral debtor:', data);
            const response = await axios.post(`${this.BASE_URL}/ac-debiteur-moral`, data);
            return response.data;
        } catch (error: any) {
            console.error('Error creating moral debtor:', error);
            throw new Error(`Failed to create moral debtor: ${error.message}`);
        }
    }

    async updateDebiteurMoral(debCode: number, data: DebiteurCompletCreationDTO): Promise<any> {
        try {
            console.log(`Updating moral debtor ${debCode}:`, data);
            const response = await axios.put(`${this.BASE_URL}/ac-debiteur-moral/${debCode}`, data);
            return response.data;
        } catch (error: any) {
            console.error('Error updating moral debtor:', error);
            throw new Error(`Failed to update moral debtor: ${error.message}`);
        }
    }

    async getDebiteurMoral(debCode: number): Promise<DebiteurCompletCreationDTO> {
        try {
            // Correction de l'URL pour les débiteurs moraux
            const response = await axios.get(`${this.BASE_URL}/debiteurs-moral/${debCode}`);
            console.log('Données reçues du serveur:', response.data);
            return response.data;
        } catch (error) {
            console.error('Erreur getDebiteurMoral:', error);
            throw error;
        }
    }
}