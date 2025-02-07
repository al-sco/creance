import { create } from 'zustand';
import { DebiteurRepository } from '../repository/debiteur.repository';
import { CategorieDebiteur, TypeDebiteur, DebiteurPhysique, DebiteurMoral, Domiciliation } from '../model/debiteur.model';

interface DebiteurStore {
    // États
    categories: CategorieDebiteur[];
    types: TypeDebiteur[];
    loading: boolean;
    error: string | null;
    currentDebiteur: any | null;
    currentPhysique: DebiteurPhysique | null;
    currentMoral: DebiteurMoral | null;
    currentDomiciliation: Domiciliation | null;

    // Actions
    fetchCategories: () => Promise<void>;
    fetchTypes: () => Promise<void>;
    saveDebiteurComplet: (data: {
        debiteur: any;
        type: string;
        physique?: DebiteurPhysique;
        moral?: DebiteurMoral;
        domiciliation?: Domiciliation;
    }) => Promise<void>;
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
        currentMoral: null,
        currentDomiciliation: null,

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
                set({ types });
            } catch (error) {
                set({ error: "Erreur lors du chargement des types" });
            } finally {
                set({ loading: false });
            }
        },

        saveDebiteurComplet: async (data) => {
            try {
                set({ loading: true, error: null });
                const result = await repository.saveDebiteurComplet(data);
                set({ currentDebiteur: result });
            } catch (error) {
                set({ error: "Erreur lors de l'enregistrement" });
                throw error;
            } finally {
                set({ loading: false });
            }
        }
    };
});