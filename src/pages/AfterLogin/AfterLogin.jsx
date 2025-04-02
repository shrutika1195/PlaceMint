import { useState, useRef } from 'react';
import './AfterLogin.css';
import logo from '../../assets/logo.jpeg';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Menu, Search, Home, Upload, Video, MessageCircle, Mail, Info, User } from 'lucide-react';
import thumbnail1 from '../../assets/thumbnail1.jpg';
import thumbnail3 from '../../assets/thumbnail3.jpg';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';

export default function PlaceMint() {
  // Create an array of 16 videos by repeating the existing ones
  const videoItems = [
    { id: 1, title: "Video 1", thumbnail: thumbnail1 },
    { id: 2, title: "Video 2", thumbnail: thumbnail3 },
    { id: 3, title: "Video 3", thumbnail: thumbnail4 },
    { id: 4, title: "Video 4", thumbnail: thumbnail5 }
  ];
  
  // Duplicate and extend the videos array to have at least 16 items
  const videos = [
    ...videoItems,
    ...videoItems
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const blogScrollRef = useRef(null);
  const topVideoScrollRef = useRef(null);
  const bottomVideoScrollRef = useRef(null);
  
  const blogs = Array(8).fill().map((_, i) => ({ id: `blog-${i}`, title: `Blog ${i + 1}` }));

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const scrollBlogs = () => {
    if (blogScrollRef.current) {
      blogScrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const scrollVideosDown = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        top: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <button onClick={toggleMenu} className="menu-button">
          <Menu size={24} />
        </button>
        
        <div className="logo">
          <img src={logo} alt="PlaceMint Logo" />
          <span>PlaceMint</span>
        </div>
        
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-container">
            <div className="search-icon">
              <Search size={20} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              placeholder="Search bar"
            />
          </div>
        </form>
        
        <button onClick={toggleProfile} className="profile-button">
          <User size={24} />
        </button>
      </header>
      
      <main className="main-content">
        {/* Top Video Section */}
        <section className="videos-section">
          <h2 className="section-title">Featured Videos</h2>
          <div className="videos-container">
            <div className="videos-scroll" ref={topVideoScrollRef}>
              <div className="videos-grid">
                {videos.map((video) => (
                  <div key={`top-video-${video.id}`} className="video-item">
                    <div className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} className="thumbnail-img" />
                    </div>
                    <div className="video-title-bar">
                      <h3 className="video-title">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              className="scroll-down-button"
              onClick={() => scrollVideosDown(topVideoScrollRef)}
              aria-label="Scroll videos down"
            >
              <ChevronDown size={24} />
            </button>
          </div>
        </section>

        {/* Blog Section */}
        <section className="blogs-section">
          <h2 className="section-title">Blogs</h2>
          <div className="blogs-container">
            <div className="blogs-scroll" ref={blogScrollRef}>
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-card">
                  <div className="blog-image"></div>
                  <div className="blog-content">
                    <div className="blog-text-line"></div>
                    <div className="blog-text-line"></div>
                    <div className="blog-text-line"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="scroll-button"
              onClick={scrollBlogs}
              aria-label="Scroll blogs right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>

        {/* Bottom Video Section */}
        <section className="videos-section bottom-videos">
          <h2 className="section-title">More Videos</h2>
          <div className="videos-container">
            <div className="videos-scroll" ref={bottomVideoScrollRef}>
              <div className="videos-grid">
                {videos.map((video) => (
                  <div key={`bottom-video-${video.id}`} className="video-item">
                    <div className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} className="thumbnail-img" />
                    </div>
                    <div className="video-title-bar">
                      <h3 className="video-title">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              className="scroll-down-button"
              onClick={() => scrollVideosDown(bottomVideoScrollRef)}
              aria-label="Scroll videos down"
            >
              <ChevronDown size={24} />
            </button>
          </div>
        </section>
      </main>

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

      {/* Profile Overlay */}
      {profileOpen && (
        <>
          <div className="overlay" onClick={toggleProfile}></div>
          <div className="profile-panel">
            <div className="profile-close">
              <button onClick={toggleProfile}>&times;</button>
            </div>
            <div className="profile-content">
              <div className="profile-avatar"></div>
              <div className="profile-name">User Name</div>
              <div className="profile-email">user@example.com</div>
              <ul className="profile-menu">
                <li className="profile-menu-item">Profile Settings</li>
                <li className="profile-menu-item">Account</li>
                <li className="profile-menu-item">Preferences</li>
                <li className="profile-menu-item">Help</li>
                <li className="profile-menu-item">Logout</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}