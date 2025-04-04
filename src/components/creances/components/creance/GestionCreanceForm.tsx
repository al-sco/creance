import { useEffect, useRef, useState } from 'react';
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import { GarantiePersonnelleTab } from "./GarantiePersonnelleTab";
import { PieceTab } from "./PieceTab";
import { useCreanceStore } from "../../stores/useCreanceStore";
import { CreanceDTO, initialCreanceState, CreanceMode, Debiteur } from "../../model/creances.model";
import { CreanceRepository } from '../../repository/creances.repository';
import '../../styles/creances.css';
import '../../styles/creancePrinc.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SelectButton } from 'primereact/selectbutton';

export function GestionCreanceForm() {
  // Récupérer les données et actions du store
  const {
    mode,
    loading,
    error,
    currentCreance,
    showCodeDialog,
    codeInput,
    debiteurs,
    groupesCreance,
    objetsCreance,
    periodicites,
    ordonnateurs,
    typesStructOrga,
    fetchReferentiels,
    fetchCreanceByCode,
    createCreance,
    updateCreance,
    setMode,
    setShowCodeDialog,
    setCodeInput,
    resetError,
    fetchObjetsCreance,
    resetCurrentCreance,
    fetchGroupesCreance,
    fetchTypesStructOrga,
    fetchPeriodicites,
    fetchOrdonnateurs
  } = useCreanceStore();

  // Référence pour le toast
  const toast = useRef<Toast>(null);
  const [tempInputs, setTempInputs] = useState({
    debCode: ''
  });

  // Ajoutez cette fonction avec les autres fonctions de chargement
  const loadPeriodicites = async () => {
    setLoadingPeriods(true);
    try {
      // Utiliser la fonction du store pour charger les périodicités
      await fetchPeriodicites();
      console.log("Périodicités chargées:", periodicites.length);
    } catch (error) {
      console.error("Erreur lors du chargement des périodicités:", error);
    } finally {
      setLoadingPeriods(false);
    }
  };
  // État local pour afficher le montant à rembourser calculé (non sauvegardé)
  const [montantAffiche, setMontantAffiche] = useState<number>(0);

  const [showPeriodDialog, setShowPeriodDialog] = useState(false);
  const [periodFilter, setPeriodFilter] = useState('');
  const [loadingPeriods, setLoadingPeriods] = useState(false);

  // Ajoutez cet effet pour charger les données quand le dialogue s'ouvre
  useEffect(() => {
    if (showPeriodDialog) {
      loadPeriodicites();
    }
  }, [showPeriodDialog]);


  // Effet pour calculer automatiquement le montant à rembourser sans le sauvegarder

  // Ajoutez ces états avec les autres états du composant
  const [showOrdoDialog, setShowOrdoDialog] = useState(false);
  const [ordoFilter, setOrdoFilter] = useState('');
  const [loadingOrdo, setLoadingOrdo] = useState(false);

  // Ajoutez ces états avec les autres états du composant
  const [showTypeStructDialog, setShowTypeStructDialog] = useState(false);
  const [typeStructFilter, setTypeStructFilter] = useState('');
  const [loadingTypeStruct, setLoadingTypeStruct] = useState(false);


  // Ajoutez cette fonction avec les autres fonctions de chargement
  const loadOrdonnateurs = async () => {
    setLoadingOrdo(true);
    try {
      await fetchOrdonnateurs();
      console.log("Ordonnateurs chargés:", ordonnateurs.length);
    } catch (error) {
      console.error("Erreur lors du chargement des ordonnateurs:", error);
    } finally {
      setLoadingOrdo(false);
    }
  };

  // Ajoutez cet effet pour charger les données quand le dialogue s'ouvre
  useEffect(() => {
    if (showOrdoDialog) {
      loadOrdonnateurs();
    }
  }, [showOrdoDialog]);

  // Ajoutez cette fonction avec les autres fonctions de chargement
  const loadTypesStructOrga = async () => {
    setLoadingTypeStruct(true);
    try {
      // Utilisez fetchTypesStructOrga du store
      await fetchTypesStructOrga();
      console.log("Types de structure chargés:", typesStructOrga.length);
    } catch (error) {
      console.error("Erreur lors du chargement des types de structure:", error);
    } finally {
      setLoadingTypeStruct(false);
    }
  };

  // Ajoutez cet effet pour charger les données quand le dialogue s'ouvre
  useEffect(() => {
    if (showTypeStructDialog) {
      loadTypesStructOrga();
    }
  }, [showTypeStructDialog]);

  // État local du formulaire
  const [formData, setFormData] = useState<CreanceDTO>(initialCreanceState);
  // Suivi des champs modifiés (pour les mises à jour partielles)
  const [modifiedFields, setModifiedFields] = useState<Set<string>>(new Set());

  // Ajoutez un état local pour stocker le débiteur trouvé
  const [selectedDebiteur, setSelectedDebiteur] = useState<Debiteur | null>(null);

  // Ajoutez ces états au début du composant
  const [showGroupeCreanceDialog, setShowGroupeCreanceDialog] = useState(false);
  const [groupeCreanceFilter, setGroupeCreanceFilter] = useState('');
  // Ajoutez ces états au début du composant avec les autres états
  const [showObjetCreanceDialog, setShowObjetCreanceDialog] = useState(false);
  const [objetCreanceFilter, setObjetCreanceFilter] = useState('');
  const [loadingObjets, setLoadingObjets] = useState(false);

  // Ajoutez cet état pour suivre le chargement
  const [loadingGroupes, setLoadingGroupes] = useState(false);

  // Ajoutez cette fonction dans la définition du composant
  const handleDateChange = (date: Date, field: keyof CreanceDTO) => {
    // Format de la date pour l'API: ISO string
    handleInputChange(field, date.toISOString());
  };

  // Ajoutez cette fonction dans votre composant
  const handleNumericChange = (field: keyof CreanceDTO, value: any) => {
    // Convertit la valeur en nombre pour s'assurer qu'elle est stockée correctement
    const numericValue = typeof value === 'number' ? value : parseFloat(String(value).replace(',', '.'));
    handleInputChange(field, isNaN(numericValue) ? null : numericValue);
  };

  // Assurez-vous que les référentiels sont chargés
  // Chargement des référentiels une seule fois au montage du composant
  useEffect(() => {
    const loadReferentiels = async () => {
      try {
        console.log("Début du chargement des référentiels...");
        await fetchReferentiels();
        console.log("Référentiels chargés avec succès");
      } catch (error) {
        console.error("Erreur détaillée lors du chargement des référentiels:", error);
        // L'erreur sera gérée par le toast via le state global
      }
    };

    loadReferentiels();

    return () => {
      resetCurrentCreance();
      resetError();
    };
  }, []); // Dépendance vide pour exécuter une seule fois au montage

  // Ajouter un effet pour voir quand le dialogue s'ouvre
  useEffect(() => {
    if (showGroupeCreanceDialog) {
      console.log("Dialogue ouvert, données disponibles:", groupesCreance.length);
    }
  }, [showGroupeCreanceDialog]);

  // Ajoutez cette fonction avec les autres fonctions du composant
  const loadObjetsCreance = async () => {
    setLoadingObjets(true);
    try {
      // Utiliser la fonction spécifique au lieu de fetchReferentiels
      await fetchObjetsCreance();
      console.log("Objets de créance chargés:", objetsCreance.length);
    } catch (error) {
      console.error("Erreur lors du chargement des objets de créance:", error);
    } finally {
      setLoadingObjets(false);
    }
  };

  // Ajoutez cet effet pour charger les données quand le dialogue s'ouvre
  useEffect(() => {
    if (showObjetCreanceDialog) {
      loadObjetsCreance();
    }
  }, [showObjetCreanceDialog]);

  // Remplacez l'useEffect actuel par celui-ci
  useEffect(() => {
    console.log("Valeur Capital Initial:", formData.creanCapitInit, typeof formData.creanCapitInit);
    console.log("Valeur Int.Conv Montant:", formData.creanMontIc, typeof formData.creanMontIc);

    // Conversion des valeurs en nombres
    const capitalInitial = Number(formData.creanCapitInit || 0);
    const montantIc = Number(formData.creanMontIc || 0);

    // Calcul de la somme
    const montantARembourser = capitalInitial + montantIc;

    // Mise à jour de l'état local pour Mont à Remb.
    setMontantAffiche(montantARembourser);
  }, [formData.creanCapitInit, formData.creanMontIc]);



  // Chargement des référentiels au montage du composant
  useEffect(() => {

    return () => {
      resetCurrentCreance();
      resetError();
    };
  }, []);

  // Ajoutez cet état avec les autres états du composant
  const [loadingReferentiels, setLoadingReferentiels] = useState(false);

  // Mise à jour du formulaire quand currentCreance change
  useEffect(() => {
    if (currentCreance) {
      setLoadingReferentiels(true);
      console.log("Chargement de la créance:", currentCreance);

      const loadRequiredReferentiels = async () => {
        try {
          // Chargement des référentiels comme avant...
          const promises = [];

          // Vérifier si les référentiels sont déjà chargés
          if (groupesCreance.length === 0) {
            promises.push(fetchGroupesCreance());
          }

          if (objetsCreance.length === 0) {
            promises.push(fetchObjetsCreance());
          }

          if (periodicites.length === 0) {
            promises.push(fetchPeriodicites());
          }

          if (ordonnateurs.length === 0) {
            promises.push(fetchOrdonnateurs());
          }

          if (typesStructOrga.length === 0) {
            promises.push(fetchTypesStructOrga());
          }

          // AJOUT: Si le débiteur de la créance n'est pas dans la liste des débiteurs, on le récupère
          if (currentCreance.debCode && debiteurs.findIndex(d => d.debCode === currentCreance.debCode) === -1) {
            // Récupérer le débiteur spécifique depuis l'API
            try {
              const repository = new CreanceRepository();
              const debiteurTrouve = await repository.getDebiteurByCode(currentCreance.debCode);
              console.log("Débiteur récupéré depuis l'API:", debiteurTrouve);

              if (debiteurTrouve) {
                setSelectedDebiteur(debiteurTrouve);
              }
            } catch (err) {
              console.error("Erreur lors de la récupération du débiteur spécifique:", err);
            }
          }

          // Attendre que tous les chargements soient terminés
          if (promises.length > 0) {
            await Promise.all(promises);
          }

        } catch (error) {
          console.error("Erreur lors du chargement des référentiels requis:", error);
        } finally {
          // Mettre à jour le formulaire avec les données actuelles
          setFormData({
            debCode: currentCreance.debCode,
            grpCreanCode: currentCreance.grpCreanCode,
            objCreanCode: currentCreance.objCreanCode,
            periodCode: currentCreance.periodCode,
            creanCapitInit: currentCreance.creanCapitInit,
            creanMontDu: currentCreance.creanMontDu,
            creanDejRemb: currentCreance.creanDejRemb,
            creanPenalite: currentCreance.creanPenalite,
            creanEncours: currentCreance.creanEncours,
            creanMontImpaye: currentCreance.creanMontImpaye,
            creanFrais: currentCreance.creanFrais,
            creanMontDebloq: currentCreance.creanMontDebloq,
            creanObjet: currentCreance.creanObjet,
            creanDatoctroi: currentCreance.creanDatoctroi,
            creanNbech: currentCreance.creanNbech,
            creanCodePrec: currentCreance.creanCodePrec,
            creanCodeAnc: currentCreance.creanCodeAnc,
            ordoCode: currentCreance.ordoCode,
            typeStructOrgcode: currentCreance.typeStructOrgcode,
            creanStatrecouv: currentCreance.creanStatrecouv || 'N',

            // Ajoutez les autres champs si nécessaire
          });
          setModifiedFields(new Set());

          // MODIFICATION: Toujours définir le débiteur sélectionné si disponible
          if (currentCreance.debCode) {
            // Chercher dans l'ordre : débiteur dans la liste, débiteur dans currentCreance
            const debiteurFromList = debiteurs.find(d => d.debCode === currentCreance.debCode);

            if (debiteurFromList) {
              setSelectedDebiteur(debiteurFromList);
            } else if (currentCreance.debNomComplet) {
              // Si pas trouvé dans la liste mais nom disponible dans currentCreance
              setSelectedDebiteur({
                debCode: currentCreance.debCode,
                nomComplet: currentCreance.debNomComplet
              });
            }

            console.log("Débiteur défini:", selectedDebiteur);
          }

          setLoadingReferentiels(false);
        }
      };

      loadRequiredReferentiels();
    } else {
      setFormData(initialCreanceState);
      setModifiedFields(new Set());
      setSelectedDebiteur(null);
    }
  }, [currentCreance]);

  // Afficher les erreurs
  useEffect(() => {
    if (error && toast.current) {
      toast.current.show({
        severity: 'error',
        summary: 'Erreur',
        detail: error,
        life: 5000
      });
      resetError();
    }
  }, [error]);

  // Gestionnaire pour le changement de mode
  const handleModeChange = (newMode: CreanceMode) => {
    setMode(newMode);

    if (newMode === 'creation') {
      resetCurrentCreance();
    } else {
      setShowCodeDialog(true);
      setCodeInput('');
    }
  };

  // Recherche d'une créance par code
  const handleSearchCreance = async () => {
    if (!codeInput) {
      if (toast.current) {
        toast.current.show({
          severity: 'warn',
          summary: 'Attention',
          detail: 'Veuillez saisir un code de créance',
          life: 3000
        });
      }
      return;
    }

    try {
      await fetchCreanceByCode(codeInput);
      setShowCodeDialog(false);
    } catch (error) {
      // Géré par le store et affiché via useEffect
    }
  };

  // Gestionnaire de changement pour les champs du formulaire
  const handleInputChange = (field: keyof CreanceDTO, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (mode === 'modification') {
      setModifiedFields(prev => {
        const newSet = new Set(prev);
        newSet.add(field);
        return newSet;
      });
    }
  };

  // Gestionnaire pour la soumission du formulaire
  const handleSubmit = async () => {
    try {
      // Validation des champs obligatoires
      if (!formData.debCode) {
        throw new Error('Le débiteur est obligatoire');
      }
      if (!formData.grpCreanCode) {
        throw new Error('Le groupe de créance est obligatoire');
      }
      if (!formData.objCreanCode) {
        throw new Error('L\'objet de créance est obligatoire');
      }
      if (!formData.periodCode) {
        throw new Error('La périodicité est obligatoire');
      }

      // Afficher un indicateur de chargement pendant la sauvegarde
      setLoadingReferentiels(true);

      if (mode === 'creation') {
        try {
          // Créer une nouvelle créance et récupérer la réponse
          const creanceResponse = await createCreance(formData);

          // Utiliser la créance créée comme créance courante
          if (creanceResponse) {
            // Mettre à jour la créance courante avec les données retournées par l'API
            // Cette ligne dépend de ce que retourne votre fonction createCreance
            // Supposons qu'elle retourne la créance créée
            const createdCreance = creanceResponse;

            // Basculer en mode consultation après création
            setMode('consultation');

            // Mettre à jour l'état actuel avec toutes les données
            // (au lieu de réinitialiser ou recharger)
            setFormData(prev => ({
              ...prev,
              creanCode: createdCreance.creanCode,
              // Autres champs si nécessaire
            }));

            // Afficher un message de succès
            if (toast.current) {
              toast.current.show({
                severity: 'success',
                summary: 'Succès',
                detail: `La créance a été créée avec succès. Code: ${createdCreance.creanCode}`,
                life: 5000
              });
            }
          }
        } catch (error) {
          console.error("Erreur lors de la création:", error);
          throw error; // Relancer pour être traité dans le bloc catch général
        }
      } else if (mode === 'modification' && currentCreance) {
        // Envoyer uniquement les champs modifiés
        const updatedData: Partial<CreanceDTO> = {};

        modifiedFields.forEach(field => {
          const typedField = field as keyof CreanceDTO;
          (updatedData[typedField] as any) = formData[typedField];
        });

        try {
          // Mettre à jour la créance et récupérer les données mises à jour
          const updatedCreance = await updateCreance(currentCreance.creanCode, updatedData);

          // Pas de changement de mode, on reste en modification

          // Si la mise à jour renvoie les données actualisées, les utiliser
          if (updatedCreance) {
            // Mise à jour partielle des données du formulaire si nécessaire
            setFormData(prev => ({
              ...prev,
              ...updatedCreance
            }));
          }

          // Réinitialiser le suivi des champs modifiés
          setModifiedFields(new Set());

          // Afficher un message de succès
          if (toast.current) {
            toast.current.show({
              severity: 'success',
              summary: 'Succès',
              detail: 'La créance a été modifiée avec succès',
              life: 3000
            });
          }
        } catch (error) {
          console.error("Erreur lors de la modification:", error);
          throw error;
        }
      }
    } catch (error: any) {
      if (toast.current) {
        toast.current.show({
          severity: 'error',
          summary: 'Erreur',
          detail: error.message || 'Une erreur est survenue',
          life: 5000
        });
      }
    } finally {
      setLoadingReferentiels(false);
    }
  };

  // Helper pour déterminer si un champ est en lecture seule
  const isReadOnly = () => mode === 'consultation';

  // Helper pour déterminer si un champ spécifique est désactivé
  const isFieldDisabled = (field: string) => {
    if (mode === 'consultation') return true;
    if (mode === 'modification' && (field === 'debCode' || field === 'creanCode')) return true;
    return false;
  };



  // Formatage du titre selon le mode
  const getTitle = () => {
    switch (mode) {
      case 'creation': return 'Création d\'une créance';
      case 'modification': return 'Modification de la créance';
      case 'consultation': return 'Consultation de la créance';
      default: return 'Étude créance';
    }
  };

  // Ajoutez cette fonction à votre composant
  const loadGroupesCreance = async () => {
    setLoadingGroupes(true);
    try {
      // Utiliser directement la méthode spécifique du store
      await fetchGroupesCreance();
      console.log("Après chargement spécifique:", groupesCreance.length);
    } catch (error) {
      console.error("Erreur lors du chargement des groupes:", error);
    } finally {
      setLoadingGroupes(false);
    }
  };

  // Modifiez l'effet pour le dialogue
  useEffect(() => {
    if (showGroupeCreanceDialog) {
      loadGroupesCreance(); // Forcer le chargement spécifique
    }
  }, [showGroupeCreanceDialog]);

  return (
    <div className="creance-container">
      <Toast ref={toast} />

      {/* En-tête avec boutons de mode */}
      <div className="creance-header">
        <h1 className="main-title">{getTitle()}</h1>
        <div className="mode-buttons">
          <Button
            label="Nouvelle créance"
            icon="pi pi-plus"
            className={`p-button-${mode === 'creation' ? 'primary' : 'secondary'}`}
            onClick={() => handleModeChange('creation')}
          />
          <Button
            label="Modifier"
            icon="pi pi-pencil"
            className={`p-button-${mode === 'modification' ? 'primary' : 'secondary'}`}
            onClick={() => handleModeChange('modification')}
          />
          <Button
            label="Consulter"
            icon="pi pi-eye"
            className={`p-button-${mode === 'consultation' ? 'primary' : 'secondary'}`}
            onClick={() => handleModeChange('consultation')}
          />
        </div>
      </div>

      {/* Dialogue de saisie du code */}
      <Dialog
        header={mode === 'modification' ? 'Modifier une créance' : 'Consulter une créance'}
        visible={showCodeDialog}
        style={{ width: '450px' }}
        modal
        onHide={() => setShowCodeDialog(false)}
        footer={
          <div>
            <Button
              label="Annuler"
              icon="pi pi-times"
              className="p-button-text"
              onClick={() => {
                setShowCodeDialog(false);
                setMode('creation');
              }}
            />
            <Button
              label="Rechercher"
              icon="pi pi-search"
              onClick={handleSearchCreance}
              autoFocus
            />
          </div>
        }
      >
        <div className="p-field">
          <label htmlFor="creanCode">Code de la créance</label>
          <InputText
            id="creanCode"
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value)}
            placeholder="Ex: CR00123"
            className="w-full"
            autoFocus
            onKeyDown={(e) => e.key === 'Enter' && handleSearchCreance()}
          />
        </div>
      </Dialog>

      {/* Affichage du spinner pendant le chargement */}
      {loading || loadingReferentiels ? (
        <div className="loading-container">
          <ProgressSpinner />
          <p>Chargement en cours...</p>
        </div>
      ) : (
        <>
          <div className="form-grid-four-columns">
            {/* Colonne 1 */}
            <div className="form-column">
              <div className="form-group">
                <label className="blue-label">Débiteur:</label>
                <div className="debiteur">
                  <InputText
                    value={tempInputs.debCode || formData.debCode?.toString() || ''}
                    onChange={(e) => setTempInputs(prev => ({ ...prev, debCode: e.target.value }))}
                    onKeyDown={async (e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        // Rechercher le débiteur correspondant au code saisi
                        const code = parseInt(tempInputs.debCode);
                        if (!isNaN(code)) {
                          try {
                            // Vérifier d'abord dans la liste locale
                            let debiteurTrouve = debiteurs.find(d => d.debCode === code);

                            // Si non trouvé localement, essayer une requête API spécifique
                            if (!debiteurTrouve) {
                              // Indiquer le chargement
                              if (toast.current) {
                                toast.current.show({
                                  severity: 'info',
                                  summary: 'Recherche',
                                  detail: `Recherche du débiteur ${code} en cours...`,
                                  life: 2000
                                });
                              }

                              // Appeler l'API pour récupérer ce débiteur spécifique
                              // Supposons que cette fonction existe dans votre repository
                              try {
                                const repository = new CreanceRepository();
                                debiteurTrouve = await repository.getDebiteurByCode(code);
                              } catch (err) {
                                console.error("Erreur API lors de la recherche du débiteur:", err);
                              }
                            }

                            if (debiteurTrouve) {
                              // Mettre à jour formData avec le code trouvé
                              handleInputChange('debCode', code);
                              // Stocker le débiteur trouvé localement
                              setSelectedDebiteur(debiteurTrouve);
                              // Réinitialiser le champ temporaire
                              setTempInputs(prev => ({ ...prev, debCode: '' }));


                            }
                          } catch (error) {
                            console.error("Erreur de recherche débiteur:", error);
                            if (toast.current) {
                              toast.current.show({
                                severity: 'error',
                                summary: 'Erreur',
                                detail: 'Erreur lors de la recherche du débiteur',
                                life: 3000
                              });
                            }
                          }
                        }
                      }
                    }}
                    placeholder="Saisir le code et appuyer sur Entrée"
                    disabled={isFieldDisabled('debCode')}
                    className="codedeb"
                  />

                  <InputText
                    value={(() => {
                      // Calcul du libellé avec logs pour le débogage
                      const fromSelected = selectedDebiteur && selectedDebiteur.debCode === formData.debCode
                        ? selectedDebiteur.nomComplet : '';
                      const fromList = debiteurs.find(d => d.debCode === formData.debCode)?.nomComplet || '';
                      const fromCurrent = currentCreance && currentCreance.debCode === formData.debCode
                        ? currentCreance.debNomComplet : '';

                      console.log("Affichage du débiteur:", {
                        code: formData.debCode,
                        selectedDebiteur,
                        fromSelected,
                        fromList,
                        fromCurrent
                      });

                      return fromSelected || fromList || fromCurrent || '';
                    })()}
                    disabled
                    className="libelledeb"
                  />
                  {!isFieldDisabled('debCode') && formData.debCode && (
                    <Button

                      icon="pi pi-times"
                      className="videChamp"
                      onClick={() => {
                        setTempInputs(prev => ({ ...prev, debCode: '' }));
                        handleInputChange('debCode', undefined);
                        setSelectedDebiteur(null);
                      }}
                      tooltip="Effacer le débiteur"
                    />
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="blue-label">Grpe Créance:</label>
                <div className="debiteur">
                  <InputText
                    value={formData.grpCreanCode || ''}
                    onChange={(e) => handleInputChange('grpCreanCode', e.target.value)}
                    placeholder="Code"
                    disabled={isFieldDisabled('grpCreanCode')}
                    className="groupcode"
                  />
                  <InputText
                    value={groupesCreance.find(g => g.grpCreanCode === formData.grpCreanCode)?.grpCreanLib || ''}
                    disabled
                    className="grouplibe"
                  />
                  <Button
                    icon="pi pi-search"
                    className="p-button-secondary select-button"
                    aria-label="Sélectionner"
                    onClick={() => setShowGroupeCreanceDialog(true)}
                    disabled={isReadOnly()}
                  />
                </div>
              </div>



              <div className="form-group">
                <label className="blue-label">Type d'Objet</label>
                <div className="debiteur">
                  <InputText
                    value={formData.objCreanCode || ''}
                    onChange={(e) => handleInputChange('objCreanCode', e.target.value)}
                    placeholder="Code"
                    disabled={isFieldDisabled('objCreanCode')}
                    className="groupcode"
                  />
                  <InputText
                    value={objetsCreance.find(o => o.objCreanCode === formData.objCreanCode)?.objCreanLib || ''}
                    disabled
                    className="grouplibe"
                  />
                  <Button
                    icon="pi pi-search"
                    className="p-button-secondary select-button"
                    aria-label="Sélectionner"
                    onClick={() => setShowObjetCreanceDialog(true)}
                    disabled={isReadOnly()}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="blue-label">Capital Initial:</label>
                <InputNumber
                  value={formData.creanCapitInit}
                  onValueChange={(e) => {
                    const numericValue = e.value === null ? 0 : e.value;
                    handleInputChange('creanCapitInit', numericValue);
                  }}
                  mode="decimal"
                  minFractionDigits={0}
                  maxFractionDigits={0}
                  locale="fr-FR"
                  disabled={isReadOnly()}
                  className="inputCapital"
                  placeholder="Saisissez le capital initial"
                />
              </div>

              <div className="form-group">
                <label className="blue-label">Mont. Décaissé:</label>
                <InputNumber
                  value={formData.creanMontDebloq}
                  onValueChange={(e) => handleInputChange('creanMontDebloq', e.value)}
                  mode="decimal"
                  locale="fr-FR"
                  disabled={isReadOnly()}
                  className="inputCapital"
                />
              </div>


              <div className="form-group">
                <label className="blue-label">Sté.caution:</label>
                <InputNumber
                  value={formData.creanCommStecaut}
                  onValueChange={(e) => handleInputChange('creanCommStecaut', e.value)}
                  mode="decimal"
                  locale="fr-FR"
                  disabled={isReadOnly()}
                  className="inputCapital"
                />
              </div>






              <div className="form-group">
                <label className="blue-label">Stat. Recouv:</label>
                <SelectButton
                  value={formData.creanStatrecouv || 'Non'}
                  options={[
                    { label: 'Oui', value: 'O' },
                    { label: 'Non', value: 'N' }
                  ]}
                  onChange={(e) => handleInputChange('creanStatrecouv', e.value)}
                  disabled={isReadOnly()}
                  className="statRecouv-select"
                />
              </div>






              <div className="form-group">
                <label className="blue-label">N°Précédent:</label>
                <InputText
                  value={formData.creanCodePrec}
                  onChange={(e) => handleInputChange('creanCodePrec', e.target.value)}
                  disabled={isReadOnly()}
                  className="inputCapital"
                />
              </div>



              <div className="form-group">
                <label className="blue-label">N°Ancien:</label>
                <InputText
                  value={formData.creanCodeAnc}
                  onChange={(e) => handleInputChange('creanCodeAnc', e.target.value)}
                  disabled={isReadOnly()}
                  className="inputCapital"
                />
              </div>



              <div className="form-group">
                <label className="blue-label">Type Struct:</label>
                <div className="debiteur">
                  <InputText
                    value={formData.typeStructOrgcode || ''}
                    onChange={(e) => handleInputChange('typeStructOrgcode', e.target.value)}
                    placeholder="Code"
                    disabled={isFieldDisabled('typeStructOrgcode')}
                    className="groupcode"
                  />
                  <InputText
                    value={typesStructOrga.find(t => t.typeStructOrgcode === formData.typeStructOrgcode)?.typeStructOrglib || ''}
                    disabled
                    className="grouplibe"
                  />
                  <Button
                    icon="pi pi-search"
                    className="p-button-secondary select-button"
                    aria-label="Sélectionner"
                    onClick={() => setShowTypeStructDialog(true)}
                    disabled={isReadOnly()}
                  />
                </div>
              </div>



              <Dialog
                header="Sélection du type de structure"
                visible={showTypeStructDialog}
                style={{ width: '30vw' }}
                modal
                onHide={() => {
                  setShowTypeStructDialog(false);
                  setTypeStructFilter('');
                }}
                footer={
                  <div>
                    <Button
                      label="Annuler"
                      icon="pi pi-times"
                      className="p-button-text"
                      onClick={() => {
                        setShowTypeStructDialog(false);
                        setTypeStructFilter('');
                      }}
                    />
                  </div>
                }
              >
                <div className="p-input-icon-left mb-3">
                  <i className="pi pi-search" />
                  <InputText
                    value={typeStructFilter}
                    onChange={(e) => setTypeStructFilter(e.target.value)}
                    placeholder="Rechercher..."
                    className="w-full"
                  />
                </div>

                <DataTable
                  value={typesStructOrga}
                  globalFilter={typeStructFilter}
                  emptyMessage="Aucun type de structure trouvé"
                  selectionMode="single"
                  onSelectionChange={(e) => {
                    handleInputChange('typeStructOrgcode', e.value.typeStructOrgcode);
                    setShowTypeStructDialog(false);
                  }}
                >
                  <Column field="typeStructOrgcode" header="Code" sortable />
                  <Column field="typeStructOrglib" header="Libellé" sortable />
                </DataTable>
              </Dialog>


              <div className="form-group">
                <label className="blue-label">Classe Créance:</label>
                <Dropdown
                  value={formData.creanClasse || ''}
                  options={[
                    { label: 'CREANCE NORMALE', value: 'CREANCE NORMALE' },
                    { label: 'CREANCE CONTENTIEUSE', value: 'CREANCE CONTENTIEUSE' },
                    { label: 'CREANCE IRRECOUVRABLE', value: 'CREANCE IRRECOUVRABLE' }
                  ]}
                  onChange={(e) => handleInputChange('creanClasse', e.value)}
                  placeholder="Sélectionner une classe"
                  disabled={isReadOnly()}
                  className="classCrean"
                />
              </div>






              {/* Autres champs de la colonne 1 */}
            </div>

            {/* Colonne 2 */}
            <div className="form-column">
              <div className="creanceForm">
                <label className="blue-label">N° Créance:</label>
                <InputText
                  value={currentCreance?.creanCode || ''}
                  disabled
                  className="creanceSimpl"
                />
              </div>

              <div className="creanceForm">
                <label className="blue-label">Entité:</label>
                <InputText
                  value={groupesCreance.find(g => g.grpCreanCode === formData.grpCreanCode)?.entiteLib || ''}
                  disabled
                  className="creanceSimpl"
                />
              </div>

              <div className="creanceForm">
                <label className="blue-label">Objet Créance:</label>
                <InputText
                  value={formData.creanObjet || ''}
                  onChange={(e) => handleInputChange('creanObjet', e.target.value)}
                  disabled={isReadOnly()}
                  className="inputCapital"
                />
              </div>

              <div className="creanceForm">
                <label className="blue-label">Périodicité:</label>
                <div className="debiteur">
                  <InputText
                    value={formData.periodCode || ''}
                    onChange={(e) => handleInputChange('periodCode', e.target.value)}
                    placeholder="code"
                    disabled={isFieldDisabled('periodCode')}
                    className="groupcode"
                  />
                  <InputText
                    value={periodicites.find(p => p.periodCode === formData.periodCode)?.periodLib || ''}
                    disabled
                    className="grouplibe"
                  />
                  <Button
                    icon="pi pi-search"
                    className="p-button-secondary select-button"
                    aria-label="Sélectionner"
                    onClick={() => setShowPeriodDialog(true)}
                    disabled={isReadOnly()}
                  />
                </div>
              </div>



              <Dialog
                header="Sélection de la périodicité"
                visible={showPeriodDialog}
                style={{ width: '30vw' }}
                modal
                onHide={() => {
                  setShowPeriodDialog(false);
                  setPeriodFilter('');
                }}
                footer={
                  <div>
                    <Button
                      label="Annuler"
                      icon="pi pi-times"
                      className="p-button-text"
                      onClick={() => {
                        setShowPeriodDialog(false);
                        setPeriodFilter('');
                      }}
                    />
                  </div>
                }
              >
                <div className="p-input-icon-left mb-3">
                  <i className="pi pi-search" />
                  <InputText
                    value={periodFilter}
                    onChange={(e) => setPeriodFilter(e.target.value)}
                    placeholder="Rechercher..."
                    className="w-full"
                  />
                </div>

                <DataTable
                  value={periodicites}
                  globalFilter={periodFilter}
                  emptyMessage="Aucune périodicité trouvée"
                  selectionMode="single"
                  onSelectionChange={(e) => {
                    handleInputChange('periodCode', e.value.periodCode);
                    setShowPeriodDialog(false);
                  }}
                >
                  <Column field="periodCode" header="Code" sortable />
                  <Column field="periodLib" header="Libellé" sortable />
                </DataTable>
              </Dialog>










              <div className="NbEch">
                <label className="NbEchlabel">Nb. Ech:</label>
                <InputText
                  value={formData.creanNbech || ''}
                  onChange={(e) => handleInputChange('creanNbech', e.target.value)}
                  disabled={isReadOnly()}
                  className="coloneEch"
                />
              </div>




              {/* Structure pour aligner dates et montants */}
              <div className="date-amount-container">
                <div className="date-column">
                  <div className="form-group">
                    <label className="blue-label">Date Reconnais:</label>
                    <input
                      type="date"
                      name="creanDatrec"
                      value={
                        formData.creanDatrec
                          ? new Date(formData.creanDatrec).toISOString().substr(0, 10)
                          : ''
                      }
                      onChange={(e) => handleDateChange(new Date(e.target.value), 'creanDatrec')}
                      disabled={isReadOnly()}
                      className="date-field"
                    />
                  </div>

                  <div className="form-group">
                    <label className="blue-label">Date 1ère Ech:</label>
                    <input
                      type="date"
                      name="creanDateft"
                      value={
                        formData.creanDateft
                          ? new Date(formData.creanDateft).toISOString().substr(0, 10)
                          : ''
                      }
                      onChange={(e) => handleDateChange(new Date(e.target.value), 'creanDateft')}
                      disabled={isReadOnly()}
                      className="date-field"
                    />
                  </div>

                  <div className="form-group">
                    <label className="blue-label">Date Dern. Ech:</label>
                    <input
                      type="date"
                      name="creanDatech"
                      value={
                        formData.creanDatech
                          ? new Date(formData.creanDatech).toISOString().substr(0, 10)
                          : ''
                      }
                      onChange={(e) => handleDateChange(new Date(e.target.value), 'creanDatech')}
                      disabled={isReadOnly()}
                      className="date-field"
                    />
                  </div>

                  <div className="form-group">
                    <label className="blue-label">Date d'octroi:</label>
                    <input
                      type="date"
                      name="creanDatoctroi"
                      value={
                        formData.creanDatoctroi
                          ? new Date(formData.creanDatoctroi).toISOString().substr(0, 10)
                          : ''
                      }
                      onChange={(e) => handleDateChange(new Date(e.target.value), 'creanDatoctroi')}
                      disabled={isReadOnly()}
                      className="date-field"
                    />
                  </div>


                  <div className="form-group">
                    <label className="Sold">Solde Avant Liquidation:</label>
                    <InputNumber
                      value={typeof formData.creanSoldeInit === 'string' ? parseFloat(formData.creanSoldeInit) || null : formData.creanSoldeInit}
                      onValueChange={(e) => handleInputChange('creanSoldeInit', e.value)}
                      mode="decimal"
                      locale="fr-FR"
                      disabled={isReadOnly()}
                      className="amount-field"
                    />
                  </div>


                </div>


                <div className="amount-column">
                  <div className="form-group">
                    <label className="formatCommi">Commission:</label>
                    <InputNumber
                      value={formData.creanCommBanq}
                      onValueChange={(e) => handleInputChange('creanCommBanq', e.value)}
                      mode="decimal"
                      locale="fr-FR"
                      disabled={isReadOnly()}
                      className="amount-field"
                    />
                  </div>

                  <div className="form-group">
                    <label className="blue-label">Mont Ass:</label>
                    <InputNumber
                      value={formData.creanMontAss}
                      onValueChange={(e) => handleInputChange('creanMontAss', e.value)}
                      mode="decimal"
                      locale="fr-FR"
                      disabled={isReadOnly()}
                      className="amount-field"
                    />
                  </div>

                  <div className="form-group">
                    <label className="blue-label">Int.Conv:</label>
                    <div className="int-conv-container">
                      {/* Champ pour le pourcentage */}
                      <input
                        value={formData.creanTauxIc || ''}
                        onChange={(e) => handleInputChange('creanTauxIc', e.target.value)}
                        placeholder="(%)"
                        disabled={isReadOnly()}
                        className="input-taux"
                      />
                      {/* Champ pour le montant */}
                      {/* Champ pour le montant */}
                      <input
                        value={formData.creanMontIc || ''}
                        onChange={(e) => {
                          const value = e.target.value.replace(',', '.');
                          let numericValue = parseFloat(value);
                          if (isNaN(numericValue)) numericValue = 0;
                          handleInputChange('creanMontIc', numericValue);
                          console.log("Nouvelle valeur Int.Conv:", numericValue);
                        }}
                        placeholder="Montant"
                        disabled={isReadOnly()}
                        className="input-montant"
                      />
                    </div>
                  </div>


                  <div className="form-group">
                    <label className="blue-label">Mont Int Conv.Paye:</label>
                    <InputNumber
                      value={formData.creanMontIcPaye}
                      onValueChange={(e) => handleInputChange('creanMontIcPaye', e.value)}
                      mode="decimal"
                      locale="fr-FR"
                      disabled={isReadOnly()}
                      className="amount-field"
                    />
                  </div>



                  <div className="form-group">
                    <label className="blue-label">Int.Ret:</label>
                    <div className="int-conv-container">
                      {/* Champ pour le pourcentage */}
                      <input
                        value={formData.creanTauxIr || ''}
                        onChange={(e) => handleInputChange('creanTauxIr', e.target.value)}
                        placeholder="(%)"
                        disabled={isReadOnly()}
                        className="input-taux"
                      />

                      {/* Champ pour le montant */}
                      <input
                        value={formData.creanMontIr || ''}
                        onChange={(e) => handleInputChange('creanMontIr', e.target.value)}
                        placeholder="Montant"
                        disabled={isReadOnly()}
                        className="input-montant"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Autres champs de la colonne 2 */}
            </div>

            {/* Colonne 3 */}
            <div className="form-column">
              <div className="form-group">
                <label className="blue-label">Ordonnateur</label>
                <div className="debiteur">
                  <InputText
                    value={formData.ordoCode !== undefined && formData.ordoCode !== null ? String(formData.ordoCode) : ''}
                    onChange={(e) => handleInputChange('ordoCode', e.target.value)}
                    placeholder="Code"
                    disabled={isFieldDisabled('ordoCode')}
                    className="groupcode"
                  />
                  <InputText
                    value={ordonnateurs.find(o => o.ordoCode === formData.ordoCode)?.ordoNom || ''}
                    disabled
                    className="grouplibe"
                  />
                  <Button
                    icon="pi pi-search"
                    className="p-button-secondary select-button"
                    aria-label="Sélectionner"
                    onClick={() => setShowOrdoDialog(true)}
                    disabled={isReadOnly()}
                  />
                </div>
              </div>



              <Dialog
                header="Sélection de l'ordonnateur"
                visible={showOrdoDialog}
                style={{ width: '30vw' }}
                modal
                onHide={() => {
                  setShowOrdoDialog(false);
                  setOrdoFilter('');
                }}
                footer={
                  <div>
                    <Button
                      label="Annuler"
                      icon="pi pi-times"
                      className="p-button-text"
                      onClick={() => {
                        setShowOrdoDialog(false);
                        setOrdoFilter('');
                      }}
                    />
                  </div>
                }
              >
                <div className="p-input-icon-left mb-3">
                  <i className="pi pi-search" />
                  <InputText
                    value={ordoFilter}
                    onChange={(e) => setOrdoFilter(e.target.value)}
                    placeholder="Rechercher..."
                    className="w-full"
                  />
                </div>

                {loadingOrdo ? (
                  <div className="flex justify-content-center">
                    <ProgressSpinner style={{ width: '50px', height: '50px' }} />
                  </div>
                ) : (
                  <DataTable
                    value={ordonnateurs}
                    globalFilter={ordoFilter}
                    emptyMessage="Aucun ordonnateur trouvé"
                    selectionMode="single"
                    onSelectionChange={(e) => {
                      handleInputChange('ordoCode', e.value.ordoCode);
                      setShowOrdoDialog(false);
                    }}
                  >
                    <Column field="ordoCode" header="Code" sortable />
                    <Column field="ordoNom" header="Libellé" sortable />
                  </DataTable>
                )}
              </Dialog>

              {/* Colonne 4 */}
              <div className="form-column">
                <div className="form-group">
                  <label className="blue-label">Mont à Remb.</label>
                  <InputNumber
                    value={montantAffiche}
                    mode="decimal"
                    minFractionDigits={0}
                    maxFractionDigits={0}
                    locale="fr-FR"
                    disabled={true}
                    className="full-width"
                  />
                </div>


                <div className="form-group">
                  <label className="blue-label">Mont.dù</label>
                  <InputNumber
                    value={formData.creanMontDu}
                    onValueChange={(e) => handleInputChange('creanMontDu', e.value)}
                    mode="decimal"
                    locale="fr-FR"
                    disabled={isReadOnly()}
                    className="full-width"
                  />
                </div>

                <div className="form-group">
                  <label className="blue-label">Mont. Déjà Remb.</label>
                  <InputNumber
                    value={formData.creanDejRemb}
                    onValueChange={(e) => handleInputChange('creanDejRemb', e.value)}
                    mode="decimal"
                    locale="fr-FR"
                    disabled={isReadOnly()}
                    className="full-width"
                  />
                </div>

                <div className="form-group">
                  <label className="blue-label">Mont Impayé</label>
                  <InputNumber
                    value={formData.creanMontImpaye}
                    onValueChange={(e) => handleInputChange('creanMontImpaye', e.value)}
                    mode="decimal"
                    locale="fr-FR"
                    disabled={isReadOnly()}
                    className="full-width disabled"
                  />
                </div>

                <div className="form-group">
                  <label className="blue-label">Divers Frais</label>
                  <InputNumber
                    value={formData.creanFrais}
                    onValueChange={(e) => handleInputChange('creanFrais', e.value)}
                    mode="decimal"
                    locale="fr-FR"
                    disabled={isReadOnly()}
                    className="full-width"
                  />
                </div>

                <div className="form-group">
                  <label className="blue-label">Encours</label>
                  <InputNumber
                    value={formData.creanEncours}
                    onValueChange={(e) => handleInputChange('creanEncours', e.value)}
                    mode="decimal"
                    locale="fr-FR"
                    disabled={isReadOnly()}
                    className="full-width"
                  />
                </div>

                <div className="form-group">
                  <label className="blue-label">Total dû</label>
                  <InputNumber
                    value={formData.creanTotalDue}
                    onValueChange={(e) => handleInputChange('creanTotalDue', e.value)}
                    mode="decimal"
                    locale="fr-FR"
                    disabled={true} // Toujours en lecture seule
                    className="full-width disabled"
                  />
                </div>

                <div className="form-group">
                  <label className="blue-label">Pénalité 1%</label>
                  <InputNumber
                    value={formData.creanPenalite}
                    onValueChange={(e) => handleInputChange('creanPenalite', e.value)}
                    mode="decimal"
                    locale="fr-FR"
                    disabled={isReadOnly()}
                    className="full-width"
                  />
                </div>

                <div className="form-group">
                  <label className="blue-label">Total à recouvrer</label>
                  <InputNumber
                    value={formData.creanTotalRecouvrer}
                    onValueChange={(e) => handleInputChange('creanTotalRecouvrer', e.value)}
                    mode="decimal"
                    locale="fr-FR"
                    disabled={true} // Toujours en lecture seule
                    className="full-width disabled"
                    style={{ color: 'red', fontWeight: 'bold' }} // Style pour le texte rouge
                  />
                </div>
              </div>

            </div>
          </div>



          <div className="sub-screen-container">
            <TabView className="mt-4">
              <TabPanel header="Pièce">
                <PieceTab />
              </TabPanel>
              <TabPanel header="Garantie Personnelle">
                <GarantiePersonnelleTab />
              </TabPanel>
              <TabPanel header="Garanties Réelles">
                {/* Contenu existant */}
              </TabPanel>
            </TabView>
          </div>

          {/* Bouton de sauvegarde (visible uniquement en création ou modification) */}
          {mode !== 'consultation' && (
            <Button
              label="Enregistrer"
              icon="pi pi-save"
              onClick={handleSubmit}
              className="save-button"
            />
          )}
        </>
      )}

      {/* Contrôles pour ajuster l'espacement entre colonnes */}
      <div className="spacing-controls">
        <span className="spacing-label">Espacement des colonnes:</span>
        <Button
          icon="pi pi-minus"
          className="p-button-rounded p-button-secondary"
          onClick={() => {
            const root = document.documentElement;
            const currentGap = parseFloat(getComputedStyle(root).getPropertyValue('--column-gap'));
            if (currentGap > 0.5) {
              root.style.setProperty('--column-gap', `${currentGap - 0.5}rem`);
            }
          }}
          tooltip="Rapprocher les colonnes"
        />
        <Button
          icon="pi pi-plus"
          className="p-button-rounded p-button-secondary"
          onClick={() => {
            const root = document.documentElement;
            const currentGap = parseFloat(getComputedStyle(root).getPropertyValue('--column-gap'));
            if (currentGap < 5) {
              root.style.setProperty('--column-gap', `${currentGap + 0.5}rem`);
            }
          }}
          tooltip="Éloigner les colonnes"
        />
        <Button
          icon="pi pi-refresh"
          className="p-button-rounded p-button-help"
          onClick={() => {
            document.documentElement.style.setProperty('--column-gap', '2rem');
          }}
          tooltip="Réinitialiser l'espacement"
        />
      </div>
      <Dialog
        header="Sélection du groupe de créance"
        visible={showGroupeCreanceDialog}
        style={{ width: '30vw' }}  // Réduit à 30vw comme les autres dialogues
        modal
        onHide={() => {
          setShowGroupeCreanceDialog(false);
          setGroupeCreanceFilter(''); // Réinitialiser le filtre à la fermeture
        }}
        footer={
          <div>
            <Button
              label="Annuler"
              icon="pi pi-times"
              className="p-button-text"
              onClick={() => {
                setShowGroupeCreanceDialog(false);
                setGroupeCreanceFilter(''); // Réinitialiser le filtre
              }}
            />
          </div>
        }
      >
        <div className="p-input-icon-left mb-3">
          <i className="pi pi-search" />
          <InputText
            value={groupeCreanceFilter}
            onChange={(e) => setGroupeCreanceFilter(e.target.value)}
            placeholder="Rechercher..."
            className="w-full"
          />
        </div>

        <DataTable
          value={groupesCreance}
          globalFilter={groupeCreanceFilter}  // Recherche globale
          emptyMessage="Aucun groupe de créance trouvé"
          selectionMode="single"
          // Pagination supprimée
          onSelectionChange={(e) => {
            handleInputChange('grpCreanCode', e.value.grpCreanCode);
            setShowGroupeCreanceDialog(false);
          }}
        >
          <Column field="grpCreanCode" header="Code" sortable />
          <Column field="grpCreanLib" header="Libellé" sortable />
          <Column field="entiteLib" header="Entité" sortable />
        </DataTable>
      </Dialog>

      <Dialog
        header="Sélection du type d'objet"
        visible={showObjetCreanceDialog}
        style={{ width: '30vw' }}
        modal
        onHide={() => {
          setShowObjetCreanceDialog(false);
          setObjetCreanceFilter('');
        }}
        footer={
          <div>
            <Button
              label="Annuler"
              icon="pi pi-times"
              className="p-button-text"
              onClick={() => {
                setShowObjetCreanceDialog(false);
                setObjetCreanceFilter('');
              }}
            />
          </div>
        }
      >
        <div className="p-input-icon-left mb-3">
          <i className="pi pi-search" />
          <InputText
            value={objetCreanceFilter}
            onChange={(e) => setObjetCreanceFilter(e.target.value)}
            placeholder="Rechercher..."
            className="w-full"
          />
        </div>

        <DataTable
          value={objetsCreance}
          globalFilter={objetCreanceFilter}
          emptyMessage="Aucun type d'objet trouvé"
          selectionMode="single"
          onSelectionChange={(e) => {
            handleInputChange('objCreanCode', e.value.objCreanCode);
            setShowObjetCreanceDialog(false);
          }}
        >
          <Column field="objCreanCode" header="Code" sortable />
          <Column field="objCreanLib" header="Libellé" sortable />
        </DataTable>
      </Dialog>

    </div>
  );
}