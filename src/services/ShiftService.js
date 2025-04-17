import axiosInstance from "../api/axiosInstance"

export const getShifts=()=> axiosInstance.get("/mockShifts")
export const createShift=(data)=>axiosInstance.post("/mockShifts", data)
export const deleteShift=(id)=>axiosInstance.delete(`/mockShifts/${id}`)
export const updateShift=(id, data)=>axiosInstance.put(`/mockShifts/${id}`, data)