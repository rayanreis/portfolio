import { FC } from 'react'

const Experience: FC = () => {
  const experiences = [
    {
      company: 'Provident CRM',
      position: 'Software Engineer',
      period: 'Jan 2019 - Present',
      description: [
        'Squad lead for CRM projects',
        'Mentored junior developers and conducted code reviews',
        'Contributed to all phases of the development life-cycle'
      ]
    },
    {
      company: 'DXC Technology',
      position: 'Software Engineer',
      period: 'Aug 2015 - Jul 2018',
      description: [
        'Implemented and customised SAP ERP to large clients',
        'Developed eSocial project which is a nationwide program that is led by the Brazilian government to streamline the transmission of HR and payroll-related information from companies to the government in a centralized framework',
        'Created an end-to-end management system where employees could update their payroll related information to send to HR and therefore to communicate with eSocial. Portal created in Java, JSP and javascript using spring and beans. Backend created in ABAP enabling use of WSDL endpoints'
      ]
    },
    {
      company: 'MGS Consulting',
      position: 'ABAP Developer',
      period: 'Aug 2014 - Mar 2015',
      description: [
        'ABAP development and consultancy',
        'Implemented a tax system based on brazilian pricing',        
      ]
    },
    {
      company: 'Sonda IT',
      position: 'ABAP Developer',
      period: 'May 2013 - Aug 2014',
      description: [
        'ABAP development and consultancy',
        'Customised and maintained customers ERP system',    
        'Delivered good and clean solutions to customers and contributed with support team to meet their goals',    
      ]
    },
    {
      company: 'Workgroup',
      position: 'Software Developer',
      period: 'Mar 2010 - May 2013',
      description: [
        'Customised and maintained Workmotor system and built internal softwares',
        'Built an internal systems to improve exmployees user experience on sales and internal requests',        
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 border-l-4 border-blue-600 pl-4 ml-4"
            >
              <h3 className="text-xl font-semibold text-gray-700">{exp.position}</h3>
              <p className="text-gray-600 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-600">
                {exp.description.map((item, i) => (
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

export default Experience 