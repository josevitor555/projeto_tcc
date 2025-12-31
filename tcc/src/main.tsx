// Importações
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Estilos css
import './index.css'

// Componente da Aplicação
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
