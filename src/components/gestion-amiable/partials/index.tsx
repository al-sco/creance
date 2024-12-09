import { useRef } from "react";
import { Dialog } from "primereact/dialog";
import { CreanceDialog } from "./creance/creance";
import { Acte } from "./actes/acte";
import { useCreateActesController } from "./controller";
import Alerts from "../../compound-component/Alerts";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "react-bootstrap";
import { Stepper } from "primereact/stepper";

interface LogementFormDialogProps {
  visible: boolean;
  onHide: () => void;
  acteCode?: string;
}
export function GestionActeFormDialog({
  visible,
  onHide,
  acteCode,
}: LogementFormDialogProps) {
  const ctrl = useCreateActesController(acteCode, onHide);

  const stepperRef = useRef<any>(null);

  return (
    <Dialog visible={visible} onHide={() => onHide()} style={{ width: "80vw" }} header="Ajouter un acte">
      <Alerts {...ctrl.alerts} />
      <Stepper ref={stepperRef} >
        <StepperPanel header={"Créance"} >
          <CreanceDialog form={ctrl.form} />
          <div className="flex pt-4 justify-content-between">
            <Button onClick={() => stepperRef.current.prevCallback()} variant="outline-secondary">
              Précédent
            </Button>
            <Button onClick={() => stepperRef.current.nextCallback()} className="bg-orange-500 hover:bg-orange-300 border-none">
              Suivant
            </Button>
          </div>
        </StepperPanel>
        <StepperPanel header={"Actes"} >
          <Acte form={ctrl.form} />
          <div className="flex pt-4 justify-content-between">
            <Button onClick={() => stepperRef.current.prevCallback()} variant="outline-secondary">
              Précédent
            </Button>
            <Button onClick={ctrl.form.handleSubmit(ctrl.onSubmit)} className="bg-orange-500 hover:bg-orange-300 border-none">
              Enregistrer
            </Button>
          </div>
        </StepperPanel>
      </Stepper>
    </Dialog>
  );
}
