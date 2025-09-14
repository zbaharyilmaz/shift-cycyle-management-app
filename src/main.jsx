import React, { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from "./lib/reactQueryClient.js"
import "react-toastify/dist/ReactToastify.css";
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import {theme} from './styles/theme.js'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// Dynamically import React Query DevTools only in development
const ReactQueryDevtools = lazy(() => 
  import('@tanstack/react-query-devtools').then(module => ({
    default: module.ReactQueryDevtools
  }))
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}> 
          <CssBaseline />
          <App />
          </LocalizationProvider>
        </ThemeProvider>
      </ErrorBoundary>
      {import.meta.env.DEV && (
        <Suspense fallback={null}>
          <ReactQueryDevtools initialIsOpen={false} />
        </Suspense>
      )}
    </QueryClientProvider>
  </StrictMode>
)
