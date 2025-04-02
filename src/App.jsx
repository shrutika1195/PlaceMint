import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import LoginModal from './components/LoginModal/LoginModal';
import SignupModal from './components/SignupModal/SignupModal';
import About from './pages/About/About';
import AfterLogin from './pages/AfterLogin/AfterLogin';
import AccountPage from './pages/Account/Account'; // Import the AccountPage component
import Shorts from './pages/Shorts/Shorts';
import Discussion from './pages/Discussion/Discussion';

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

const MainApp = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const openSignupModal = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  // Correctly define the onLoginSuccess function
  function handleSuccessfulLogin() {
    setIsLoggedIn(true);
    closeLoginModal();
  };

  return (
    <div className={`app ${showLoginModal || showSignupModal ? 'blur-background' : ''}`}>
      <Routes>
        <Route path="/" element={isLoggedIn ? <AfterLogin /> : <Home toggleLoginModal={openLoginModal} toggleSignupModal={openSignupModal} />} />
        <Route path="/login" element={<Home toggleLoginModal={openLoginModal} toggleSignupModal={openSignupModal} />} />
        <Route path="/signup" element={<Home toggleLoginModal={openLoginModal} toggleSignupModal={openSignupModal} />} />
        <Route path="/about" element={<About/>} />
        <Route path="/after-login" element={<AfterLogin />} />
        <Route path="/account" element={<AccountPage />} /> {/* Add the route for AccountPage */}
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/discussion" element={<Discussion />} />
      </Routes>

      {showLoginModal && (
        <LoginModal
          toggleLoginModal={closeLoginModal}
          toggleSignupModal={openSignupModal}
          isOpen={showLoginModal}
          onLoginSuccess={handleSuccessfulLogin} // Ensure this function is correctly passed
        />
      )}

      {showSignupModal && (
        <SignupModal
          toggleSignupModal={closeSignupModal}
          toggleLoginModal={openLoginModal}
          isOpen={showSignupModal}
        />
      )}
    </div>
  );
};

export default App;