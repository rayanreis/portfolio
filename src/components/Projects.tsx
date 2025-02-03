import { FC } from 'react'
import GIPHY from '../assets/img/projects/giphy.png'
import REVERSE_AUCTION from '../assets/img/projects/reverse-auction.jpg'
import HR_APP from '../assets/img/projects/hr-app.png'
import NOTEPAD from '../assets/img/projects/notepad.png'
import HAP from '../assets/img/projects/hap.png'
import SUGAR_CRM from '../assets/img/projects/sugarcrm.svg'
import THRIVE_HUB from '../assets/img/projects/thrivehub.png'

const Projects: FC = () => {
  const projects = [
    {
      title: 'Giphy Project',
      description: 'This project integrates the GIPHY API, specifically focusing on the Trending and Search endpoints.',
      technologies: ['React', 'TypeScript', 'API Integration', 'Tailwind CSS', 'HTML'],
      image: GIPHY,
      link: 'https://github.com/rayanreis/giphy_montu',
      github: 'https://github.com/rayanreis/giphy_montu'
    },
    {
      title: 'ThriveHUB',
      description: 'ThriveHUB is an application that allows employees to share their feelings and thoughts with their company so well-being and mental health can be improved.',
      technologies: ['React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'TypeScript', 'HTML', 'PostgreSQL', 'API Integration'],
      image: THRIVE_HUB,
      link: 'https://github.com/rayanreis/thrivehub',
      github: 'https://github.com/rayanreis/thrivehub', 
      private: true
    },
    {
      title: 'Reverse Auction',
      description: 'A reverse auction platform where sellers compete to offer the lowest price for buyers',
      technologies: ['React', 'Tailwind CSS', 'HTML', 'Firebase'],
      image: REVERSE_AUCTION,
      link: 'https://github.com/rayanreis/reverse-auction',
      github: 'https://github.com/rayanreis/reverse-auction',      
    },    
    {
      title: 'HR-App',
      description: 'An app for employees to keep their personal information updated in SAP',
      technologies: ['Angular', 'SAP ABAP', 'HTML', 'PHP', 'JavaScript', 'CSS'],
      image: HR_APP,
      link: 'https://github.com/rayanreis/hr-app',
      github: 'https://github.com/rayanreis/hr-app', 
      private: true
    },            
    {
      title: 'Notepad',
      description: 'Notes application provides a simple list of notes',
      technologies: ['React', 'HTML'],
      image: NOTEPAD,
      link: 'https://github.com/rayanreis/lumenalta-react2',
      github: 'https://github.com/rayanreis/lumenalta-react2',
      private: true
    },    
    {
      title: 'HAP Portal',
      description: 'This portal website provides access to the CRM and is responsible for assisting landlords and tenants in submitting their applications for Social Housing Support',
      technologies: ['React', 'Node.js', 'JavaScript', 'CSS', 'HTML', 'Redis', 'SugarCRM', 'MySQL'],
      image: HAP,
      link: '',
      github: '',
      private: true
    },    
    {
      title: 'Sugar CRM',
      description: 'Sugar CRM is a customer relationship management (CRM) system that allows users to manage their customers and their interactions with them',
      technologies: ['SugarCRM', 'PHP', 'JavaScript', 'Backbone', 'CSS', 'HTML', 'MySQL'],
      image: SUGAR_CRM,
      link: '',
      github: '',
      private: true
    },    
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden ">
              <div className="h-48 bg-gray-200">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.private ? (
                    <span className="private-project">Private</span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 