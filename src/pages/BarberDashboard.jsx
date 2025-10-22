import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useData } from '../context/DataContext'
import { useAuth } from '../context/AuthContext'
import { Calendar, Scissors } from 'lucide-react'

const BarberDashboard = () => {
  const { services, appointments } = useData()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('appointments')

  // Filter appointments for the current barber
  const myAppointments = appointments.filter(
    appointment => appointment.barberName === user?.name
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Panel de Barbero</h1>
          <p className="text-xl text-gray-600">Bienvenido, {user?.name}</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`pb-4 px-4 font-semibold transition-colors ${
              activeTab === 'appointments'
                ? 'border-b-2 border-secondary text-secondary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Calendar className="inline h-5 w-5 mr-2" />
            Mis Citas Agendadas
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`pb-4 px-4 font-semibold transition-colors ${
              activeTab === 'services'
                ? 'border-b-2 border-secondary text-secondary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Scissors className="inline h-5 w-5 mr-2" />
            Servicios Disponibles
          </button>
        </div>

        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Mis Citas Agendadas ({myAppointments.length})</h2>
            <div className="grid gap-4">
              {myAppointments.length === 0 ? (
                <div className="card text-center py-12">
                  <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No tienes citas agendadas</p>
                </div>
              ) : (
                myAppointments.map((appointment) => (
                  <div key={appointment.id} className="card">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-2">{appointment.clientName}</h3>
                        <div className="grid md:grid-cols-2 gap-2 text-gray-600">
                          <p><strong>Teléfono:</strong> {appointment.clientPhone}</p>
                          <p><strong>Servicio:</strong> {appointment.serviceName}</p>
                          <p><strong>Precio:</strong> ${appointment.servicePrice}</p>
                          <p><strong>Fecha:</strong> {appointment.date}</p>
                          <p><strong>Hora:</strong> {appointment.time}</p>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                        Confirmada
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Servicios Disponibles ({services.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <div key={service.id} className="card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">{service.name}</h3>
                    <div className="bg-secondary text-primary px-4 py-2 rounded-full font-bold">
                      ${service.price}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{service.description}</p>
                  <div className="text-sm text-gray-500">
                    <strong>Duración:</strong> {service.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BarberDashboard
