import axiosInstance from "../api/axiosInstance";

export const getCycles = async () => {
  const response = await axiosInstance.get("/mockCycles");
  return response.data;
};

export const addCycle = async (data) => {
  const response = await axiosInstance.post("/mockCycles", data);
  return response.data;
};

export const deleteCycle = async (id) => {
  const response = await axiosInstance.delete(`/mockCycles/${id}`);
  return response.data;
};

export const updateCycle = async (id, data) => {
  const response = await axiosInstance.put(`/mockCycles/${id}`, data);
  return response.data;
};
