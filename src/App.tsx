import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SukoonVillaPage from "./SukoonVillaPage";
import React from "react";

const images = [
  "/Rectangle 23.png",
  "/Rectangle 21.png",
  "/sukoonvilla.jpg",
];

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <header className="main-header">
              <Link to="/sukoon-villa" className="logo">StikkmanUX</Link>
              <nav className="main-nav">
                <a href="#">Projects</a>
                <a href="#">Careers</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
              </nav>
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </header>
            <section>
              <div className="carousel-overlay-above">
                <div className="carousel-title">Our <span>Projects</span></div>
                <div className="carousel-subtitle">
                  Web UX <span className="arrow">↓</span>
                </div>
              </div>
              <div className="wrapper">
                {images.map((src, i) => (
                  <React.Fragment key={i}>
                    <div className="image-container">
                      <img src={src} alt={`carousel ${i + 1}`} />
                      {i === 0 && (
                        <div className="project-overlay">
                          <div className="project-title">Big Brand theory |Web Ux</div>
                          <div className="view-project">
                            <span>View Project</span>
                            <span className="arrow-small">→</span>
                          </div>
                        </div>
                      )}
                      {i === 1 && (
                        <div className="project-overlay">
                          <div className="project-title">Garuda Aerospace | Web Ux</div>
                          <div className="view-project">
                            <span>View Project</span>
                            <span className="arrow-small">→</span>
                          </div>
                        </div>
                      )}
                      {i === 2 && (
                        <div className="project-overlay">
                          <div className="project-title">Sukoon villa |Web Ux</div>
                          <Link to="/sukoon-villa" className="view-project">
                            <span>View Project</span>
                            <span className="arrow-small">→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                    {i < images.length - 1 && (
                      <div className={`carousel-arrow ${i % 2 === 0 ? 'arrow-left' : 'arrow-right'}`}>
                        {i % 2 === 0 ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="carousel-bottom-btn">
                <Link to="/sukoon-villa">
                  <button>
                    <span className="plus-icon">+</span> All Projects
                  </button>
                </Link>
              </div>
            </section>
          </div>
        } />
        <Route path="/sukoon-villa" element={<SukoonVillaPage />} />
      </Routes>
    </Router>
  );
}
