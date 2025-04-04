import { create } from "zustand";
import { CreanceRepository } from "../repository/creances.repository";
import { 
  CreanceDTO,
  CreanceVM,
  Debiteur,
  GroupeCreance,
  ObjetCreance,
  Periodicite,
  Ordonnateur,
  TypeStructOrga,
  CreanceMode,
  initialCreanceState
} from "../model/creances.model";

interface CreanceStore {
  // État des créances
  creances: CreanceVM[];
  currentCreance: CreanceVM | null;
  
  // État de l'interface
  mode: CreanceMode;
  loading: boolean;
  error: string | null;
  showCodeDialog: boolean;
  codeInput: string;
  
  // Données des référentiels
  debiteurs: Debiteur[];
  groupesCreance: GroupeCreance[];
  objetsCreance: ObjetCreance[];
  periodicites: Periodicite[];
  ordonnateurs: Ordonnateur[];
  typesStructOrga: TypeStructOrga[];
  
  // Actions de base pour les créances
  fetchCreances: () => Promise<void>;
  fetchCreanceByCode: (code: string) => Promise<CreanceVM | undefined>; // Modifiez cette ligne
  createCreance: (creance: CreanceDTO) => Promise<CreanceVM>;
  updateCreance: (code: string, data: Partial<CreanceDTO>) => Promise<CreanceVM>;
  
  // Actions pour la gestion de l'interface
  setMode: (mode: CreanceMode) => void;
  setShowCodeDialog: (show: boolean) => void;
  setCodeInput: (code: string) => void;
  resetError: () => void;
  resetCurrentCreance: () => void;
  
  // Actions pour les référentiels
  fetchReferentiels: () => Promise<void>;
  fetchDebiteurs: () => Promise<void>;
  fetchGroupesCreance: () => Promise<void>;
  fetchObjetsCreance: () => Promise<void>;
  fetchPeriodicites: () => Promise<void>;
  fetchOrdonnateurs: () => Promise<void>;
  fetchTypesStructOrga: () => Promise<void>;
}

export const useCreanceStore = create<CreanceStore>((set, get) => {
  // Instancier le repository
  const repository = new CreanceRepository();
  
  return {
    // États initiaux
    creances: [],
    currentCreance: null,
    mode: 'creation',
    loading: false,
    error: null,
    showCodeDialog: false,
    codeInput: '',
    
    // Référentiels
    debiteurs: [],
    groupesCreance: [],
    objetsCreance: [],
    periodicites: [],
    ordonnateurs: [],
    typesStructOrga: [],
    
    // Actions pour les créances
    fetchCreances: async () => {
      set({ loading: true, error: null });
      try {
        const creances = await repository.getAllCreances();
        set({ creances, loading: false });
      } catch (error: any) {
        set({ 
          error: error.response?.data?.message || "Erreur lors du chargement des créances", 
          loading: false 
        });
      }
    },
    
    fetchCreanceByCode: async (code: string) => {
      if (!code) return;
      
      set({ loading: true, error: null });
      try {
        const creance = await repository.getCreanceByCode(code);
        set({ currentCreance: creance, loading: false });
        return creance;
      } catch (error: any) {
        set({ 
          error: error.response?.data?.message || `Erreur lors du chargement de la créance ${code}`, 
          loading: false,
          currentCreance: null
        });
        throw error;
      }
    },
    
    createCreance: async (creance: CreanceDTO) => {
      set({ loading: true, error: null });
      try {
        const newCreance = await repository.createCreance(creance);
        set(state => ({
          creances: [...state.creances, newCreance],
          currentCreance: newCreance,
          loading: false
        }));
        return newCreance;
      } catch (error: any) {
        set({ 
          error: error.response?.data?.message || "Erreur lors de la création de la créance", 
          loading: false 
        });
        throw error;
      }
    },
    
    updateCreance: async (code: string, data: Partial<CreanceDTO>) => {
      set({ loading: true, error: null });
      try {
        const updatedCreance = await repository.updateCreance(code, data);
        set(state => ({
          creances: state.creances.map(c => 
            c.creanCode === code ? updatedCreance : c
          ),
          currentCreance: updatedCreance,
          loading: false
        }));
        return updatedCreance;
      } catch (error: any) {
        set({ 
          error: error.response?.data?.message || `Erreur lors de la mise à jour de la créance ${code}`, 
          loading: false 
        });
        throw error;
      }
    },
    
    // Actions pour la gestion de l'interface
    setMode: (mode: CreanceMode) => set({ 
      mode,
      // Réinitialiser currentCreance si on passe en mode création
      ...(mode === 'creation' ? { currentCreance: null } : {})
    }),
    
    setShowCodeDialog: (show: boolean) => set({ showCodeDialog: show }),
    
    setCodeInput: (code: string) => set({ codeInput: code }),
    
    resetError: () => set({ error: null }),
    
    resetCurrentCreance: () => set({ currentCreance: null }),
    
    // Charger tous les référentiels en une seule action
    fetchReferentiels: async () => {
      try {
        const repository = new CreanceRepository();
        
        // Chargement parallèle pour améliorer la performance
        const [debiteurs, groupesCreance, objetsCreance, periodicites, ordonnateurs, typesStructOrga] = 
          await Promise.all([
            repository.getAllDebiteurs(),
            repository.getAllGroupesCreance(),
            repository.getAllObjetsCreance(),
            repository.getAllPeriodicites(),
            repository.getAllOrdonnateurs(),
            repository.getAllTypesStructOrga()
          ]);
        
        set({ 
          debiteurs, 
          groupesCreance, 
          objetsCreance, 
          periodicites, 
          ordonnateurs, 
          typesStructOrga,
          error: null // Effacer les erreurs précédentes
        });
      } catch (error) {
        console.error("Erreur lors du chargement des référentiels:", error);
        set({ error: "Erreur lors du chargement des référentiels" });
      }
    },
    
    // Actions individuelles pour les référentiels
    fetchDebiteurs: async () => {
      try {
        const debiteurs = await repository.getAllDebiteurs();
        set({ debiteurs });
      } catch (error) {
        console.error("Erreur lors du chargement des débiteurs:", error);
      }
    },
    
    fetchGroupesCreance: async () => {
      try {
        const groupesCreance = await repository.getAllGroupesCreance();
        set({ groupesCreance });
      } catch (error) {
        console.error("Erreur lors du chargement des groupes de créance:", error);
      }
    },
    
    fetchObjetsCreance: async () => {
      try {
        const objetsCreance = await repository.getAllObjetsCreance();
        set({ objetsCreance });
      } catch (error) {
        console.error("Erreur lors du chargement des objets de créance:", error);
      }
    },

    
    
    fetchPeriodicites: async () => {
      try {
        const periodicites = await repository.getAllPeriodicites();
        set({ periodicites });
      } catch (error) {
        console.error("Erreur lors du chargement des périodicités:", error);
      }
    },
    
    fetchOrdonnateurs: async () => {
      try {
        const ordonnateurs = await repository.getAllOrdonnateurs();
        set({ ordonnateurs });
      } catch (error) {
        console.error("Erreur lors du chargement des ordonnateurs:", error);
      }
    },
    
    fetchTypesStructOrga: async () => {
      try {
        const typesStructOrga = await repository.getAllTypesStructOrga();
        set({ typesStructOrga });
      } catch (error) {
        console.error("Erreur lors du chargement des types de structure organisationnelle:", error);
      }
    }
  };
});