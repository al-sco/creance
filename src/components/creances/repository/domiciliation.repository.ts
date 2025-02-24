import axios from 'axios';
import { 
    Domiciliation,
    TypeDomiciliation,
    BanqueAgence,
    DomiciliationDTO
} from '../model/debiteur.model';

export class DomiciliationRepository {
    private readonly BASE_URL = 'http://localhost:8281/api/v1';

    // Récupération des domiciliations d'un débiteur
    async getDomiciliationsByDebiteur(debCode: number): Promise<Domiciliation[]> {
        try {
            const response = await axios.get(`${this.BASE_URL}/debiteurs/${debCode}/domiciliations`);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des domiciliations:', error);
            throw error;
        }
    }

    // Récupération des types de domiciliation
    async getTypeDomiciliations(): Promise<TypeDomiciliation[]> {
        try {
            const response = await axios.get(`${this.BASE_URL}/ac-type-domiciliation`);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des types:', error);
            throw error;
        }
    }

    // Récupération des agences bancaires
    async getBanqueAgences(): Promise<BanqueAgence[]> {
        try {
            const response = await axios.get(`${this.BASE_URL}/ac-banque-agence`);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des agences:', error);
            throw error;
        }
    }

    // Création d'une nouvelle domiciliation
    async createDomiciliation(data: DomiciliationDTO): Promise<Domiciliation> {
        try {
            const response = await axios.post(
                `${this.BASE_URL}/debiteurs/${data.debCode}/domiciliations`,
                data
            );
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la création:', error);
            throw error;
        }
    }

   // Modification d'une domiciliation (uniquement typdomCode)
async updateDomiciliation(
    debCode: number,
    domCode: string, 
    data: { 
        typdomCode: string;
        typdomLib?: string;
    }
): Promise<Domiciliation> {
    try {
        const response = await axios.put(
            `${this.BASE_URL}/debiteurs/${debCode}/domiciliations/${domCode}`,
            data
        );
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la modification:', error);
        throw error;
    }
}
    // Suppression d'une domiciliation
    async deleteDomiciliation(domCode: string): Promise<void> {
        try {
            await axios.delete(`${this.BASE_URL}/domiciliations/${domCode}`);
        } catch (error) {
            console.error('Erreur lors de la suppression:', error);
            throw error;
        }
    }

    // Recherche d'une agence bancaire par code
    async getBanqueAgenceByCode(bqagCode: string): Promise<BanqueAgence> {
        try {
            const response = await axios.get(`${this.BASE_URL}/ac-banque-agence/${bqagCode}`);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la recherche de l\'agence:', error);
            throw error;
        }
    }
}