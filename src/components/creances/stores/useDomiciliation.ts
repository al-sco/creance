import { create } from 'zustand';
import { DomiciliationRepository } from '../repository/domiciliation.repository';
import { BanqueAgence, DomiciliationDTO, TypeDomiciliation } from '../model/debiteur.model';

// Interface pour les données de domiciliation (reprise du composant)
export interface DomiciliationLine {
  domCode: string;
  typdomCode: string;
  typdomLib: string;
  domLib: string;
  bqagCode: string;
  bqagLib: string;
  bqLib: string;
}

interface DomiciliationStore {
  // États existants
  typeDomiciliations: TypeDomiciliation[];
  banqueAgences: BanqueAgence[];
  loading: boolean;
  error: string | null;
  
  // NOUVEAU: État global des domiciliations
  domiciliations: DomiciliationLine[];
  
  // Actions existantes
  fetchTypeDomiciliations: () => Promise<void>;
  fetchBanqueAgences: () => Promise<void>;
  saveDomiciliation: (data: DomiciliationDTO) => Promise<any>;
  fetchDomiciliationsByDebCode: (debCode: number) => Promise<void>;

  
  // NOUVELLES actions pour manipuler les domiciliations
  updateDomiciliation: (index: number, field: keyof DomiciliationLine, value: string) => void;
  updateDomiciliationFull: (index: number, updates: Partial<DomiciliationLine>) => void;
  setDomiciliations: (domiciliations: DomiciliationLine[]) => void;
  addDomiciliationLine: () => void;
  removeDomiciliationLine: (index: number) => void;
  resetDomiciliations: () => void;
  
}

const repository = new DomiciliationRepository();

// État initial d'une domiciliation
const emptyDomiciliation: DomiciliationLine = {
  domCode: '',
  typdomCode: '',
  typdomLib: '',
  domLib: '',
  bqagCode: '',
  bqagLib: '',
  bqLib: ''
};

// Store Zustand
export const useDomiciliationStore = create<DomiciliationStore>((set, get) => ({
  typeDomiciliations: [],
  banqueAgences: [],
  loading: false,
  error: null,
  
  // État initial avec une ligne vide
  domiciliations: [{ ...emptyDomiciliation }],
  
  // Fonctions existantes
  fetchTypeDomiciliations: async () => {
    try {
      set({ loading: true, error: null });
      const types = await repository.getTypeDomiciliations();
      console.log('Types de domiciliation chargés:', types.length);
      set({ typeDomiciliations: types, loading: false });
    } catch (error: any) {
      console.error('Erreur chargement types domiciliation:', error);
      set({ error: 'Erreur lors du chargement des types de domiciliation', loading: false });
    }
  },

  // Ajouter dans l'implémentation du store
fetchDomiciliationsByDebCode: async (debCode) => {
  try {
    set({ loading: true, error: null });
    const domData = await repository.getDomiciliationsByDebCode(debCode);
    
    if (domData && domData.length > 0) {
      // Transformer les données brutes en DomiciliationLine
      const domLines: DomiciliationLine[] = await Promise.all(domData.map(async (dom: any) => {
        // Récupérer les informations du type de domiciliation
        let typdomLib = '';
        const types = get().typeDomiciliations;
        const foundType = types.find(t => t.typdomCode === dom.typdomCode);
        if (foundType) typdomLib = foundType.typdomLib;
        
        // Récupérer les informations de la banque
        let bqagLib = '';
        let bqLib = '';
        const banques = get().banqueAgences;
        const foundBanque = banques.find(b => b.bqagCode === dom.bqagCode);
        if (foundBanque) {
          bqagLib = foundBanque.bqagLib;
          bqLib = foundBanque.bqCode?.bqLib || '';
        }
        
        return {
          domCode: dom.domCode,
          typdomCode: dom.typdomCode,
          typdomLib,
          domLib: dom.domLib,
          bqagCode: dom.bqagCode,
          bqagLib,
          bqLib
        };
      }));
      
      console.log('Domiciliation transformées pour le store:', domLines);
      set({ domiciliations: domLines, loading: false });
    } else {
      // Aucune domiciliation trouvée, initialiser avec une ligne vide
      set({
        domiciliations: [{
          domCode: '',
          typdomCode: '',
          typdomLib: '',
          domLib: '',
          bqagCode: '',
          bqagLib: '',
          bqLib: ''
        }],
        loading: false
      });
    }
  } catch (error) {
    console.error('Erreur lors du chargement des domiciliations:', error);
    set({
      error: 'Impossible de charger les domiciliations',
      loading: false
    });
  }
},
  
  fetchBanqueAgences: async () => {
    try {
      set({ loading: true, error: null });
      const banques = await repository.getBanqueAgences();
      console.log('Banques chargées:', banques.length);
      set({ banqueAgences: banques, loading: false });
    } catch (error: any) {
      console.error('Erreur chargement banques:', error);
      set({ error: 'Erreur lors du chargement des banques', loading: false });
    }
  },







  
  saveDomiciliation: async (data: DomiciliationDTO) => {
    console.log('💾 Store: Tentative de sauvegarde domiciliation:', data);
    try {
      set({ loading: true, error: null });
      const result = await repository.saveDomiciliation(data);
      console.log('✅ Store: Domiciliation sauvegardée avec succès:', result);
      set({ loading: false });
      return result;
    } catch (error: any) {
      console.error('❌ Store: Erreur sauvegarde domiciliation:', error);
      set({ 
        error: error.response?.data?.message || 'Erreur lors de la sauvegarde de la domiciliation', 
        loading: false 
      });
      throw error;
    }
  },
  
  // NOUVELLES fonctions pour manipuler l'état des domiciliations
  updateDomiciliation: (index, field, value) => {
    set(state => {
      const domiciliations = [...state.domiciliations];
      domiciliations[index] = { ...domiciliations[index], [field]: value };
      console.log(`Store: Modification domiciliation[${index}].${field} = ${value}`);
      return { domiciliations };
    });
  },
  
  updateDomiciliationFull: (index, updates) => {
    set(state => {
      const domiciliations = [...state.domiciliations];
      domiciliations[index] = { ...domiciliations[index], ...updates };
      console.log(`Store: Mise à jour complète domiciliation[${index}]`, updates);
      return { domiciliations };
    });
  },
  
  setDomiciliations: (domiciliations) => {
    console.log('Store: Mise à jour complète des domiciliations', domiciliations);
    set({ domiciliations });
  },
  
  addDomiciliationLine: () => {
    set(state => {
      // Vérifier s'il n'existe pas déjà une ligne vide
      const hasEmptyLine = state.domiciliations.some(dom => 
        !dom.domCode && !dom.typdomCode && !dom.domLib && !dom.bqagCode
      );
      
      if (hasEmptyLine) {
        console.log('Store: Une ligne vide existe déjà, pas besoin d\'en ajouter une autre');
        return state;
      }
      
      console.log('Store: Ajout d\'une nouvelle ligne de domiciliation');
      return { 
        domiciliations: [...state.domiciliations, { ...emptyDomiciliation }] 
      };
    });
  },
  
  removeDomiciliationLine: (index) => {
    set(state => {
      if (state.domiciliations.length <= 1) {
        console.log('Store: Impossible de supprimer la dernière ligne de domiciliation');
        return state;
      }
      
      const domiciliations = state.domiciliations.filter((_, i) => i !== index);
      console.log(`Store: Suppression domiciliation[${index}]`);
      return { domiciliations };
    });
  },
  
  resetDomiciliations: () => {
    console.log('Store: Réinitialisation des domiciliations');
    set({ domiciliations: [{ ...emptyDomiciliation }] });
  }
}));