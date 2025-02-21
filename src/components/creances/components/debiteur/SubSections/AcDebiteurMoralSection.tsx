import { useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { useDebiteurStore } from '../../../stores/useDebiteurStore';
import { AcDebiteurMoral } from '../../../model/debiteur.model';

export function AcDebiteurMoralSection() {
  const { currentMoral, updateCurrentMoral } = useDebiteurStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('[MoralSection] Input change:', { name, value });
    updateCurrentMoral({ [name]: value });
  };

  const handleDateChange = (value: Date | null, fieldName: string) => {
    console.log('[MoralSection] Date change:', { fieldName, value });
    updateCurrentMoral({ [fieldName]: value });
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
      <div className="form-grid">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="debRaisSociale">Raison Sociale* :</label>
            <InputText
              id="debRaisSociale"
              name="debRaisSociale"
              value={currentMoral?.debRaisSociale || ''}
              onChange={handleInputChange}
              className="p-inputtext"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="debRegistcom">Registre de Commerce* :</label>
            <InputText
              id="debRegistcom"
              name="debRegistcom"
              value={currentMoral?.debRegistcom || ''}
              onChange={handleInputChange}
              className="p-inputtext"
              required
            />
          </div>
        </div>

        <div className="form-row">
          
          <div className="form-group">
            <label htmlFor="debCapitsocial">Capital Social :</label>
            <InputNumber
              id="debCapitsocial"
              value={currentMoral?.debCapitsocial || null}
              onValueChange={(e) => handleNumberChange(e.value, 'debCapitsocial')}
              mode="decimal"
              minFractionDigits={0}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="debFormJurid">Forme Juridique :</label>
            <InputText
              id="debFormJurid"
              name="debFormJurid"
              value={currentMoral?.debFormJurid || ''}
              onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
          <div className="form-group">
            <label htmlFor="debDomActiv">Domaine d'Activité :</label>
            <InputText
              id="debDomActiv"
              name="debDomActiv"
              value={currentMoral?.debDomActiv || ''}
              onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="debSiegSocial">Siège Social :</label>
            <InputText
              id="debSiegSocial"
              name="debSiegSocial"
              value={currentMoral?.debSiegSocial || ''}
              onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
          <div className="form-group">
            <label htmlFor="debNomGerant">Nom du Gérant :</label>
            <InputText
              id="debNomGerant"
              name="debNomGerant"
              value={currentMoral?.debNomGerant || ''}
              onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
        </div>
      </div>
    </div>
  );
}