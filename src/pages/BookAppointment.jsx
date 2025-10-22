import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useData } from '../context/DataContext'
import { Calendar, User, Phone, Scissors, Clock, CheckCircle } from 'lucide-react'

const BookAppointment = () => {
  const { services, barbers, addAppointment } = useData()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    clientName: '',
    clientPhone: '',
    barberId: '',
    serviceId: '',
    date: '',
    time: ''
  })
  
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const sendMessage = async (to, message) => {
    try {
      const response = await fetch('http://localhost:3001/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, message })
      })
      
      const data = await response.json()
      
      // Mostrar en consola qué método se usó
      if (data.method === 'whatsapp') {
        console.log('✅ Mensaje enviado por WhatsApp:', data.sid)
      } else if (data.method === 'sms') {
        console.log('✅ Mensaje enviado por SMS:', data.sid)
      } else if (data.method === 'sms-simulated') {
        console.log('⚠️ SMS simulado (Cuenta Trial - número no verificado)')
        console.log('💡 Actualiza a cuenta de producción para enviar SMS reales')
      } else {
        console.log('📱 Mensaje simulado')
      }
      
      return data
    } catch (error) {
      console.error('❌ Error al enviar mensaje:', error)
      return { success: false, error: error.message }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const selectedBarber = barbers.find(b => b.id === parseInt(formData.barberId))
    const selectedService = services.find(s => s.id === parseInt(formData.serviceId))
    
    const appointment = {
      ...formData,
      barberName: selectedBarber?.name,
      serviceName: selectedService?.name,
      servicePrice: selectedService?.price
    }
    
    addAppointment(appointment)
    
    // Enviar mensaje al cliente (WhatsApp o SMS)
    console.log('📱 Enviando mensaje al cliente:', formData.clientPhone)
    const clientMessage = `Hola ${formData.clientName}! Tu cita en Barberia Elite fue agendada. Fecha: ${formData.date} - Hora: ${formData.time} - Barbero: ${selectedBarber?.name}. Te esperamos!`
    
    const clientResult = await sendMessage(formData.clientPhone, clientMessage)
    
    if (clientResult.success) {
      console.log('✅ Mensaje al cliente enviado exitosamente')
    } else {
      console.error('❌ Error al enviar mensaje al cliente:', clientResult.error)
      alert(`Error al enviar mensaje al cliente: ${clientResult.error}`)
    }
    
    // Enviar mensaje al barbero (WhatsApp o SMS)
    if (selectedBarber?.phone) {
      console.log('📱 Enviando mensaje al barbero:', selectedBarber.phone)
      const barberMessage = `Nueva cita: ${formData.clientName} - Tel: ${formData.clientPhone} - Servicio: ${selectedService?.name} - ${formData.date} a las ${formData.time}`
      
      const barberResult = await sendMessage(selectedBarber.phone, barberMessage)
      
      if (barberResult.success) {
        console.log('✅ Mensaje al barbero enviado exitosamente')
      } else {
        console.error('❌ Error al enviar mensaje al barbero:', barberResult.error)
      }
    }
    
    setShowSuccess(true)
    
    setTimeout(() => {
      setShowSuccess(false)
      setFormData({
        clientName: '',
        clientPhone: '',
        barberId: '',
        serviceId: '',
        date: '',
        time: ''
      })
    }, 3000)
  }

  const isFormValid = () => {
    return formData.clientName && 
           formData.clientPhone && 
           formData.barberId && 
           formData.serviceId && 
           formData.date && 
           formData.time
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Agendar Cita</h1>
          <p className="text-xl text-gray-600">Completa el formulario para reservar tu cita</p>
        </div>

        <div className="card max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Client Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <User className="inline h-5 w-5 mr-2" />
                Nombre Completo
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                className="input-field"
                placeholder="Ingresa tu nombre completo"
                required
              />
            </div>

            {/* Client Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Phone className="inline h-5 w-5 mr-2" />
                Teléfono
              </label>
              <input
                type="tel"
                name="clientPhone"
                value={formData.clientPhone}
                onChange={handleChange}
                className="input-field"
                placeholder="+57XXXXXXXXXX"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Formato: +57 seguido de tu número (10 dígitos)</p>
            </div>

            {/* Select Barber */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Scissors className="inline h-5 w-5 mr-2" />
                Seleccionar Barbero
              </label>
              <select
                name="barberId"
                value={formData.barberId}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Selecciona un barbero</option>
                {barbers.map((barber) => (
                  <option key={barber.id} value={barber.id}>
                    {barber.name} - {barber.specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* Select Service */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Scissors className="inline h-5 w-5 mr-2" />
                Seleccionar Servicio
              </label>
              <select
                name="serviceId"
                value={formData.serviceId}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Selecciona un servicio</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} - ${service.price} ({service.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="inline h-5 w-5 mr-2" />
                Fecha
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="input-field"
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Clock className="inline h-5 w-5 mr-2" />
                Hora
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Selecciona una hora</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
                <option value="18:00">06:00 PM</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={!isFormValid()}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Agendar Cita
            </button>
          </form>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center animate-bounce">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary mb-2">¡Cita Agendada!</h2>
              <p className="text-xl text-gray-600 mb-4">Tu cita fue agendada exitosamente</p>
              <p className="text-gray-500">Te esperamos en la fecha y hora seleccionada</p>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-primary text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2024 Barbería Elite. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default BookAppointment
