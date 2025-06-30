import { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

 const handleSubmit = async (e) => {
  e.preventDefault()
  setMessage('')
  setError('')

  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:8000/api/register/',
      data: {
        email,
        password
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log("✅ Réponse :", response)
    setMessage(response.data.message || 'Inscription réussie.')
    setEmail('')
    setPassword('')
  } catch (err) {
  console.error("Erreur API :", err.response?.data)

  if (err.response?.data?.password) {
    setError(err.response.data.password.join(' '))
  } else if (err.response?.data?.error) {
    setError(err.response.data.error)
  } else {
    setError("Erreur lors de l'inscription.")
  }
}
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Créer un compte</h2>

      {message && <div className="text-green-600 mb-4">{message}</div>}
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
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          S'inscrire
        </button>
      </form>
      </div>
    </div>
  )
}

export default Register
