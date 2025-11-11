import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './context/ContextProvider.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <ProductProvider>
        <App/>
      </ProductProvider>
    </ContextProvider>
  </StrictMode>,
)
