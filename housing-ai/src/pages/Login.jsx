
import { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await login(email, password)
      navigate('/profile')
    } catch (err) {
      let errorMsg = "Erreur d'authentification"
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
        <div className="mt-4 space-y-2">
          <a
            href={`${import.meta.env.VITE_API_URL}../accounts/google/login/`}
            className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" />
            </svg>
            <span>Se connecter avec Google</span>
          </a>
          <a
            href={`${import.meta.env.VITE_API_URL}../accounts/facebook/login/`}
            className="flex items-center justify-center gap-2 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" fill="currentColor" />
            </svg>
            <span>Se connecter avec Facebook</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
