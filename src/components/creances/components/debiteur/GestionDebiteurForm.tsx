import { useState, useEffect, useRef, useCallback } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from 'primereact/toast';
import { useDebiteurStore } from "../../stores/useDebiteurStore";

import { 
  TypeDebiteur, 
  CategorieDebiteur, 

  AcDebiteur, 
  DebiteurCompletCreationDTO
} from "../../model/debiteur.model";
import { PhysiqueSection } from "./SubSections/PhysiqueSection";
import { DomiciliationSection } from "./SubSections/DomiciliationSection";
import { AcDebiteurMoralSection } from "./SubSections/AcDebiteurMoralSection";
import "../../styles/creances.css";
import "../../styles/debiteur.css";
import { InputNumber } from "primereact/inputnumber";

export function GestionDebiteurForm() {
  const toast = useRef<Toast>(null);
  const [formData, setFormData] = useState<AcDebiteur>({
    categDebCode: '',
    typdebCode: '',
    propCode: '',
    garphysCode: '',
    debAdrpost: '',
    debCel: '',
    debEmail: '',
    debTelbur: '',
    debFax: '',
    debCodeCharg: '',
    debTeldom: '',
    debLocalisat: ''
  });


  // Ajout des états pour le dialog de recherche
const [showSearchDialog, setShowSearchDialog] = useState(false);
const [searchDebCode, setSearchDebCode] = useState<number | null>(null);


  const resetForm = () => {
    // Réinitialisation des états du formulaire
    setFormData({
      categDebCode: '',
      typdebCode: '',
      propCode: '',
      garphysCode: '',
      debAdrpost: '',
      debCel: '',
      debEmail: '',
      debTelbur: '',
      debFax: '',
      debCodeCharg: '',
      debTeldom: '',
      debLocalisat: ''
    });

    // Réinitialisation des sélections
    setSelectedType(null);
    setSelectedCategorie(null);
    
    // Réinitialisation de l'onglet actif
    setActiveTab('physique');
    
    // Réinitialisation du débiteur physique via le store
    updateCurrentPhysique({
      debNom: '',
      debPren: '',
      debDatnaiss: undefined,
      debLieunaiss: '',
      debNmere: '',
      debPrmere: '',
      debNpere: '',
      debPrpere: '',
      debNbrEnf: undefined,
      debCjNom: '',
      debCjPren: '',
      debCjDatnaiss: undefined,
      debCjTel: '',
      debCjAdr: '',
      debCjNumpident: '',
      quartCode: '',
      civCode: '',
      profesCode: '',
      natCode: '',
      empCode: '',
      statsalCode: '',
      fonctCode: '',
      debDatdec: undefined,
    


    });
  };




  const handleCategorieSelect = (categorie: CategorieDebiteur) => {
    console.log('Catégorie sélectionnée:', categorie);
    setSelectedCategorie(categorie);
    setFormData(prevData => ({
      ...prevData,
      categDebCode: categorie.categDebCode // Mise à jour explicite
    }));
    setVisible(false);
  };


  const handleTypeChange = (value: TypeDebiteur | null) => {
    console.log('Type sélectionné:', value);
    setSelectedType(value);
    if (value) {
      setFormData(prevData => ({
        ...prevData,
        typdebCode: value.typdebCode // Mise à jour explicite
      }));
      
      if (value.typdebCode === 'P') {
        setActiveTab('physique');
      } else if (value.typdebCode === 'M') {
        setActiveTab('morale');
      }
    }
  };

  const [selectedCategorie, setSelectedCategorie] = useState<CategorieDebiteur | null>(null);
  const [selectedType, setSelectedType] = useState<TypeDebiteur | null>(null);
  const [activeTab, setActiveTab] = useState<'physique' | 'domiciliation' | 'morale'>('physique');
  const [visible, setVisible] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [isSearching, setIsSearching] = useState(false);


  const { 
    fetchDebiteurByCode,
    categories, 
    types, 
    loading, 
    error, 
    fetchCategories, 
    fetchTypes, 
    saveDebiteurComplet, 
    currentPhysique,
    updateCurrentPhysique,
    
  currentDebiteur,

  } = useDebiteurStore();


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Mise à jour du formData pour les champs standards
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  
    // Si c'est un champ spécifique au débiteur physique
    if (['debNom', 'debPren', 'debLieunaiss'].includes(name)) {
      if (!value.trim()) {
        return; // Validation : champ requis
      }
      updateCurrentPhysique({ [name]: value });
    }
  };


const handleCloseDialog = useCallback(() => {
  console.log('handleCloseDialog appelé - Début');
  setShowSearchDialog(false);
  setSearchDebCode(null);
  setIsSearching(false);
  console.log('handleCloseDialog terminé - États réinitialisés');

}, []);

const handleSearch = useCallback(async () => {
  console.log('Début handleSearch avec code:', searchDebCode);

  if (!searchDebCode) {
    console.log('Code débiteur manquant');
    toast.current?.show({
      severity: 'error',
      summary: 'Erreur',
      detail: 'Veuillez saisir un code débiteur'
    });
    return;
  }

  try {
    console.log('Début recherche - setIsSearching(true)');

    setIsSearching(true);

    console.log('Appel fetchDebiteurByCode...');
    const result = await fetchDebiteurByCode(searchDebCode);
    console.log('Résultat fetchDebiteurByCode:', result);

    if (result) {
      console.log('Résultat trouvé, mise à jour des données');


      console.log('Mise à jour du formData avec:', result);

        setFormData({
          categDebCode: result.categDebCode,
          typdebCode: result.typdebCode,
          debAdrpost: result.debAdrpost || '',
          debEmail: result.debEmail || '',
          debTelbur: result.debTelbur || '',
          debFax: result.debFax || '',
          debCel: result.debCel || '',
          debTeldom: result.debTeldom || '',
          debLocalisat: result.debLocalisat || '',
          
        });
        console.log('FormData mis à jour');

        const foundType = types.find(t => t.typdebCode === result.typdebCode);
      const foundCategorie = categories.find(c => c.categDebCode === result.categDebCode);
      console.log('Type trouvé:', foundType);
      console.log('Catégorie trouvée:', foundCategorie);


      setSelectedType(foundType || null);
      setSelectedCategorie(foundCategorie || null);
      console.log('Sélections mises à jour - Type:', foundType, 'Catégorie:', foundCategorie);

      if (result.typdebCode === 'P') {
        console.log('Débiteur physique détecté, mise à jour des données physiques');

        updateCurrentPhysique({
          debNom: result.debNom || '',
          debPren: result.debPren || '',
          debDatnaiss: result.debDatnaiss,
          debLieunaiss: result.debLieunaiss || '',
          civCode: result.civCode || '',
          quartCode: result.quartCode || '',
          profesCode: result.profesCode || '',
          natCode: result.natCode || '',
          empCode: result.empCode || '',
          statsalCode: result.statsalCode || '',
          fonctCode: result.fonctCode || '',
          debNmere: result.debNmere || '',
          debPrmere: result.debPrmere || '',
          debNpere: result.debNpere || '',
          debPrpere: result.debPrpere || '',
          debNbrEnf: result.debNbrEnf,
          debCjNom: result.debCjNom || '',
          debCjPren: result.debCjPren || '',
          debCjDatnaiss: result.debCjDatnaiss,
          debCjTel: result.debCjTel || '',
          debCjAdr: result.debCjAdr || '',
          debCjNumpident: result.debCjNumpident || '',
          debDatdec: result.debDatdec
        });
        
        console.log('Données physiques mises à jour');
        setActiveTab('physique');
        console.log('Onglet physique activé');
      }
        
        // Message de succès
        toast.current?.show({
          severity: 'success',
          summary: 'Succès',
          detail: 'Débiteur trouvé'
        });

        console.log('Début fermeture dialog');
      console.log('Dialog fermé');

      console.log('Début fermeture dialog');
      setTimeout(() => {
        console.log('Fermeture dialog');
        setIsSearching(false);
        setSearchDebCode(null);
        setShowSearchDialog(false);
      }, 100);
    
    }
  } catch (error) {
    console.error('Erreur complète:', error);
    toast.current?.show({
      severity: 'error',
      summary: 'Erreur',
      detail: 'Erreur lors de la recherche'
    });
  } finally {
    console.log('Finally - Réinitialisation des états');
    setIsSearching(false);
  }
}, [searchDebCode, fetchDebiteurByCode, types, categories, updateCurrentPhysique, setActiveTab, handleCloseDialog, toast]);


useEffect(() => {
  const loadData = async () => {
    console.log('Début chargement des données');
    try {
      const [categoriesResult, typesResult] = await Promise.all([
        fetchCategories(),
        fetchTypes()
      ]);
      console.log('Résultats chargement:', {
        categories: categoriesResult,
        types: typesResult
      });
    } catch (error) {
      console.error('Erreur détaillée chargement:', error);
    }
  };
  
  loadData();
}, [fetchCategories, fetchTypes, toast]);

  const handleSave = async () => {
    try {
      // Validation des champs obligatoires
      if (!selectedType?.typdebCode || !selectedCategorie?.categDebCode || !formData.debAdrpost) {
        toast.current?.show({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Type, catégorie et adresse postale sont obligatoires'
        });
        return;
      }
  
      // Construction du DTO selon le format attendu par le backend
      const debiteurDTO: DebiteurCompletCreationDTO = {
        typdebCode: selectedType.typdebCode,
        categDebCode: selectedCategorie.categDebCode,
        debAdrpost: formData.debAdrpost,
        debEmail: formData.debEmail || undefined,
        debTelbur: formData.debTelbur || undefined,
        debFax: formData.debFax || undefined,
        debCel: formData.debCel || undefined,
        debTeldom: formData.debTeldom || undefined,
        debLocalisat: formData.debLocalisat || undefined
      };
  
      // Si c'est un débiteur physique
      if (selectedType.typdebCode === 'P') {
        if (!currentPhysique?.debNom || !currentPhysique?.debPren) {
          toast.current?.show({
            severity: 'error',
            summary: 'Erreur',
            detail: 'Nom et prénom sont obligatoires pour un débiteur physique'
          });
          return;
        }
  
        // Ajout des informations physiques avec les codes des clés étrangères
        Object.assign(debiteurDTO, {
          // Informations personnelles
          debNom: currentPhysique.debNom,
          debPren: currentPhysique.debPren,
          debDatnaiss: currentPhysique.debDatnaiss,
          debLieunaiss: currentPhysique.debLieunaiss,
          
          // Codes des clés étrangères (ajout des codes existants)
          civCode: currentPhysique.civCode,          // Code civilité
          quartCode: currentPhysique.quartCode,      // Code quartier
          profesCode: currentPhysique.profesCode,    // Code profession
          natCode: currentPhysique.natCode,          // Code nationalité
          empCode: currentPhysique.empCode,          // Code employeur
          statsalCode: currentPhysique.statsalCode,  // Code statut salarié
          fonctCode: currentPhysique.fonctCode,      // Code fonction
          
          // Autres informations physiques
          debNmere: currentPhysique.debNmere,
          debDateDeces: currentPhysique.debDatdec,
          debPrmere: currentPhysique.debPrmere,
          debNpere: currentPhysique.debNpere,
          debPrpere: currentPhysique.debPrpere,
          debNbrEnf: currentPhysique.debNbrEnf,
          
          // Informations conjoint
          debCjNom: currentPhysique.debCjNom,
          debCjPren: currentPhysique.debCjPren,
          debCjDatnaiss: currentPhysique.debCjDatnaiss,
          debCjTel: currentPhysique.debCjTel,
          debCjAdr: currentPhysique.debCjAdr,
          debCjNumpident: currentPhysique.debCjNumpident
        });
      }
  
      console.log('DTO à envoyer:', debiteurDTO);
      const response = await saveDebiteurComplet(debiteurDTO);
  
      toast.current?.show({
        severity: 'success',
        summary: 'Succès',
        detail: 'Débiteur enregistré avec succès'
      });
  
      resetForm();
    } catch (error: any) {
      console.error('Erreur détaillée:', error);
      toast.current?.show({
        severity: 'error',
        summary: 'Erreur',
        detail: error.response?.data?.message || 'Erreur lors de l\'enregistrement'
      });
    }
  };
  if (loading) {
    return <ProgressSpinner />;
  }
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="creance-container">
      
      <Toast ref={toast} />
      <div className="main-content-box">
        <h1 className="main-title">Débiteur</h1>

        <div className="debiteur-form">
          {/* Ligne catégorie */}
          <div className="debiteur-form-row">
            <div className="debiteur-form-group">
              <label>Catégorie :</label>
              <div className="input-group">
                <InputText
                  value={selectedCategorie?.categDebCode || ''}
                  placeholder="Code"
                  className="debiteur-input debiteur-category-code"
                  readOnly
                />
                <InputText
                  value={selectedCategorie?.categDebLib || ''}
                  placeholder="Libellé"
                  className="debiteur-input debiteur-category-libelle"
                  readOnly
                />
                <Button
                  icon="pi pi-search"
                  className="p-button-secondary select-button"
                  aria-label="Sélectionner"
                  onClick={() => setVisible(true)}
                />
              </div>
            </div>
            <div className="debiteur-form-group">
              <label>Type :</label>
              <Dropdown
                value={selectedType}
                options={types}
                onChange={(e) => handleTypeChange(e.value)}
                optionLabel="typdebLib"
                placeholder="Sélectionner un type"
              />
            </div>
          </div>

       

          {/* Ligne adresse postale */}
          <div className="debiteur-form-row decal-adr">
            <div className="debiteur-form-group">
              <label>Adr. Postale :</label>
              <InputText
                name="debAdrpost"
                value={formData.debAdrpost}
                onChange={handleInputChange}
                className="debiteur-input debiteur-adresse"
              />
            </div>
            <div className="debiteur-form-group decalTel">
              <label>Tél :</label>
              <InputText
                name="debTeldom"
                value={formData.debTeldom}
                onChange={handleInputChange}
                className="debiteur-input debiteur-tel"
              />

<div className="debiteur-form-group decalLocalisation">
      <label>Localisation :</label>
      <textarea
        name="debLocalisat"
        value={formData.debLocalisat}
        onChange={handleInputChange}
        className="debiteur-input debiteur-localisation"
       
      />
    </div>
            </div>
          </div>

          {/* Ligne email */}
          <div className="debiteur-form-row decalEmail">
            <div className="debiteur-form-group">
              <label>Email :</label>
              <InputText
                name="debEmail"
                value={formData.debEmail}
                onChange={handleInputChange}
                className="debiteur-input debiteur-email"
              />
                <div className="debiteur-form-group decalFax">
              <label>Fax :</label>
              <InputText
                name="debTelbur"
                value={formData.debTelbur}
                onChange={handleInputChange}
                className="debiteur-input debiteur-fax"
              />
            </div>
            </div>

            
          </div>

          
          <div className="debiteur-form-row decalCel" >
            <div className="debiteur-form-group">
              <label>Cel :</label>
              <InputText
                name="debCel"
                value={formData.debCel}
                onChange={handleInputChange}
                className="debiteur-input debiteur-cel"
              />
            </div>
           
          
          </div>
        </div>

        {/* Sous-menus conditionnels */}
        {selectedType && (
          <div className="sub-screen-section">
            <div className="main-sub-separator" />
            <div className="sub-screen-container">
              <div className="custom-tabs">
                <div className="tab-header">
                  {selectedType.typdebCode === 'P' && (
                    <button
                      className={`tab-btn ${activeTab === 'physique' ? 'active' : ''}`}
                      onClick={() => setActiveTab('physique')}
                    >
                      Physique
                    </button>
                  )}
                  <button
                    className={`tab-btn ${activeTab === 'domiciliation' ? 'active' : ''}`}
                    onClick={() => setActiveTab('domiciliation')}
                  >
                    Domiciliation
                  </button>
                  {selectedType.typdebCode === 'M' && (
                    <button
                      className={`tab-btn ${activeTab === 'morale' ? 'active' : ''}`}
                      onClick={() => setActiveTab('morale')}
                    >
                      Moral
                    </button>
                  )}
                </div>
                <div className="tab-content">
                  {activeTab === 'physique' && <PhysiqueSection />}
                  {activeTab === 'domiciliation' && <DomiciliationSection />}
                  {activeTab === 'morale' && <AcDebiteurMoralSection />}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dialog de sélection de catégorie */}
        <Dialog
          header="Sélection catégorie"
          visible={visible}
          className="catdeb-dialog"
          onHide={() => setVisible(false)}
        >
          <div className="p-input-icon-left mb-3">
            <i className="pi pi-search" />
            <InputText
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Rechercher..."
              className="w-full"
            />
          </div>
          <DataTable
            value={categories}
            selectionMode="single"
            selection={selectedCategorie}
            onSelectionChange={(e) => handleCategorieSelect(e.value as CategorieDebiteur)}
            globalFilter={globalFilter}
            emptyMessage="Aucune catégorie trouvée"
          >
            <Column field="categDebCode" header="Code" />
            <Column field="categDebLib" header="Libellé" />
          </DataTable>
        </Dialog>
      </div>
      <button 
    className="save-button" 
    onClick={handleSave}
    disabled={loading} // Désactiver pendant le chargement
>
    {loading ? 'Enregistrement...' : 'Enregistrer'}
</button>

<Button 
    label="Modifier"
    icon="pi pi-pencil"
    className="p-button btn-modify"
    onClick={() => setShowSearchDialog(true)}
  />



<Dialog 
        
        header="Rechercher un débiteur"
        visible={showSearchDialog}
        className="search-dialog"
        style={{ width: '450px' }}
        modal={true}
        closable={!isSearching}
        onHide={() => !isSearching && handleCloseDialog()}
        footer={
          <div>
            <Button
              label="Annuler"
              icon="pi pi-times"
              className="p-button-text"
              onClick={handleCloseDialog}
              disabled={isSearching}
            />
            <Button
              label="Rechercher"
              icon="pi pi-search"
              className="p-button"
              onClick={handleSearch}
              loading={isSearching}
              disabled={isSearching}
            />
          </div>
        }
      >
        <div className="search-field">
          <label htmlFor="debCode">Code débiteur</label>
          <InputNumber
            id="debCode"
            value={searchDebCode}
            onValueChange={(e) => setSearchDebCode(e.value ?? null)}
            useGrouping={false}
            placeholder="Entrez le code débiteur"
            disabled={isSearching}
            autoFocus
          />
        </div>
      </Dialog>
    </div>
  );
}