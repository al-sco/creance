
import { Button } from 'react-bootstrap';
import { useGestionAmiableStores } from '../../use-gestion-amiable-stores';
import { Dialog } from 'primereact/dialog';

function PDFPage() {
    const stores = useGestionAmiableStores()
    return (
        <>
            <Dialog visible={stores.previewFile} onHide={() => stores.setPreviewFile(!stores.previewFile)} header={<span className='text-orange-500 font-bold'>Previsualisation</span>} style={{ width: "70vw" }}>
                <div className='p-4'>
                    {stores.fileUrl ? (
                        <iframe
                            src={stores.fileUrl}
                            frameBorder="0"
                            width="100%"
                            height="700px"
                            title="PDF Preview"
                            style={{
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            }}
                            className='bg-gray-800'
                        />
                    ) : (
                        <p className="text-center">Pas de fichier</p>
                    )}
                </div>
                <div className='d-flex justify-content-end'>
                    <Button className='bg-orange-500 border-none ' onClick={() => stores.setPreviewFile(!stores.previewFile)}>
                        Former
                    </Button>
                </div>
            </Dialog>

        </>
    )
}
export default PDFPage
