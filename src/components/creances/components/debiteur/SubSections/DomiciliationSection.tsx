import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../../../styles/domiciliation.css';

interface DomiciliationLine {
  id: number;
  typdomCode: string;
  typdomLib: string;
  domCode: string;
  domLib: string;  
  bqagCode: string;
  bqagLib: string;
  bqLib: string;
}

export function DomiciliationSection() {
  const [domiciliations, setDomiciliations] = useState<DomiciliationLine[]>([{
    id: 1,
    typdomCode: '',
    typdomLib: '',
    domCode: '',
    domLib: '',
    bqagCode: '',
    bqagLib: '',
    bqLib: ''
  }]);

  const addNewLine = () => {
    setDomiciliations([...domiciliations, {
      id: domiciliations.length + 1,
      typdomCode: '',
      typdomLib: '',
      domCode: '',
      domLib: '',
      bqagCode: '',
      bqagLib: '',
      bqLib: ''
    }]);
  };

  const removeLine = (id: number) => {
    setDomiciliations(domiciliations.filter(dom => dom.id !== id));
  };

  return (
    <div className="domiciliation-screen">
      {domiciliations.map((dom) => (
        <div key={dom.id} className="domiciliation-line">
          <div className="domiciliation-group">
            <div className="input-row">
            <label>Type :</label>
              <InputText className="dom-input" placeholder="Code" />
              <InputText className="dom-input" placeholder="Libellé" />
              <Button icon="pi pi-search" className="valider_button" />
            </div>
          </div>

          <div className="domiciliation-group">
            <div className="input-row">
              <label>Code Domicile :</label>
              <InputText className="dom-inputs" />
              <label>Libellé Domicile :</label>
              <InputText className="dom-inputs" />
            </div>
          </div>

          <div className="domiciliation-group">
            <div className="input-row">
            <label>Infos banque :</label>
              <InputText className="dom-input" placeholder="Code agence" />
              <InputText className="dom-input" placeholder="Libellé agence" />
              <InputText className="dom-input" placeholder="Libellé banque" />
              <Button icon="pi pi-search" className="valider_button" />
            </div>
          </div>

          {dom.id !== 1 && (
            <Button 
              icon="pi pi-times" 
              className="p-button-danger" 
              onClick={() => removeLine(dom.id)}
            />
          )}
        </div>
      ))}
      
      <Button 
        label="Ajouter" 
        icon="pi pi-plus" 
        className="dom-add-button"
        onClick={addNewLine}
      />
    </div>
  );
}