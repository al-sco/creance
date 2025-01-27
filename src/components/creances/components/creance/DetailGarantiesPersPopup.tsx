import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

export function DetailGarantiesPersPopup({ onClose }: { onClose: () => void }) {
    const civiliteOptions = [{ label: 'M.', value: 'M' }, { label: 'Mme', value: 'Mme' }];
    const typeOptions = [{ label: 'Garant', value: 'garant' }, { label: 'Tiers', value: 'tiers' }];
    const natPieceOptions = [{ label: 'CIN', value: 'cin' }, { label: 'Passeport', value: 'passeport' }];
  
    return (
      <Dialog header="Détails Garanties Personnelles" visible={true} style={{ width: '80vw' }} onHide={onClose}>
        <div className="form-grid p-4">
          {/* Ligne 1 */}
          <div className="form-row">
            <div className="form-group">
              <label>N° Créance :</label>
              <InputText className="text" />
            </div>
            <div className="form-group">
              <label>N° Garantie :</label>
              <InputText className="text" />
            </div>
          </div>
  
          {/* Ligne 2 */}
          <div className="form-row">
            <div className="form-group">
              <label>Type :</label>
              <Dropdown options={typeOptions} placeholder="Sélectionner" className="dropdown" />
            </div>
            <div className="form-group">
              <label>Nat. pièce ident. :</label>
              <Dropdown options={natPieceOptions} placeholder="Sélectionner" className="dropdown" />
            </div>
          </div>
  
          {/* Ligne 3 - Salaire */}
          <div className="form-row">
            <div className="form-group">
              <label>Salaire brut :</label>
              <InputNumber mode="currency" currency="MAD" className="currency" />
            </div>
            <div className="form-group">
              <label>Salaire net :</label>
              <InputNumber mode="currency" currency="MAD" className="currency" />
            </div>
          </div>
  
          {/* Ligne 4 - Coordonnées */}
          <div className="form-row">
            <div className="form-group">
              <label>Nom :</label>
              <InputText className="text" />
            </div>
            <div className="form-group">
              <label>Prénoms :</label>
              <InputText className="text" />
            </div>
          </div>
  
          {/* Ajouter toutes les autres lignes de l'image de la même manière */}
          {/* ... (Dates de naissance, téléphones, adresse, etc.) ... */}
  
          {/* Boutons */}
          <div className="flex gap-3 justify-content-end mt-4">
            <Button label="Fermer" className="p-button-secondary" onClick={onClose} />
            <Button label="Enregistrer" className="p-button-success" />
          </div>
        </div>
      </Dialog>
    );
  }