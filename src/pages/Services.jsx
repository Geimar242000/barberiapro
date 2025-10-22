import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useData } from '../context/DataContext'
import { Clock, DollarSign } from 'lucide-react'

const Services = () => {
  const { services } = useData()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600">Servicios profesionales para tu mejor estilo</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="card group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary">{service.name}</h3>
                <div className="bg-secondary text-primary px-4 py-2 rounded-full font-bold">
                  ${service.price}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="flex items-center text-gray-500 space-x-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/agendar-cita" className="btn-primary inline-block text-lg">
            Agendar una Cita
          </Link>
        </div>
      </div>

      <footer className="bg-primary text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2024 Barbería Elite. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Services
