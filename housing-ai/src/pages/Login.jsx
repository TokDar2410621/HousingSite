import { useState } from 'react'
import axios from '../axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setToken('')

    try {
      const response = await axios.post(
        'token/',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      )
      setToken(response.data.access)
      setEmail('')
      setPassword('')
    } catch (err) {
      let errorMsg = "Erreur lors de la connexion."
      if (err.response?.data?.detail) {
        errorMsg = err.response.data.detail
      } else if (err.response?.data?.error) {
        errorMsg = err.response.data.error
      }
      setError(errorMsg)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Connexion</h2>
        {token && (
          <div className="text-green-600 mb-4 break-all">Token : {token}</div>
        )}
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
