import { create } from 'zustand';
import { DebiteurRepository } from '../repository/debiteur.repository';
import { 
    AcDebiteur,
    AcDebiteurPhysique,
    AcDebiteurMoral,
    DebiteurCompletCreationDTO,
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
    currentMoral: AcDebiteurMoral | null;


    // Actions
    fetchCategories: () => Promise<void>;
    fetchTypes: () => Promise<void>;
    saveDebiteurComplet: (data: DebiteurCompletCreationDTO) => Promise<any>;  // Changement ici
    updateCurrentDebiteur: (data: Partial<AcDebiteur>) => void;
    updateCurrentPhysique: (data: Partial<AcDebiteurPhysique>) => void;
    updateCurrentMoral: (data: Partial<AcDebiteurMoral>) => void;
    resetStore: () => void;
    fetchDebiteurByCode: (debCode: number) => Promise<DebiteurCompletCreationDTO>;
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

        saveDebiteurComplet: async (data: DebiteurCompletCreationDTO) => {
            try {
                set({ loading: true, error: null });
                // Utiliser saveDebiteurComplet au lieu de createDebiteurComplet
                const response = await repository.saveDebiteurComplet(data);
                return response;
            } catch (error) {
                set({ error: "Erreur lors de l'enregistrement/modification du débiteur" });
                throw error;
            } finally {
                set({ loading: false });
            }
        },

        fetchDebiteurByCode: async (debCode: number): Promise<DebiteurCompletCreationDTO> => {
            try {
                set({ loading: true, error: null });
                const result = await repository.getDebiteurByCode(debCode);
                
                // Mise à jour du state
                set({
                    currentDebiteur: {
                        categDebCode: result.categDebCode,
                        typdebCode: result.typdebCode,
                        debAdrpost: result.debAdrpost || '',
                        debEmail: result.debEmail || '',
                        debTelbur: result.debTelbur || '',
                        debFax: result.debFax || '',
                        debCel: result.debCel || '',
                        debTeldom: result.debTeldom || '',
                        debLocalisat: result.debLocalisat || ''
                    },
                    loading: false,
                    error: null
                });

                // Mise à jour conditionnelle pour débiteur physique
                if (result.typdebCode === 'P') {
                    set({
                        currentPhysique: {
                            // ... vos propriétés existantes
                            debNom: result.debNom,
                            debPren: result.debPren,
                            debDatnaiss: result.debDatnaiss,
                            debLieunaiss: result.debLieunaiss,
                            civCode: result.civCode,
                            quartCode: result.quartCode,
                            profesCode: result.profesCode,
                            natCode: result.natCode,
                            empCode: result.empCode,
                            statsalCode: result.statsalCode,
                            fonctCode: result.fonctCode,
                            debNmere: result.debNmere,
                            debPrmere: result.debPrmere,
                            debNpere: result.debNpere,
                            debPrpere: result.debPrpere,
                            debNbrEnf: result.debNbrEnf,
                            debCjNom: result.debCjNom,
                            debCjPren: result.debCjPren,
                            debCjDatnaiss: result.debCjDatnaiss,
                            debCjTel: result.debCjTel,
                            debCjAdr: result.debCjAdr,
                            debCjNumpident: result.debCjNumpident
                        }
                    });
                    
                }
                // Ajouter dans fetchDebiteurByCode après la condition du débiteur physique :
        if (result.typdebCode === 'M') {
    set({
      currentMoral: {
        debRaisSociale: result.debRaisSociale || '',
        debRegistcom: result.debRegistcom || '',
        debCapitsocial: result.debCapitsocial,
        debFormJurid: result.debFormJurid || '',
        debDomActiv: result.debDomActiv || '', 
        debSiegSocial: result.debSiegSocial || '',
        debNomGerant: result.debNomGerant || '',
        debDatcreat: result.debDatcreat
      }
    });
  }

                return result;
            } catch (error) {
                set({ error: "Erreur lors de la récupération du débiteur", loading: false });
                throw error;
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

        updateCurrentMoral: (data: Partial<AcDebiteurMoral>) => {
            console.log('Updating moral data:', data);
            set((state) => {
                const updatedMoral = state.currentMoral 
                    ? { ...state.currentMoral, ...data }
                    : data as AcDebiteurMoral;
                console.log('Updated moral state:', updatedMoral);
                return { currentMoral: updatedMoral };
            });
        },

        resetStore: () => {
            console.log('Resetting store including moral data');
            set({
                currentDebiteur: null,
                currentPhysique: null,
                currentMoral: null,
                error: null
            });
        }
    };
});