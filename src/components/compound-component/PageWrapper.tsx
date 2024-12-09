import { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface PageWrapperProps {
    children?: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <div className="d-flex flex-column vh-100" style={{ backgroundColor: '#f5f5f5' }}>
            <main className="flex-grow-1 p-4 overflow-auto">
                <div className="m-5">{children}</div>
            </main>
            <footer className="py-3 bg-light mt-auto">
                <Container>
                    <Row className="d-flex justify-content-between align-items-center">
                        <Col>
                            <span className="font-weight-bold text-muted">2024</span> &copy; tout droit reservé
                        </Col>
                        <Col className="d-flex justify-content-end gap-4">
                            <a href="#">A propos</a>
                            <a href="#">Contact</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default PageWrapper;
