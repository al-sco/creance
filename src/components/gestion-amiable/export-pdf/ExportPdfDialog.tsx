
import  { useEffect, useRef, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import * as pdfjsLib from 'pdfjs-dist';

interface Props {
  visible?: boolean;
  onHide?: () => void;
  pdfPath?: "/Feuillet-pauvre.pdf"; 
}

export default function ExportPdfDialog({ visible, onHide, pdfPath }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const loadPdf = async () => {
      if (visible) {
        try {
 
          const pdf = await pdfjsLib.getDocument(pdfPath).promise;

       
          const page = await pdf.getPage(1);

          const viewport = page.getViewport({ scale: 1.5 });
          const canvas = canvasRef.current!;
          const context = canvas.getContext('2d')!;
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise;
        } catch (error) {
          console.error('Erreur lors du chargement du PDF :', error);
        }finally{
          setLoading(false)
        }
      }
    };

    loadPdf();
  }, [visible, pdfPath]);

  return (
    <Dialog visible={visible} onHide={()=> onHide && onHide()} style={{ width: '80vw' }}>
      {
        loading ? "Loading..." : <canvas ref={canvasRef} style={{ width: '100%' }} />
      }
      
    </Dialog>
  );
}
