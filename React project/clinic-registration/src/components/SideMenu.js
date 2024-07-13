import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function SideMenu() {
  return (
  <Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/staff" className="nav-item nav-link">
              Staff
            </Link>
            <br />
            <Link to="/service" className="nav-item nav-link">
              Service
            </Link>
            <br />
            <Link to="/date" className="nav-item nav-link">
              Date & Time
            </Link>
            <br />
            <Link to="/confirmation" className="nav-item nav-link">
              Confirmation
            </Link>
        
          </div>
        </div>
      </nav> 
  </Fragment>
  )
}

export default SideMenu
