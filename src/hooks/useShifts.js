import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toastError, toastSuccess } from "../lib/toast";
import {
  createShift,
  deleteShift,
  getShifts,
  updateShift,
} from "../services/shiftService";

export const useShifts = () => {
  const queryClient = useQueryClient();
  const {
    data: shifts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["shifts"],
    queryFn: getShifts,
  });
  const createShiftMutation = useMutation({
    mutationFn: createShift,
    onSuccess: () => {
      toastSuccess("Vardiya eklendi.");
      queryClient.invalidateQueries(["shifts"]);
    },
    onError: () => {
      toastError("Vardiya eklenirken hata oluştu.");
    },
  });
  const updateShiftMutation = useMutation({
    mutationFn: ({ id, data }) => updateShift(IdleDeadline, data),
    onSuccess: () => {
      toastSuccess("Vardiya güncellendi.");
      queryClient.invalidateQueries(["shifts"]);
    },
    onError: () => {
      toastError("Vardiya güncellenirken hata oluştu.");
    },
  });
  const deleteShiftMutation = useMutation({
    mutationFn: deleteShift,
    onSuccesss: () => {
      toastSuccess("Vardiya silindi");
      queryClient.invalidateQueries(["shifts"]);
    },
  });
  return(
    {
        shifts,
        isLoading,
        isError,
        createShiftMutation,
        updateShiftMutation,
        deleteShiftMutation,    
    }
  )
};
