
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

interface Props{
    confirm: () => void;
    toatRef: any
}
export default function ConformDialog({confirm, toatRef }: Props) {
    return (
        <>
            <Toast ref={toatRef} />
            <ConfirmDialog />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm} icon="pi pi-check" label="Confirm" className="mr-2"></Button>

            </div>
        </>
    )
}
        