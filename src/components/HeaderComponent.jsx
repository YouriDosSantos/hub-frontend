import React from 'react'

const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Brand / Logo */}
        <a className="navbar-brand fw-bold fs-4" href="/">
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