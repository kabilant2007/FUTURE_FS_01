import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration using Stripe.",
      category: "fullstack",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      image: "Project 1",
      github: "https://github.com/yourprofile/ecommerce-platform",
      live: "https://your-ecommerce.com",
      details: "Built a complete e-commerce platform from scratch. Features include user authentication, product filtering, shopping cart functionality, and secure payment processing. Implemented responsive design for mobile and desktop users."
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      category: "frontend",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      image: "Project 2",
      github: "https://github.com/yourprofile/task-manager",
      live: "https://your-task-manager.com",
      details: "Created a real-time task management tool with Firebase backend. Users can create teams, assign tasks, track progress, and collaborate seamlessly. Implemented notification system and activity logs."
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays real-time weather data with interactive maps and forecasts.",
      category: "frontend",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      image: "Project 3",
      github: "https://github.com/yourprofile/weather-dashboard",
      live: "https://your-weather-app.com",
      details: "Built a responsive weather dashboard using OpenWeather API. Features include current weather, 7-day forecast, interactive maps, and historical weather data visualization."
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A backend API service for social media analytics and data aggregation with real-time processing.",
      category: "backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
      image: "Project 4",
      github: "https://github.com/yourprofile/social-analytics",
      live: "https://your-analytics-api.com",
      details: "Developed a scalable backend API for aggregating social media metrics. Implemented caching with Redis, real-time data processing, and comprehensive analytics endpoints."
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A modern blogging platform with markdown support, comments system, and SEO optimization.",
      category: "fullstack",
      technologies: ["Next.js", "Node.js", "MongoDB", "JWT"],
      image: "Project 5",
      github: "https://github.com/yourprofile/blog-platform",
      live: "https://your-blog.com",
      details: "Created a full-featured blog platform with markdown editor, user authentication, commenting system, and SEO-friendly structure. Implemented tags, categories, and search functionality."
    },
    {
      id: 6,
      title: "Portfolio Showcase",
      description: "A design portfolio website showcasing creative work with an interactive gallery and case studies.",
      category: "frontend",
      technologies: ["React", "Framer Motion", "Three.js", "GSAP"],
      image: "Project 6",
      github: "https://github.com/yourprofile/portfolio-showcase",
      live: "https://your-portfolio-showcase.com",
      details: "Designed and built an interactive portfolio website with smooth animations, 3D elements, and immersive user experience. Implemented lazy loading and performance optimization."
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="projects">
      <section className="projects-header">
        <h1>My Projects</h1>
        <p>A selection of my recent work and side projects</p>
      </section>

      <section className="projects-content">
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`filter-btn ${selectedCategory === cat.value ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card-full">
              <div className="project-image-full">
                <div className="project-placeholder">{project.image}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="description">{project.description}</p>
                <p className="details">{project.details}</p>
                
                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
