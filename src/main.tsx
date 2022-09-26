import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProtectedMainRoute } from './App'
import './style/index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReadPage from './pages/readpage/ReadPage'
import MainPage from './pages/mainpage/MainPage'
import NotFound from './pages/404/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedMainRoute />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/page/:pageid',
        element: <ReadPage />,
      },
      {
        path: '/home',
        element: <MainPage />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
