import React, { useState } from 'react'

// Define skills categories with associated colors
const skillsCategories = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Redux'],
    color: '#b19079'
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    color: '#14213D'
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Webpack', 'npm'],
    color: '#b19079'
  },
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-20 relative">
      {/* Subtle background animations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#b19079]/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#14213D]/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

      <div data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-2 text-[#14213D]">Skills</h2>
        <div className="w-24 h-1 mx-auto bg-[#b19079] mb-12 relative overflow-hidden">
          {/* Animated line effect */}
          <div className="absolute inset-0 w-full h-full bg-[#b19079]/70 -translate-x-full animate-shimmer"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 shadow-md relative overflow-hidden transition-all duration-500 border border-[#14213D]/10 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay={100 * index}
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
          > 
            {/* Animated corner accent */}
            <div className={`absolute -top-10 -right-10 w-20 h-20 bg-[${category.color}]/10 rounded-full transition-all duration-500 ${activeCategory === index ? 'scale-[3]' : 'scale-[1]'}`}></div>
            
            <h3 className="text-xl font-semibold mb-6 inline-block text-[#14213D] relative z-10">
              {category.title}
              <div className={`w-full h-0.5 bg-[${category.color}] transform origin-left transition-transform duration-500 ${activeCategory === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => {
                const isHovered = hoveredSkill === `${index}-${skillIndex}`;
                return (
                  <span 
                    key={skillIndex}
                    className={`px-3 py-1 bg-[#efebe0] rounded-full text-sm transition-all duration-300 text-[#14213D] relative z-10 border border-transparent ${isHovered ? 'transform-gpu -translate-y-1 shadow-md border-[#b19079]/30' : ''}`}
                    style={{ 
                      borderColor: isHovered ? `${category.color}40` : 'transparent',
                      animationDelay: `${skillIndex * 0.1}s`,
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
                    }}
                    onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                    {/* Pulsing dot for hovered skill */}
                    {isHovered && (
                      <span className="absolute -right-1 -top-1 w-2 h-2 bg-[#b19079] rounded-full animate-pulse"></span>
                    )}
                  </span>
                );
              })}
            </div>

            {/* Progress bar animation that fills when hovered */}
            <div className="mt-6 h-1 w-full bg-[#14213D]/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#b19079] rounded-full transition-all duration-1000 ease-out" 
                style={{
                  width: activeCategory === index ? '100%' : '0%',
                  opacity: activeCategory === index ? 1 : 0
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  )
}

export default Skills