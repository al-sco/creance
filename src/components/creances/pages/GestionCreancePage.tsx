import { TabView, TabPanel } from 'primereact/tabview';
import { ListeDesCreances } from "../components/creance/ListeDesCreances";
import { GestionCreanceForm } from "../components/creance/GestionCreanceForm";

export function CreancesPage() {
  return (
    <div className="p-4">
      <TabView>
        <TabPanel header="Liste">
          <ListeDesCreances />
        </TabPanel>
        <TabPanel header="Nouvelle Créance">
          <GestionCreanceForm />
        </TabPanel>
      </TabView>
    </div>
  );
}