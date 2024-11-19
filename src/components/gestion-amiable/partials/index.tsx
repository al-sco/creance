

import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { CreanceDialog } from "./creance/creance";
import { Steppers } from "../../compound-component/Steppers";
import { Acte } from "./actes/acte";
import { DelegationLoyers } from "./delegation-loyers/delegation-loyers";
import { useCreateActesController } from "./controller";
import Alerts from "../../compound-component/Alerts";

interface LogementFormDialogProps {
    visible: boolean;
    onHide: () => void;
    acteCode?: string;
}
export function GestionActeFormDialog({ visible, onHide, acteCode }: LogementFormDialogProps) {
    const [activeStep, setActiveStep] = useState(0);
    const ctrl = useCreateActesController(acteCode, onHide);

    return (

        <Dialog visible={visible} onHide={() => onHide()} style={{ width: "70vw" }} header="Ajouter un acte">
            <Alerts {...ctrl.alerts} />
            <Steppers activeStep={activeStep} steps={[
                { label: "Créance", content: <CreanceDialog form={ctrl.form} />, onNext: () => setActiveStep(1) },
                { label: "Actes", content: <Acte form={ctrl.form} />, onCancel: () => setActiveStep(activeStep - 1), onNext: () => setActiveStep(activeStep + 1) },
                { label: "Délegation de loyer", content: <DelegationLoyers />, onCancel: () => setActiveStep(activeStep - 1), onSave: ctrl.form.handleSubmit(ctrl.onSubmit) }
            ]} />

        </Dialog>
    )
}
