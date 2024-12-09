import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


interface Props {
    ispdfShow: boolean;
    setPdfShow: (ispdfShow: boolean) => void;
}
function PDFPage({ ispdfShow, setPdfShow }: Props) {

    const [data, setData] = useState({
        file: "",
        date: new Date(),
        id: "1"
    });
    function handleFile(e: any) {
        setData({ ...data, file: URL.createObjectURL(e.target.files[0]) });
    }

    return (
        <>
            <div >
                <label htmlFor="filePicker" >
                    uploder
                </label>
                <input id="filePicker" type="file" style={{ visibility: "hidden" }} onChange={handleFile}
                />
            </div>
            <Modal show={ispdfShow} size="xl" fullscreen="xl-down">
                <Modal.Header closeButton onClick={() => setPdfShow(!ispdfShow)} >
                    <Modal.Title>Previsualisation</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center">
                    {data.file ? (
                        <iframe
                            src={data.file}
                            frameBorder="0"
                            width="100%"
                            height="700px"
                            title="PDF Preview"
                        />
                    ) : (
                        <p className="text-center">Pas de fichier</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setPdfShow(!ispdfShow)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default PDFPage
