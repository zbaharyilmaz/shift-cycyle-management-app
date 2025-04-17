import { QueryClient } from  '@tanstack/react-query';

const queryClient= new QueryClient({
    defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 1,
        },
      }
})
export default queryClient