import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router';
import { router } from "./router";
import CartCtxProvider from "./contexts/CartContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartCtxProvider>
      <RouterProvider router={router} />
    </CartCtxProvider>
  </StrictMode>,
)

