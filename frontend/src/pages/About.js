import React from 'react';
import { FaDownload } from 'react-icons/fa';
import '../styles/About.css';

function About() {
  const profileImage = '/images/profile.jpg';
  
  const skills = {
    Frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Vue.js'],
    Backend: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'Authentication'],
    Database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'],
    Tools: ['Git', 'Docker', 'AWS', 'GitHub', 'VS Code', 'Figma']
  };

  const experience = [
    {
      role: "Full Stack Web Developer Intern",
      company: "Future Interns",
      period: "2026",
      description: "Building professional portfolio and mastering full-stack development with real-world projects."
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      period: "2025 - Present",
      description: "Developing web applications for clients, focusing on responsive design and user experience."
    },
    {
      role: "Web Development Student",
      company: "Self-Learning",
      period: "2024 - Present",
      description: "Completed multiple courses in JavaScript, React, Node.js, and full-stack development."
    }
  ];

  const education = [
    {
      degree: "Full Stack Web Development",
      institution: "Future Interns",
      year: "2026"
    },
    {
      degree: "Advanced JavaScript & React",
      institution: "Online Learning Platform",
      year: "2025"
    },
    {
      degree: "Web Development Fundamentals",
      institution: "Online Learning Platform",
      year: "2024"
    }
  ];

  return (
    <div className="about">
      <section className="about-header">
        <h1>About Me</h1>
        <p>Get to know me better</p>
      </section>

      <section className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-photo" />
      </section>

      <section className="about-content">
        <div className="about-intro">
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              I'm a passionate full-stack web developer with a strong focus on creating beautiful, 
              functional web applications. I love solving problems through code and continuously 
              learning new technologies.
            </p>
            <p>
              With experience in both frontend and backend development, I can build complete solutions 
              from design to deployment. I'm detail-oriented, collaborative, and committed to writing 
              clean, maintainable code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge with other developers.
            </p>
            <a href="/resume.pdf" className="btn btn-primary" download>
              <FaDownload /> Download Resume
            </a>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Coding</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Dedication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills & Technologies</h2>
        <div className="skills-container">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-items">
                {skillsList.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company} • {exp.period}</p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>Education</h2>
        <div className="education-list">
          {education.map((edu, idx) => (
            <div key={idx} className="education-item">
              <h3>{edu.degree}</h3>
              <p>{edu.institution} • {edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>My Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality First</h3>
            <p>I prioritize writing clean, maintainable code and delivering high-quality solutions.</p>
          </div>
          <div className="value-card">
            <h3>Continuous Learning</h3>
            <p>I'm always exploring new technologies and improving my skills as a developer.</p>
          </div>
          <div className="value-card">
            <h3>User-Focused</h3>
            <p>I design and build with the user experience in mind, creating intuitive and responsive applications.</p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>I believe in open communication and working effectively with teams to achieve shared goals.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
