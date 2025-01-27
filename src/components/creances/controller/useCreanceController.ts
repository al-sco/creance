import { CreanceModel } from "../model/creances.model";
import { useCreanceStore } from "../stores/useCreanceStore";

export function useCreanceController() {
  const store = useCreanceStore();

  return {
    ...store,
    handleCreate: async (data: CreanceModel) => {
      // Logique de création à implémenter
    }
  };
}