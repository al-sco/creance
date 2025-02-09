import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { useDebiteurStore } from '../../../stores/useDebiteurStore';
import { Dialog } from 'primereact/dialog';
import { DebiteurRepository } from '../../../repository/debiteur.repository';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../../../styles/debiteur_physique.css'; 


export function PhysiqueSection() {
  const { currentPhysique, updateCurrentPhysique } = useDebiteurStore();
  const [showCiviliteDialog, setShowCiviliteDialog] = useState(false);
  const [showQuartierDialog, setShowQuartierDialog] = useState(false);
  const [showStatutSalaireDialog, setShowStatutSalaireDialog] = useState(false);
  const [showNationaliteDialog, setShowNationaliteDialog] = useState(false);
  const [showProfessionDialog, setShowProfessionDialog] = useState(false);
  const [showFonctionDialog, setShowFonctionDialog] = useState(false);
  const [showEmployeurDialog, setShowEmployeurDialog] = useState(false);
  const [civiliteOptions, setCiviliteOptions] = useState<{ civCode: string; civLib: string }[]>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [selectedCivilite, setSelectedCivilite] = useState<{ civCode: string; civLib: string } | null>(null);
const [quartierFilter, setQuartierFilter] = useState('');
const [nationaliteFilter, setNationaliteFilter] = useState('');

  // Chargement des civilités depuis la base de données
  useEffect(() => {
    const fetchCivilites = async () => {
      try {
        const repository = new DebiteurRepository();
        const data = await repository.getCivilites();
        setCiviliteOptions(data);
      } catch (error) {
        console.error('Erreur lors du chargement des civilités', error);
      }
    };

    fetchCivilites();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateCurrentPhysique({ [name]: value });
  };

  const handleSelectCivilite = (selection: { civCode: string; civLib: string }) => {
    // Ne mettre à jour que les champs civCode et civLib
    updateCurrentPhysique({
      civCode: selection.civCode,
      civLib: selection.civLib
    });
    setSelectedCivilite(selection);
    setShowCiviliteDialog(false);
  };

  const handleDateChange = (value: Date | null, fieldName: string) => {
    updateCurrentPhysique({ [fieldName]: value });
  };


useEffect(() => {
  const fetchFonctions = async () => {
    try {
      const repository =new DebiteurRepository()
      const data= await repository.getFonctions()
      setFonctionOptions(data)
    } catch (error) {
      console.error('Erreur lors du chargement des fonctions', error)
    }
  }
  fetchFonctions()
}, [])

const handleSelectFonction = (selection: { fonctCode: string; fonctLib: string }) => {
  updateCurrentPhysique({
    fonctCode: selection.fonctCode,
    fonctLib: selection.fonctLib
  });
  setSelectedFonction(selection);
  setShowFonctionDialog(false);
};

const [quartierOptions, setQuartierOptions] = useState<{ quartCode: string; quartLib: string }[]>([]);
const [selectedQuartier, setSelectedQuartier] = useState<{ quartCode: string; quartLib: string } | null>(null);

const [nationaliteOptions, setNationaliteOptions] = useState<{ natCode: string; natLib: string }[]>([]);
const [selectedNationalite, setSelectedNationalite] = useState<{ natCode: string; natLib: string } | null>(null);

const [fonctionOptions, setFonctionOptions] = useState<{ fonctCode: string; fonctLib: string }[]>([]);
const [selectedFonction, setSelectedFonction] = useState<{ fonctCode: string; fonctLib: string } | null>(null);

const [professionOptions, setProfessionOptions] = useState<{ profesCode: string; profesLib: string }[]>([]);
const [selectedProfession, setSelectedProfession] = useState<{ profesCode: string; profesLib: string } | null>(null);

const [employeurOptions, setEmployeurOptions] = useState<{ empCode: string; empLib: string }[]>([]);
const [selectedEmployeur, setSelectedEmployeur] = useState<{ empCode: string; empLib: string } | null>(null);

const [statutSalaireOptions, setStatutSalaireOptions] = useState<{ statsalCode: string; statsalLib: string }[]>([]);
const [selectedStatutSalaire, setSelectedStatutSalaire] = useState<{ statsalCode: string; statsalLib: string } | null>(null);

useEffect(() => {
  const fetchNationalites = async () => {
    try {
      const repository = new DebiteurRepository();
      const data = await repository.getNationalites();
      setNationaliteOptions(data);
    } catch (error) {
      console.error('Erreur lors du chargement des nationalités', error);
    }
  };

  fetchNationalites();
}, []);

const handleSelectNationalite = (selection: { natCode: string; natLib: string }) => {
  updateCurrentPhysique({
    natCode: selection.natCode,
    natLib: selection.natLib
  });
  setSelectedNationalite(selection);
  setShowNationaliteDialog(false);
}

useEffect(() => {
  const fetchQuartiers = async () => {
    try {
      const repository = new DebiteurRepository();
      const data = await repository.getQuartiers();
      setQuartierOptions(data);
    } catch (error) {
      console.error('Erreur lors du chargement des quartiers', error);
    }
  };

  fetchQuartiers();
}, []);

// Fonction de sélection du quartier
const handleSelectQuartier = (selection: { quartCode: string; quartLib: string }) => {
  updateCurrentPhysique({
    quartCode: selection.quartCode,
    quartLib: selection.quartLib
  });
  setSelectedQuartier(selection);
  setShowQuartierDialog(false);
};

  const civiliteDialogFooter = (
    <div>
      <Button
        label="Annuler"
        icon="pi pi-times"
        onClick={() => setShowCiviliteDialog(false)}
        className="p-button-text"
      />
    </div>
  );
  

  const handleSelectStatutSalaire = (selection: { statsalCode: string; statsalLib: string }) => {
    updateCurrentPhysique({
      statsalCode: selection.statsalCode,
      statsalLib: selection.statsalLib
    });
    setSelectedStatutSalaire(selection);
    setShowStatutSalaireDialog(false);
  };

  

  return (
    <div className="sub-screen">
      <div className="physique-grid">
        <div className="physique-column">
        <div className="physique-form">
          <div className="form-row decalCivilite">
            <div className="form-group">
              <label>Civilité :</label>
              <div className="input-group">
                <InputText
                  name="civCode"
                  value={currentPhysique?.civCode || ''}
                  onChange={handleInputChange}
                  placeholder="Code"
                  className="physique-civilite-code"
                />
                <InputText
                  name="civLib"
                  value={currentPhysique?.civLib || ''}
                  onChange={handleInputChange}
                  placeholder="Libellé"
                  className="physique-civilite-libelle"
                />
                <Button
                  icon="pi pi-search"
                  className="p-button-secondary select-button"
                  aria-label="Sélectionner"
                  onClick={() => setShowCiviliteDialog(true)}
                />
              </div>
            </div>
          </div>
          
          {/* Nom */}
          <div className="form-row decalNom">
            <div className="form-group">
              <label>Nom :</label>
              <InputText
                name="debNom"
                value={currentPhysique?.debNom || ''}
                onChange={handleInputChange}
                className="debiteur-input nom"
              />
            </div>
          </div>
  
          {/* Prénoms */}
          <div className="form-row">
            <div className="form-group">
              <label>Prénoms :</label>
              <InputText
                name="debPren"
                value={currentPhysique?.debPren || ''}
                onChange={handleInputChange}
                className="debiteur-input nom"
              />
            </div>
          </div>
  
          {/* Date de naissance */}
          <div className="ps-form-row">
  <div className="ps-form-group">
    <label>Date de naissance :</label>
    <input
      type="date"
      name="debDatnaiss"
      value={
        currentPhysique?.debDatnaiss
          ? new Date(currentPhysique.debDatnaiss).toISOString().substr(0, 10)
          : ''
      }
      onChange={(e) =>
        handleDateChange(new Date(e.target.value), 'debDatnaiss')
      }
      className="ps-input date"
    />
  </div>
</div>
  
          {/* Lieu de naissance */}
          <div className="ps-form-row">
            <div className="ps-form-group">
              <label>Lieu de naissance :</label>
              <InputText
                name="debLieunaiss"
                value={currentPhysique?.debLieunaiss || ''}
                onChange={handleInputChange}
                className="ps-input lieu"
              />
            </div>
          </div>
  
          {/* Quartier */}
          <div className="form-row">
            <div className="form-group">
            <label>Quartier :</label>
<div className="input-group">
  <InputText
    name="quartCode"
    value={currentPhysique?.quartCode || ''}
    onChange={handleInputChange}
    placeholder="Code"
    className="physique-civilite-code"
  />
  <InputText
    name="quartLib"
    value={currentPhysique?.quartLib || ''}
    onChange={handleInputChange}
    placeholder="Libellé"
    className="physique-civilite-libelle"
  />
  <Button
    icon="pi pi-search"
    className="p-button-secondary select-button"
    aria-label="Sélectionner"
    onClick={() => setShowQuartierDialog(true)}
  />
              </div>
            </div>
          </div>
  
          {/* Nationalité */}
          <div className="form-row">
            <div className="form-group">
            <label>Nationalité :</label>
<div className="input-group">
  <InputText
    name="natCode"
    value={currentPhysique?.natCode || ''}
    onChange={handleInputChange}
    placeholder="Code"
    className="physique-civilite-code"
  />
  <InputText
    name="natLib"
    value={currentPhysique?.natLib || ''}
    onChange={handleInputChange}
    placeholder="Libellé"
    className="physique-civilite-libelle"
  />
  <Button
    icon="pi pi-search"
    className="p-button-secondary select-button"
    aria-label="Sélectionner"
    onClick={() => setShowNationaliteDialog(true)}
  />
              </div>
            </div>
          </div>
  
          {/* Fonction */}
          <div className="form-row">
            <div className="form-group">
            <label>Fonction :</label>
<div className="input-group">
  <InputText
    name="fonctCode"
    value={currentPhysique?.fonctCode || ''}
    onChange={handleInputChange}
    placeholder="Code"
    className="physique-civilite-code"
  />
  <InputText
    name="fonctLib"
    value={currentPhysique?.fonctLib || ''}
    onChange={handleInputChange}
    placeholder="Libellé"
    className="physique-civilite-libelle"
  />
  <Button
    icon="pi pi-search"
    className="p-button-secondary select-button"
    aria-label="Sélectionner"
    onClick={() => setShowFonctionDialog(true)}
  />
              </div>
            </div>
          </div>
  
          {/* Profession */}
          <div className="form-row">
            <div className="form-group">
            <label>Profession :</label>
<div className="input-group">
  <InputText
    name="profesCode"
    value={currentPhysique?.profesCode || ''}
    onChange={handleInputChange}
    placeholder="Code"
    className="physique-civilite-code"
  />
  <InputText
    name="profesLib"
    value={currentPhysique?.profesLib || ''}
    onChange={handleInputChange}
    placeholder="Libellé"
    className="physique-civilite-libelle"
  />
  <Button
    icon="pi pi-search"
    className="p-button-secondary select-button"
    aria-label="Sélectionner"
    onClick={() => setShowProfessionDialog(true)}
  />
              </div>
            </div>
          </div>
  
          {/* Employeur */}
          <div className="form-row">
            <div className="form-group">
            <label>Employeur :</label>
<div className="input-group">
  <InputText
    name="empCode"
    value={currentPhysique?.empCode || ''}
    onChange={handleInputChange}
    placeholder="Code"
    className="physique-civilite-code"
  />
  <InputText
    name="empLib"
    value={currentPhysique?.empLib || ''}
    onChange={handleInputChange}
    placeholder="Libellé"
    className="physique-civilite-libelle"
  />
  <Button
    icon="pi pi-search"
    className="p-button-secondary select-button"
    aria-label="Sélectionner"
    onClick={() => setShowEmployeurDialog(true)}
  />
              </div>
            </div>
          </div>
  
          {/* Statut salarié */}
          <div className="form-row">
            <div className="form-group">
            <label>Statut Salaire :</label>
<div className="input-group">
  <InputText
    name="statsalCode"
    value={currentPhysique?.statsalCode || ''}
    onChange={handleInputChange}
    placeholder="Code"
    className="physique-civilite-code"
  />
  <InputText
    name="statsalLib"
    value={currentPhysique?.statsalLib || ''}
    onChange={handleInputChange}
    placeholder="Libellé"
    className="physique-civilite-libelle"
  />
  <Button
    icon="pi pi-search"
    className="p-button-secondary select-button"
    aria-label="Sélectionner"
    onClick={() => setShowStatutSalaireDialog(true)}
  />
</div>
            </div>
          </div>
  
          {/* Matricule */}
          <div className="form-row">
            <div className="form-group">
              <label>Matricule :</label>
              <InputText
                name="debMatric"
                value={currentPhysique?.debMatric || ''}
                onChange={handleInputChange}
                className="debiteur-input nom"
              />
            </div>
          </div>
  
          {/* Sexe */}
          <div className="form-row">
            <div className="form-group">
              <label>Sexe :</label>
              <Dropdown
                name="debSexe"
                value={currentPhysique?.debSexe || ''}
                onChange={(e) => updateCurrentPhysique({ debSexe: e.value })}
                options={[
                  { label: 'H', value: 'H' },
                  { label: 'F', value: 'F' }
                ]}
                placeholder="Sélectionner"
              />
            </div>
          </div>
  
          {/* Date de décès */}
          <div className="form-row">
            <div className="form-group">
            <label>Date de décès :</label>
<input
  type="date"
  name="debDatdec"
  value={
    currentPhysique?.debDatdec
      ? new Date(currentPhysique.debDatdec).toISOString().substr(0, 10)
      : ''
  }
  onChange={(e) => handleDateChange(new Date(e.target.value), 'debDatdec')}
  className="ps-input date"
/>
            </div>
          </div>
  
          {/* N° pièce ident. */}
          <div className="form-row">
            <div className="form-group">
              <label>N° pièce ident. :</label>
              <Dropdown
                name="debNatpident"
                value={currentPhysique?.debNatpident || ''}
                onChange={(e) => updateCurrentPhysique({ debNatpident: e.value })}
                options={[
                  { label: 'CNI', value: 'CNI' },
                  { label: 'PASSEPORT', value: 'PASSEPORT' }
                ]}
                placeholder="Sélectionner"
              />
            </div>
          </div>
  
          {/* Date établis. */}
          <div className="form-row">
            <div className="form-group">
            <label>Date établis. :</label>
<input
  type="date"
  name="debDatetpident"
  value={
    currentPhysique?.debDatetpident
      ? new Date(currentPhysique.debDatetpident).toISOString().substr(0, 10)
      : ''
  }
  onChange={(e) => handleDateChange(new Date(e.target.value), 'debDatetpident')}
  className="ps-input date"
/>
            </div>
          </div>
  
          {/* Lieu établis. */}
          <div className="form-row">
            <div className="form-group">
              <label>Lieu établis. :</label>
              <InputText
                name="debLieuetpident"
                value={currentPhysique?.debLieuetpident || ''}
                onChange={handleInputChange}
                className="debiteur-input lieuEtabli"
              />
            </div>
          </div>
        </div>
        
    </div>

<div className="decalageGeneral" >
    <div className="decalage">
        {/* Deuxième colonne : de Situation matrimoniale jusqu'à la fin */}
        <div className="physique-column">
          {/* Situation matrimoniale */}
          <div className="ps-form-row decalSituat">
            <div className="ps-form-group">
              <label>Situation Matrimoniale :</label>
              <Dropdown
                name="debSitmatri"
                value={currentPhysique?.debSitmatri || ''}
                onChange={(e) => updateCurrentPhysique({ debSitmatri: e.value })}
                options={[
                  { label: 'Célibataire', value: 'C' },
                  { label: 'Marié', value: 'M' }
                ]}
                placeholder="Sélectionner"
              />
            </div>
          </div>
  
          {/* Nombre d'enfants */}
          <div className="ps-form-row decalNbEnf">
            <div className="ps-form-group">
              <label>Nombre d'enfants :</label>
              <InputText
                name="debNbrEnf"
                value={currentPhysique?.debNbrEnf || ''}
                onChange={handleInputChange}
                className="debiteur-input nom"
              />
            </div>
          </div>
  
          {/* Nom Conjoint */}
          <div className="ps-form-row decalNmConj">
            <div className="ps-form-group">
              <label>Nom Conjoint :</label>
              <InputText
                name="debCjNom"
                value={currentPhysique?.debCjNom || ''}
                onChange={handleInputChange}
                className="debiteur-input nom"
              />
            </div>
          </div>
  
          {/* Prénoms Conjoint */}
          <div className="ps-form-row decalNbEnf">
            <div className="ps-form-group">
              <label>Prénoms Conjoint :</label>
              <InputText
                name="debCjPren"
                value={currentPhysique?.debCjPren || ''}
                onChange={handleInputChange}
                className="debiteur-input nom"
              />
            </div>
          </div>
  
          {/* Date naiss. Conjoint */}
          <div className="ps-form-row decalSituat">
            <div className="ps-form-group">
            <label>Date naiss. Conjoint :</label>
<input
  type="date"
  name="debCjDatnaiss"
  value={
    currentPhysique?.debCjDatnaiss
      ? new Date(currentPhysique.debCjDatnaiss).toISOString().substr(0, 10)
      : ''
  }
  onChange={(e) => handleDateChange(new Date(e.target.value), 'debCjDatnaiss')}
  className="ps-input date"
/>
            </div>
          </div>
  
          {/* Adresse Conjoint */}
          <div className="ps-form-row decalNbEnf">
            <div className="ps-form-group">
              <label>Adresse Conjoint :</label>
              <InputText
                name="debCjAdr"
                value={currentPhysique?.debCjAdr || ''}
                onChange={handleInputChange}
                className="debiteur-input nom"
              />
            </div>
          </div>
  
          {/* Tel Conjoint */}
          <div className="ps-form-row decalNbEnf">
            <div className="form-group">
              <label>Tel Conjoint :</label>
              <InputText
                name="debCjTel"
                value={currentPhysique?.debCjTel || ''}
                onChange={handleInputChange}
                className="debiteur-input nom"
              />
            </div>
          </div>
  
          {/* N° pièce ident. Conjoint */}
          <div className="ps-form-row decalPieceConj">
            <div className="ps-form-group test">
              <label>N° pièce ident. Conjoint :</label>
              <InputText
                name="debCjNumpident"
                value={currentPhysique?.debCjNumpident || ''}
                onChange={handleInputChange}
                className="debiteur-input piece-conjoint"
              />
            </div>
          </div>
  
          {/* Nom du père */}
          <div className="ps-form-row decalNbEnf ">
            <div className="form-group">
              <label>Nom du père :</label>
              <InputText
                name="debNpere"
                value={currentPhysique?.debNpere || ''}
                onChange={handleInputChange}
                className="debiteur-input nom"
              />
            </div>
          </div>
  
          {/* Prénoms du père */}
          <div className="ps-form-row decalNbEnf">
            <div className="ps-form-group">
              <label>Prénoms du père :</label>
              <InputText
                name="debPrpere"
                value={currentPhysique?.debPrpere || ''}
                onChange={handleInputChange}
                className="debiteur-input prenomPERE"
              />
            </div>
          </div>
  
          {/* Nom mère */}
          <div className="ps-form-row decalNbEnf">
            <div className="form-group">
              <label>Nom mère :</label>
              <InputText
                name="debNmere"
                value={currentPhysique?.debNmere || ''}
                onChange={handleInputChange}
                className="debiteur-input nom"
              />
            </div>
          </div>
  
          {/* Prénoms de la mère */}
          <div className="ps-form-row decalSituat">
            <div className="ps-form-group">
              <label>Prénoms de la mère :</label>
              <InputText
                name="debPrmere"
                value={currentPhysique?.debPrmere || ''}
                onChange={handleInputChange}
                className="debiteur-input nom"
              />
            </div>
          </div>
  
          {/* Rue */}
          <div className="ps-form-row decalNbEnf">
            <div className="form-group">
              <label>Rue :</label>
              <InputText
                name="debRue"
                value={currentPhysique?.debRue || ''}
                onChange={handleInputChange}
                className="debiteur-input nom"
              />
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
  
      {/* Dialog de Civilité */}
      <Dialog
        header="Sélectionnez la Civilité"
        visible={showCiviliteDialog}
        style={{ width: '30vw' }}
        footer={civiliteDialogFooter}
        onHide={() => setShowCiviliteDialog(false)}
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
          value={civiliteOptions}
          globalFilter={globalFilter}
          emptyMessage="Aucune civilité trouvée"
          selectionMode="single"
          selection={selectedCivilite}
          onSelectionChange={(e) =>
            handleSelectCivilite(e.value as { civCode: string; civLib: string })
          }
        >
          <Column field="civCode" header="Code" />
          <Column field="civLib" header="Libellé" />
        </DataTable>
      </Dialog>

      <Dialog
  header="Sélectionnez le Quartier"
  visible={showQuartierDialog}
  style={{ width: '30vw' }}
  footer={
    <div>
      <Button
        label="Annuler"
        icon="pi pi-times"
        onClick={() => {
          setShowQuartierDialog(false);
          setQuartierFilter(''); // Réinitialisation du filtre
        }}
        className="p-button-text"
      />
    </div>
  }
  onHide={() => {
    setShowQuartierDialog(false);
    setQuartierFilter('');
  }}
>
  <div className="p-input-icon-left mb-3">
    <i className="pi pi-search" />
    <InputText
      value={quartierFilter}
      onChange={(e) => setQuartierFilter(e.target.value)}
      placeholder="Rechercher..."
      className="w-full"
    />
  </div>
  <DataTable
    value={quartierOptions}
    globalFilter={quartierFilter}
    emptyMessage="Aucun quartier trouvé"
    selectionMode="single"
    selection={selectedQuartier}
    onSelectionChange={(e) =>
      handleSelectQuartier(e.value as { quartCode: string; quartLib: string })
    }
  >
    <Column field="quartCode" header="Code" />
    <Column field="quartLib" header="Libellé" />
  </DataTable>
</Dialog>



<Dialog
  header="Sélectionnez la Nationalité"
  visible={showNationaliteDialog}
  style={{ width: '30vw' }}
  footer={
    <div>
      <Button
        label="Annuler"
        icon="pi pi-times"
        onClick={() => {
           setShowNationaliteDialog(false)
           setNationaliteFilter('');
          }}
        className="p-button-text"
      />
    </div>
  }
  onHide={() => {
    setShowNationaliteDialog(false)
    setNationaliteFilter('');
  }}
>
  <div className="p-input-icon-left mb-3">
    <i className="pi pi-search" />
    <InputText
      value={nationaliteFilter}
      onChange={(e) => setNationaliteFilter(e.target.value)}
      placeholder="Rechercher..."
      className="w-full"
    />
  </div>
  <DataTable
    value={nationaliteOptions}
    globalFilter={nationaliteFilter}
    emptyMessage="Aucune nationalité trouvée"
    selectionMode="single"
    selection={selectedNationalite}
    onSelectionChange={(e) =>
      handleSelectNationalite(e.value as { natCode: string; natLib: string })
    }
  >
    <Column field="natCode" header="Code" />
    <Column field="natLib" header="Libellé" />
  </DataTable>
</Dialog>
    </div>



  );
}