import { useEffect, useState } from 'react'
import axios from '../axios'

const Profile = () => {
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    photo: ''
  })
  const [avatarPreview, setAvatarPreview] = useState(null)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return
    axios
      .get('profile/', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setProfile((prev) => ({ ...prev, ...res.data }))
        if (res.data.photo) {
          setAvatarPreview(res.data.photo)
        }
      })
      .catch(() => setError('Erreur lors du chargement du profil'))
  }, [])

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'photo') {
      const file = files[0]
      setProfile((prev) => ({ ...prev, photo: file }))
      if (file) setAvatarPreview(URL.createObjectURL(file))
    } else {
      setProfile((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setError('')
    const token = localStorage.getItem('token')
    if (!token) return
    const formData = new FormData()
    formData.append('first_name', profile.first_name)
    formData.append('last_name', profile.last_name)
    if (profile.photo instanceof File) {
      formData.append('photo', profile.photo)
    }
    try {
      await axios.put('profile/update/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      setMessage('Profil mis à jour')
    } catch {
      setError('Erreur lors de la mise à jour du profil')
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-semibold">Mon profil</h2>
      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Prénom</label>
          <input
            type="text"
            name="first_name"
            value={profile.first_name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Nom</label>
          <input
            type="text"
            name="last_name"
            value={profile.last_name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Avatar</label>
          {avatarPreview && (
            <img
              src={avatarPreview}
              alt="Avatar"
              className="h-20 w-20 object-cover rounded-full mb-2"
            />
          )}
          <input type="file" name="photo" onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Enregistrer
        </button>
      </form>
    </div>
  )
}

export default Profile
