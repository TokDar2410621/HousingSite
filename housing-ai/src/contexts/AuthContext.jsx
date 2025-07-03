import { createContext, useState } from 'react'
import axios from '../axios'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [tokens, setTokens] = useState(() => {
    const access = localStorage.getItem('access')
    const refresh = localStorage.getItem('refresh')
    return access && refresh ? { access, refresh } : null
  })

  const login = async (email, password) => {
    const response = await axios.post('token/', { email, password })
    setTokens(response.data)
    localStorage.setItem('access', response.data.access)
    localStorage.setItem('refresh', response.data.refresh)
  }

  const logout = () => {
    setTokens(null)
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
  }

  const isAuthenticated = !!tokens

  return (
    <AuthContext.Provider value={{ tokens, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
