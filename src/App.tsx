import { Outlet, useLocation, Navigate } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/header/navbar/Navbar'
import SecondaryNav from './components/header/secondary/SecondaryNav'
function App() {
  return (
    <>
      <SecondaryNav />
      <div className='container mx-auto main-background min-h-screen drop-shadow'>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export const ProtectedMainRoute = () => {
  const location = useLocation()

  return location.pathname === '/' ? <Navigate to='/home' replace /> : <App />
}

export default App
