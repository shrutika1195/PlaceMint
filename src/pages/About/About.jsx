import { useState, useEffect, useRef } from 'react';
import './About.css';
import { Home, Upload, Video, MessageCircle, Mail, Info, User } from "lucide-react";
import { Link } from "react-router-dom";

import logo from '../../assets/logo.jpeg'; // Assuming this path exists

export default function AboutUs() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedLine, setDraggedLine] = useState(null);
  const [linePositions, setLinePositions] = useState([
    { id: 1, top: 0 },
    { id: 2, top: 8 },
    { id: 3, top: 16 }
  ]);
  
  const hamburgerRef = useRef(null);
  
  const toggleMenu = () => {
    if (!isDragging) {
      setMenuOpen(!menuOpen);
    }
  };
  
  const handleMouseDown = (e, id) => {
    e.stopPropagation();
    setIsDragging(true);
    setDraggedLine(id);
  };
  
  const handleMouseMove = (e) => {
    if (isDragging && draggedLine !== null) {
      const hamburgerRect = hamburgerRef.current.getBoundingClientRect();
      const relativeY = e.clientY - hamburgerRect.top;
      
      // Keep line within hamburger bounds
      const boundedY = Math.max(0, Math.min(24, relativeY));
      
      setLinePositions(prevPositions => 
        prevPositions.map(line => 
          line.id === draggedLine ? { ...line, top: boundedY } : line
        )
      );
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedLine(null);
  };
  
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);
  
  return (
    <div className="about-page">
      <header className="about-header">
        <div 
          className="hamburger-menu" 
          onClick={toggleMenu}
          ref={hamburgerRef}
        >
          {linePositions.map(line => (
            <div 
              key={line.id}
              className="hamburger-line"
              style={{ top: `${line.top}px` }}
              onMouseDown={(e) => handleMouseDown(e, line.id)}
            ></div>
          ))}
        </div>
        
        <h1 className="about-title">About Us</h1>
        
        <div className="profile-icon">
          <div className="profile-circle"></div>
        </div>
      </header>
      
      <main className="about-content">
        <div className="about-image-container">
          <img 
            src="/api/placeholder/400/400?text=Coding" 
            alt="Person coding on laptop" 
            className="about-image" 
          />
        </div>
        
        <div className="about-text">
          <p>
            At PlaceMint, we understand the challenges students face in
            securing placements and preparing for interviews. Many
            struggle due to a lack of structured guidance, often navigating
            this journey alone without access to the right guidance, coding
            strategies, or interview techniques.
          </p>
          
          <p>
            Our mission is to bridge this gap by providing a centralized
            platform where students can access valuable insights from the
            experienced through video experiences and interactive
            discussions. Whether you're looking for expert advice on
            cracking technical interviews or mastering competitive
            programming, we're here to help you succeed.
          </p>
          
          <p>
            Additionally, we simplify the placement process by integrating
            an intelligent email filtering system. With the overwhelming
            number of emails students receive from the college, important
            internship and placement opportunities often get lost. Our
            system ensures that you never miss a crucial opportunity by
            separating and highlighting placement-related emails for easy
            access.
          </p>
          
          <p>
            At PlaceMint, we are committed to empowering students with
            the right resources and guidance to confidently navigate their
            career journey. Join us and take a step closer to your dream
            job!
          </p>
        </div>
      </main>
      
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