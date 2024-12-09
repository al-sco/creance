import { ReactNode } from "react";
import { Container } from "react-bootstrap";

interface Props {
    children: ReactNode;
}
export function CardForm({ children }: Props) {
    return (
        <Container className="p-4 border-none">
            <div className="m-5 p-5 pt-0 mt-0">
                {children}
            </div>
        </Container>
    )
}