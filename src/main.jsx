import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './context/themeContext.jsx'
import { AuthContextProvider } from './context/authContext.jsx'
import { NotifContextProvider } from './context/notifContext.jsx'
import { TemaContextProvider } from './context/temaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <TemaContextProvider>
      <NotifContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
      </NotifContextProvider>
      </TemaContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
