import { useState } from 'react';
import { PhysiqueSection } from './PhysiqueSection';
import { DomiciliationSection } from './DomiciliationSection';

export function PhysiqueEtDomiciliationTabs() {
  const [activeTab, setActiveTab] = useState<'physique' | 'domiciliation'>('physique');

  return (
    <div className="custom-tabs">
      {/* En-tête des onglets côte à côte */}
      <div className="tab-header">
        <button 
          className={`tab-btn ${activeTab === 'physique' ? 'active' : ''}`}
          onClick={() => setActiveTab('physique')}
        >
          Physique
        </button>
        
        <button 
          className={`tab-btn ${activeTab === 'domiciliation' ? 'active' : ''}`}
          onClick={() => setActiveTab('domiciliation')}
        >
          Domiciliation
        </button>
      </div>

      {/* Contenu */}
      {activeTab === 'physique' && <PhysiqueSection />}
      {activeTab === 'domiciliation' && <DomiciliationSection />}
    </div>
  );
}