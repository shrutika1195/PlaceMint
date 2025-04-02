import React from 'react';
import './Account.css';
import { ArrowLeft, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountPage = () => {
  return (
    <div className="dashboard">
      {/* Header with hamburger menu, logo, search bar and profile icon */}
      <header className="header">
        <Link to="/after-login" className="back-button">
          <ArrowLeft size={24} />
        </Link>
        
        <div className="logo">
          <h1>PLACEMINT</h1>
        </div>
        
        <div className="search-container">
          <div className="search-bar">
            <div className="search-icon">
              <Search size={20} />
            </div>
            <input type="text" placeholder="Search bar" />
          </div>
        </div>
        
        <div className="profile-icon-header">
          <div className="profile-circle">
            <User size={24} />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">
        {/* User profile section */}
        <div className="profile-section">
          <div className="profile-picture">
            <div className="profile-circle-large">
              <User size={40} />
            </div>
          </div>
          <div className="profile-info">
            <h2 className="user-name">Name</h2>
            <p className="user-email">abc@vitstudent.ac.in</p>
          </div>
        </div>

        {/* Recent Uploads Section */}
        <section className="content-section">
          <h2 className="section-title">Recent Uploads</h2>
          <div className="card-grid">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </section>

        {/* History Section */}
        <section className="content-section">
          <h2 className="section-title">History</h2>
          <div className="card-grid">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </section>

        {/* Saved Section */}
        <section className="content-section">
          <h2 className="section-title">Saved</h2>
          <div className="card-grid">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AccountPage;