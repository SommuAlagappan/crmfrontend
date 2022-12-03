import { faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminNav() {
let navigate = useNavigate()
  let logout = () => {
    window.localStorage.clear()
    toast.info("Logged out successfully")
    navigate("/")
  }
  return (
    <nav className="navbar navbar-dark bg-light sticky-top">
        <span className="navbar-brand text-black fs-2 fw-bold mx-auto">SUPERFAST ADMIN</span>
        <button onClick={logout} type="button" className="btn btn-dark btn-sm me-2">Logout</button>
    </nav>
  )
}

export default AdminNav