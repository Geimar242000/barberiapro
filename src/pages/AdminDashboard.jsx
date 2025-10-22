import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useData } from '../context/DataContext'
import { useAuth } from '../context/AuthContext'
import { Calendar, Scissors, Users, Edit2, Trash2, Plus, X, Image as ImageIcon, Upload } from 'lucide-react'

const AdminDashboard = () => {
  const { services, barbers, appointments, bannerSlides, addService, updateService, deleteService, addBarber, updateBarber, deleteBarber, deleteAppointment, addBannerSlide, updateBannerSlide, deleteBannerSlide } = useData()
  const { user } = useAuth()
  
  const [activeTab, setActiveTab] = useState('appointments')
  const [showServiceModal, setShowServiceModal] = useState(false)
  const [showBarberModal, setShowBarberModal] = useState(false)
  const [showBannerModal, setShowBannerModal] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [editingBarber, setEditingBarber] = useState(null)
  const [editingSlide, setEditingSlide] = useState(null)
  
  const [serviceForm, setServiceForm] = useState({
    name: '',
    price: '',
    duration: '',
    description: ''
  })
  
  const [barberForm, setBarberForm] = useState({
    name: '',
    specialty: '',
    experience: '',
    image: '👨‍🦱',
    phone: ''
  })

  const [slideForm, setSlideForm] = useState({
    title: '',
    subtitle: '',
    description: '',
    image: ''
  })

  const handleServiceSubmit = (e) => {
    e.preventDefault()
    if (editingService) {
      updateService(editingService.id, serviceForm)
    } else {
      addService(serviceForm)
    }
    setShowServiceModal(false)
    setEditingService(null)
    setServiceForm({ name: '', price: '', duration: '', description: '' })
  }

  const handleBarberSubmit = (e) => {
    e.preventDefault()
    if (editingBarber) {
      updateBarber(editingBarber.id, barberForm)
    } else {
      addBarber(barberForm)
    }
    setShowBarberModal(false)
    setEditingBarber(null)
    setBarberForm({ name: '', specialty: '', experience: '', image: '👨‍🦱', phone: '' })
  }

  const openEditService = (service) => {
    setEditingService(service)
    setServiceForm(service)
    setShowServiceModal(true)
  }

  const openEditBarber = (barber) => {
    setEditingBarber(barber)
    setBarberForm(barber)
    setShowBarberModal(true)
  }

  const handleSlideSubmit = (e) => {
    e.preventDefault()
    if (editingSlide) {
      updateBannerSlide(editingSlide.id, slideForm)
    } else {
      addBannerSlide(slideForm)
    }
    setShowBannerModal(false)
    setEditingSlide(null)
    setSlideForm({ title: '', subtitle: '', description: '', image: '' })
  }

  const openEditSlide = (slide) => {
    setEditingSlide(slide)
    setSlideForm(slide)
    setShowBannerModal(true)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSlideForm({ ...slideForm, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Panel de Administración</h1>
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
            Citas Agendadas
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
            Servicios
          </button>
          <button
            onClick={() => setActiveTab('barbers')}
            className={`pb-4 px-4 font-semibold transition-colors ${
              activeTab === 'barbers'
                ? 'border-b-2 border-secondary text-secondary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Users className="inline h-5 w-5 mr-2" />
            Barberos
          </button>
          <button
            onClick={() => setActiveTab('banner')}
            className={`pb-4 px-4 font-semibold transition-colors ${
              activeTab === 'banner'
                ? 'border-b-2 border-secondary text-secondary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <ImageIcon className="inline h-5 w-5 mr-2" />
            Banner
          </button>
        </div>

        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Citas Agendadas ({appointments.length})</h2>
            <div className="grid gap-4">
              {appointments.length === 0 ? (
                <div className="card text-center py-12">
                  <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No hay citas agendadas</p>
                </div>
              ) : (
                appointments.map((appointment) => (
                  <div key={appointment.id} className="card">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-2">{appointment.clientName}</h3>
                        <div className="grid md:grid-cols-2 gap-2 text-gray-600">
                          <p><strong>Teléfono:</strong> {appointment.clientPhone}</p>
                          <p><strong>Barbero:</strong> {appointment.barberName}</p>
                          <p><strong>Servicio:</strong> {appointment.serviceName}</p>
                          <p><strong>Precio:</strong> ${appointment.servicePrice}</p>
                          <p><strong>Fecha:</strong> {appointment.date}</p>
                          <p><strong>Hora:</strong> {appointment.time}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteAppointment(appointment.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
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
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Servicios Disponibles ({services.length})</h2>
              <button
                onClick={() => {
                  setEditingService(null)
                  setServiceForm({ name: '', price: '', duration: '', description: '' })
                  setShowServiceModal(true)
                }}
                className="btn-primary flex items-center"
              >
                <Plus className="h-5 w-5 mr-2" />
                Agregar Servicio
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.id} className="card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-primary">{service.name}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openEditService(service)}
                        className="text-blue-500 hover:text-blue-700 p-2"
                      >
                        <Edit2 className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => deleteService(service.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{service.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span><strong>Precio:</strong> ${service.price}</span>
                    <span><strong>Duración:</strong> {service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Barbers Tab */}
        {activeTab === 'barbers' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Barberos Disponibles ({barbers.length})</h2>
              <button
                onClick={() => {
                  setEditingBarber(null)
                  setBarberForm({ name: '', specialty: '', experience: '', image: '👨‍🦱', phone: '' })
                  setShowBarberModal(true)
                }}
                className="btn-primary flex items-center"
              >
                <Plus className="h-5 w-5 mr-2" />
                Agregar Barbero
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {barbers.map((barber) => (
                <div key={barber.id} className="card">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-4">
                      <div className="text-5xl">{barber.image}</div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">{barber.name}</h3>
                        <p className="text-gray-600 mb-1"><strong>Especialidad:</strong> {barber.specialty}</p>
                        <p className="text-gray-600"><strong>Experiencia:</strong> {barber.experience}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openEditBarber(barber)}
                        className="text-blue-500 hover:text-blue-700 p-2"
                      >
                        <Edit2 className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => deleteBarber(barber.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Banner Tab */}
        {activeTab === 'banner' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Slides del Banner ({bannerSlides.length})</h2>
              <button
                onClick={() => {
                  setEditingSlide(null)
                  setSlideForm({ title: '', subtitle: '', description: '', image: '' })
                  setShowBannerModal(true)
                }}
                className="btn-primary flex items-center"
              >
                <Plus className="h-5 w-5 mr-2" />
                Agregar Slide
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bannerSlides.map((slide) => (
                <div key={slide.id} className="card">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
                    {slide.image ? (
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <ImageIcon className="h-16 w-16" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{slide.title}</h3>
                  <p className="text-secondary font-semibold mb-2">{slide.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-4">{slide.description}</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => openEditSlide(slide)}
                      className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
                    >
                      <Edit2 className="h-4 w-4 mr-2" />
                      Editar
                    </button>
                    <button
                      onClick={() => deleteBannerSlide(slide.id)}
                      className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Service Modal */}
      {showServiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">
                {editingService ? 'Editar Servicio' : 'Agregar Servicio'}
              </h2>
              <button onClick={() => setShowServiceModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleServiceSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  value={serviceForm.name}
                  onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Precio</label>
                <input
                  type="number"
                  value={serviceForm.price}
                  onChange={(e) => setServiceForm({ ...serviceForm, price: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Duración</label>
                <input
                  type="text"
                  value={serviceForm.duration}
                  onChange={(e) => setServiceForm({ ...serviceForm, duration: e.target.value })}
                  className="input-field"
                  placeholder="ej: 30 min"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Descripción</label>
                <textarea
                  value={serviceForm.description}
                  onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                  className="input-field"
                  rows="3"
                  required
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                {editingService ? 'Actualizar' : 'Agregar'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Barber Modal */}
      {showBarberModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">
                {editingBarber ? 'Editar Barbero' : 'Agregar Barbero'}
              </h2>
              <button onClick={() => setShowBarberModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleBarberSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  value={barberForm.name}
                  onChange={(e) => setBarberForm({ ...barberForm, name: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Especialidad</label>
                <input
                  type="text"
                  value={barberForm.specialty}
                  onChange={(e) => setBarberForm({ ...barberForm, specialty: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Experiencia</label>
                <input
                  type="text"
                  value={barberForm.experience}
                  onChange={(e) => setBarberForm({ ...barberForm, experience: e.target.value })}
                  className="input-field"
                  placeholder="ej: 5 años"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                <input
                  type="tel"
                  value={barberForm.phone}
                  onChange={(e) => setBarberForm({ ...barberForm, phone: e.target.value })}
                  className="input-field"
                  placeholder="+1234567890"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Formato internacional: +[código país][número]</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Emoji</label>
                <select
                  value={barberForm.image}
                  onChange={(e) => setBarberForm({ ...barberForm, image: e.target.value })}
                  className="input-field"
                >
                  <option value="👨‍🦱">👨‍🦱</option>
                  <option value="👨‍🦰">👨‍🦰</option>
                  <option value="👨‍🦲">👨‍🦲</option>
                  <option value="👨">👨</option>
                  <option value="👨‍🦳">👨‍🦳</option>
                </select>
              </div>
              <button type="submit" className="w-full btn-primary">
                {editingBarber ? 'Actualizar' : 'Agregar'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Banner Modal */}
      {showBannerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">
                {editingSlide ? 'Editar Slide' : 'Agregar Slide'}
              </h2>
              <button onClick={() => setShowBannerModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSlideSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Título</label>
                <input
                  type="text"
                  value={slideForm.title}
                  onChange={(e) => setSlideForm({ ...slideForm, title: e.target.value })}
                  className="input-field"
                  placeholder="Ej: Barbería Profesional"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subtítulo</label>
                <input
                  type="text"
                  value={slideForm.subtitle}
                  onChange={(e) => setSlideForm({ ...slideForm, subtitle: e.target.value })}
                  className="input-field"
                  placeholder="Ej: Donde el estilo se encuentra con la tradición"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Descripción</label>
                <textarea
                  value={slideForm.description}
                  onChange={(e) => setSlideForm({ ...slideForm, description: e.target.value })}
                  className="input-field"
                  rows="3"
                  placeholder="Ej: Ambiente profesional y moderno"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Upload className="inline h-5 w-5 mr-2" />
                  Imagen
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="input-field"
                />
                <p className="text-xs text-gray-500 mt-2">O ingresa una URL de imagen:</p>
                <input
                  type="text"
                  value={slideForm.image}
                  onChange={(e) => setSlideForm({ ...slideForm, image: e.target.value })}
                  className="input-field mt-2"
                  placeholder="/images/mi-imagen.jpg"
                />
                {slideForm.image && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Vista previa:</p>
                    <img 
                      src={slideForm.image} 
                      alt="Preview" 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
              <button type="submit" className="w-full btn-primary">
                {editingSlide ? 'Actualizar' : 'Agregar'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
