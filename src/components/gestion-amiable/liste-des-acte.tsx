

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
import ExportFile from "./partials/export-file";

export  function ListeDesActes() {
    const acteStores = useGestionAmiableStores();
    const [expandedRows, setExpandedRows] = useState<any>(null);
    const ctrl = useListeActeController();
    const [selectedActeCode, setSelectedActeCode] = useState<string | null>(null); 
    
    const checkedActe =(acteCode?: any) => {
        setSelectedActeCode(prev => (prev === acteCode.id ? null : acteCode.id));
       acteStores.setActeCode(acteCode.id);
       acteStores.setTypeActeCode(acteCode.typActeCode)
       acteStores.setCodeCreance(acteCode.codeCreance)
       acteStores.setActId(acteCode.id)
    }
  

    return (
        <>
        <Alerts {...ctrl.alerts} />
          <CardContent>
            <PageTitle title="Lite des actes" />
            { ctrl.isLoading && <ProgressSpinners />}
            <SerchAndAddButton onAdd={ctrl.openCreateFormDialog} onClick={ctrl.refreshData} />
            <Tables value={ctrl.actes}
                expandedRows={expandedRows} onRowToggle={(e: DataTableRowToggleEvent) => setExpandedRows(e.data)}
                rowExpansionTemplate={(data: any) => <LogementDetails details={data} />}
                emptyMessage={<EmptyTable />}
            >
                <Column expander className={'w-1'} />
                <Column header="#" body={(data)=><Checkbox className=" border-orange-300 border-1" 
                checked={!!(data.id === selectedActeCode || acteStores.acteCode === data.id )} onClick={()=> checkedActe(data)}/>} />
                <Column field={'id'} header={'Code de l\'acte'} />
                <Column field={'acteCout'} header={'Type de l\'acte'} />
                <Column field={'acteDelai'} header={'Nom du débiteur'} />
                <Column field={'acteDelai'} header={'Numéro de créance'} />
                <Column field={'acteDelai'} header={'Date de signification'} />
                <Column field={'acteDelai'} header={'Date de création'} />
                <Column field={'acteDelai'} header={'Date de réaction'} />
                <Column header={'Options'} align={'right'} body={(data: ActeModel) =>
                        <MoreActions accent items={[
                            {
                                label: 'Modifié', command() {
                                   ctrl.openUpdateFormDIalog(data.id);
                                }
                            },
                            {
                                label: 'Exporter', command() {
                                    ctrl.setIsPadfShow(!ctrl.isPdfShow)
                                }
                            },
                              {
                                label: 'Supprimer', command(event: MenuItemCommandEvent) {
                                    ctrl.alerts.openConfirmAlert(
                                        event.originalEvent,
                                        "Voulez-vous supprimer cette décision ?",
                                        () => ctrl.deleteActe(data.acterCode)
                                    )
                                }
                            }
                        ]} />
                    } />
            </Tables>
            <GestionActeFormDialog visible={ctrl.visible} onHide={ctrl.closeCreateFormDIalog} acteCode={ctrl.acteCode}/>
        </CardContent>
        <ExportFile ispdfShow={ctrl.isPdfShow} setPdfShow={()=> ctrl.setIsPadfShow(!ctrl.isPdfShow)}/>
        </>
    )
}