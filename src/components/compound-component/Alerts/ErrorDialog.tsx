import { Dialog } from "primereact/dialog";
import { Button, Image } from "react-bootstrap";

interface AtlErrorDialogProps {
    children?: React.ReactNode;
    visible?: boolean;
    onHide?: () => void;
}


function ErrorDialog({ children, onHide, visible }: AtlErrorDialogProps) {
    return (
        <Dialog
            visible={visible} className={"w-2/3 sm:w-1/2 md:w-1/3"} onHide={() => onHide && onHide()}

        >
            <div className="d-flex flex-column gap-4 text-center">
                <div className="d-flex justify-content-center">
                    <Image src="/src/assets/cancel.png" className="w-50" />
                </div>
                <div>
                    <h2 className="fw-bold fs-2">Erreur</h2>
                    <p className="m-0">{children}</p>
                </div>
                <Button className="bg-red-300 border-none" onClick={onHide} id="AtlErrorDialogButton">
                    Fermer
                </Button>
            </div>
        </Dialog>
    );
}

export default ErrorDialog;
