import { create } from 'zustand';
import { DebiteurRepository } from '../repository/debiteur.repository';
import { 
    AcDebiteur,
    AcDebiteurPhysique,
    DebiteurCompletDTO,
    CategorieDebiteur,
    TypeDebiteur
} from '../model/debiteur.model';

interface DebiteurStore {
    // États
    categories: CategorieDebiteur[];
    types: TypeDebiteur[];
    loading: boolean;
    error: string | null;
    currentDebiteur: AcDebiteur | null;
    currentPhysique: AcDebiteurPhysique | null;

    // Actions
    fetchCategories: () => Promise<void>;
    fetchTypes: () => Promise<void>;
    saveDebiteurComplet: (data: DebiteurCompletDTO) => Promise<any>;
    updateCurrentDebiteur: (data: Partial<AcDebiteur>) => void;
    updateCurrentPhysique: (data: Partial<AcDebiteurPhysique>) => void;
    resetStore: () => void;
}

export const useDebiteurStore = create<DebiteurStore>((set) => {
    const repository = new DebiteurRepository();

    return {
        // États initiaux
        categories: [],
        types: [],
        loading: false,
        error: null,
        currentDebiteur: null,
        currentPhysique: null,

        // Actions
        fetchCategories: async () => {
            try {
                set({ loading: true, error: null });
                const categories = await repository.getCategories();
                set({ categories });
            } catch (error) {
                set({ error: "Erreur lors du chargement des catégories" });
            } finally {
                set({ loading: false });
            }
        },

        fetchTypes: async () => {
            try {
              set({ loading: true, error: null });
              const types = await repository.getTypes();
              set({ types, loading: false });
            } catch (error) {
              set({ 
                error: "Erreur lors du chargement des types", 
                loading: false 
              });
              console.error('Erreur fetchTypes:', error);
            }
          },

        saveDebiteurComplet: async (data: DebiteurCompletDTO) => {
            try {
                set({ loading: true, error: null });
                const response = await repository.createDebiteurComplet(data);
                return response;
            } catch (error) {
                set({ error: "Erreur lors de l'enregistrement du débiteur" });
                throw error;
            } finally {
                set({ loading: false });
            }
        },

        updateCurrentDebiteur: (data: Partial<AcDebiteur>) => {
            set((state) => ({
                currentDebiteur: state.currentDebiteur 
                    ? { ...state.currentDebiteur, ...data }
                    : data as AcDebiteur
            }));
        },

        updateCurrentPhysique: (data: Partial<AcDebiteurPhysique>) => {
            set((state) => ({
                currentPhysique: state.currentPhysique 
                    ? { ...state.currentPhysique, ...data }
                    : data as AcDebiteurPhysique
            }));
        },

        resetStore: () => {
            set({
                currentDebiteur: null,
                currentPhysique: null,
                error: null
            });
        }
    };
});