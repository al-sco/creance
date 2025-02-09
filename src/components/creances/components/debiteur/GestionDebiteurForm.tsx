import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useDebiteurStore } from "../../stores/useDebiteurStore";
import { DebiteurState, TypeDebiteur, CategorieDebiteur } from "../../model/debiteur.model";
import "../../styles/creances.css";
import "../../styles/debiteur.css";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { ProgressSpinner } from "primereact/progressspinner";
import { AcDebiteurMoralSection } from "./SubSections/AcDebiteurMoralSection";
import { DomiciliationSection } from "./SubSections/DomiciliationSection";
import { PhysiqueSection } from "./SubSections/PhysiqueSection";

export function GestionDebiteurForm() {
  const { categories, types, loading, error, fetchCategories, fetchTypes, saveDebiteurComplet } = useDebiteurStore();

  const [formData, setFormData] = useState<DebiteurState>({
    categDebCode: '',
    propCode: '',
    garphysCode: '',
    typdebCode: '',
    debAdrpost: '',
    debCel: '',
    debEmail: '',
    debTelbur: '',
    debFax: '',
    debCodeCharg: '',
    debTeldom: '',
    debLocalisat: ''
  });

  const [selectedCategorie, setSelectedCategorie] = useState<CategorieDebiteur | null>(null);
  const [selectedType, setSelectedType] = useState<TypeDebiteur | null>(null);
  const [activeTab, setActiveTab] = useState<'physique' | 'domiciliation' | 'morale'>('physique');
  const [visible, setVisible] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState('');
  const [currentPhysique, setCurrentPhysique] = useState({});

  useEffect(() => {
    fetchCategories();
    fetchTypes();
  }, []);

  const handleCategorieSelect = (categorie: CategorieDebiteur) => {
    setSelectedCategorie(categorie);
    setFormData(prev => ({ ...prev, categDebCode: categorie.categDebCode }));
    setVisible(false);
  };

  const handleTypeChange = (type: TypeDebiteur) => {
    setSelectedType(type);
    setFormData(prev => ({ ...prev, typdebCode: type.typdebCode }));
    setActiveTab(type.typdebCode === 'P' ? 'physique' : 'morale');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const debiteurComplet: any = {
        debiteur: {
          ...formData,
          typdebCode: selectedType?.typdebCode,
          categDebCode: selectedCategorie?.categDebCode
        },
        type: selectedType?.typdebCode || ''
      };

      if (selectedType?.typdebCode === 'P') {
        debiteurComplet.physique = currentPhysique;  // Will be populated by PhysiqueSection state
      }

      if (selectedType?.typdebCode === 'M') {
        debiteurComplet.moral = {};  // Will be populated by AcDebiteurMoralSection state
      }

      if (activeTab === 'domiciliation') {
        debiteurComplet.domiciliation = {};  // Will be populated by DomiciliationSection state
      }

      await saveDebiteurComplet(debiteurComplet);
      // Réinitialiser le formulaire ou rediriger l'utilisateur
    } catch (err) {
      console.error('Erreur lors de la sauvegarde:', err);
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
      <button className="save-button" onClick={handleSave}>
        Enregistrer
      </button>
    </div>
  );
}