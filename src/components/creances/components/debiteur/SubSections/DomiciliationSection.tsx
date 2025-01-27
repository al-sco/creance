import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";

export function DomiciliationSection() {
    return (
      <div className="subtitle-content">
        <div className="form-grid">
          <div className="form-row">
            <div className="form-group">
              <label>Adresse complète :</label>
              <InputText placeholder="Ex: 12 Rue de la Paix" />
            </div>
            
            <div className="form-group">
              <label>Code postal :</label>
              <InputText placeholder="75000" />
            </div>
          </div>
  
          <div className="form-row">
            <div className="form-group">
              <label>Date d'emménagement :</label>
              <Calendar 
                dateFormat="dd/mm/yy" 
                placeholder="jj/mm/aaaa"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }