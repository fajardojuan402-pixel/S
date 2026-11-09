import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

// Layout para páginas internas (con navbar completa y footer).
export default function Layout({ children, wide = false }) {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <Navbar />
      <main className="flex-1">
        <div className={`mx-auto w-full px-5 py-10 lg:px-8 ${wide ? 'max-w-7xl' : 'max-w-6xl'}`}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
