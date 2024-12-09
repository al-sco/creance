
import {Icon} from "@iconify/react";
import { Button } from "react-bootstrap";

interface AddButtonProps {
    label?: string;
    onClick?: () => void;
}

/**
 *
 * @param label
 * @param onClick
 * @constructor
 */
export default function AddButton({label, onClick}: AddButtonProps) {
    return (
        <Button
                onClick={onClick}
                className="bg-orange-500 hover:bg-orange-300 border-none"
                style={{height: 40}}
                >
                  <span className="d-flex"> <Icon icon="fa-solid:plus" className={label && 'mr-2 mt-1'} /> {label}</span>
                </Button>
    );
}
