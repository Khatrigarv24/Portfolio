import React from 'react'

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
  return (
    <section id="skills" className="py-20">
      <div data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-2 text-[#14213D]">Skills</h2>
        <div className="w-24 h-1 mx-auto bg-[#b19079] mb-12"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 shadow-md relative overflow-hidden group transition-transform hover:scale-[1.02] border border-[#14213D]/10"
            data-aos="fade-up"
            data-aos-delay={100 * index}
          > 
            <h3 className="text-xl font-semibold mb-6 inline-block text-[#14213D]">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => {
                return (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-[#efebe0] rounded-full text-sm hover:scale-105 transition-all duration-300 text-[#14213D]"
                    style={{ 
                      border: `1px solid ${category.color}40`,
                      animationDelay: `${skillIndex * 0.1}s` 
                    }}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills