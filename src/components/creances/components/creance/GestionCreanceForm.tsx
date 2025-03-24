import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
import { Dropdown } from "primereact/dropdown";
import { GarantiePersonnelleTab } from "./GarantiePersonnelleTab";
import { PieceTab } from "./PieceTab";


export function GestionCreanceForm() {
  return (
    <div className="creance-container">
      <h1 className="main-title">Etude créance</h1>

      <div className="form-grid three-column-layout">
        {/* Colonne 1 */}
        <div className="form-column">
        <div className="form-group">
  <label className="blue-label">Débiteur</label>
  <InputText className="code" />
  <InputText className="libelle" />
</div>

          <div className="form-group">
            <label className="blue-label">Grpe Créance</label>
            <div className="input-group">
              <InputText placeholder="Code" className="code" />
              <InputText placeholder="Nom" className="libelle" />
            </div>
          </div>

          {/* Répétez le même pattern pour les autres champs de la colonne 1 */}
          <div className="form-group">
            <label className="blue-label">Type d'Objet</label>
            <div className="input-group">
              <InputText placeholder="Code" className="code" />
              <InputText placeholder="Nom" className="libelle" />
            </div>
          </div>

          <div className="form-group">
            <label className="blue-label">Capital Initial</label>
            <InputText className="full-width" />
          </div>

          <div className="form-group">
            <label className="blue-label">Mont. Décaissé</label>
            <InputText className="full-width" />
          </div>

          <div className="form-group">
            <label className="blue-label">Sté caution</label>
            <InputText className="full-width" />
          </div>

          <div className="form-group">
            <label className="blue-label">Stat. Recouv.</label>
            <Dropdown options={[]} placeholder="Sélectionner" className="full-width" />
          </div>

          <div className="form-group">
            <label className="blue-label">N° Précédent</label>
            <InputText className="full-width" />
          </div>

          <div className="form-group">
            <label className="blue-label">N° Ancien</label>
            <InputText className="full-width" />
          </div>
        </div>

        {/* Colonne 2 */}
        <div className="form-column">
          <div className="form-group">
            <label className="blue-label">N° Créance</label>
            <InputText disabled className="full-width disabled" />
          </div>

          <div className="form-group">
            <label className="blue-label">Entité</label>
            <InputText disabled className="full-width disabled" />
          </div>

          <div className="form-group">
            <label className="blue-label">Objet Créance</label>
            <InputText className="full-width" />
          </div>

          <div className="form-group">
            <label className="blue-label">Périodicité</label>
            <div className="input-group">
              <InputText placeholder="Code" className="code" />
              <Dropdown options={[]} placeholder="Mensuel" className="libelle" />
            </div>
          </div>

          <div className="form-group">
            <label className="blue-label">Nb. Ech</label>
            <InputText className="full-width" />
          </div>

          {/* Dates avec Calendar */}
          <div className="form-group calendar-group">
            <label className="blue-label">Date reconnais.</label>
            <Calendar showIcon dateFormat="dd/mm/yy" className="full-width" />
          </div>

          <div className="form-group calendar-group">
            <label className="blue-label">Date 1ere Ech</label>
            <Calendar showIcon dateFormat="dd/mm/yy" className="full-width" />
          </div>

          <div className="form-group calendar-group">
            <label className="blue-label">Date Dern. Ech</label>
            <Calendar showIcon dateFormat="dd/mm/yy" className="full-width" />
          </div>

          <div className="form-group calendar-group">
            <label className="blue-label">Date d'octroi</label>
            <Calendar showIcon dateFormat="dd/mm/yy" className="full-width" />
          </div>
        </div>

        {/* Colonne 3 */}
        <div className="form-column">
          <div className="form-group">
            <label className="blue-label">Ordonnateur</label>
            <div className="input-group">
              <InputText placeholder="Code" className="code" />
              <Dropdown options={[]} placeholder="Libellé" className="libelle" />
            </div>
          </div>

          <div className="form-group">
  <label className="blue-label">Mont à Remb.</label>
  <InputText className="libelle" />
</div>

          <div className="form-group">
            <label className="blue-label">Mont. Déjà Remb.</label>
            <InputNumber className="full-width" />
          </div>

          <div className="form-group">
            <label className="blue-label">Mont Impayé</label>
            <InputNumber disabled className="full-width disabled" />
          </div>

          <div className="form-group">
            <label className="blue-label">Divers Frais</label>
            <InputNumber className="full-width" />
          </div>

          <div className="form-group">
            <label className="blue-label">Encours</label>
            <InputNumber className="full-width" />
          </div>

          <div className="form-group">
            <label className="blue-label">Total dû</label>
            <InputNumber disabled className="full-width disabled" />
          </div>

          <div className="form-group">
            <label className="blue-label">Pénalité 1%</label>
            <InputNumber disabled className="full-width disabled" />
          </div>

          <div className="form-group">
            <label className="blue-label">Total à recouvrer</label>
            <InputNumber disabled className="full-width disabled red-text" />
          </div>
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
            {/* Contenu existant */}
          </TabPanel>
        </TabView>
      </div>

      <button className="save-button">Enregistrer</button>
    </div>
  );
}