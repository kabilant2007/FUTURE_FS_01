import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaRocket, FaLaptop } from 'react-icons/fa';
import '../styles/Home.css';

function Home() {
  const profileImage = '/images/profile.jpg';

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Kabilan T</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Web Developer | UI/UX Enthusiast | Problem Solver
            </p>
            <p className="hero-description">
              I build beautiful, functional web applications using modern technologies. 
              Passionate about creating seamless user experiences and writing clean code.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Profile" className="profile-avatar" />
          </div>
        </div>
      </section>

      {/* Skills Highlight Section */}
      <section className="skills-preview">
        <h2>What I Do</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <FaCode className="skill-icon" />
            <h3>Frontend Development</h3>
            <p>React, JavaScript, CSS, HTML. Building responsive and interactive user interfaces.</p>
          </div>
          <div className="skill-card">
            <FaLaptop className="skill-icon" />
            <h3>Backend Development</h3>
            <p>Node.js, Express, MongoDB, APIs. Creating robust server-side solutions.</p>
          </div>
          <div className="skill-card">
            <FaRocket className="skill-icon" />
            <h3>Full Stack Solutions</h3>
            <p>End-to-end web applications. From concept to deployment and beyond.</p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        <div className="projects-preview">
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">Project 1</div>
            </div>
            <div className="project-info">
              <h3>E-Commerce Platform</h3>
              <p>A full-stack e-commerce solution with user authentication, product catalog, and payment integration.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
              </div>
              <a href="#projects" className="project-link">Learn More →</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">Project 2</div>
            </div>
            <div className="project-info">
              <h3>Task Management App</h3>
              <p>A collaborative task management application with real-time updates and team features.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Firebase</span>
                <span className="tag">Tailwind CSS</span>
              </div>
              <a href="#projects" className="project-link">Learn More →</a>
            </div>
          </div>
        </div>
        <Link to="/projects" className="btn btn-primary">
          View All Projects <FaArrowRight />
        </Link>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Work Together?</h2>
        <p>I'm always open to new opportunities and interesting projects.</p>
        <Link to="/contact" className="btn btn-large">
          Start a Conversation
        </Link>
      </section>
    </div>
  );
}

export default Home;
