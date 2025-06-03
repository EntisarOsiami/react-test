import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout() {
  return (
    <div className='min-h-screen flex flex-col justify-center'>
        <Navbar />
        <main className='flex-1 justify-center'>
            <Outlet />
        </main>
        <Footer />

    </div>
  )
}

export default Layout