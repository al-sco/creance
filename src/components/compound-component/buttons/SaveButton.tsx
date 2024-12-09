
import {Icon} from "@iconify/react";
import { Button } from "react-bootstrap";

interface SaveButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    severity?: "secondary" | "success" | "info" | "warning" | "danger" | "help";

}

export default function SaveButton({label, onClick, disabled }: SaveButtonProps) {
    return (
        <div >
            <Button
                onClick={onClick}
                disabled={disabled}
                className="bg-orange-500 hover:bg-orange-300 border-none"
                ><span className="d-flex"><Icon icon="fa:floppy-o" className={'mr-2 mt-1'} />{label}</span></Button>
        </div>
    );
}
