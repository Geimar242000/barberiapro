import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthContext'
import { Lock, User, AlertCircle } from 'lucide-react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [recoveryEmail, setRecoveryEmail] = useState('')
  const [recoverySuccess, setRecoverySuccess] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    const result = login(username, password)
    
    if (result.success) {
      if (result.user.role === 'admin') {
        navigate('/admin')
      } else if (result.user.role === 'barber') {
        navigate('/barbero')
      }
    } else {
      setError(result.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card">
          <div className="text-center mb-8">
            <div className="bg-secondary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">Iniciar Sesión</h1>
            <p className="text-gray-600">Acceso para administrador y barberos</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <User className="inline h-5 w-5 mr-2" />
                Usuario
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
                placeholder="Ingresa tu usuario"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Lock className="inline h-5 w-5 mr-2" />
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>

            <button type="submit" className="w-full btn-primary">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
