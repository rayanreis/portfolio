import { FC } from 'react'

const Education: FC = () => {
  const education = [
    {
      school: 'Pontifical Catholic University of Campinas - Sao Paulo',
      degree: 'Bachelor of Information Systems',
      period: '2011 - 2014',
      description: [
        'Focus on software development and information technology',
        'Database management, system analysis, and IT infrastructure',
        'Experience with enterprise systems, cloud computing, and modern web technologies',
        'Strong analytical skills for optimizing business processes and developing scalable solutions'
      ]
    },
    {
      school: 'Bento Quirino Campinas - Sao Paulo',
      degree: 'Technical Course in full stack development',
      period: '2008 - 2010',
      description: [
        'Focus on full stack development',
        'Photoshop, Flash, Dreamweaver, HTML, CSS, JavaScript, PHP, MySQL, SQL Server, Oracle, Linux, Windows Server, Network, Security, and more',        
      ]
    },
    {
      school: 'IBAT (Ireland)',
      degree: 'Diploma in Project Management',
      period: 'Jun 2019 - Sep 2019',
      description: [
        'Graduated with honours',        
      ]
    },
    {
      school: 'Scrum Alliance D-A-CH e.V.',
      degree: 'Certification, Scrum Master Certification',
      period: 'Aug 2022',
      description: [        
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">Education</h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-8 border-l-4 border-blue-600 pl-4 ml-4"
            >
              <h3 className="text-xl font-semibold text-gray-700">{edu.degree}</h3>
              <p className="text-gray-600 mb-2">{edu.school}</p>
              <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
              <ul className="list-disc list-inside text-gray-600">
                {edu.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 