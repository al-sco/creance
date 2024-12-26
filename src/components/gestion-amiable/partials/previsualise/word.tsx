import  { useEffect, useState } from "react";
import mammoth from "mammoth";
import { useGestionAmiableStores } from "../../use-gestion-amiable-stores";
import { Button } from "react-bootstrap";



// const WordPreview = () => {
//   const [htmlContent, setHtmlContent] = useState("");
//   const stores = useGestionAmiableStores();
//   const preview = async () => {
//       try {
//         const arrayBuffer = await stores.fileUrl.arrayBuffer(); 
//         const { value: html } = await mammoth.convertToHtml({ arrayBuffer });
//         setHtmlContent(html);
//       } catch (error) {
//         console.error("Erreur lors de la conversion du fichier Word:", error);
//       }
//   };

//   useEffect(()=>{
//     preview()
//   },[stores.fileUrl, stores.previewFile])

//   return (
//     <div>
//       <div
//         id="word-preview"
//         dangerouslySetInnerHTML={{ __html: htmlContent }} 
//         style={{ border: "1px solid #ccc", padding: "20px", marginTop: "20px", minHeight: "300px" }}
//       />
//     </div>
//   );
// };

// export default WordPreview;


const WordPreview = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [fileName, setFileName] = useState("");
  const stores = useGestionAmiableStores();

  const preview = async () => {
    try {
      const arrayBuffer = await stores.fileUrl.arrayBuffer();
      const { value: html } = await mammoth.convertToHtml({ arrayBuffer });
      setHtmlContent(html);
      setFileName(stores.fileUrl.name || "document.docx"); // Nom du fichier
    } catch (error) {
      console.error("Erreur lors de la conversion du fichier Word:", error);
    }
  };

  const handleDownload = () => {
    const url = URL.createObjectURL(stores.fileUrl);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName; // Télécharge le fichier avec le nom d'origine
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    preview();
  }, [stores.fileUrl, stores.previewFile]);

  return (
    <div style={{ padding: "20px" }}>
      <div className="justify-items-end w-full">
      <Button className="float-ritgth border-none"  variant="success"
        onClick={handleDownload}
        style={{
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Télécharger le fichier
      </Button>
      </div>
      <div
        id="word-preview"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          marginTop: "20px",
          minHeight: "300px",
          backgroundColor: "#f9f9f9",
          overflowY: "auto",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      />
    </div>
  );
};

export default WordPreview;
// import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

// const WordPreview = () => {
//   const stores = useGestionAmiableStores();
//   const uri = URL.createObjectURL(stores.fileUrl)
//   const docs = [
//     {
//       uri: uri,
//       fileName: stores.fileUrl.name || "document.docx",
//     },
//   ];

//   useEffect(() => {
//     // Nettoyez l'URL après que le composant soit démonté
//     return () => {
//       URL.revokeObjectURL(uri);
//     };
//   }, [uri]);
 
//   return (
//     <div style={{ padding: "20px" }}>
//        <a href={uri} target="_blank" rel="noopener noreferrer">Télécharger le fichier</a>
//       <DocViewer
//         documents={docs}
//         pluginRenderers={DocViewerRenderers}
//         style={{ height: "80vh", border: "1px solid #ccc" }}
//       />
//     </div>
//   );
// };

// export default WordPreview;