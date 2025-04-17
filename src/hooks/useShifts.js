import { useQuery, useQueryClient } from "@tanstack/react-query";





export const useShifts=()=>{
    const queryClient= useQueryClient();
    const {data:shifts, isLoading, isError}= useQuery({
        queryKey:["shifts"],
        queryFn:getShifts,
    });
    const 







}