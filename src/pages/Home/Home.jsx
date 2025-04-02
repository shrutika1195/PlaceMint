import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import BlogCard from "../../components/BlogCard/BlogCard";
import LoginModal from "../../components/LoginModal/LoginModal";
import SignupModal from "../../components/SignupModal/SignupModal"; // Make sure this import path is correct
import image1 from '../../assets/image1.png';
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { FaEnvelope, FaPhone } from "react-icons/fa";
const Home = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false); // Add state for signup modal

  const toggleLoginModal = () => {
    setLoginOpen(!isLoginOpen);
    if (isSignupOpen) setSignupOpen(false); // Close signup if open
  };

  const toggleSignupModal = () => {
    setSignupOpen(!isSignupOpen);
    if (isLoginOpen) setLoginOpen(false); // Close login if open
  };

  const blogPosts = [
    { id: 1, title: "Blog Post 1" },
    { id: 2, title: "Blog Post 2" },
    { id: 3, title: "Blog Post 3" },
    { id: 4, title: "Blog Post 4" },
  ];

  // Determine if any modal is open for the blur effect
  const isAnyModalOpen = isLoginOpen || isSignupOpen;

  return (
    <>
      <Header 
        toggleLoginModal={toggleLoginModal} 
        toggleSignupModal={toggleSignupModal}
        isLoginModalOpen={isLoginOpen}
        isSignupModalOpen={isSignupOpen}
      />
      <main className={`main-content ${isAnyModalOpen ? "blur" : ""}`}>
        <section className="hero">
          <div className="hero-text">
            <h1>Learn from those who have been there!</h1>
            <p>
              Get insights from alumni on interviews, coding contests, and career journeys. Watch their experiences, explore stratergies, and connect through discussions to navigate your placement journey with confidence.
            </p>
          </div>
          <div className="hero-image">
            <img src={image1} alt="Placement Preparation" className="hero-img"></img>
          </div>
        </section>

        <section className="hero">
          <ImageSlider />
        </section>

        <section className="trending-blogs">
          <h2>Trending Blogs</h2>
          <div className="blog-grid">
            {blogPosts.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>We provide insights and resources to help students prepare for placements and career opportunities.</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Our team</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><FaEnvelope /> placemint.prep@gmail.com</p>
            <p><FaPhone /> +91 7865237492</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Placement Preparation. All rights reserved.</p>
        </div>
      </footer>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        toggleLoginModal={toggleLoginModal}
        toggleSignupModal={toggleSignupModal}
      />

      {/* Signup Modal - Make sure this is included */}
      <SignupModal
        isOpen={isSignupOpen}
        toggleSignupModal={toggleSignupModal}
        toggleLoginModal={toggleLoginModal}
      />
    </>
  );
};

export default Home;