import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useCreanceStore } from "../../stores/useCreanceStore";
import { useNavigate } from "react-router-dom";
import "../../styles/creance.css";

export function ListeDesCreances() {
  const { creances, deleteCreance } = useCreanceStore();
  const navigate = useNavigate();

  const actionTemplate = (rowData: any) => (
    <div className="flex gap-2">
      <Button 
        icon="pi pi-pencil" 
        className="p-button-warning" 
        onClick={() => navigate(`/edit/${rowData.id}`)}
      />
      <Button 
        icon="pi pi-trash" 
        className="p-button-danger" 
        onClick={() => deleteCreance(rowData.id)}
      />
    </div>
  );

  return (
    <div className="creance-container">
      <div className="flex justify-content-between mb-4">
        <h2>Liste des Créances</h2>
        <Button
          label="Nouvelle Créance"
          icon="pi pi-plus"
          className="creance-button bg-orange-500"
          onClick={() => navigate('/nouvelle-creance')}
        />
      </div>

      <DataTable value={creances} paginator rows={10}>
        <Column field="code" header="Code" sortable />
        <Column field="groupeCreance" header="Groupe" />
        <Column field="dateCreation" header="Date Création" />
        <Column body={actionTemplate} header="Actions" />
      </DataTable>
    </div>
  );
}