import React from 'react'
import './Header.css';


const Header = () => {
  return (
    <header className="header py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-2  redes">
            <a href="#" className="bi bi-facebook"></a>
            <a href="#" className="bi bi-twitter"></a>
            <a href="#" className="bi bi-instagram"></a>
            <a href="#" className="bi bi-linkedin"></a>
          </div>

          <div className="col-12 col-md-8  navbar d-flex align-items-center h-100">
            <ul className="nav justify-content-center align-items-center w-100">
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item logo">
                <h1 className="logo-text">EMILY GRACE</h1>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>
          
          <div className="col-12 col-md-2  d-flex justify-content-center align-items-center buscador">
            <div className="input-group mb-0">
              <input
                type="search"
                className="form-control"
                placeholder="Buscar..."
                aria-label="Buscar"
              />
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header