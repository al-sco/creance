import { useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { useDebiteurStore } from '../../../stores/useDebiteurStore';
// import { Domiciliation } from '../../../model/debiteur.model';

export function DomiciliationSection() {

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   updateCurrentDomiciliation({ [name]: value });
  // };

  // const handleDateChange = (value: Date | null, fieldName: string) => {
  //   updateCurrentDomiciliation({ [fieldName]: value });
  // };

  return (
    <div className="sub-screen">
      <div className="form-grid">
        <div className="form-row">
          <div className="form-group">
            <label>Banque :</label>
            <InputText
              name="banqueCode"
              
              // onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
          <div className="form-group">
            <label>Agence :</label>
            <InputText
              name="agenceCode"
              
              // onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Numéro de compte :</label>
            <InputText
              name="domNumcompte"
              // onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
          <div className="form-group">
            <label>Date d'ouverture :</label>
            <Calendar
              
              // onChange={(e) => handleDateChange(e.value as Date, 'domDateouv')}
              dateFormat="dd/mm/yy"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Type de compte :</label>
            <InputText
              name="domTypecompte"
              
              // onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
          <div className="form-group">
            <label>Statut du compte :</label>
            <InputText
              name="domStatutcompte"
              
              // onChange={handleInputChange}
              className="p-inputtext"
            />
          </div>
        </div>
      </div>
    </div>
  );
}