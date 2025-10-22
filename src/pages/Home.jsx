import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { Scissors, Clock, Award, Users } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">¿Por qué elegirnos?</h2>
            <p className="text-xl text-gray-600">Calidad y profesionalismo en cada servicio</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-secondary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors duration-300">
                <Scissors className="h-10 w-10 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cortes Profesionales</h3>
              <p className="text-gray-600">Técnicas modernas y clásicas</p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-secondary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors duration-300">
                <Users className="h-10 w-10 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Barberos Expertos</h3>
              <p className="text-gray-600">Años de experiencia</p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-secondary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors duration-300">
                <Clock className="h-10 w-10 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Horarios Flexibles</h3>
              <p className="text-gray-600">Agenda cuando quieras</p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-secondary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors duration-300">
                <Award className="h-10 w-10 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">100% satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para tu nuevo look?</h2>
          <p className="text-xl mb-8 text-gray-300">Agenda tu cita ahora y experimenta el mejor servicio</p>
          <Link to="/agendar-cita" className="btn-primary inline-block text-lg">
            Agendar Cita Ahora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2024 Barbería Elite. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
