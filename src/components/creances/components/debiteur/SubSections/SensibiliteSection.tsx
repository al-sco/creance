// components/debiteur/SubSections/SensibiliteSection.tsx
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';

export function SensibiliteSection() {
  return (
    <div className="sub-screen">

<div className="form-grid">
  {/* Ligne 1 - Colonnes */}
  <div className="form-row">
    {/* Colonne 1 */}
    <div className="form-column">
      <div className="form-group">
        <label>Registre de Commerce :</label>
        <InputText className="text" />
      </div>
    </div>

    {/* Colonne 2 */}
    <div className="form-column">
      <div className="form-group">
        <label>Raison Sociales :</label>
        <InputText />

        <div className="form-group">
        <label>Siège Social :</label>
        <InputText className="text" />
      </div>
      </div>
    </div>

  

    <div className="form-column">
      <div className="form-group">
        <label>Capital Social :</label>
        <InputText className="text" />
      </div>
    </div>

    {/* Colonne 3 */}
    <div className="form-column">
      <div className="form-group">
        <label>Domaine d'activité :</label>
        <InputText className="text" />
      </div>
    </div>
  </div>

  {/* Ligne 2 - Colonnes */}
  <div className="form-row">
    <div className="form-column">
      <div className="form-group">
        <label>Forme Juridique:</label>
        <InputText className="text" />
      </div>
    </div>

    <div className="form-group">
        <label>Nom Gérant :</label>
        <InputText className="text" />
      </div>
    
  
    
    {/* Colonne vide pour maintien de la grille */}
    <div className="form-column"></div>
    
  </div>
</div>
</div>
  );
}