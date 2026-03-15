// import React, { useEffect, useState } from 'react'
// import { findMe } from '../services/UserService';
// import { mapUserInfo } from './UserInfo';
// import { getAccessToken } from '../services/AuthService';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../api/auth/AuthService';


const HeaderComponent = () => {

  const { user, setUser, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout(){
    logout();           //clear local storage
    setUser(null);      //reset context
    navigate("/login"); //redirect to login page
  }

  const hideHeader = 
    loading ||
    location.pathname === "/login" ||
    location.pathname === "/register-user" ||
    location.pathname.startsWith('/auth');

    if (hideHeader) return null;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Brand / Logo */}
        <a className="navbar-brand fw-bold fs-4" href="/dashboard">
          💰 Finance Hub
        </a>

        {/* Collapsible nav items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold" to="/contacts">Contacts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold" to="/financial-accounts">Financial Accounts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold" to="/relationships">Relationships</Link>
                </li>

                {user?.roles?.includes("ROLE_ADMIN") && (
                  <li className='nav-item'>
                    <Link className='nav-link text-warning fw-bold' to='/admin/users'>
                      Admin Control
                    </Link>
                  </li>
                )}
              </>
            )}
            {user?.name && (
              <>
              <li className="nav-item">
                <span className="nav-link text-info fw-bold">
                  {user.name}
                </span>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger ms-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>






    // <div>
    //     <nav className='navbar navbar-dark bg-dark'>
    //         <a className="navbar-brand" href="http://localhost:3000">Finance Hub</a>
    //     </nav>
    // </div>
  )
}

export default HeaderComponent