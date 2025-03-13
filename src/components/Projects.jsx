import React, { useState, useEffect } from 'react'

const projects = [
  {
    id: 1,
    title: "Cloud Native & API-driven E-commerce Platform",
    description: "This is a platform fo small businesses to maintain their product catalog for B2B and B2C sales, as it is hard to maintain a catalog we are trying to build this website to make their work more easier and efficient.",
    technologies: ["React", "typeScript", "Hono", "MongoDB", "Tailwind CSS", "AWS Amplify", "AWS S3"],
    imageUrl: "https://placehold.co/600x800/14213D/efebe0?text=E-commerce",
    liveUrl: "#",
    githubUrl: "https://github.com/Khatrigarv24/E-commerce",
    category: "Web App"
  },
  {
    id: 2,
    title: "Drug Inventory and Supply Chain Tracking System (DISCTS)",
    description: "This is a project I am working on for my college, I chose this project because we notice that there is so much waste of medicines because of under-stocking and over-stocking, so we are trying to build a system that can track the supply chain of the medicines and can also maintain the inventory of the medicines, with a ML model that will help predict the amount of medicine needed for that time period.",
    technologies: ["TypeScript", "Hono","React", "TailwindCSS", "AWS DynamoDB", "Clerk", "Shadcn UI"],
    imageUrl: "https://placehold.co/600x800/14213D/efebe0?text=DISCTS",
    liveUrl: "#",
    githubUrl: "https://github.com/Khatrigarv24/discts",
    category: "Web App"
  },
  {
    id: 3,
    title: "Weather Data Analysis",
    description: "This is an analysis ML model build on the historic data of the past 10 years and it has an accuracy of 96%, we visualized it using powerBI.",
    technologies: ["OpenWeather API", "PySpark", "PowerBI", "Hbase", "Spark"],
    imageUrl: "https://placehold.co/600x800/14213D/efebe0?text=Weather+Analysis",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [animateProjects, setAnimateProjects] = useState(false);
  
  // Initial animation when component mounts
  useEffect(() => {
    setAnimateProjects(true);
    const timer = setTimeout(() => {
      setAnimateProjects(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-20">
      <div data-aos="fade-up" data-aos-duration="600">
        <h2 className="text-3xl font-bold text-[#14213D] mb-2 text-center">Projects</h2>
        <div className="w-24 h-1 mx-auto bg-[#b19079] mb-8 relative overflow-hidden">
          {/* Animated line effect */}
          <div className="absolute inset-0 w-full h-full bg-[#b19079]/70 -translate-x-full animate-shimmer"></div>
        </div>
        <p className="text-center text-[#14213D] max-w-2xl mx-auto mb-16">
          Explore my recent work. Each project showcases different skills and approaches to solving problems.
        </p>
      </div>
      
      {/* Projects list with transition effects - removed filters */}
      <div className={`space-y-32 transition-all duration-500 ${animateProjects ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
        {projects.map((project, index) => (
          <div 
            key={project.id}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration="600"
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center transition-all duration-300`}
            onMouseEnter={() => setSelectedProject(project.id)}
            onMouseLeave={() => setSelectedProject(null)}
          >
            {/* Project Image/Preview with enhanced hover effects */}
            <div className="w-full lg:w-2/5 transition-all duration-500 ease-in-out">
              <div className={`relative group overflow-hidden rounded-lg shadow-xl max-w-sm mx-auto transition-all duration-500 ${selectedProject === project.id ? 'shadow-2xl -translate-y-2' : ''}`}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full aspect-[3/4] object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* Enhanced gradient overlay with animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/90 to-[#14213D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-8 w-full flex justify-center gap-4">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[#b19079] text-[#efebe0] rounded-md text-center font-medium text-sm hover:bg-[#b19079]/90 transition-all duration-200 hover:scale-105 hover:shadow-md transform-gpu"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[#efebe0] text-[#14213D] rounded-md text-center font-medium text-sm hover:bg-[#efebe0]/90 transition-all duration-200 hover:scale-105 hover:shadow-md transform-gpu"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                
                {/* Corner decoration that animates on hover */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#b19079] rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-all duration-500"></div>
                </div>
              </div>
            </div>
            
            {/* Project Info with staggered fade-in effects */}
            <div className="w-full lg:w-3/5 px-4 lg:px-0">
              <div className="space-y-4">
                <span className="px-3 py-1 bg-[#efebe0]/70 text-[#14213D] rounded-full text-xs inline-block transition-all duration-300 hover:bg-[#efebe0] hover:shadow-inner">
                  {project.category}
                </span>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-[#14213D] transition-all duration-300 hover:text-[#b19079]">
                  {project.title}
                </h3>
                
                {/* Animated underline with width transition */}
                <div className={`w-16 h-1 bg-[#b19079] transition-all duration-500 ${selectedProject === project.id ? 'w-24' : 'w-16'}`}></div>
                
                <p className="text-[#14213D]/90 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-[#14213D]/80 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-[#14213D]/5 rounded-full text-xs text-[#14213D] transition-all duration-300 hover:bg-[#14213D]/10 hover:scale-105 transform-gpu"
                        style={{
                          transitionDelay: `${techIndex * 50}ms`,
                          animation: selectedProject === project.id ? `fadeInUp 0.5s ease forwards ${techIndex * 0.1}s` : 'none'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group px-5 py-2 bg-[#14213D]/5 text-[#14213D] rounded-md text-center font-medium text-sm hover:bg-[#14213D]/10 transition-all duration-200 flex items-center gap-2 border border-transparent hover:border-[#b19079]/20 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <span>View Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group px-5 py-2 text-[#14213D] rounded-md text-center text-sm transition-all duration-200 flex items-center gap-2 border border-[#14213D]/10 hover:border-[#b19079] hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View all projects button with enhanced hover effect */}
      <div className="mt-24 text-center">
        <a 
          href="https://github.com/Khatrigarv24" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 px-6 py-3 bg-[#14213D] text-[#efebe0] rounded-lg hover:bg-[#b19079] hover:text-[#14213D] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg overflow-hidden"
        >
          {/* Ripple effect on hover */}
          <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-0 rounded-lg transition-transform duration-500 origin-center group-hover:scale-[2.5] opacity-0 group-hover:opacity-100"></span>
          
          <span className="relative z-10">View All Projects</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0.5;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  )
}

export default Projects