
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { PrimeReactProvider } from 'primereact/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css'; 
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';  
import 'primeflex/primeflex.css';  
import './css/index.css';  


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider >
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>,
)
