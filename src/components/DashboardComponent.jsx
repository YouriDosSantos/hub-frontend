import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Finance Hub Dashboard</h2>
      <div className="row g-4">
        
        {/* Contacts */}
        <div className="col-md-4">
          <div className="card shadow-lg h-100 text-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" 
              className="card-img-top p-4"
              alt="Contacts"
              style={{ height: "180px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">Contacts</h5>
              <p className="card-text">Manage all your contacts here.</p>
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/contacts')}
              >
                Go to Contacts
              </button>
            </div>
          </div>
        </div>

        {/* Relationships */}
        <div className="col-md-4">
          <div className="card shadow-lg h-100 text-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/893/893257.png" 
              className="card-img-top p-4"
              alt="Relationships"
              style={{ height: "180px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">Relationships</h5>
              <p className="card-text">Track relationships and affiliations.</p>
              <button 
                className="btn btn-warning"
                onClick={() => navigate('/relationships')}
              >
                Go to Relationships
              </button>
            </div>
          </div>
        </div>

        {/* Financial Accounts */}
        <div className="col-md-4">
          <div className="card shadow-lg h-100 text-center">
            <img 
                src="https://cdn-icons-png.flaticon.com/512/2331/2331948.png" 
                className="card-img-top p-4"
                alt="Financial Accounts"
                style={{ height: "180px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">Financial Accounts</h5>
              <p className="card-text">View and manage accounts & balances.</p>
              <button 
                className="btn btn-success"
                onClick={() => navigate('/financial-accounts')}
              >
                Go to Accounts
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardComponent;