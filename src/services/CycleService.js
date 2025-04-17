import axiosInstance from "../api/axiosInstance";

export const getCycles=()=>axiosInstance.get("/mockCycles")
export const addCycle=(data)=>axiosInstance.post("/mockCycles", data)
export const deleteCycle=(id)=>axiosInstance.delete(`/mockCycles/${id}`)
export const updateCycle=(id, data)=>axiosInstance.put(`/mockCycles/${id}`, data)