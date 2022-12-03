import React from 'react'
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="sidenav">
      <img src="https://www.jetpunk.com/img/user-photo-library/b0/b085e5f0c7-450.png" alt="Superfast-logo" style={{ width: "80", height: "80" }} className="ms-md-4 ms-3 container mb-md-2" loading="lazy" />

      <Link to="/users"><i className="fa-solid fa-users me-1"></i>Users</Link>

      <Link to="/employees"> <i className="fa-solid fa-id-card me-1"></i>Employees</Link>

      <Link to="/messages"><i className="fa-solid fa-message me-1"></i>Messages</Link>

 
    </div>

  )
}

export default AdminSidebar;