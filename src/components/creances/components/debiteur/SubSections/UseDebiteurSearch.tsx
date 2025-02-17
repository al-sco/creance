import { useState, useCallback } from 'react';
import { useDebiteurStore } from '../../../stores/useDebiteurStore';
import { Toast } from 'primereact/toast';

interface UseDebiteurSearchProps {
  toast: React.RefObject<Toast>;
  onSearchComplete?: () => void;
}

export const useDebiteurSearch = ({ toast, onSearchComplete }: UseDebiteurSearchProps) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchDebCode, setSearchDebCode] = useState<number | null>(null);
  
  const { fetchDebiteurByCode } = useDebiteurStore();

  const handleSearch = useCallback(async () => {
    if (!searchDebCode) {
      toast.current?.show({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Veuillez saisir un code débiteur'
      });
      return;
    }

    try {
      setIsSearching(true);
      const result = await fetchDebiteurByCode(searchDebCode);
      
      if (result) {
        toast.current?.show({
          severity: 'success',
          summary: 'Succès',
          detail: 'Débiteur trouvé'
        });
        onSearchComplete?.();
      }
    } catch (error) {
      toast.current?.show({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Débiteur non trouvé'
      });
    } finally {
      setIsSearching(false);
      setSearchDebCode(null);
    }
  }, [searchDebCode, fetchDebiteurByCode, toast, onSearchComplete]);

  return {
    isSearching,
    searchDebCode,
    setSearchDebCode,
    handleSearch
  };
};