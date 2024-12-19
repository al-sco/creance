// import { Stepper } from "primereact/stepper";
// import { StepperPanel } from "primereact/stepperpanel";
// import { ReactNode } from "react";
// import { Button } from "react-bootstrap";

// export interface StepperItem {
//     label?: string;
//     icon?: ReactNode;
//     content?: ReactNode;
//     onCancel?: () => void,
//     onNext?: () => void;
//     onSave?: () => void;
// }

// interface Props {
//     steps?: StepperItem[];
//     activeStep?: number;
// }
// export function Steppers({ steps, activeStep }: Props) {
//     // const [activeTap, setActiveTab]= useState(activeStep)
//     const buildContent = (steps: StepperItem, index: number ) => {
//         if (index === activeStep) return steps.content;
//         return <></>
//     }

//     const handleStepSelect = (e: any) => {
//         console.log(e)
//        return false
//     };

//     return (
//         <Stepper activeStep={activeStep}  >
//             {
//                 steps?.map((step, index) => {
//                     return (
//                         <StepperPanel header={step.label} key={index} >
//                             <div className="flex flex-column">
//                                 {buildContent(step, index)}
//                             </div>
//                             <div className="d-flex pt-4 justify-content-between border-top-3">
//                                 {<Button onClick={step.onCancel} disabled={activeStep === 0} variant="outline-secondary">Precedant</Button>}
//                                 {step.onNext && <Button onClick={step.onNext} className="bg-orange-500 hover:bg-orange-300 border-none">Suivant</Button>}
//                                 {step.onSave && <Button onClick={step.onSave} className="bg-orange-500 hover:bg-orange-300 border-none">Enregistrer</Button>}
//                             </div>
//                         </StepperPanel>
//                     )
//                 })
//             }
//         </Stepper>
//     )
// }

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
    const buildContent = (step: StepperItem, index: number) => {
        console.log(index, activeStep)
        if (index === activeStep) return step.content;
        return null;
    };

    // const stepperRef = useRef<any>(null);

    return (
        <Stepper activeStep={activeStep} >
            {steps?.map((step, index) => (
                <StepperPanel header={step.label} key={index} >
                    <div className="flex flex-column">
                        {buildContent(step, index)}
                    </div>
                    <div className="d-flex pt-4 justify-content-between border-top-3">
                        <Button onClick={step.onCancel} disabled={activeStep === 0} variant="outline-secondary">
                            Précédent
                        </Button>
                        {step.onNext && (
                            <Button onClick={step.onNext} className="bg-orange-500 hover:bg-orange-300 border-none">
                                Suivant
                            </Button>
                        )}
                        {step.onSave && (
                            <Button onClick={step.onSave} className="bg-orange-500 hover:bg-orange-300 border-none">
                                Enregistrer
                            </Button>
                        )}
                    </div>
                </StepperPanel>
            ))}
        </Stepper>
        // <Stepper ref={stepperRef} >
        //     {steps?.map((step, index) => (
        //         <>
                    // <StepperPanel header="Header I">
                    //     <div className="flex flex-column h-12rem">
                    //         <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                    //     </div>
                    //     <div className="flex pt-4 justify-content-end">
                    //         <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    //     </div>
                    // </StepperPanel>
                    // <StepperPanel header="Header II">
                    //     <div className="flex flex-column h-12rem">
                    //         <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                    //     </div>
                    //     <div className="flex pt-4 justify-content-between">
                    //         <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    //         <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    //     </div>
                    // </StepperPanel>
                    // <StepperPanel header="Header III">
                    //     <div className="flex flex-column h-12rem">
                    //         <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                    //     </div>
                    //     <div className="flex pt-4 justify-content-start">
                    //         <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    //     </div>
                    // </StepperPanel>
        //         </>
        //     ))}
        // </Stepper>
    );
}
