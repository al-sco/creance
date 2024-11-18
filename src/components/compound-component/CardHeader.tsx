
import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

interface CardHeaderProps {
    title: string;
    subTitle?: string;
    actions?: ReactNode;
}

export function CardHeader({ title, subTitle, actions }: CardHeaderProps) {
    return (
        <Row className="d-flex justify-content-between align-items-center">
            <Col>
                <h1 className="h2 font-weight-bold">{title}</h1>
                {subTitle && <p className="text-muted mt-2">{subTitle}</p>}
            </Col>
            {
                actions && (
                    <Col xs="auto">
                        {actions}
                    </Col>
                )
            }
        </Row>
    )
}
