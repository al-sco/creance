

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

export  function ListeDesActes() {
    const acteStores = useGestionAmiableStores();
    const [expandedRows, setExpandedRows] = useState<any>(null);
    const ctrl = useListeActeController();
    const [selectedActeCode, setSelectedActeCode] = useState<string | null>(null); 
    
    const checkedActe =(acteCode?: any) => {
        setSelectedActeCode(prev => (prev === acteCode ? null : acteCode));
       acteStores.setActeCode(acteCode);
    }

    return (
        <>
        <Alerts {...ctrl.alerts} />
          <CardContent>
            <PageTitle title="Lite des actes" />
            <SerchAndAddButton onAdd={ctrl.openCreateFormDialog} />
            <Tables value={ctrl.actes}
                expandedRows={expandedRows} onRowToggle={(e: DataTableRowToggleEvent) => setExpandedRows(e.data)}
                rowExpansionTemplate={(data: any) => <LogementDetails details={data} />}
                emptyMessage={<EmptyTable />}
            >
                <Column expander className={'w-1'} />
                <Column header="#" body={(data)=><Checkbox className=" border-orange-300 border-1" 
                checked={data.acteCode === selectedActeCode} onClick={()=> checkedActe(data.acteCode)}/>} />
                <Column field={'acteCode'} header={'Code'} />
                <Column field={'bloc'} header={'Bloc'} />
                <Column field={'lot'} header={'Lot'} />
                <Column field={'nPorte'} header={'N° de porte'} />
                <Column header={'Options'} align={'right'} body={(data: ActeModel) =>
                        <MoreActions accent items={[
                            {
                                label: 'Modifié', command() {
                                   ctrl.openUpdateFormDIalog(data.acterCode);
                                }
                            },
                            {
                                label: 'Exporter', command() {

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
        </>
    )
}