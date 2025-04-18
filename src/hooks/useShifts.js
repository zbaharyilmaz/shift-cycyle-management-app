import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { toastError, toastSuccess } from "../lib/toast";
import {
  createShift,
  updateShift,
  getShifts,
  deleteShift,
} from "../services/ShiftService";

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
  const addShiftMutation = useMutation({
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
    mutationFn: ({ id, data }) => updateShift(id, data),
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
    onSuccess: () => {
      toastSuccess("Vardiya başarıyla silindi.");
      queryClient.invalidateQueries(["shifts"]);
    },
    onError: () => {
      toastError("Vardiya silinirken bir hata oluştu.");
    },
  });
  return {
    shifts,
    isLoading,
    isError,
    addShiftMutation,
    updateShiftMutation,
    deleteShiftMutation,
  };
};
