import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { DebiteurMoral } from '../../../model/debiteur.model';

export function AcDebiteurMoralSection() {
  const [debiteurMoral, setDebiteurMoral] = useState<DebiteurMoral>({
    debRaisSociale: '',
    debRegistcom: '',
    debDatcreat: null,
    debCapitsocial: null,
    debFormJurid: '',
    debDomActiv: '',
    debSiegSocial: '',
    debNomGerant: '',
    
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDebiteurMoral(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="sub-screen">
      <div className="form-grid">
        <div className="form-row">
          <div className="form-group">
            <label>Registre de Commerce :</label>
            <InputText
              name="debRegistcom"
              value={debiteurMoral.debRegistcom}
              onChange={handleInputChange}
              className="text"
            />
          </div>

          <div className="form-group">
            <label>Raison Sociale :</label>
            <InputText
              name="debRaisSociale"
              value={debiteurMoral.debRaisSociale}
              onChange={handleInputChange}
              className="text"
            />
          </div>

          <div className="form-group">
            <label>Capital Social :</label>
            <InputNumber
              name="debCapitsocial"
              value={debiteurMoral.debCapitsocial}
              onChange={(e) => setDebiteurMoral(prev => ({
                ...prev,
                debCapitsocial: e.value
              }))}
              mode="currency"
              currency="XOF"
              className="text"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Siège Social :</label>
            <InputText
              name="debSiegSocial"
              value={debiteurMoral.debSiegSocial}
              onChange={handleInputChange}
              className="text"
            />
          </div>

          <div className="form-group">
            <label>Domaine d'activité :</label>
            <InputText
              name="debDomActiv"
              value={debiteurMoral.debDomActiv}
              onChange={handleInputChange}
              className="text"
            />
          </div>

          <div className="form-group">
            <label>Date création :</label>
            <Calendar
              name="debDatcreat"
              value={debiteurMoral.debDatcreat}
              onChange={(e) => setDebiteurMoral(prev => ({
                ...prev,
                debDatcreat: e.value ?? null
              }))}
              dateFormat="dd/mm/yy"
              showIcon
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Forme Juridique :</label>
            <InputText
              name="debFormJurid"
              value={debiteurMoral.debFormJurid}
              onChange={handleInputChange}
              className="text"
            />
          </div>

          <div className="form-group">
            <label>Nom Gérant :</label>
            <InputText
              name="debNomGerant"
              value={debiteurMoral.debNomGerant}
              onChange={handleInputChange}
              className="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}