import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Scissors, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const getDashboardLink = () => {
    if (user?.role === 'admin') return '/admin'
    if (user?.role === 'barber') return '/barbero'
    return '/'
  }

  return (
    <nav className="bg-primary text-white shadow-2xl sticky top-0 z-50 border-b-2 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Scissors className="h-9 w-9 text-secondary group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-3xl font-bold text-secondary tracking-wide">Barbería Elite</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-secondary transition-colors duration-300 font-medium">
              Inicio
            </Link>
            <Link to="/servicios" className="hover:text-secondary transition-colors duration-300 font-medium">
              Servicios
            </Link>
            <Link to="/agendar-cita" className="hover:text-secondary transition-colors duration-300 font-medium">
              Agendar Cita
            </Link>
            
            {user ? (
              <>
                <Link 
                  to={getDashboardLink()} 
                  className="hover:text-secondary transition-colors duration-300 font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-secondary text-primary px-5 py-2.5 rounded-lg hover:bg-gold transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Salir</span>
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="bg-secondary text-primary px-6 py-2.5 rounded-lg hover:bg-gold transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-secondary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="hover:text-secondary transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/servicios" 
                className="hover:text-secondary transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                to="/agendar-cita" 
                className="hover:text-secondary transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Agendar Cita
              </Link>
              
              {user ? (
                <>
                  <Link 
                    to={getDashboardLink()} 
                    className="hover:text-secondary transition-colors duration-300 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsOpen(false)
                    }}
                    className="text-left hover:text-secondary transition-colors duration-300 font-medium"
                  >
                    Salir
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  className="hover:text-secondary transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
