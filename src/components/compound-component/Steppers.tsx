import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { ReactNode } from "react";
import { Button } from "react-bootstrap";

export interface StepperItem {
    label?: string;
    icon?: ReactNode;
    content?: ReactNode;
    onCancel?: () => void,
    onNext?: () => void;
    onSave?: () => void;
}

interface Props {
    steps?: StepperItem[];
    activeStep?: number;
}
export function Steppers({ steps, activeStep }: Props) {
    const buildContent = (steps: StepperItem, index: number ) => {
        if (index === activeStep) return steps.content;
        return <></>
    }
    return (
        <Stepper activeStep={activeStep}>
            {
                steps?.map((step, index) => {
                    return (
                        <StepperPanel header={step.label} key={index}>
                            <div className="flex flex-column">
                                {buildContent(step, index)}
                            </div>
                            <div className="d-flex pt-4 justify-content-between border-top-3">
                                {<Button onClick={step.onCancel} disabled={activeStep === 0} variant="outline-secondary">Precedant</Button>}
                                {step.onNext && <Button onClick={step.onNext} className="bg-orange-500 hover:bg-orange-300 border-none">Suivant</Button>}
                                {step.onSave && <Button onClick={step.onSave} className="bg-orange-500 hover:bg-orange-300 border-none">Enregistrer</Button>}
                            </div>
                        </StepperPanel>
                    )
                })
            }
        </Stepper>
    )
}