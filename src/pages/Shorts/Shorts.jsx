// ReelsContainer.jsx
import React, { useState, useRef, useEffect } from 'react';
import './Shorts.css';

const ReelsContainer = () => {
  const [reels, setReels] = useState([
    {
      id: 1,
      username: 'travel_enthusiast',
      description: 'Exploring the beautiful beaches of Bali! #travel #bali #vacation',
      likes: '24.5k',
      comments: '342',
      videoUrl: '/api/placeholder/400/720', // Using placeholder
      userAvatar: '/api/placeholder/32/32',
      isLiked: false,
      isSaved: false,
      music: 'Original Audio - travel_enthusiast'
    },
    {
      id: 2,
      username: 'food_lover',
      description: 'Making the perfect pasta from scratch 🍝 #food #homemade #cooking',
      likes: '15.2k',
      comments: '189',
      videoUrl: '/api/placeholder/400/720', // Using placeholder
      userAvatar: '/api/placeholder/32/32',
      isLiked: false,
      isSaved: false,
      music: 'Italian Cooking - Chef Mario'
    },
    {
      id: 3,
      username: 'fitness_coach',
      description: 'Quick 5-minute workout you can do anywhere! #fitness #workout #health',
      likes: '32.1k',
      comments: '456',
      videoUrl: '/api/placeholder/400/720', // Using placeholder
      userAvatar: '/api/placeholder/32/32',
      isLiked: false,
      isSaved: false,
      music: 'Pump Up - Workout Playlist'
    }
  ]);

  const reelsRef = useRef([]);
  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  // Toggle like on a reel
  const handleLike = (reelId) => {
    setReels(reels.map(reel => 
      reel.id === reelId ? { ...reel, isLiked: !reel.isLiked } : reel
    ));
  };

  // Toggle save on a reel
  const handleSave = (reelId) => {
    setReels(reels.map(reel => 
      reel.id === reelId ? { ...reel, isSaved: !reel.isSaved } : reel
    ));
  };

  // Intersection Observer for video autoplay
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8 // 80% visibility to trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setCurrentReelIndex(index);
          
          // Play this video
          const video = entry.target.querySelector('video');
          if (video) {
            video.play().catch(e => console.log("Autoplay prevented:", e));
          }
          
          // Pause all other videos
          reelsRef.current.forEach((reelDiv, i) => {
            if (i !== index) {
              const otherVideo = reelDiv?.querySelector('video');
              if (otherVideo) otherVideo.pause();
            }
          });
        }
      });
    }, options);

    reelsRef.current.forEach(reelDiv => {
      if (reelDiv) observer.observe(reelDiv);
    });

    return () => {
      reelsRef.current.forEach(reelDiv => {
        if (reelDiv) observer.unobserve(reelDiv);
      });
    };
  }, [reels]);

  return (
    <div className="reels-container">
      {reels.map((reel, index) => (
        <div 
          key={reel.id} 
          className={`reel ${index === currentReelIndex ? 'active' : ''}`}
          ref={el => reelsRef.current[index] = el}
          data-index={index}
        >
          <div className="video-container">
            <video 
              src={reel.videoUrl} 
              loop 
              muted 
              playsInline
              poster="/api/placeholder/400/720"
              className="reel-video"
            />
          </div>
          
          <div className="reel-footer">
            <div className="reel-user-info">
              <img src={reel.userAvatar} className="user-avatar" alt={reel.username} />
              <span className="username">{reel.username}</span>
              <button className="follow-button">Follow</button>
            </div>
            <p className="reel-description">{reel.description}</p>
            <div className="reel-music">
              <div className="music-icon">♫</div>
              <div className="music-text">{reel.music}</div>
            </div>
          </div>
          
          <div className="reel-actions">
            <div className="action-item">
              <button 
                className={`action-button ${reel.isLiked ? 'liked' : ''}`}
                onClick={() => handleLike(reel.id)}
              >
                <span className="action-icon">❤</span>
                <span className="action-count">{reel.likes}</span>
              </button>
            </div>
            <div className="action-item">
              <button className="action-button">
                <span className="action-icon">💬</span>
                <span className="action-count">{reel.comments}</span>
              </button>
            </div>
            <div className="action-item">
              <button className="action-button">
                <span className="action-icon">📤</span>
              </button>
            </div>
            <div className="action-item">
              <button 
                className={`action-button ${reel.isSaved ? 'saved' : ''}`}
                onClick={() => handleSave(reel.id)}
              >
                <span className="action-icon">{reel.isSaved ? '📑' : '📄'}</span>
              </button>
            </div>
            <div className="action-item">
              <button className="action-button">
                <span className="action-icon">•••</span>
              </button>
            </div>
            <div className="audio-disc">
              <img src="/api/placeholder/32/32" alt="Audio" className="disc-image" />
            </div>
          </div>
        </div>
      ))}
      
      <div className="reels-navigation">
        <div className="nav-camera">📷</div>
        <h2 className="nav-title">Reels</h2>
      </div>
    </div>
  );
};

export default ReelsContainer;