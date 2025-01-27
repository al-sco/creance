import { Dropdown } from 'primereact/dropdown';

export function CategorieSection() {
  const categories = [
    { label: 'Propriétaire', value: 'proprietaire' },
    { label: 'Gar. phys.', value: 'gar_phys' }
  ];

  return (
    <div className="form-group">
      <label>Catégorie :</label>
      <Dropdown 
        options={categories} 
        placeholder="Sélectionner" 
        className="dropdown"
      />
    </div>
  );
}