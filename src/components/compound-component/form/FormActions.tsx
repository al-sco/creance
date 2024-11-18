import CancelButton from "../buttons/CancelButton.tsx";
import SaveButton from "../buttons/SaveButton";


interface FormActionsProps {
    saveLabel?: string;
    onSave?: () => void;
    cancelLabel?: string;
    onCancel?: () => void;
    displays?: string;
}

export default function FormActions({
    onCancel, cancelLabel = 'Annuler', saveLabel = 'Enregistrer', onSave, displays
}: FormActionsProps) {
    const stl: string = displays ? displays : "none"
    return (<div className={'d-flex gap-4 m-2'} style={{float: stl as any}}>
        <CancelButton label={cancelLabel} onClick={onCancel} />
        <SaveButton label={saveLabel} onClick={onSave} />
    </div>);
}
