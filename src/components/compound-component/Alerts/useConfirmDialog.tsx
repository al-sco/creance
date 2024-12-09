import { useRef } from "react";
import { confirmDialog } from 'primereact/confirmdialog';

const useConfirm = () => {
  const toast = useRef<any>(null);

  const accept = () => {
    toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
  }

  const reject = () => {
    toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  }

  const confirm = () => {
    confirmDialog({
      message: 'Etes-vous sûr de vouloir fait cette action',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      defaultFocus: 'accept',
      accept,
      reject
    });
  };

  return { confirm };
};

export default useConfirm;




