import React from 'react'
import ReactDOM from 'react-dom/client'
import {Toaster} from 'react-hot-toast'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router}>
          <h1 className='font-inria text-3xl'>This is Inria Serif</h1>
        </RouterProvider>
    </AuthProvider> 
  </React.StrictMode>,
)
