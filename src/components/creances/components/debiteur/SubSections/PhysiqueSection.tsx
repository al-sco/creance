import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

export function PhysiqueSection() {
  const civiliteOptions = [
    { label: 'M.', value: 'M' },
    { label: 'Mme', value: 'Mme' }
  ];

  const sexeOptions = [
    { label: 'Masculin', value: 'M' },
    { label: 'Féminin', value: 'F' }
  ];

  return (
    <div className="form-grid physique-section">
      {/* Ligne 1 */}
      <div className="form-row">
        <div className="form-group">
          <label>Civilité :</label>
          <Dropdown options={civiliteOptions} placeholder="Sélectionner" />
        </div>
        <div className="form-group">
          <label>Nom :</label>
          <InputText placeholder="Nom" />
        </div>
        <div className="form-group">
          <label>Prénom :</label>
          <InputText placeholder="Prénom" />
        </div>
      </div>

      {/* Ligne 2 */}
      <div className="form-row">
        <div className="form-group">
          <label>Date de naissance :</label>
          <Calendar dateFormat="dd/mm/yy" showIcon />
        </div>
        <div className="form-group">
          <label>Lieu de naissance :</label>
          <InputText placeholder="Lieu de naissance" />
        </div>
        <div className="form-group">
          <label>Nationalité :</label>
          <InputText placeholder="Nationalité" />
        </div>
      </div>

      {/* Ligne 3 */}
      <div className="form-row">
        <div className="form-group">
          <label>Fonction :</label>
          <InputText placeholder="Fonction" />
        </div>
        <div className="form-group">
          <label>Employeur :</label>
          <InputText placeholder="Employeur" />
        </div>
        <div className="form-group">
          <label>Statut salarial :</label>
          <InputText placeholder="Statut salarial" />
        </div>
      </div>

      {/* Ligne 4 */}
      <div className="form-row">
        <div className="form-group">
          <label>Matricule :</label>
          <InputText placeholder="Matricule" />
        </div>
        <div className="form-group">
          <label>Date de décès :</label>
          <Calendar dateFormat="dd/mm/yy" showIcon />
        </div>
        <div className="form-group">
          <label>N° pièce ident. :</label>
          <InputText placeholder="N° pièce ident." />
        </div>
      </div>

      {/* Ligne 5 */}
      <div className="form-row">
        <div className="form-group">
          <label>N° pièce ident. conjoint :</label>
          <InputText placeholder="N° pièce ident. conjoint" />
        </div>
        <div className="form-group">
          <label>Date établissement :</label>
          <Calendar dateFormat="dd/mm/yy" showIcon />
        </div>
        <div className="form-group">
          <label>Lieu établissement :</label>
          <InputText placeholder="Lieu établissement" />
        </div>
      </div>

      {/* Ligne 6 */}
      <div className="form-row">
        <div className="form-group">
          <label>Situation matrimoniale :</label>
          <InputText placeholder="Situation matrimoniale" />
        </div>
        <div className="form-group">
          <label>Identité conjoint :</label>
          <InputText placeholder="Identité conjoint" />
        </div>
        <div className="form-group">
          <label>Prénom conjoint :</label>
          <InputText placeholder="Prénom conjoint" />
        </div>
      </div>

      {/* Ligne 7 */}
      <div className="form-row">
        <div className="form-group">
          <label>Nom conjoint :</label>
          <InputText placeholder="Nom conjoint" />
        </div>
        <div className="form-group">
          <label>Adresse conjoint :</label>
          <InputText placeholder="Adresse conjoint" />
        </div>
        <div className="form-group">
          <label>Tel conjoint :</label>
          <InputText placeholder="Tel conjoint" />
        </div>
      </div>

      {/* Ligne 8 */}
      <div className="form-row">
        <div className="form-group">
          <label>Sexe :</label>
          <Dropdown options={sexeOptions} placeholder="Sélectionner" />
        </div>
      </div>
    </div>
  );
}