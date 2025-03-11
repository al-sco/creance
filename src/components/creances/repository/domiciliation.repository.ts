import axios, { AxiosError } from 'axios';
import { 
    Domiciliation,
    TypeDomiciliation,
    BanqueAgence,
    DomiciliationDTO,
    DomiciliationUpdateDTO
} from '../model/debiteur.model';

export class DomiciliationRepository {
    private readonly BASE_URL = 'http://localhost:8281/api/v1';

  

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

// Dans domiciliation.repository.ts
async updateDomiciliation(
    debCode: number,
    domCode: string,
    data: DomiciliationUpdateDTO
  ): Promise<any> {
    try {
      // URL CORRECTE selon la spécification
      const url = `${this.BASE_URL}/debiteurs/${debCode}/domiciliations/${domCode}`;
      console.log(`🔄 Mise à jour domiciliation: ${url}`, data);
      
      const response = await axios.put(url, data);
      console.log('✅ Domiciliation mise à jour avec succès:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Erreur lors de la modification:', error);
      // Afficher des détails sur l'erreur pour faciliter le débogage
      if (axios.isAxiosError(error) && error.response) {
        console.error('Status:', error.response.status);
        console.error('Message serveur:', error.response.data);
      }
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


   // Dans domiciliation.repository.ts
async getDomiciliationsByDebCode(debCode: number): Promise<any[]> {
    try {
      // URL CORRECTE selon la spécification
      const url = `${this.BASE_URL}/debiteurs/${debCode}/domiciliations`;
      console.log(`🔍 Récupération des domiciliations: ${url}`);
      
      const response = await axios.get(url);
      
      // Vérifier que la réponse est bien un tableau
      if (Array.isArray(response.data)) {
        console.log(`✅ ${response.data.length} domiciliations récupérées`);
        return response.data;
      } else {
        console.error('❌ Format de réponse incorrect:', typeof response.data);
        // Si API renvoie un objet avec une propriété contenant le tableau
        if (response.data && typeof response.data === 'object') {
          // Chercher une propriété qui pourrait contenir un tableau
          for (const key in response.data) {
            if (Array.isArray(response.data[key])) {
              return response.data[key];
            }
          }
        }
        return []; // Renvoyer un tableau vide si format non reconnu
      }
    } catch (error: any) {
      console.error('❌ Erreur chargement domiciliations:', error);
      if (error.response) {
        console.error('Status:', error.response.status);
        console.error('Message:', error.response.data);
      }
      return []; // Renvoyer un tableau vide en cas d'erreur
    }
  }
}