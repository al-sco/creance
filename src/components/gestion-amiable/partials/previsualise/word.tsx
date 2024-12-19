import  { useEffect, useState } from "react";
import mammoth from "mammoth";
import { useGestionAmiableStores } from "../../use-gestion-amiable-stores";


const WordPreview = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const stores = useGestionAmiableStores();
  const preview = async () => {
      try {
        const arrayBuffer = await stores.fileUrl.arrayBuffer(); 
        const { value: html } = await mammoth.convertToHtml({ arrayBuffer });
        setHtmlContent(html);
      } catch (error) {
        console.error("Erreur lors de la conversion du fichier Word:", error);
      }
  };

  useEffect(()=>{
    preview()
  },[stores.fileUrl, stores.previewFile])

  return (
    <div>
      <div
        id="word-preview"
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
        style={{ border: "1px solid #ccc", padding: "20px", marginTop: "20px", minHeight: "300px" }}
      />
    </div>
  );
};

export default WordPreview;
