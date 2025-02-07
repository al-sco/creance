import axios from 'axios';
import { CategorieDebiteur, DebiteurMoral, DebiteurPhysique, Domiciliation, TypeDebiteur } from '../model/debiteur.model';

const BASE_URL = 'http://localhost:8281/api/v1';

export class DebiteurRepository {
    async getCategories(): Promise<CategorieDebiteur[]> {
        const response = await axios.get(`${BASE_URL}/ac-categorie-debiteur`);
        return response.data;
    }

    async getTypes(): Promise<TypeDebiteur[]> {
        const response = await axios.get(`${BASE_URL}/ac-type-debiteur`);
        return response.data;
    }

    async createDebiteurPhysique(data: DebiteurPhysique): Promise<DebiteurPhysique> {
        const response = await axios.post(`${BASE_URL}/ac-debiteur-physique`, data);
        return response.data;
    }

    async getDebiteurPhysique(id: number): Promise<DebiteurPhysique> {
        const response = await axios.get(`${BASE_URL}/ac-debiteur-physique/${id}`);
        return response.data;
    }

    async updateDebiteurPhysique(id: number, data: DebiteurPhysique): Promise<DebiteurPhysique> {
        const response = await axios.put(`${BASE_URL}/ac-debiteur-physique/${id}`, data);
        return response.data;
    }

    
    async createDebiteurMoral(data: DebiteurMoral): Promise<DebiteurMoral> {
        const response = await axios.post(`${BASE_URL}/ac-debiteur-moral`, data);
        return response.data;
    }

    async getDebiteurMoral(id: number): Promise<DebiteurMoral> {
        const response = await axios.get(`${BASE_URL}/ac-debiteur-moral/${id}`);
        return response.data;
    }

    async updateDebiteurMoral(id: number, data: DebiteurMoral): Promise<DebiteurMoral> {
        const response = await axios.put(`${BASE_URL}/ac-debiteur-moral/${id}`, data);
        return response.data;
    }

    // Méthodes Domiciliation
    async createDomiciliation(data: Domiciliation): Promise<Domiciliation> {
        const response = await axios.post(`${BASE_URL}/ac-domiciliation`, data);
        return response.data;
    }

    async getDomiciliation(id: string): Promise<Domiciliation> {
        const response = await axios.get(`${BASE_URL}/ac-domiciliation/${id}`);
        return response.data;
    }

    async getDomiciliations(): Promise<Domiciliation[]> {
        const response = await axios.get(`${BASE_URL}/ac-domiciliation`);
        return response.data;
    }

    async updateDomiciliation(id: string, data: Domiciliation): Promise<Domiciliation> {
        const response = await axios.put(`${BASE_URL}/ac-domiciliation/${id}`, data);
        return response.data;
    }
 
    

    async createDebiteur(data: any) {
        const response = await axios.post(`${BASE_URL}/debiteurs`, data);
        return response.data;
    }

    async saveDebiteurComplet(data: {
        debiteur: any;
        type: string;
        physique?: DebiteurPhysique;
        moral?: DebiteurMoral;
        domiciliation?: Domiciliation;
    }) {
        try {
            // 1. Créer le débiteur principal
            const debiteurResponse = await this.createDebiteur(data.debiteur);
            const debCode = debiteurResponse.id;

            // 2. Créer le sous-type en fonction du type
            if (data.type === 'P' && data.physique) {
                await this.createDebiteurPhysique({
                    ...data.physique,
                    debCode: debCode
                });
            } else if (data.type === 'M' && data.moral) {
                await this.createDebiteurMoral({
                    ...data.moral,
                    debCode: debCode
                });
            }

            // 3. Créer la domiciliation si présente
            if (data.domiciliation) {
                await this.createDomiciliation({
                    ...data.domiciliation,
                    debCode: debCode
                });
            }

            return debiteurResponse;
        } catch (error) {
            console.error('Erreur lors de la sauvegarde:', error);
            throw new Error('Erreur lors de la sauvegarde du débiteur');
        }
    }
}