

import { useState } from "react";
import { CardContent } from "../compound-component/CardContent";
import { PageTitle } from "../compound-component/PageTitle";
import SerchAndAddButton from "../compound-component/table/SerchAndAddButton";
import Tables from "../compound-component/table/Tables";
import { DataTableRowToggleEvent } from "primereact/datatable";
import EmptyTable from "../compound-component/table/EmptyTable";
import { Column } from "primereact/column";
import { LogementDetails } from "./details/LogementDetail";
import { GestionActeFormDialog } from "./partials";
import MoreActions from "../compound-component/table/MoreActions";
import { useListeActeController } from "./controller";
import { ActeModel } from "../../states/model/actes.model";
import { MenuItemCommandEvent } from "primereact/menuitem";
import Alerts from "../compound-component/Alerts";
import { useGestionAmiableStores } from "./use-gestion-amiable-stores";
import { Checkbox } from "primereact/checkbox";
import { ProgressSpinners } from "../compound-component/ProgressSpinners";
import ExportFile from "./partials/previsualise";
import { ExportFileDialog } from "./partials/exportFileDialog";
import { useTableGlobalFilter } from "../compound-component/table/GlobalFilter";

export  function ListeDesActes() {
    const globalFilter = useTableGlobalFilter()
    const acteStores = useGestionAmiableStores();
    const [expandedRows, setExpandedRows] = useState<any>(null);
    const ctrl = useListeActeController();
    const [selectedActeCode, setSelectedActeCode] = useState<string | null>(null); 
    
    const checkedActe =(acteCode?: any) => {
        setSelectedActeCode(prev => (prev === acteCode.id ? null : acteCode.id));
       acteStores.setActeCode(acteCode.id);
       acteStores.setTypeActeCode(acteCode.typActeCode)
       acteStores.setCodeCreance(acteCode.creanCode)
       acteStores.setActId(acteCode.id)
    }
  

    return (
        <>
        <Alerts {...ctrl.alerts} />
          <CardContent>
            <PageTitle title="Lite des actes" />
            { acteStores.acteLoading && <ProgressSpinners />}
            <SerchAndAddButton onAdd={ctrl.openCreateFormDialog} onClick={ctrl.refreshData} onFilter={globalFilter.handleFilter}/>
            <Tables value={acteStores.actes} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                expandedRows={expandedRows} onRowToggle={(e: DataTableRowToggleEvent) => setExpandedRows(e.data)}
                rowExpansionTemplate={(data: ActeModel) => <LogementDetails details={data} />}
                globalFilter={globalFilter.value}
                globalFilterFields={["numCreance","nomDebiteur","typActeLib"]}
                emptyMessage={<EmptyTable />}
            >
                <Column expander className={'w-1'} />
                <Column header="#" body={(data)=><Checkbox className=" border-orange-300 border-1" 
                checked={!!(data.id === selectedActeCode || acteStores.acteCode === data.id )} onClick={()=> checkedActe(data)}/>} />
                <Column field={'id'} header={'Code de l\'acte'} />
                <Column field={'typActeLib'} header={'Type de l\'acte'} />
                <Column field={'nomDebiteur'} header={'Nom du débiteur'} />
                <Column field={'numCreance'} header={'Numéro de créance'} />
                <Column field={'acteDatecrea'} header={'Date de création'} />
                <Column field={'acteDateSignat'} header={'Date de signature'} />
                <Column field={'creanDatrea'} header={'Date de réaction'} />
                <Column header={'Options'} align={'right'} body={(data: ActeModel) =>
                        <MoreActions accent items={[
                            {
                                label: 'Modifié', command() {
                                   ctrl.openUpdateFormDIalog(data);
                                }
                            },
                            {
                                label: 'Exporter', command() {
                                    ctrl.openExportFileDialog(data.id, data.typActeCode)
                                }
                            },
                              {
                                label: 'Supprimer', command(event: MenuItemCommandEvent) {
                                    ctrl.alerts.openConfirmAlert(
                                        event.originalEvent,
                                        "Voulez-vous supprimer cette décision ?",
                                        () => ctrl.deleteActe(data.id)
                                    )
                                }
                            }
                        ]} />
                    } />
            </Tables>
            <GestionActeFormDialog visible={ctrl.visible} onHide={ctrl.closeCreateFormDIalog} acteCode={ctrl.acteCode}/>
            <ExportFileDialog visible={ctrl.exportFileVisible} onHide={ctrl.closeExportFileDialog} actId={ctrl.actId} />
        </CardContent>
        <ExportFile/>
        </>
    )
}