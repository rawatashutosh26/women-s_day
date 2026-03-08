import { useState, useEffect } from 'react';
import './App.css';

import bg1 from './assets/bg1.png';
import bg2 from './assets/bg2.png';

function App() {
  const [stories, setStories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const [formData, setFormData] = useState({
    herName: '',
    herRelation: '',
    herStory: '',
    herLocation: ''
  });

  useEffect(() => {
    fetchStories();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg === 0 ? 1 : 0));
    }, 5000); 

    return () => clearInterval(interval);
  }, []);
  const fetchStories = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/stories');
      const data = await response.json();
      setStories(data);
    } catch (error) {
      console.error("Failed to fetch stories:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormData({ herName: '', herRelation: '', herStory: '', herLocation: '' });
        setShowModal(false);
        fetchStories();
      }
    } catch (error) {
      console.error("Failed to submit story:", error);
    }
  };
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="app-container">
      
      <header className="hero">
        <div className="hero-slider-bg">
          <img 
            src={bg1} 
            className={currentBg === 0 ? "slide active" : "slide"} 
            alt="Background 1" 
          />
          <img 
            src={bg2} 
            className={currentBg === 1 ? "slide active" : "slide"} 
            alt="Background 2" 
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle"><span>♀</span> WOMEN'S DAY 2026</p>
          <h1>She Stands</h1>
          <p className="hero-description">
            On this Women's Day, we celebrate the women who shaped us — <strong>mothers, mentors, friends, and strangers</strong> who showed us what strength truly looks like.
          </p>
          
          <div className="btn-group">
            <button onClick={() => setShowModal(true)} className="btn primary">
              Share Your Story
            </button>
            <a href="#stories-section" className="btn secondary">
              Read Their Stories
            </a>
          </div>
        </div>
      </header>

      <section id="stories-section" className="stories-container">
        <div className="section-header">
           <h2>Their Stories</h2>
           <p>Women remembered by those who love them. Every tribute a universe.</p>
        </div>
        
        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story._id || Math.random()} className="card">
              <h3>{story.herName}</h3>
              <div className="card-meta">
                <span className="badge">{story.herRelation}</span>
                {story.herLocation && <span className="location">📍 {story.herLocation}</span>}
              </div>
              <p className="story-text">"{story.herStory}"</p>
              <div className="card-footer">
                <span className="date">{story.createdAt ? formatDate(story.createdAt) : "Just now"}</span>
                <span className="hearts">♡ 0</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
            <h2>Honor Her Story</h2>
            <p style={{color: "#a48686", marginTop: "10px"}}>Every woman deserves to be remembered.</p>
            
            <form onSubmit={handleSubmit}>
              <input 
                type="text" name="herName" placeholder="Her Name" 
                value={formData.herName} onChange={handleChange} required 
              />
              <input 
                type="text" name="herRelation" placeholder="She is my... (e.g. mother, mentor)" 
                value={formData.herRelation} onChange={handleChange} required 
              />
              <textarea 
                name="herStory" placeholder="Tell us about her..." 
                value={formData.herStory} onChange={handleChange} required rows="5"
              ></textarea>
              <input 
                type="text" name="herLocation" placeholder="City / Country (optional)" 
                value={formData.herLocation} onChange={handleChange} 
              />
              <button type="submit" className="submit-btn">Share Her Story ♥</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;