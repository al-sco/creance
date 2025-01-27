import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { PhysiqueSection } from "./SubSections/PhysiqueSection";
import { DomiciliationSection } from "./SubSections/DomiciliationSection";
import { SensibiliteSection } from "./SubSections/SensibiliteSection";
import "../../styles/creances.css";

export function GestionDebiteurForm() {
  const [type, setType] = useState<{ code: string; libelle: string } | null>(null);
  const [garPhys, setGarPhys] = useState<{ code: string; libelle: string }>({ code: '', libelle: '' });
  const [activeTab, setActiveTab] = useState<'physique' | 'domiciliation' | 'Morale'>('physique');

  const typeOptions = [
    { code: 'P', libelle: 'Physique' },
    { code: 'M', libelle: 'Morale' }
  ];

  useEffect(() => {
    if (type?.code === 'P') setActiveTab('physique');
    if (type?.code === 'M') setActiveTab('Morale');
  }, [type]);

  const handleGarPhysSelection = () => {
    console.log('Sélectionner Gar.Phys');
  };

  return (
    <div className="creance-container">
      <div className="main-content-box">
        <h1 className="main-title">Débiteur</h1>

        <div className="form-row">
          <div className="form-group">
            <label>Catégorie :</label>
            <div className="input-group">
              <InputText
                value={garPhys.code}
                placeholder="Code"
                className="code"
              />
              <InputText
                value={garPhys.libelle}
                placeholder="Libellé"
                className="libelle"
              />
              <Button
                icon="pi pi-search"
                className="p-button-secondary"
                onClick={handleGarPhysSelection}
              />
            </div>
          </div>
        </div>

        {/* Section Type */}
        <div className="form-row">
          <div className="form-group">
            <label>Type:</label>
            <div className="input-group">
              <Dropdown
                value={type}
                options={typeOptions}
                optionLabel="libelle"
                placeholder="Sélectionner"
                onChange={(e) => setType(e.value)}
                className="dropdown"
              />
              <InputText
                value={type?.libelle || ''}
                placeholder="Libellé"
                className="libelle"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Propriétaire:</label>
            <div className="input-group">
              <InputText
                value={garPhys.code}
                placeholder="Code"
                className="code"
              />
              <InputText
                value={garPhys.libelle}
                placeholder="Libellé"
                className="libelle"
              />
              <Button
                icon="pi pi-search"
                className="p-button-secondary"
                onClick={handleGarPhysSelection}
              />
            </div>
          </div>
        </div>

        {/* Section Gar.Phys */}
        <div className="form-row">
          <div className="form-group">
            <label>Gar.Phys :</label>
            <div className="input-group">
              <InputText
                value={garPhys.code}
                placeholder="Code"
                className="code"
              />
              <InputText
                value={garPhys.libelle}
                placeholder="Libellé"
                className="libelle"
              />
              <Button
                icon="pi pi-search"
                className="p-button-secondary"
                onClick={handleGarPhysSelection}
              />
            </div>
          </div>
        </div>

        {/* Section Coordonnées */}
       {/* Section Coordonnées */}
<div className="form-grid">
  <div className="form-row">
    <div className="form-group">
      <label>Cel :</label>
      <InputText placeholder="Libellé" className="libelle" />
    </div>
    <div className="form-group">
      <label>Tél :</label>
      <InputText placeholder="Libellé" className="libelle" />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Fax :</label>
      <InputText placeholder="Libellé" className="libelle" />
    </div>
    <div className="form-group">
      <label>Adresse Postale :</label>
      <InputText placeholder="Libellé" className="libelle" />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Email :</label>
      <InputText placeholder="Libellé" className="libelle" />
    </div>
  </div>
</div>

        {/* Sous-menus conditionnels */}
        {type && (
          <>
            <div className="main-sub-separator"></div>
            <div className="sub-screen-container">
              <div className="custom-tabs">
                <div className="tab-header">
                  {type.code === 'P' && (
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
                  {type.code === 'M' && (
                    <button 
                      className={`tab-btn ${activeTab === 'Morale' ? 'active' : ''}`}
                      onClick={() => setActiveTab('Morale')}
                    >
                      Morale
                    </button>
                  )}
                </div>

                {/* Contenu des sous-menus */}
                {activeTab === 'physique' && <PhysiqueSection />}
                {activeTab === 'domiciliation' && <DomiciliationSection />}
                {activeTab === 'Morale' && <SensibiliteSection />}
              </div>
            </div>
          </>
        )}

        {/* Bouton Enregistrer */}
        {type && (
          <button className="save-button">Enregistrer</button>
        )}
      </div>
    </div>
  );
}