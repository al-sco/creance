import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDomiciliationStore } from '../../../stores/useDomiciliation';
import '../../../styles/domiciliation.css';
import { BanqueAgence, TypeDomiciliation } from '../../../model/debiteur.model';

interface DomiciliationLine {
    domCode: string;      // On garde uniquement les champs nécessaires
    typdomCode: string;
    typdomLib: string;
    domLib: string;
    bqagCode: string;
    bqagLib: string;
    bqLib: string;
}

export function DomiciliationSection() {
    // États pour les dialogues
    const [showTypeDomDialog, setShowTypeDomDialog] = useState(false);
    const [showBanqueAgenceDialog, setShowBanqueAgenceDialog] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const [currentDomCode, setCurrentDomCode] = useState<string>('');
    const [selectedTypeDomiciliation, setSelectedTypeDomiciliation] = useState<TypeDomiciliation | null>(null);
const [selectedBanqueAgence, setSelectedBanqueAgence] = useState<BanqueAgence | null>(null);
const [typeDomFilter, setTypeDomFilter] = useState('');
const [banqueAgenceFilter, setBanqueAgenceFilter] = useState('');


    // États du store
    const {
        typeDomiciliations,
        banqueAgences,
        fetchTypeDomiciliations,
        fetchBanqueAgences
    } = useDomiciliationStore();


     // Suppression d'une ligne de domiciliation
     const removeLine = (index: number) => {
      if (domiciliations.length > 1) { // Garder au moins une ligne
          const updatedDomiciliations = domiciliations.filter((_, idx) => idx !== index);
          setDomiciliations(updatedDomiciliations);
      }
  };
  const addNewLine = () => {
    setDomiciliations([
        ...domiciliations,
        {
            domCode: '',
            typdomCode: '',
            typdomLib: '',
            domLib: '',
            bqagCode: '',
            bqagLib: '',
            bqLib: ''
        }
    ]);
};

    // État local pour le formulaire avec la structure existante
    const [domiciliations, setDomiciliations] = useState<DomiciliationLine[]>([{
        domCode: '',
        typdomCode: '',
        typdomLib: '',
        domLib: '',
        bqagCode: '',
        bqagLib: '',
        bqLib: ''
    }]);

    // Chargement initial des données
    useEffect(() => {
        fetchTypeDomiciliations();
        fetchBanqueAgences();
    }, []);

    // Gestionnaires d'événements
    const handleInputChange = (index: number, field: keyof DomiciliationLine, value: string) => {
        const updatedDomiciliations = [...domiciliations];
        updatedDomiciliations[index] = {
            ...updatedDomiciliations[index],
            [field]: value
        };
        setDomiciliations(updatedDomiciliations);
    };

    const handleSelectType = (selection: TypeDomiciliation) => {
      const index = domiciliations.findIndex(d => d.domCode === currentDomCode);
      if (index !== -1) {
          handleInputChange(index, 'typdomCode', selection.typdomCode);
          handleInputChange(index, 'typdomLib', selection.typdomLib);
      }
      setSelectedTypeDomiciliation(selection);
      setTypeDomFilter('');
      setShowTypeDomDialog(false);
  };

  const validateInputs = (dom: DomiciliationLine) => {
    return dom.domCode && dom.typdomCode && dom.bqagCode && dom.domLib;
};

const handleSelectBanque = (selection: BanqueAgence) => {
  const index = domiciliations.findIndex(d => d.domCode === currentDomCode);
  if (index !== -1) {
      handleInputChange(index, 'bqagCode', selection.bqagCode);
      handleInputChange(index, 'bqagLib', selection.bqagLib);
      handleInputChange(index, 'bqLib', selection.bqCode.bqLib);
  }
  setSelectedBanqueAgence(selection);
  setBanqueAgenceFilter('');
  setShowBanqueAgenceDialog(false);
};

    return (
        <div className="domiciliation-screen">
            {domiciliations.map((dom, index) => (
                <div key={index} className="domiciliation-line">
                    <div className="domiciliation-group">
                        <div className="input-row">
                            <label>Type :</label>
                            <InputText 
                                className="dom-input" 
                                value={dom.typdomCode}
                                onChange={(e) => handleInputChange(index, 'typdomCode', e.target.value)}
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
                            />
                            <label>Libellé Domicile :</label>
                            <InputText 
                                className="dom-inputs"
                                value={dom.domLib}
                                onChange={(e) => handleInputChange(index, 'domLib', e.target.value)}
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
                                    setCurrentDomCode(dom.domCode);
                                    setShowBanqueAgenceDialog(true);
                                }}
                            />
                        </div>
                    </div>

                    {/* Existing buttons structure */}
                    {index !== 0 && (
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

            <Button 
                label="Ajouter" 
                icon="pi pi-plus" 
                className="dom-add-button"
                onClick={addNewLine}
            />

            {/* Dialogs */}
            {/* Dialog Type Domiciliation */}
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

{/* Dialog Banque Agence */}
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
        </div>
    );
}