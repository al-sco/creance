import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { DetailGarantiesPersPopup } from './DetailGarantiesPersPopup';

export function GarantiePersonnelleTab() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="form-grid">
      <div className="form-row">
        <div className="form-group">
          <label>EMPLOYEUR :</label>
          <InputText className="text" />
        </div>
        
        <div className="form-group">
          <label>STATUS SAL :</label>
          <InputText className="text" />
        </div>
      </div>

      <Button 
  label="Detail Garanties Pers." 
  className="custom-detail-button"
  onClick={() => setShowPopup(true)}
/>

      {showPopup && (
        <DetailGarantiesPersPopup onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}