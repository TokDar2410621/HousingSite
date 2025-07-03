import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import axios from '../axios'

const Profile = () => {
  const { tokens } = useContext(AuthContext)
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('profile/', {
          headers: { Authorization: `Bearer ${tokens.access}` },
        })
        setProfile(res.data)
      } catch {
        setError("Impossible de charger le profil")
      }
    }
    if (tokens) fetchProfile()
  }, [tokens])

  if (!tokens) return <p className="p-4">Veuillez vous connecter.</p>

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Mon profil</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {profile ? (
        <div>
          <p>Email : {profile.email}</p>
          <p>Date d'inscription : {new Date(profile.date_joined).toLocaleString()}</p>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  )
}

export default Profile
