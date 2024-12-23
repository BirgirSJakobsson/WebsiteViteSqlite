import React from 'react'
import './App.css'
import ImageContainer from './components/ImageContainer'
import ImageGallery from './components/ImageGallery'
import Achievement from './components/Achievement'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>Niilo's Personal Website</h1>
      </header>
      
      <main className="content-section">
        <section className="about-me">
          <h2>About Me</h2>
          <p>Hi, I'm Niilo! Welcome to my personal website where you can learn more about me.</p>
        </section>
        
        <section className="achievements">
          <h2>Achievements</h2>
          <Achievement 
            title="Programming Mastery" 
            description="Completed advanced web development course with honors"
            date="December 2023"
            icon="💻"
            color="#3498db"
          />
          <Achievement 
            title="Marathon Runner" 
            description="Finished first half-marathon in personal best time"
            date="September 2023"
            icon="🏃"
            color="#2ecc71"
          />
          <Achievement 
            title="Language Learning" 
            description="Reached advanced level in Spanish language proficiency"
            date="June 2023"
            icon="🌍"
            color="#e74c3c"
            achieved={true}
          />
        </section>
        
        <section className="images">
          <h2>My Gallery</h2>
          <ImageGallery 
            borderStyle="rounded"
            backgroundColor="light"
            images={[
              <ImageContainer 
                key="1"
                src="https://picsum.photos/400/300?random=1" 
                alt="Gallery image 1"
                heading="Moment 1"
                date="January 2024"
              />,
              <ImageContainer 
                key="2"
                src="https://picsum.photos/400/300?random=2" 
                alt="Gallery image 2"
                heading="Moment 2"
                date="February 2024"
              />,
              <ImageContainer 
                key="3"
                src="https://picsum.photos/400/300?random=3" 
                alt="Gallery image 3"
                heading="Moment 3"
                date="March 2024"
              />
            ]}
          />
        </section>
        
        <section className="interests">
          <h2>My Interests</h2>
          <ul>
            <li>🎮 Gaming</li>
            <li>🏀 Sports</li>
            <li>🎵 Music</li>
            <li>🚀 Technology</li>
          </ul>
        </section>
        
        <section className="social-links">
          <h2>Connect With Me</h2>
          <SocialLinks 
           // githubUrl="https://github.com/yourusername"
           // linkedinUrl="https://linkedin.com/in/yourusername"
           // twitterUrl="https://twitter.com/yourusername"
            instagramUrl="https://instagram.com/poyryniilo"
          />
        </section>
      </main>
      
      <footer className="site-footer">
        <p> 2024 Niilo's Personal Website</p>
      </footer>
    </div>
  )
}

export default App
