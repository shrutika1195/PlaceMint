import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Upload, Video, MessageCircle, Mail, Info } from 'react-feather';
import './Discussion.css';

function DiscussionForum() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const discussions = [
    { title: "How to prepare for Amazon Interviews?", replies: 4 },
    { title: "Resume formatting best practices?", replies: 7 },
    { title: "Tips for Coding Rounds?", replies: 12 },
    { title: "Advice for Job placements?", replies: 5 }
  ];

  const categories = ["All", "Coding Codes", "HR Interview", "Resume Tips"];

  return (
    <div className="forum-container">
      {/* Header */}
      <header className="forum-header">
        <button className="menu-button" onClick={toggleMenu}>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
        
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 30" fill="currentColor">
              <path d="M12 0L24 8V22L12 30L0 22V8L12 0Z" />
              <path fill="currentColor" d="M6 10V20L12 24L18 20V10L12 6L6 10Z" />
            </svg>
          </div>
          <span className="logo-text">PLACEMINT</span>
        </div>
        
        <div className="search-container">
          <div className="search-wrapper">
            <input type="text" placeholder="Search bar" className="search-input" />
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        
        <div className="user-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </header>
      
      {/* Discussion Forum Title */}
      <div className="forum-title-container">
        <h1 className="forum-title">Discussion Forum</h1>
      </div>
      
      {/* Categories */}
      <div className="categories-container">
        {categories.map((category, index) => (
          <button key={index} className="category-button">
            {category}
          </button>
        ))}
      </div>
      
      {/* Trending Discussions */}
      <div className="trending-container">
        <h2 className="trending-title">Trending Discussions</h2>
        <div className="discussions-list">
          {discussions.map((discussion, index) => (
            <div key={index} className="discussion-card">
              <div className="discussion-content">
                <h3 className="discussion-title">{discussion.title}</h3>
                <div className="user-info">
                  <div className="small-user-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <span className="user-label">User</span>
                </div>
              </div>
              <div className="replies-info">
                <span className="replies-label">{discussion.replies} Replies</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Overlay */}
      {menuOpen && (
        <>
          <div className="overlay" onClick={toggleMenu}></div>
          <div className="menu-panel">
            <div className="menu-close">
              <button onClick={toggleMenu}>&times;</button>
            </div>
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/after-login"><Home size={20} /> Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/upload"><Upload size={20} /> Upload</Link>
              </li>
              <li className="menu-item">
                <Link to="/shorts"><Video size={20} /> Shorts</Link>
              </li>
              <li className="menu-item">
                <Link to="/discussion"><MessageCircle size={20} /> Discussion</Link>
              </li>
              <li className="menu-item">
                <Link to="/mail"><Mail size={20} /> Mail</Link>
              </li>
              <li className="menu-item">
                <Link to="/about"><Info size={20} /> About</Link>
              </li>
              <li className="menu-item">
                <Link to="/account"><Info size={20} /> Account</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default DiscussionForum;
