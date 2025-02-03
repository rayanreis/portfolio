import { FC } from 'react'
import PROFILE from '../assets/img/rayan.png'

const About: FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate Software Engineer with a love for technology and development. 
                As a full-stack engineer, I specialize in React, Node.js, TypeScript, PHP, and MySQL, building scalable 
                and efficient web applications. 
                My experience spans both small projects and large-scale enterprise solutions, including ERP and CRM systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
              I thrive in collaborative environments, bringing a strong work ethic and a team-oriented mindset 
              to every project. Beyond my professional work, I find joy in studying new technologies like Python 
              and expanding my skills.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={PROFILE} 
                alt="Rayan" 
                className="w-64 h-64 rounded-full object-cover object-center object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 