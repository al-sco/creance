import { Dialog } from "primereact/dialog";
import SeletectField from "../../../compound-component/form/SeletectField";
import { useExportFileDialogController } from "./controller";
import FormActions from "../../../compound-component/form/FormActions";
import { ProgressSpinnersOnly } from "../../../compound-component/ProgressSpinnersOnly";


export interface Props {
    visible: boolean;
    onHide: () => void;
    actId?: number;
}

export function ExportFileDialog({ visible, onHide, actId }: Props) {
    const ctrl = useExportFileDialogController(actId, onHide)
    return (
        <Dialog visible={visible} onHide={() => onHide()} style={{ width: "25vw" }} header="Choisir le format du fichier">

            {ctrl.isLoading && <ProgressSpinnersOnly />}

            <div className="p-4">
                <SeletectField
                    options={[
                        { label: "PDF", value: "PDF" },
                        { label: "WORD", value: "WORD" }
                    ]}
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Selectionnée un format"
                    id="codeCreance"
                    onChange={(event: any) => ctrl.handleChangeFormat(event)}
                    value={ctrl.formatFile}
                />
                <div className="d-flex justify-content-end mt-3">
                    <FormActions onSave={ctrl.onSubmit} saveLabel="Imprimer" />
                </div>
            </div>
        </Dialog>
    )
}