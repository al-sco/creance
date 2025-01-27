// components/debiteur/SubSections/TypeSection.tsx
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { useDebiteurStore } from '../../../stores/useDebiteurStore'; // Chemin corrigé

export function TypeSection() {
  const { currentDebiteur, setDebiteur } = useDebiteurStore(); // Nom corrigé

  // Options pour le type
  const typeOptions = [
    { label: 'Adresse Postale', value: 'Adr. Postale' },
    { label: 'Email', value: 'Email' }
  ];

  return (
    <div className="sub-screen">
      <h3 className="section-title">Type</h3>

      <div className="form-grid">
        <div className="form-row">
          <div className="form-group">
            <label>Type de contact :</label>
            <Dropdown
              options={typeOptions}
              value={currentDebiteur?.type || ''}
              onChange={(e) => setDebiteur({ 
                ...currentDebiteur,
                type: e.value 
              })} // Parenthèse fermante ajoutée
              placeholder="Sélectionner"
              className="dropdown"
            />
          </div>
        </div>

        {/* Reste du code */}
      </div>
    </div>
  );
}