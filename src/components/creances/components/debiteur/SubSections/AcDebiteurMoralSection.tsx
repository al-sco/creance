import { useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { useDebiteurStore } from '../../../stores/useDebiteurStore';
import '../../../styles/debiteurMoral.css'; 




export function AcDebiteurMoralSection() {
  const { currentMoral, updateCurrentMoral } = useDebiteurStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('[MoralSection] Input change:', { name, value });
    updateCurrentMoral({ [name]: value });
  };

  const handleNumberChange = (value: number | null, fieldName: string) => {
    console.log('[MoralSection] Number change:', { fieldName, value });
    updateCurrentMoral({ [fieldName]: value });
  };

  // Log initial state
  useEffect(() => {
    console.log('[MoralSection] Initial moral data:', currentMoral);
  }, []);

  return (
    <div className="sub-screen">
      <div className="moral-form-container">
        {/* Raison Sociale */}
        <div className="moral-form-field">
          <label htmlFor="debRaisSociale">Raison Sociale:</label>
          <InputText
            id="debRaisSociale"
            name="debRaisSociale"
            value={currentMoral?.debRaisSociale || ''}
            onChange={handleInputChange}
            className="moral-input"
            required
          />
        </div>

        {/* N° Registre Commerce */}
        <div className="moral-form-field">
          <label htmlFor="debRegistcom">N° Registre Commerce:</label>
          <InputText
            id="debRegistcom"
            name="debRegistcom"
            value={currentMoral?.debRegistcom || ''}
            onChange={handleInputChange}
            className="moral-input"
            required
          />
        </div>

        {/* Capital Social */}
        <div className="moral-form-field">
          <label htmlFor="debCapitsocial">Capital Social:</label>
          <InputNumber
            id="debCapitsocial"
            value={currentMoral?.debCapitsocial || null}
            onValueChange={(e) => handleNumberChange(e.value ?? null, 'debCapitsocial')}
            mode="decimal"
            minFractionDigits={0}
            className="moral-input"
          />
        </div>

        {/* Forme Juridique */}
        <div className="moral-form-field">
          <label htmlFor="debFormJurid">Forme Juridique:</label>
          <InputText
            id="debFormJurid"
            name="debFormJurid"
            value={currentMoral?.debFormJurid || ''}
            onChange={handleInputChange}
            className="moral-input"
          />
        </div>

        {/* Domaine d'Activité */}
        <div className="moral-form-field">
          <label htmlFor="debDomActiv">Domaine d'Activité:</label>
          <InputText
            id="debDomActiv"
            name="debDomActiv"
            value={currentMoral?.debDomActiv || ''}
            onChange={handleInputChange}
            className="moral-input"
          />
        </div>

        {/* Siège Social */}
        <div className="moral-form-field">
          <label htmlFor="debSiegSocial">Siège Social:</label>
          <InputText
            id="debSiegSocial"
            name="debSiegSocial"
            value={currentMoral?.debSiegSocial || ''}
            onChange={handleInputChange}
            className="moral-input"
          />
        </div>

        {/* Nom du Gérant */}
        <div className="moral-form-field">
          <label htmlFor="debNomGerant">Nom du Gérant:</label>
          <InputText
            id="debNomGerant"
            name="debNomGerant"
            value={currentMoral?.debNomGerant || ''}
            onChange={handleInputChange}
            className="moral-input"
          />
        </div>
      </div>
    </div>
  );
}