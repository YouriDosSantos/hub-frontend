// import React, { useEffect, useState } from 'react'
// import { findMe } from '../services/UserService';
// import { mapUserInfo } from './UserInfo';
// import { getAccessToken } from '../services/AuthService';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/AuthService';


const HeaderComponent = () => {

  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  function handleLogout(){
    logout();           //clear local storage
    setUser(null);      //reset context
    navigate("/login"); //redirect to login page
  }

  // const [user, setUser] = useState({ name: "", email: "", roles: [] });
  // useEffect(() => {
  //   const token = getAccessToken();
  //   if (token) {
  //     findMe()
  //       .then(response => {
  //         const info = mapUserInfo(response.data);
  //         setUser(info);
  //       })
  //       .catch(error => {
  //         console.error("Error fetching user info: ", error);
  //       });
  //   }
  // }, []);

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
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="/contacts">Contacts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="/financial-accounts">Financial Accounts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="/relationships">Relationships</a>
            </li>
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