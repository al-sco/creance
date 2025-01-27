import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { TabView, TabPanel } from 'primereact/tabview';
import { PieceTab } from './PieceTab';
import { GarantiePersonnelleTab } from "./GarantiePersonnelleTab";

export function GestionCreanceForm() {
  return (
    <div className="creance-container">
      <h1 className="main-title">Etude créance</h1>

      <div className="form-grid">
        {/* Ligne 1 */}
        <div className="form-row">
          <div className="form-group">
            <label>Débiteur :</label>
            <div className="input-group">
              <InputText placeholder="Code" className="code" />
              <InputText placeholder="Nom" className="libelle" />
            </div>
          </div>

          <div className="form-group">
            <label>Grpe Créance :</label>
            <div className="input-group">
              <InputText placeholder="Code" className="code" />
              <InputText placeholder="Nom" className="libelle" />
            </div>
          </div>

          <div className="form-group">
            <label>Type d'Objet :</label>
            <div className="input-group">
              <InputText placeholder="Code" className="code" />
              <InputText placeholder="Nom" className="name" />
            </div>
          </div>
        </div>

        {/* Ligne 2 */}
        <div className="form-row">
          <div className="form-group">
            <label>Capital Initial :</label>
            <InputText  className="libelle" />
          </div>

          <div className="form-group">
            <label>Mont. Décaissé :</label>
            <InputText  className="libelle" />
          </div>

          <div className="form-group">
            <label>Sté Caution :</label>
            <InputText placeholder="libelle" className="libelle" />
          </div>
        </div>

        {/* Ligne 3 */}
        <div className="form-row">
          <div className="form-group">
            <label>Stat Recouv. :</label>
            <Dropdown options={[]} placeholder="Sélectionner" className="dropdown" />
          </div>

          <div className="form-group">
            <label>N° Précédent :</label>
            <InputText className="libelle" />
          </div>

          <div className="form-group">
            <label>Entité :</label>
            <div className="input-group">
              <InputText placeholder="Code" className="code" />
              <InputText placeholder="Nom" className="name" />
            </div>
          </div>
        </div>

        {/* Ligne 4 */}
        <div className="form-row">
          <div className="form-group">
            <label>Objet Créance :</label>
            <Dropdown options={[]} placeholder="Sélectionner" className="dropdown" />
          </div>

          <div className="form-group">
            <label>Périodicité :</label>
            <Dropdown options={[]} placeholder="Sélectionner" className="dropdown" />
          </div>

          <div className="form-group">
            <label>Nb. Ech :</label>
            <InputText className="libelle" />
          </div>
        </div>

        {/* Ligne 5 - Dates */}
        <div className="form-row">
          <div className="form-group">
            <label>Date Reconnais. :</label>
            <Calendar dateFormat="dd/mm/yy" showIcon className="date" />
          </div>

          <div className="form-group">
            <label>Date Iere Ech. :</label>
            <Calendar dateFormat="dd/mm/yy" showIcon className="date" />
          </div>

          <div className="form-group">
            <label>Date Dern Ech :</label>
            <Calendar dateFormat="dd/mm/yy" showIcon className="date" />
          </div>
        </div>

        {/* Ligne 6 */}
        <div className="form-row">
          <div className="form-group">
            <label>Int. conv. % :</label>
            <InputText className="name" />
          </div>

          <div className="form-group">
            <label>Mont.Inv Conv :</label>
            <InputText  className="libelle" />
          </div>

          <div className="form-group">
            <label>Int. Ret. :</label>
            <InputText className="libelle" />
          </div>
        </div>

        {/* Ligne 7 */}
        <div className="form-row">
          <div className="form-group">
            <label>Ordonnateur :</label>
            <div className="input-group">
              <InputText placeholder="Code" className="code" />
              <InputText placeholder="Nom" className="name" />
            </div>
          </div>

          <div className="form-group">
            <label>Mont à Remb. :</label>
            <InputText  className="libelle" />
          </div>

          <div className="form-group">
            <label>Mont. Dû :</label>
            <InputText className="libelle" />
          </div>
        </div>

        {/* Ligne 8 */}
        <div className="form-row">
          <div className="form-group">
            <label>Mont. Déjà Remb. :</label>
            <InputText className="libelle" />
          </div>

          <div className="form-group">
            <label>Mont. Impayé :</label>
            <InputText className="libelle" />
          </div>

          <div className="form-group">
            <label>Divers Frais :</label>
            <InputText className="libelle" />
          </div>
        </div>

        {/* Ligne 9 */}
        <div className="form-row">
          <div className="form-group">
            <label>Encours :</label>
            <InputText className="text" />
          </div>

          <div className="form-group">
            <label>Total Dû :</label>
            <InputText className="libelle" />
          </div>

          <div className="form-group">
            <label>Pénalité 1% :</label>
            <InputText className="libelle" />
                      </div>
        </div>

       
        <div className="sub-screen-container">
  <TabView className="mt-4">
    <TabPanel header="Pièce">
      <PieceTab />
    </TabPanel>
    <TabPanel header="Garantie Personnelle">
      <GarantiePersonnelleTab />
    </TabPanel>
    <TabPanel header="Garanties Réelles">
      {/* À compléter */}
    </TabPanel>
  </TabView>
</div>

        <button className="save-button">Enregistrer</button>
      </div>
    </div>
  );
}