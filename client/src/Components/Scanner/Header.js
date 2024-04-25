import React from 'react'
import { Link } from 'react-router-dom'
function Scanheader() {
    const logOut=()=>{
        localStorage.clear()
        window.location.href="/"
    }
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h1 className="m-0 text-primary"><i className="far fa-hospital me-3"></i>Mediscan </h1>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/scan" className="nav-item nav-link">Scans</Link>
                
            </div>
            <button className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block " onClick={()=>logOut()}>Logout<i className="fa fa-arrow-right ms-3"></i></button>
        </div>
    </nav>
    </>
  )
}

export default Scanheader   