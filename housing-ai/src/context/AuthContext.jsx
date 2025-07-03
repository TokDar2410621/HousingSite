import { createContext, useState, useEffect, useCallback } from 'react'
import axios from '../axios'

/* eslint-disable react-refresh/only-export-components */

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const [user, setUser] = useState(null)

  const loadProfile = useCallback(async (tkn = token) => {
    if (!tkn) return
    try {
      const res = await axios.get('profile/', {
        headers: { Authorization: `Bearer ${tkn}` },
      })
      setUser(res.data)
    } catch {
      setUser(null)
    }
  }, [token])

  useEffect(() => {
    if (token) {
      loadProfile(token)
    }
  }, [token, loadProfile])

  const login = async (email, password) => {
    const res = await axios.post('token/', { email, password })
    const accessToken = res.data.access
    setToken(accessToken)
    localStorage.setItem('token', accessToken)
    await loadProfile(accessToken)
  }


  const logout = () => {
    setToken(null)
    setUser(null)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
