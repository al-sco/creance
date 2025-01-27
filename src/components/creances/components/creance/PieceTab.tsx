import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FaTimes } from 'react-icons/fa';

type PieceField = {
  typePiece: string;
  libelle: string;
  reference: string;
};

export function PieceTab() {
  const [pieces, setPieces] = useState<PieceField[]>([{ 
    typePiece: '', 
    libelle: '', 
    reference: '' 
  }]);

  const typePieceOptions = [
    { label: 'Contrat', value: 'contrat' },
    { label: 'Facture', value: 'facture' },
    { label: "L'abeille", value: 'abeille' }
  ];

  const addPiece = () => {
    setPieces([...pieces, { 
      typePiece: '', 
      libelle: '', 
      reference: '' 
    }]);
  };

  const removePiece = (index: number) => {
    setPieces(pieces.filter((_, i) => i !== index));
  };

  return (
    <div className="piece-container">
      
      {pieces.map((piece, index) => (
        <div key={index} className="piece-row">
          {/* Bouton de suppression */}
          {index > 0 && (
            <button 
              className="remove-btn"
              onClick={() => removePiece(index)}
            >
              <FaTimes className="icon-red" />
            </button>
          )}

          {/* Champs alignés verticalement */}
          <div className="form-group">
            <label>Type Pièce</label>
            <Dropdown
              value={piece.typePiece}
              options={typePieceOptions}
              placeholder="Sélectionner"
            />
          </div>

          <div className="form-group">
            <label>Libellé</label>
            <InputText value={piece.libelle} />
          </div>

          <div className="form-group">
            <label>Référence</label>
            <InputText value={piece.reference} />
          </div>

          {/* Bouton Ajouter modifié */}
          {index === pieces.length - 1 && (
            <Button 
              label="Ajouter" 
              className="p-button-success add-button"
              onClick={addPiece}
            />
          )}
        </div>
      ))}
    </div>
  );
}