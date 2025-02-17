import { useState, useEffect, useRef } from "react";
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
      debCjNumpident: ''
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



  const { 
    categories, 
    types, 
    loading, 
    error, 
    fetchCategories, 
    fetchTypes, 
    saveDebiteurComplet, 
    currentPhysique,
    updateCurrentPhysique 
  } = useDebiteurStore();

  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([fetchCategories(), fetchTypes()]);
      } catch (error) {
        toast.current?.show({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Erreur lors du chargement des données de référence'
        });
      }
    };
    
    loadData();
  }, [fetchCategories, fetchTypes]);

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
        debEmail: formData.debEmail,
        debTelbur: formData.debTelbur,
        debFax: formData.debFax,
        debCel: formData.debCel,
        debTeldom: formData.debTeldom,
        debLocalisat: formData.debLocalisat
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
  
        // Ajout des informations physiques directement dans le DTO
        Object.assign(debiteurDTO, {
          debNom: currentPhysique.debNom,
          debPren: currentPhysique.debPren,
          debDatnaiss: currentPhysique.debDatnaiss,
          debLieunaiss: currentPhysique.debLieunaiss,
          debNmere: currentPhysique.debNmere,
          debPrmere: currentPhysique.debPrmere,
          debNpere: currentPhysique.debNpere,
          debPrpere: currentPhysique.debPrpere,
          debNbrEnf: currentPhysique.debNbrEnf,
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
    </div>
  );
}