import axios, { AxiosError } from 'axios';
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
            console.log('Réponse API banques:', response.data); // Debug
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

    // Dans domiciliation.repository.ts
    async saveDomiciliation(domiciliation: DomiciliationDTO): Promise<any> {
        // Assurez-vous que debCode est un nombre
        const debCode = Number(domiciliation.debCode);
        
        // Créez un nouvel objet sans le debCode (puisqu'il est dans l'URL)
        const { debCode: _, ...domiciliationData } = domiciliation;
      
        console.log(`Envoi requête: POST ${this.BASE_URL}/debiteurs/${debCode}/domiciliations`);
        console.log('Données envoyées:', domiciliationData);
        
        try {
          const response = await axios.post(
            `${this.BASE_URL}/debiteurs/${debCode}/domiciliations`,
            domiciliationData
          );
          console.log('Réponse API:', response.data);
          return response.data;
        } catch (error) {
          const axiosError = error as AxiosError;
          console.error('Erreur API domiciliation:', axiosError.response?.data || axiosError.message);
          console.error('Status code:', axiosError.response?.status);
          console.error('Headers:', axiosError.response?.headers);
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


    async getDomiciliationsByDebCode(debCode: number): Promise<any[]> {
        try {
          // Appel à l'API pour récupérer les domiciliations d'un débiteur
          const response = await axios.get(`/api/v1/debiteurs/${debCode}/domiciliations`);
          console.log('Domiciliations récupérées du backend:', response.data);
          return response.data;
        } catch (error) {
          console.error('Erreur chargement domiciliations:', error);
          throw error;
        }
      }
}