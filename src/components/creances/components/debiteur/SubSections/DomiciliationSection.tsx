import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { useDomiciliationStore } from '../../../stores/useDomiciliation';
import '../../../styles/domiciliation.css';
import { BanqueAgence, TypeDomiciliation, DomiciliationDTO } from '../../../model/debiteur.model';

// Interface reste identique
interface DomiciliationLine {
    domCode: string;
    typdomCode: string;
    typdomLib: string;
    domLib: string;
    bqagCode: string;
    bqagLib: string;
    bqLib: string;
}

interface DomiciliationSectionProps {
    debCode?: number;
    isEditMode?: boolean;
}

export const DomiciliationSection = forwardRef((props: DomiciliationSectionProps, ref) => {
    // MODIFICATION: Utiliser le store global pour les domiciliations
    const {
        domiciliations: storeDomiciliations,
        setDomiciliations: storeSetDomiciliations,
        updateDomiciliation,
        resetDomiciliations,
        typeDomiciliations,
        banqueAgences,
        loading,
        error,
        fetchTypeDomiciliations,
        fetchBanqueAgences,
        fetchDomiciliationsByDebCode, // Ajout ici
        saveDomiciliation
    } = useDomiciliationStore();
    
    // Conserver l'état local pour maintenir la compatibilité avec le code existant
    const [domiciliations, setDomiciliations] = useState<DomiciliationLine[]>([{
        domCode: '',
        typdomCode: '',
        typdomLib: '',
        domLib: '',
        bqagCode: '',
        bqagLib: '',
        bqLib: ''
    }]);
    
    // Synchroniser l'état local avec le store dans les deux directions
    useEffect(() => {
        // Si le store change, mettre à jour l'état local
        if (storeDomiciliations !== domiciliations) {
            setDomiciliations(storeDomiciliations);
        }
    }, [storeDomiciliations]);
    
    useEffect(() => {
        // Si l'état local change, mettre à jour le store
        if (domiciliations !== storeDomiciliations) {
            storeSetDomiciliations(domiciliations);
        }
    }, [domiciliations]);

    // États locaux inchangés
    const toast = useRef<Toast>(null);
    const [showTypeDomDialog, setShowTypeDomDialog] = useState(false);
    const [showBanqueAgenceDialog, setShowBanqueAgenceDialog] = useState(false);
    const [currentDomCode, setCurrentDomCode] = useState<string>('');
    const [typeDomFilter, setTypeDomFilter] = useState('');
    const [banqueAgenceFilter, setBanqueAgenceFilter] = useState('');
    const [selectedTypeDomiciliation, setSelectedTypeDomiciliation] = useState<TypeDomiciliation | null>(null);
    const [selectedBanqueAgence, setSelectedBanqueAgence] = useState<BanqueAgence | null>(null);
    const isInitialRender = useRef(true);
    const domiciliationsRef = useRef<DomiciliationLine[]>([]);

    // Effet pour sauvegarder l'état dans la référence
    useEffect(() => {
        console.log('Sauvegarde de l\'état dans domiciliationsRef:', domiciliations);
        domiciliationsRef.current = [...domiciliations];
    }, [domiciliations]);

    // Chargement des données de référence - inchangé
    useEffect(() => {
        const loadData = async () => {
            try {
                await Promise.all([
                    fetchTypeDomiciliations(),
                    fetchBanqueAgences()
                ]);
                console.log('Données chargées avec succès');
            } catch (error) {
                console.error('Erreur lors du chargement des données:', error);
            }
        };
        loadData();
    }, [fetchTypeDomiciliations, fetchBanqueAgences]);

    // Log des mises à jour de debCode - inchangé
    useEffect(() => {
        if (props.debCode) {
            console.log('🔄 debCode mis à jour:', props.debCode, 'Domiciliations actuelles:', domiciliations);
        }
    }, [props.debCode]);

    // Charger les domiciliations quand le debCode change en mode édition
    useEffect(() => {
        const loadDomiciliations = async () => {
            if (props.debCode && props.isEditMode) {
                console.log('🔍 Mode édition détecté, chargement des domiciliations:', props.debCode);
                try {
                    // Charger d'abord les données de référence si nécessaire
                    if (typeDomiciliations.length === 0 || banqueAgences.length === 0) {
                        await Promise.all([
                            fetchTypeDomiciliations(),
                            fetchBanqueAgences()
                        ]);
                    }
                    
                    // Puis charger les domiciliations
                    await fetchDomiciliationsByDebCode(props.debCode);
                } catch (error) {
                    console.error('Erreur chargement domiciliations en mode édition:', error);
                    toast.current?.show({
                        severity: 'error',
                        summary: 'Erreur',
                        detail: 'Impossible de charger les domiciliations'
                    });
                }
            }
        };
        
        loadDomiciliations();
    }, [props.debCode, props.isEditMode]);

    // Fonctions
    const addNewLine = () => {
        console.log('➕ Tentative d\'ajout nouvelle ligne domiciliation');
        
        // Vérifier si on n'a pas déjà une ligne vide
        const emptyLines = domiciliations.filter(dom => 
            !dom.domCode && !dom.typdomCode && !dom.domLib && !dom.bqagCode
        );
        
        if (emptyLines.length > 0) {
            console.log('⚠️ Une ligne vide existe déjà, pas besoin d\'en ajouter une autre');
            toast.current?.show({
                severity: 'info',
                summary: 'Info',
                detail: 'Veuillez compléter la ligne vide existante'
            });
            return;
        }
        
        console.log('✅ Ajout d\'une nouvelle ligne');
        const newDomiciliation: DomiciliationLine = {
            domCode: '',
            typdomCode: '',
            typdomLib: '',
            domLib: '',
            bqagCode: '',
            bqagLib: '',
            bqLib: ''
        };
        
        // Mettre à jour à la fois l'état local et le store
        const newDomiciliations = [...domiciliations, newDomiciliation];
        setDomiciliations(newDomiciliations);
        storeSetDomiciliations(newDomiciliations);
    };

    // Fonctions de validation - inchangées
    const validateInputs = (dom: DomiciliationLine): boolean => {
        const requiredFields = {
            domCode: Boolean(dom.domCode?.trim()),
            typdomCode: Boolean(dom.typdomCode?.trim()),
            domLib: Boolean(dom.domLib?.trim()),
            bqagCode: Boolean(dom.bqagCode?.trim())
        };

        const isValid = Object.values(requiredFields).every(Boolean);

        if (!isValid) {
            const missingFields = Object.entries(requiredFields)
                .filter(([_, value]) => !value)
                .map(([key]) => {
                    switch(key) {
                        case 'domCode': return 'Code domiciliation';
                        case 'typdomCode': return 'Type domiciliation';
                        case 'domLib': return 'Libellé domiciliation';
                        case 'bqagCode': return 'Code agence bancaire';
                        default: return key;
                    }
                });

            toast.current?.show({
                severity: 'warn',
                summary: 'Validation',
                detail: `Champs requis : ${missingFields.join(', ')}`
            });
            return false;
        }
        return true;
    };

    const validateDomCode = (domCode: string, index: number): boolean => {
        return !domiciliations.some((dom, idx) => 
            idx !== index && dom.domCode === domCode
        );
    };

    // Handle Save - avec useImperativeHandle - optimisé pour utiliser le store 
    useImperativeHandle(ref, () => ({
        handleSave: async (debCode: number) => {
            console.log('=== Début sauvegarde domiciliation ===');
            console.log('État actuel des domiciliations:', domiciliations);
            console.log('debCode reçu:', debCode, 'type:', typeof debCode);
            
            // Vérifiez et convertissez debCode en nombre
            const debCodeNumber = Number(debCode);

            const isEmpty = domiciliations.length === 1 && 
                !domiciliations[0].domCode &&
                !domiciliations[0].typdomCode;

            const hasRefData = domiciliationsRef.current.length > 0 && 
                domiciliationsRef.current[0].domCode;

            // Choisir le bon état à utiliser
            const domsToSave = (isEmpty && hasRefData) ? 
                domiciliationsRef.current : 
                domiciliations;

            console.log('État actuel des domiciliations:', domiciliations);
            console.log('État sauvegardé dans ref:', domiciliationsRef.current);
            console.log('État utilisé pour la sauvegarde:', domsToSave);
            console.log('debCode reçu:', debCode, 'type:', typeof debCode);

            // Utiliser domsToSave pour le reste du code
            const nonEmptyDomiciliations = domsToSave.filter(dom => 
                dom.domCode || dom.typdomCode || dom.domLib || dom.bqagCode
            );
            
            if (!debCodeNumber || isNaN(debCodeNumber)) {
                console.error('❌ Code débiteur invalide:', debCode);
                toast.current?.show({
                    severity: 'error',
                    summary: 'Erreur',
                    detail: 'Code débiteur invalide'
                });
                return false;
            }
            
            if (nonEmptyDomiciliations.length === 0) {
                // Si toutes les domiciliations sont vides, on considère que c'est OK
                console.log('⚠️ Aucune domiciliation à sauvegarder');
                return true;
            }

            console.log('Domiciliations avant validation:', JSON.stringify(nonEmptyDomiciliations));
            const validDomiciliations = nonEmptyDomiciliations.filter(dom => {
                const isValid = validateInputs(dom);
                console.log('Validation dom:', dom.domCode, isValid);
                if (!isValid) console.log('Champs manquants:', 
                    !dom.domCode ? 'domCode ' : '',
                    !dom.typdomCode ? 'typdomCode ' : '',
                    !dom.domLib ? 'domLib ' : '',
                    !dom.bqagCode ? 'bqagCode' : '');
                return isValid;
            });
            
            if (validDomiciliations.length === 0) {
                toast.current?.show({
                    severity: 'warn',
                    summary: 'Attention',
                    detail: 'Aucune domiciliation valide à sauvegarder'
                });
                return false;
            }

            console.log('Données de domiciliation à enregistrer:', {
                domiciliations: domsToSave,
                debCode,
                nonEmptyDomiciliations
            });

            try {
                for (const dom of validDomiciliations) {
                    const domDTO: DomiciliationDTO = {
                        domCode: dom.domCode,
                        debCode: debCodeNumber,
                        typdomCode: dom.typdomCode,
                        domLib: dom.domLib,
                        bqagCode: dom.bqagCode
                    };
                    
                    console.log('DTO à envoyer:', domDTO);
                    console.log('📤 Tentative sauvegarde:', domDTO);
                    
                    try {
                        await saveDomiciliation(domDTO);
                        console.log('✅ Domiciliation sauvegardée avec succès:', dom.domCode);
                    } catch (error: any) {
                        console.error(`❌ Erreur sauvegarde domiciliation ${dom.domCode}:`, error);
                        
                        // Afficher les détails spécifiques de l'erreur du backend
                        if (error.response?.data?.message) {
                            toast.current?.show({
                                severity: 'error',
                                summary: 'Erreur API',
                                detail: error.response.data.message
                            });
                        }
                        throw error; // Propager l'erreur pour interrompre la boucle
                    }
                }

                toast.current?.show({
                    severity: 'success',
                    summary: 'Succès',
                    detail: 'Domiciliations enregistrées avec succès'
                });
                return true;
            } catch (error) {
                console.error('❌ Erreur sauvegarde:', error);
                toast.current?.show({
                    severity: 'error',
                    summary: 'Erreur',
                    detail: 'Erreur lors de la sauvegarde'
                });
                throw error;
            }
        },
        
        validateDomiciliations: () => {
            // On vérifie s'il y a au moins une domiciliation avec tous les champs remplis
            return domiciliations.some(dom => 
                dom.domCode?.trim() && 
                dom.typdomCode?.trim() && 
                dom.domLib?.trim() && 
                dom.bqagCode?.trim()
            );
        },
        
        // Fonction inchangée pour vérifier les domiciliations partiellement remplies
        hasIncompleteData: () => {
            return domiciliations.some(dom => 
                (dom.domCode || dom.typdomCode || dom.domLib || dom.bqagCode) && // Au moins un champ rempli
                !(dom.domCode && dom.typdomCode && dom.domLib && dom.bqagCode)  // Mais pas tous
            );
        },

        // Ajouter cette nouvelle méthode
        loadDomiciliationsForDebiteur: async (debCode: number) => {
            if (!debCode) return false;
            
            try {
                await fetchDomiciliationsByDebCode(debCode);
                return true;
            } catch (error) {
                console.error('Erreur dans loadDomiciliationsForDebiteur:', error);
                return false;
            }
        },
    }));

    // MODIFICATION: handleSelectType synchronise avec le store
    const handleSelectType = (selection: TypeDomiciliation) => {
        console.log('Selection complète:', selection);
    
        const index = domiciliations.findIndex(d => d.domCode === currentDomCode);
        if (index !== -1) {
            const updatedDomiciliations = [...domiciliations];
            updatedDomiciliations[index] = {
                ...updatedDomiciliations[index],
                typdomCode: selection.typdomCode,
                typdomLib: selection.typdomLib
            };
            
            // Mettre à jour l'état local ET le store
            setDomiciliations(updatedDomiciliations);
            storeSetDomiciliations(updatedDomiciliations);
        }
    
        setSelectedTypeDomiciliation(selection);
        setTypeDomFilter('');
        setShowTypeDomDialog(false);
    };

    // MODIFICATION: handleSelectBanque synchronise avec le store
    const handleSelectBanque = (selection: BanqueAgence) => {
        console.log('Selection complète:', selection);
    
        const index = domiciliations.findIndex(d => d.domCode === currentDomCode);
        if (index !== -1) {
            let updatedDomiciliations = [...domiciliations];
            
            // S'assurer que bqCode existe et contient bqLib
            if (selection.bqCode && selection.bqCode.bqLib) {
                updatedDomiciliations[index] = {
                    ...updatedDomiciliations[index],
                    bqagCode: selection.bqagCode,
                    bqagLib: selection.bqagLib,
                    bqLib: selection.bqCode.bqLib
                };
            } else {
                // Si bqCode n'existe pas, extraire le nom de la banque du libellé de l'agence
                const bankName = selection.bqagLib.split(' ')[0]; // Par exemple: "SIB" de "SIB CAMPUS"
                updatedDomiciliations[index] = {
                    ...updatedDomiciliations[index],
                    bqagCode: selection.bqagCode,
                    bqagLib: selection.bqagLib,
                    bqLib: bankName
                };
                console.log('Domiciliation mise à jour (fallback):', updatedDomiciliations[index]);
            }
            
            // Mettre à jour l'état local ET le store
            setDomiciliations(updatedDomiciliations);
            storeSetDomiciliations(updatedDomiciliations);
        }
        
        setSelectedBanqueAgence(selection);
        setBanqueAgenceFilter('');
        setShowBanqueAgenceDialog(false);
    };

    // MODIFICATION: removeLine synchronise avec le store
    const removeLine = (index: number) => {
        if (domiciliations.length > 1) {
            const updatedDomiciliations = domiciliations.filter((_, idx) => idx !== index);
            setDomiciliations(updatedDomiciliations);
            storeSetDomiciliations(updatedDomiciliations);
        }
    };

    // Fonction pour gérer les changements dans les champs d'entrée
    const handleInputChange = (index: number, field: keyof DomiciliationLine, value: string) => {
        const updatedDomiciliations = [...domiciliations];
        updatedDomiciliations[index] = {
            ...updatedDomiciliations[index],
            [field]: value
        };
        
        // Mettre à jour l'état local ET le store
        setDomiciliations(updatedDomiciliations);
        storeSetDomiciliations(updatedDomiciliations);
    };

    // Le rendu reste exactement le même - aucun changement à la structure JSX
    return (
        <div className="domiciliation-screen">
            <Toast ref={toast} />
            {domiciliations.length === 0 ? (
                <div className="no-domiciliation">
                    {!props.isEditMode && (
                        <Button 
                            label="Ajouter une domiciliation" 
                            icon="pi pi-plus"
                            onClick={addNewLine}
                        />
                    )}
                    {props.isEditMode && (
                        <div className="message-info">Aucune domiciliation pour ce débiteur</div>
                    )}
                </div>
            ) : (
                <>
                    {domiciliations.map((dom, index) => (
                        <div key={index} className="domiciliation-line">
                            <div className="domiciliation-group">
                                <div className="input-row">
                                    <label>Type :</label>
                                    <InputText 
                                        className="dom-input" 
                                        value={dom.typdomCode}
                                        placeholder="Code" 
                                        readOnly 
                                    />
                                    <InputText 
                                        className="dom-input" 
                                        value={dom.typdomLib}
                                        placeholder="Libellé" 
                                        readOnly 
                                    />
                                    <Button 
                                        icon="pi pi-search" 
                                        className="valider_button"
                                        onClick={() => {
                                            if (!dom.domCode) {
                                                toast.current?.show({
                                                    severity: 'warn',
                                                    summary: 'Attention',
                                                    detail: 'Veuillez d\'abord saisir un code domiciliation'
                                                });
                                                return;
                                            }
                                            setCurrentDomCode(dom.domCode);
                                            setShowTypeDomDialog(true);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="domiciliation-group">
                                <div className="input-row">
                                    <label>Code Domicile :</label>
                                    <InputText 
                                        className="dom-inputs"
                                        value={dom.domCode}
                                        onChange={(e) => handleInputChange(index, 'domCode', e.target.value)}
                                        readOnly={props.isEditMode} // En lecture seule en mode édition
                                    />
                                    <label>Libellé Domicile :</label>
                                    <InputText 
                                        className="dom-inputs"
                                        value={dom.domLib}
                                        onChange={(e) => handleInputChange(index, 'domLib', e.target.value)}
                                        readOnly={props.isEditMode} // En lecture seule en mode édition
                                    />
                                </div>
                            </div>

                            <div className="domiciliation-group">
                                <div className="input-row">
                                    <label>Infos banque :</label>
                                    <InputText 
                                        className="dom-input" 
                                        value={dom.bqagCode}
                                        placeholder="Code agence" 
                                        readOnly 
                                    />
                                    <InputText 
                                        className="dom-input" 
                                        value={dom.bqagLib}
                                        placeholder="Libellé agence" 
                                        readOnly 
                                    />
                                    <InputText 
                                        className="dom-input" 
                                        value={dom.bqLib}
                                        placeholder="Libellé banque" 
                                        readOnly 
                                    />
                                    <Button 
                                        icon="pi pi-search" 
                                        className="valider_button"
                                        onClick={() => {
                                            if (!dom.domCode) {
                                                toast.current?.show({
                                                    severity: 'warn',
                                                    summary: 'Attention',
                                                    detail: 'Le code domiciliation doit être saisi avant de sélectionner une banque'
                                                });
                                                return;
                                            }
                                            console.log('Current Dom:', dom);
                                            setCurrentDomCode(dom.domCode);
                                            setShowBanqueAgenceDialog(true);
                                        }}
                                        disabled={props.isEditMode} // Désactivé en mode édition
                                    />
                                </div>
                            </div>

                            {index !== 0 && !props.isEditMode && (
                                <div className="action-buttons">
                                    <Button 
                                        icon="pi pi-times" 
                                        className="p-button-danger" 
                                        onClick={() => removeLine(index)}
                                    />
                                    <Button 
                                        label="Annuler" 
                                        className="cancel-button"
                                        onClick={() => removeLine(index)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                    {!props.isEditMode && (
                        <Button 
                            label='Ajouter'
                            className='dom-add-button' 
                            icon="pi pi-plus"
                            onClick={addNewLine}
                        />
                    )}
                </>
            )}

            {/* Dialog Type Domiciliation - inchangé */}
            <Dialog
                header="Sélectionner un type de domiciliation"
                visible={showTypeDomDialog}
                style={{ width: '30vw' }}
                modal
                footer={
                    <div>
                        <Button
                            label="Annuler"
                            icon="pi pi-times"
                            onClick={() => {
                                setShowTypeDomDialog(false);
                                setTypeDomFilter('');
                                setSelectedTypeDomiciliation(null);
                            }}
                            className="p-button-text"
                        />
                    </div>
                }
                onHide={() => {
                    setShowTypeDomDialog(false);
                    setTypeDomFilter('');
                }}
            >
                <div className="p-input-icon-left mb-3">
                    <i className="pi pi-search" />
                    <InputText
                        value={typeDomFilter}
                        onChange={(e) => setTypeDomFilter(e.target.value)}
                        placeholder="Rechercher..."
                        className="w-full"
                    />
                </div>
                <DataTable
                    value={typeDomiciliations}
                    globalFilter={typeDomFilter}
                    emptyMessage="Aucun type trouvé"
                    selectionMode="single"
                    selection={selectedTypeDomiciliation}
                    onSelectionChange={(e) => handleSelectType(e.value as TypeDomiciliation)}
                >
                    <Column field="typdomCode" header="Code" />
                    <Column field="typdomLib" header="Libellé" />
                </DataTable>
            </Dialog>

            {/* Dialog Banque Agence - inchangé */}
            <Dialog
                header="Sélectionner une agence bancaire"
                visible={showBanqueAgenceDialog}
                style={{ width: '30vw' }}
                modal
                footer={
                    <div>
                        <Button
                            label="Annuler"
                            icon="pi pi-times"
                            onClick={() => {
                                setShowBanqueAgenceDialog(false);
                                setBanqueAgenceFilter('');
                                setSelectedBanqueAgence(null);
                            }}
                            className="p-button-text"
                        />
                    </div>
                }
                onHide={() => {
                    setShowBanqueAgenceDialog(false);
                    setBanqueAgenceFilter('');
                }}
            >
                <div className="p-input-icon-left mb-3">
                    <i className="pi pi-search" />
                    <InputText
                        value={banqueAgenceFilter}
                        onChange={(e) => setBanqueAgenceFilter(e.target.value)}
                        placeholder="Rechercher..."
                        className="w-full"
                    />
                </div>
                <DataTable
                    value={banqueAgences}
                    globalFilter={banqueAgenceFilter}
                    emptyMessage="Aucune agence trouvée"
                    selectionMode="single"
                    selection={selectedBanqueAgence}
                    onSelectionChange={(e) => handleSelectBanque(e.value as BanqueAgence)}
                >
                    <Column field="bqagCode" header="Code Agence" />
                    <Column field="bqagLib" header="Libellé Agence" />
                    <Column field="bqCode.bqLib" header="Banque" />
                </DataTable>
            </Dialog>

            <div style={{ marginTop: '20px', padding: '10px', border: '1px dashed #ccc' }}>
                <h4>Diagnostic Domiciliations</h4>
                <Button 
                    label="Vérifier état" 
                    className="p-button-sm p-button-help"
                    onClick={() => {
                        console.group('📊 DIAGNOSTIC DOMICILIATIONS');
                        console.log('Nombre total:', domiciliations.length);
                        
                        console.log('État complet des domiciliations:', domiciliations);
                        
                        // Analyse des domiciliations
                        domiciliations.forEach((dom, index) => {
                            console.log(`Domiciliation #${index}:`, {
                                domCode: dom.domCode || '❌ MANQUANT',
                                typdomCode: dom.typdomCode || '❌ MANQUANT',
                                domLib: dom.domLib || '❌ MANQUANT',
                                bqagCode: dom.bqagCode || '❌ MANQUANT',
                                estComplete: !!(dom.domCode && dom.typdomCode && dom.domLib && dom.bqagCode)
                            });
                        });
                        
                        // Vérification de la référence
                        console.log('Props debCode:', props.debCode);
                        console.groupEnd();
                        
                        toast.current?.show({
                            severity: 'info',
                            summary: 'Diagnostic',
                            detail: `${domiciliations.length} domiciliation(s) - Voir console pour détails`
                        });
                    }}
                />
            </div>
        </div>
    );
});