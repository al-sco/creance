
import {Icon} from "@iconify/react";
import { Button } from "react-bootstrap";

interface CancelButtonProps {
    label: string;
    onClick?: () => void;
}

export default function CancelButton({label, onClick}: CancelButtonProps) {
    return (
        <Button 
                onClick={onClick}
                type={'reset'}
                variant="outline-secondary"
                ><span className="d-flex"><Icon icon="ep:close-bold" className={'mr-2 mt-1'} />{label}</span></Button>
    );
}
