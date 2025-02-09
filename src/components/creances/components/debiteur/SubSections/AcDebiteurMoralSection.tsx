import { useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { useDebiteurStore } from '../../../stores/useDebiteurStore';
import { DebiteurMoral } from '../../../model/debiteur.model';

export function AcDebiteurMoralSection() {
  const { currentMoral, updateCurrentMoral } = useDebiteurStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateCurrentMoral({ [name]: value });
  };

  const handleDateChange = (value: Date | null, fieldName: string) => {
    updateCurrentMoral({ [fieldName]: value });
  };

  const handleNumberChange = (value: number | null, fieldName: string) => {
    updateCurrentMoral({ [fieldName]: value });
  };

  return (
    <div className="sub-screen">
      <div className="form-grid">
        <div className="form-row">
          <div className="form-group">
            <label>Raison Sociale :</label>
            <InputText
              name="debRaisSociale"
              value={currentMoral?.debRaisSociale || ''}
              onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
          <div className="form-group">
            <label>Registre de Commerce :</label>
            <InputText
              name="debRegistcom"
              value={currentMoral?.debRegistcom || ''}
              onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date de création :</label>
            <Calendar
              value={currentMoral?.debDatcreat ? new Date(currentMoral.debDatcreat) : null}
              onChange={(e) => handleDateChange(e.value as Date, 'debDatcreat')}
              dateFormat="dd/mm/yy"
            />
          </div>
          <div className="form-group">
            <label>Capital Social :</label>
            <InputNumber
              name="debCapitsocial"
              value={currentMoral?.debCapitsocial || null}
              onValueChange={(e) => handleNumberChange(e.value, 'debCapitsocial')}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Forme Juridique :</label>
            <InputText
              name="debFormJurid"
              value={currentMoral?.debFormJurid || ''}
              onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
          <div className="form-group">
            <label>Domaine d'Activité :</label>
            <InputText
              name="debDomActiv"
              value={currentMoral?.debDomActiv || ''}
              onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Siège Social :</label>
            <InputText
              name="debSiegSocial"
              value={currentMoral?.debSiegSocial || ''}
              onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
          <div className="form-group">
            <label>Nom du Gérant :</label>
            <InputText
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