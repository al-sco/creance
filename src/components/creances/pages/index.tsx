import PageWrapper from "../../compound-component/PageWrapper";
import { CardHeader } from "../../compound-component/CardHeader";
import { TabView, TabPanel } from 'primereact/tabview';
import { ListeDesCreances } from "../components/creance/ListeDesCreances";

export function CreancesPage() {
  return (
    <PageWrapper>
      <CardHeader
        title="Gestion des Créances"
        subTitle="Interface de gestion des créances"
      />
      <TabView>
        <TabPanel header="Liste des créances">
          <ListeDesCreances />
        </TabPanel>
      </TabView>
    </PageWrapper>
  );
}