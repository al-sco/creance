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

    async saveDebiteurComplet(data: DebiteurCompletCreationDTO): Promise<any> {
        try {
            const isModification = Boolean(data.debCode);
            const isMoral = data.typdebCode === 'M';
            
            console.log('Saving debtor:', {
                isModification,
                isMoral,
                data
            });

            if (isModification) {
                const url = isMoral 
                    ? `${this.BASE_URL}/ac-debiteur-moral/${data.debCode}`
                    : `${this.API_URL}/${data.debCode}`;
                
                return await axios.put(url, data, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
            } else {
                const url = isMoral 
                    ? `${this.BASE_URL}/ac-debiteur-moral`
                    : this.API_URL;
                
                return await axios.post(url, data, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
            }
        } catch (error: any) {
            console.error('Error saving debtor:', error);
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

    async getDebiteurMoral(debCode: number): Promise<AcDebiteurMoral> {
        try {
            console.log('Fetching moral debtor:', debCode);
            const response = await axios.get(`${this.BASE_URL}/ac-debiteur-moral/${debCode}`);
            return response.data;
        } catch (error: any) {
            console.error('Error fetching moral debtor:', error);
            throw new Error(`Failed to fetch moral debtor: ${error.message}`);
        }
    }
}