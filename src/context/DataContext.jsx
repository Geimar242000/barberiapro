import React, { createContext, useContext, useState, useEffect } from 'react'

const DataContext = createContext()

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

export const DataProvider = ({ children }) => {
  const [services, setServices] = useState([])
  const [barbers, setBarbers] = useState([])
  const [appointments, setAppointments] = useState([])
  const [bannerSlides, setBannerSlides] = useState([])
  const [clients, setClients] = useState([])

  useEffect(() => {
    // Load initial data from localStorage or use defaults
    const savedServices = localStorage.getItem('services')
    const savedBarbers = localStorage.getItem('barbers')
    const savedAppointments = localStorage.getItem('appointments')

    if (savedServices) {
      setServices(JSON.parse(savedServices))
    } else {
      const defaultServices = [
        { id: 1, name: 'Corte Clásico', price: 150, duration: '30 min', description: 'Corte tradicional con tijeras y máquina' },
        { id: 2, name: 'Corte + Barba', price: 250, duration: '45 min', description: 'Corte de cabello y arreglo de barba' },
        { id: 3, name: 'Afeitado Clásico', price: 180, duration: '30 min', description: 'Afeitado con navaja y toallas calientes' },
        { id: 4, name: 'Corte Premium', price: 300, duration: '60 min', description: 'Corte, barba, mascarilla facial y masaje' },
        { id: 5, name: 'Diseño de Barba', price: 200, duration: '40 min', description: 'Diseño y perfilado de barba' },
      ]
      setServices(defaultServices)
      localStorage.setItem('services', JSON.stringify(defaultServices))
    }

    if (savedBarbers) {
      setBarbers(JSON.parse(savedBarbers))
    } else {
      const defaultBarbers = [
        { id: 1, name: 'Geimar Mena', specialty: 'Cortes clásicos y modernos', experience: '8 años', image: '👨‍🦱', phone: '+573138058022' },
        { id: 2, name: 'Gesnny Mena', specialty: 'Diseño de barba y afeitado', experience: '6 años', image: '👨‍🦰', phone: '+573202024815' },
      ]
      setBarbers(defaultBarbers)
      localStorage.setItem('barbers', JSON.stringify(defaultBarbers))
    }

    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments))
    }

    const savedClients = localStorage.getItem('clients')
    if (savedClients) {
      setClients(JSON.parse(savedClients))
    }

    const savedBannerSlides = localStorage.getItem('bannerSlides')
    if (savedBannerSlides) {
      setBannerSlides(JSON.parse(savedBannerSlides))
    } else {
      const defaultSlides = [
        {
          id: 1,
          title: 'Barbería Profesional',
          subtitle: 'Donde el estilo se encuentra con la tradición',
          description: 'Ambiente profesional y moderno para tu mejor experiencia',
          image: '/images/barberia-profesional.jpg'
        },
        {
          id: 2,
          title: 'Cortes Profesionales',
          subtitle: 'Barberos expertos a tu servicio',
          description: 'Técnicas modernas y clásicas para tu mejor look',
          image: '/images/cortes-profesionales.jpg'
        },
        {
          id: 3,
          title: 'Agenda tu Cita Ahora',
          subtitle: 'Reserva en línea fácil y rápido',
          description: 'Horarios flexibles de Lunes a Sábado',
          image: '/images/horario-servicio.jpg'
        }
      ]
      setBannerSlides(defaultSlides)
      localStorage.setItem('bannerSlides', JSON.stringify(defaultSlides))
    }
  }, [])

  const addService = (service) => {
    const newService = { ...service, id: Date.now() }
    const updatedServices = [...services, newService]
    setServices(updatedServices)
    localStorage.setItem('services', JSON.stringify(updatedServices))
  }

  const updateService = (id, updatedService) => {
    const updatedServices = services.map(s => s.id === id ? { ...s, ...updatedService } : s)
    setServices(updatedServices)
    localStorage.setItem('services', JSON.stringify(updatedServices))
  }

  const deleteService = (id) => {
    const updatedServices = services.filter(s => s.id !== id)
    setServices(updatedServices)
    localStorage.setItem('services', JSON.stringify(updatedServices))
  }

  const addBarber = (barber) => {
    const newBarber = { ...barber, id: Date.now() }
    const updatedBarbers = [...barbers, newBarber]
    setBarbers(updatedBarbers)
    localStorage.setItem('barbers', JSON.stringify(updatedBarbers))
  }

  const updateBarber = (id, updatedBarber) => {
    const updatedBarbers = barbers.map(b => b.id === id ? { ...b, ...updatedBarber } : b)
    setBarbers(updatedBarbers)
    localStorage.setItem('barbers', JSON.stringify(updatedBarbers))
  }

  const deleteBarber = (id) => {
    const updatedBarbers = barbers.filter(b => b.id !== id)
    setBarbers(updatedBarbers)
    localStorage.setItem('barbers', JSON.stringify(updatedBarbers))
  }

  const addAppointment = (appointment) => {
    const newAppointment = { 
      ...appointment, 
      id: Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    const updatedAppointments = [...appointments, newAppointment]
    setAppointments(updatedAppointments)
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments))
    return newAppointment
  }

  const updateAppointmentStatus = (id, status) => {
    const updatedAppointments = appointments.map(a => 
      a.id === id ? { ...a, status, updatedAt: new Date().toISOString() } : a
    )
    setAppointments(updatedAppointments)
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments))
  }

  const addReviewToAppointment = (id, review) => {
    const updatedAppointments = appointments.map(a => 
      a.id === id ? { ...a, review, reviewedAt: new Date().toISOString() } : a
    )
    setAppointments(updatedAppointments)
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments))
  }

  const deleteAppointment = (id) => {
    const updatedAppointments = appointments.filter(a => a.id !== id)
    setAppointments(updatedAppointments)
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments))
  }

  const addBannerSlide = (slide) => {
    const newSlide = { ...slide, id: Date.now() }
    const updatedSlides = [...bannerSlides, newSlide]
    setBannerSlides(updatedSlides)
    localStorage.setItem('bannerSlides', JSON.stringify(updatedSlides))
  }

  const updateBannerSlide = (id, updatedSlide) => {
    const updatedSlides = bannerSlides.map(s => s.id === id ? { ...s, ...updatedSlide } : s)
    setBannerSlides(updatedSlides)
    localStorage.setItem('bannerSlides', JSON.stringify(updatedSlides))
  }

  const deleteBannerSlide = (id) => {
    const updatedSlides = bannerSlides.filter(s => s.id !== id)
    setBannerSlides(updatedSlides)
    localStorage.setItem('bannerSlides', JSON.stringify(updatedSlides))
  }

  const addClient = (client) => {
    const newClient = { ...client, id: Date.now() }
    const updatedClients = [...clients, newClient]
    setClients(updatedClients)
    localStorage.setItem('clients', JSON.stringify(updatedClients))
  }

  const updateClient = (id, updatedClient) => {
    const updatedClients = clients.map(c => c.id === id ? { ...c, ...updatedClient } : c)
    setClients(updatedClients)
    localStorage.setItem('clients', JSON.stringify(updatedClients))
  }

  const deleteClient = (id) => {
    const updatedClients = clients.filter(c => c.id !== id)
    setClients(updatedClients)
    localStorage.setItem('clients', JSON.stringify(updatedClients))
  }

  return (
    <DataContext.Provider value={{
      services,
      barbers,
      appointments,
      bannerSlides,
      clients,
      addService,
      updateService,
      deleteService,
      addBarber,
      updateBarber,
      deleteBarber,
      addAppointment,
      deleteAppointment,
      addBannerSlide,
      updateBannerSlide,
      deleteBannerSlide,
      addClient,
      updateClient,
      deleteClient
    }}>
      {children}
    </DataContext.Provider>
  )
}
