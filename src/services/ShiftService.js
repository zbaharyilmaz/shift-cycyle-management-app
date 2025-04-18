import axiosInstance from "../api/axiosInstance";

export const getShifts = async () => {
  const response = await axiosInstance.get("/mockShifts");
  return response.data;
};

export const createShift = async (data) => {
  const response = await axiosInstance.post("/mockShifts", data);
  return response.data;
};

export const deleteShift = async (id) => {
  const response = await axiosInstance.delete(`/mockShifts/${id}`);
  return response.data;
};

export const updateShift = async (id, data) => {
  const response = await axiosInstance.put(`/mockShifts/${id}`, data);
  return response.data;
};
