import { FC } from 'react'
import { FaReact, FaNode, FaCode } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPython, SiPostgresql, SiMongodb, SiAmazon, SiGit, SiPostman, SiJest, SiJira, SiConfluence, SiApachejmeter, SiPhp, SiCplusplus, SiSap, SiMysql, SiJavascript, SiAngular, SiHtml5 } from 'react-icons/si'
import { VscVscode } from "react-icons/vsc";

const Skills: FC = () => {
  const skills = [
    { 
      category: 'Frontend', 
      items: [
        { name: 'React', icon: <FaReact className="inline-block mr-2" /> },
        { name: 'TypeScript', icon: <SiTypescript className="inline-block mr-2" /> },
        { name: 'JavaScript', icon: <SiJavascript className="inline-block mr-2" /> },
        { name: 'Angular', icon: <SiAngular className="inline-block mr-2" /> },
        { name: 'HTML', icon: <SiHtml5 className="inline-block mr-2" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="inline-block mr-2" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="inline-block mr-2" /> }
      ] 
    },
    { 
      category: 'Backend', 
      items: [
        { name: 'Node.js', icon: <FaNode className="inline-block mr-2" /> },
        { name: 'Python', icon: <SiPython className="inline-block mr-2" /> },
        { name: 'PHP', icon: <SiPhp className="inline-block mr-2" /> },
        { name: 'C++', icon: <SiCplusplus className="inline-block mr-2" /> },
        { name: 'ABAP', icon: <SiSap className="inline-block mr-2" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="inline-block mr-2" /> },
        { name: 'MySQL', icon: <SiMysql className="inline-block mr-2" /> },        
        { name: 'MongoDB', icon: <SiMongodb className="inline-block mr-2" /> },
        { name: 'SAP', icon: <SiSap className="inline-block mr-2" /> }
      ] 
    },
    { 
      category: 'DevOps', 
      items: [        
        { name: 'AWS', icon: <SiAmazon className="inline-block mr-2" /> },
        { name: 'CI/CD', icon: <FaCode className="inline-block mr-2" /> },
        { name: 'Git', icon: <SiGit className="inline-block mr-2" /> }
      ] 
    },
    { 
      category: 'Tools', 
      items: [
        { name: 'VS Code', icon: <VscVscode className="inline-block mr-2" /> },        
        { name: 'Postman', icon: <SiPostman className="inline-block mr-2" /> },
        { name: 'Jest', icon: <SiJest className="inline-block mr-2" /> },
        { name: 'Jira', icon: <SiJira className="inline-block mr-2" /> },
        { name: 'Confluence', icon: <SiConfluence className="inline-block mr-2" /> },
        { name: 'JMeter', icon: <SiApachejmeter className="inline-block mr-2" /> }
      ] 
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill.name} className="text-gray-600 flex items-center">
                    {skill.icon}{skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 