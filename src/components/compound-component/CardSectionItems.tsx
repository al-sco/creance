import { ReactNode } from "react";
import { Button } from "react-bootstrap";

interface CardSectionItemsProps {
    children: ReactNode;
    onUpdate?:()=> void;
}

export function CardSectionItems({ children, onUpdate }: CardSectionItemsProps) {
    return (
        <div className="card mb-2 mb-2 mt-0 p-2 bg-green-50">
            <div className="d-flex gap-4 ">{children}</div>
            <div className="d-flex justify-content-end">
                    <Button className="bg-orange-500 hover:bg-orange-300 border-none" style={{height: 35}} onClick={onUpdate}>Modifier</Button>
                    </div>
        </div>

    )
}