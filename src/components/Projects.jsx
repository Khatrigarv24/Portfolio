import React, { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "Minimalist E-commerce",
    description: "A clean, user-friendly e-commerce platform with intuitive navigation and seamless checkout experience.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    imageUrl: "https://placehold.co/800x600/14213D/efebe0?text=E-commerce",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App"
  },
  {
    id: 2,
    title: "Personal Blog Platform",
    description: "Fully responsive blog with markdown support, dark mode, and commenting system.",
    technologies: ["Next.js", "TailwindCSS", "Sanity CMS", "Vercel"],
    imageUrl: "https://placehold.co/800x600/14213D/efebe0?text=Blog+Platform",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Minimal weather application with location search and 5-day forecast visualization.",
    technologies: ["React", "Chart.js", "OpenWeather API", "GeoLocation API"],
    imageUrl: "https://placehold.co/800x600/14213D/efebe0?text=Weather+App",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Intuitive task manager with drag-and-drop functionality and priority categorization.",
    technologies: ["React", "Redux", "Firebase", "React DnD"],
    imageUrl: "https://placehold.co/800x600/14213D/efebe0?text=Task+App",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20">
      <div data-aos="fade-up">
        <h2 className="text-3xl font-bold text-[#14213D] mb-2 text-center">Projects</h2>
        <div className="w-24 h-1 mx-auto bg-[#b19079] mb-8"></div>
        <p className="text-center text-[#14213D] max-w-2xl mx-auto mb-12">
          Explore my recent work. Each project showcases different skills and approaches to solving problems.
        </p>
      </div>
      
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              filter === category 
                ? 'bg-[#14213D] text-white shadow-md' 
                : 'bg-white border border-[#14213D]/20 text-[#14213D] hover:border-[#b19079]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative"
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="overflow-hidden rounded-lg shadow-lg bg-white relative">
              {/* Project image with overlay */}
              <div className="aspect-[16/11] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                    activeProject === project.id ? 'brightness-[0.3]' : 'brightness-[0.85]'
                  }`}
                />
                
                {/* Hover overlay with details */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-500 ${
                  activeProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="transform transition-transform duration-500 translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-[#efebe0]/80 mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex gap-3 mb-5">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-[#b19079] text-[#14213D] rounded hover:bg-[#efebe0] transition-all duration-300 font-medium text-sm"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-[#14213D] text-[#efebe0] border border-[#efebe0]/30 rounded hover:bg-[#efebe0] hover:text-[#14213D] transition-all duration-300 text-sm"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project info visible by default */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#14213D] group-hover:text-[#b19079] transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-[#efebe0] text-[#14213D] rounded text-xs">
                    {project.category}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2.5 py-1 bg-[#14213D]/5 rounded-full text-xs text-[#14213D]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-[#14213D]/80 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="h-1 w-16 bg-[#b19079] rounded"></div>
                  <div className="text-[#14213D] group-hover:translate-x-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View all projects button */}
      <div className="mt-16 text-center">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#14213D] text-[#efebe0] rounded-lg hover:bg-[#b19079] hover:text-[#14213D] transition-colors duration-300 group"
        >
          <span>View All Projects</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Projects