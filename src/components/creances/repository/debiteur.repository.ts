import axios from 'axios';
import { CategorieDebiteur, DebiteurMoral, DebiteurPhysique, Domiciliation, TypeDebiteur } from '../model/debiteur.model';

const BASE_URL = 'http://localhost:8281/api/v1';

export class DebiteurRepository {
    // Méthodes pour Catégorie et Type
    async getCategories(): Promise<CategorieDebiteur[]> {
        const response = await axios.get(`${BASE_URL}/ac-categorie-debiteur`);
        return response.data;
    }

    async getTypes(): Promise<TypeDebiteur[]> {
        const response = await axios.get(`${BASE_URL}/ac-type-debiteur`);
        return response.data;
    }

    async getQuartiers() {
        // Implement the API call to fetch quartiers data
        const response = await axios.get(`${BASE_URL}/ac-quartier`);
        return response.data;
    }

    async getNationalites() {
        // Implement the API call to fetch nationalites data
        const response = await axios.get(`${BASE_URL}/ac-nationalite`);
        return response.data;
    }

    async getProfessions() {
        // Implement the API call to fetch professions data
        const response = await axios.get(`${BASE_URL}/ac-profession`);
        return response.data;
    }

    async getFonctions() {
        // Implement the API call to fetch fonctions data
        const response = await axios.get(`${BASE_URL}/ac-fonction`);
        return response.data;
    }

    // Ajout de la méthode pour récupérer les civilités
    async getCivilites(): Promise<{ civCode: string; civLib: string }[]> {
        const response = await axios.get(`${BASE_URL}/ac-civilite`);
        return response.data;
    }

    async getEmployeurs() {
        // Implement the API call to fetch employeurs data
        const response = await axios.get(`${BASE_URL}/ac-employeur`);
        return response.data;
    }

  async StatutSalaries() {
    // Implement the API call to fetch statutSalaries data
    const response = await axios.get(`${BASE_URL}/ac-statut-salarie`);
    return response.data;
    }



    // Méthodes Débiteur Physique
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

    // Méthodes Débiteur Moral
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

    async updateDomiciliation(id: string, data: Domiciliation): Promise<Domiciliation> {
        const response = await axios.put(`${BASE_URL}/ac-domiciliation/${id}`, data);
        return response.data;
    }

    // Méthode principale pour sauvegarder un débiteur complet
    async saveDebiteurComplet(data: {
        debiteur: any;
        type: string;
        physique?: DebiteurPhysique;
        moral?: DebiteurMoral;
        domiciliation?: Domiciliation;
    }) {
        try {
            // 1. Créer le débiteur principal
            const debiteurResponse = await axios.post(`${BASE_URL}/debiteurs`, data.debiteur);
            const debiteurId = debiteurResponse.data.id;

            // 2. Créer les données spécifiques selon le type
            if (data.type === 'P' && data.physique) {
                await this.createDebiteurPhysique({
                    ...data.physique,
                    debCode: debiteurId
                });
            } else if (data.type === 'M' && data.moral) {
                await this.createDebiteurMoral({
                    ...data.moral,
                    debCode: debiteurId
                });
            }

            // 3. Créer la domiciliation si présente
            if (data.domiciliation) {
                await this.createDomiciliation({
                    ...data.domiciliation,
                    debCode: debiteurId
                });
            }

            return debiteurResponse.data;
        } catch (error) {
            console.error('Erreur lors de la sauvegarde du débiteur:', error);
            throw error;
        }
    }
}