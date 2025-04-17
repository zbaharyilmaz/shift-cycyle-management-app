import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { toastError, toastSuccess } from "../lib/toast";
import {
  addCycle,
  deleteCycle,
  getCycles,
  updateCycle,
} from "../services/cycleService";

export const useCycles = () => {
  const queryClient = useQueryClient();
  const [] = useQuery({
    queryKey: ["cycles"],
    queryFn: getCycles,
  });
  const addCycleMutation = useMutation({
    mutationFn: addCycle,
    onSuccess: () => {
      toastSuccess("Döngü eklendi.");
      queryClient.invalidateQueries(["cycles"]);
    },
    onError: () => {
      toastError: "Döngü eklenirken hata oluştu.";
    },
  });
  const deleteCycleMutation = useMutation({
    mutationFn: deleteCycle,
    onSuccess: () => {
      toastSuccess("Döngü silindi.");
      queryClient.invalidateQueries(["cycles"]);
    },
    onError: () => {
      toastError("Döngü silinirken hata oluştu.");
    },
  });
  const updateCycleMutation = useMutation({
    mutationFn: ({ id, data }) => updateCycleMutation(id, data),
    onSuccess: () => {
      toastSuccess("Döngü güncellendi.");
      queryClient.invalidateQueries(["cycles"]);
    },
    onError: () => {
      toastError("Döngü güncellenirken hata oluştu.");
    },
  });
  return(
    {
        cycles,
        isLoading,
        isError,
        addCycleMutation,
        updateCycleMutation,
        deleteCycleMutation,
    }
  )
};
