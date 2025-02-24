import { create } from 'zustand';
import { DomiciliationRepository } from '../repository/domiciliation.repository';
import { 
    Domiciliation,
    TypeDomiciliation,
    BanqueAgence,
    DomiciliationDTO
} from '../model/debiteur.model';

interface DomiciliationStore {
    // États
    currentDomiciliations: Domiciliation[];
    typeDomiciliations: TypeDomiciliation[];
    banqueAgences: BanqueAgence[];
    loading: boolean;
    error: string | null;

    // Actions
    fetchDomiciliationsByDebiteur: (debCode: number) => Promise<void>;
    fetchTypeDomiciliations: () => Promise<void>;
    fetchBanqueAgences: () => Promise<void>;
    saveDomiciliation: (data: DomiciliationDTO) => Promise<void>;
    updateDomiciliation: (
        debCode: number,
        domCode: string, 
        data: { 
            typdomCode: string;
            typdomLib?: string;
        }
    ) => Promise<void>;
    deleteDomiciliation: (domCode: string) => Promise<void>;
    resetStore: () => void;
}

export const useDomiciliationStore = create<DomiciliationStore>((set) => {
    const repository = new DomiciliationRepository();

    return {
        // États initiaux
        currentDomiciliations: [],
        typeDomiciliations: [],
        banqueAgences: [],
        loading: false,
        error: null,

        // Actions
        fetchDomiciliationsByDebiteur: async (debCode: number) => {
            try {
                set({ loading: true, error: null });
                const domiciliations = await repository.getDomiciliationsByDebiteur(debCode);
                set({ currentDomiciliations: domiciliations });
            } catch (error) {
                set({ error: "Erreur lors du chargement des domiciliations" });
            } finally {
                set({ loading: false });
            }
        },

        fetchTypeDomiciliations: async () => {
            try {
                set({ loading: true, error: null });
                const types = await repository.getTypeDomiciliations();
                set({ typeDomiciliations: types });
            } catch (error) {
                set({ error: "Erreur lors du chargement des types de domiciliation" });
            } finally {
                set({ loading: false });
            }
        },

        fetchBanqueAgences: async () => {
            try {
                set({ loading: true, error: null });
                const repository = new DomiciliationRepository();
                const agences = await repository.getBanqueAgences();
                console.log('Agences récupérées:', agences); // Debug
                set({ banqueAgences: agences });
            } catch (error) {
                console.error('Erreur lors du chargement des agences:', error);
                set({ error: "Erreur lors du chargement des agences bancaires" });
            } finally {
                set({ loading: false });
            }
        },

        saveDomiciliation: async (data: DomiciliationDTO) => {
            try {
                set({ loading: true, error: null });
                await repository.createDomiciliation(data);
                // Rafraîchir la liste après création
                const domiciliations = await repository.getDomiciliationsByDebiteur(data.debCode);
                set({ currentDomiciliations: domiciliations });
            } catch (error) {
                set({ error: "Erreur lors de la sauvegarde de la domiciliation" });
                throw error;
            } finally {
                set({ loading: false });
            }
        },

        updateDomiciliation: async (
            debCode: number,
            domCode: string, 
            data: { 
                typdomCode: string;
                typdomLib?: string;
            }
        ) => {
            try {
                set({ loading: true, error: null });
                await repository.updateDomiciliation(debCode, domCode, data);
                // Rafraîchir la liste après modification
                const domiciliations = await repository.getDomiciliationsByDebiteur(debCode);
                set({ currentDomiciliations: domiciliations });
            } catch (error) {
                set({ error: "Erreur lors de la modification de la domiciliation" });
                throw error;
            } finally {
                set({ loading: false });
            }
        },

        deleteDomiciliation: async (domCode: string) => {
            try {
                set({ loading: true, error: null });
                await repository.deleteDomiciliation(domCode);
                // Filtrer la domiciliation supprimée de l'état
                set((state) => ({
                    currentDomiciliations: state.currentDomiciliations.filter(
                        dom => dom.domCode !== domCode
                    )
                }));
            } catch (error) {
                set({ error: "Erreur lors de la suppression de la domiciliation" });
                throw error;
            } finally {
                set({ loading: false });
            }
        },


      

        resetStore: () => {
            set({
                currentDomiciliations: [],
                typeDomiciliations: [],
                banqueAgences: [],
                error: null
            });
        }
    };
});