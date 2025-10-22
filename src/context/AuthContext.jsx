import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const login = (username, password) => {
    // Default credentials
    const users = [
      { username: 'Geimar', password: 'Agu@242000', role: 'admin', name: 'Administrador' },
      { username: 'Gesnny', password: 'barber123', role: 'barber', name: 'Geimar Mena' },
      { username: 'barbero2', password: 'barber123', role: 'barber', name: 'Gesnny Mena' }
    ]

    const foundUser = users.find(u => u.username === username && u.password === password)
    
    if (foundUser) {
      const userData = { username: foundUser.username, role: foundUser.role, name: foundUser.name }
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return { success: true, user: userData }
    }
    
    return { success: false, message: 'Credenciales incorrectas' }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
