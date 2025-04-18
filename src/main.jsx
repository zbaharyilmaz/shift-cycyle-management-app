import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from "./lib/reactQueryClient.js"
import "react-toastify/dist/ReactToastify.css";
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import {theme} from './styles/theme.js'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)
