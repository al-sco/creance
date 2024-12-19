import { useEffect, useRef } from "react";
import { Dialog } from "primereact/dialog";
import { CreanceDialog } from "./creance/creance";
import { Acte } from "./actes/acte";
import { useCreateActesController } from "./controller";
import Alerts from "../../compound-component/Alerts";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "react-bootstrap";
import { Stepper } from "primereact/stepper";

import { useState } from "react";

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
  const [activeStep, setActiveStep] = useState(0);
  const stepperRef = useRef<any>(null);
  const ctrl = useCreateActesController(acteCode, onHide, visible);
  const totalSteps = 2;

  const handleNext = () => {
    if (activeStep < totalSteps - 1) {
      setActiveStep((prev) => prev + 1);
      stepperRef.current.nextCallback();
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      stepperRef.current.prevCallback();
    }
  };

  useEffect(() => {
    if (!visible) {
      setActiveStep(0)
    }
  }, [visible])

  return (
    <Dialog visible={visible} onHide={() => onHide()} style={{ width: "80vw" }} header="Ajouter un acte">
      <Alerts {...ctrl.alerts} />
      <div className="flex items-center align-items-center">
        <div className="ml-2 text-gray-600 font-bold mr-2">Créance</div>
        <div className=" relative flex-1 ">
          <div className="h-1 bg-gray-200 rounded-full" style={{ height: 5 }}>
            <div
              className="h-1 bg-orange-500 rounded-full transition-all"
              style={{ width: `${50 + (activeStep * 50)}%`, height: 5, borderRadius: 10 }}
            ></div>
          </div>
        </div>
        <div className="ml-2 text-gray-600">Actes</div>
      </div>
      <Stepper ref={stepperRef}
        data-active-step={activeStep}>

        <StepperPanel header="">
          <CreanceDialog form={ctrl.form} visible={visible} />
          <div className="flex pt-4 justify-content-between">
            <Button
              onClick={handlePrev}
              variant="outline-secondary"
              disabled={activeStep === 0}
            >
              Précédent
            </Button>
            <Button
              onClick={handleNext}
              className="bg-orange-500 hover:bg-orange-300 border-none"
            >
              Suivant
            </Button>
          </div>
        </StepperPanel>
        <StepperPanel header="">
          <Acte form={ctrl.form} />
          <div className="flex pt-4 justify-content-between">
            <Button onClick={handlePrev} variant="outline-secondary">
              Précédent
            </Button>
            <Button
              onClick={ctrl.form.handleSubmit(ctrl.onSubmit)}
              className="bg-orange-500 hover:bg-orange-300 border-none"
            >
              Enregistrer
            </Button>
          </div>
        </StepperPanel>
      </Stepper>
    </Dialog>
  );
};