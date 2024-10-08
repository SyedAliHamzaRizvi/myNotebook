import React from 'react'
import { Link} from "react-router-dom";
import { useHistory, useLocation } from 'react-router-dom';



const Navbar = () => {

  let history=useHistory()
  let location=useLocation()

  const handleLogout=()=>{
    localStorage.removeItem('token')
    history.push("/login")
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">myNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/" onClick={() => {
        document.querySelector('.navbar-collapse').classList.remove('show');
      }}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about" onClick={() => {
        document.querySelector('.navbar-collapse').classList.remove('show');
      }}>About</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
        <Link className="btn btn-primary mx-1 " to="/login" role="button" onClick={() => {
        document.querySelector('.navbar-collapse').classList.remove('show');
      }}>Login</Link>
        <Link className="btn btn-primary mx-1 " to="/signup" role="button" onClick={() => {
        document.querySelector('.navbar-collapse').classList.remove('show');
      }}>Signup</Link>
      </form>: <button className="btn btn-primary" onClick={() => {handleLogout()
        document.querySelector('.navbar-collapse').classList.remove('show');
      }} >Logout </button>}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
