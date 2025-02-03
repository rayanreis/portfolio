import { FC } from 'react'

const Hero: FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Rayan Fernandes</h1>
        <h2 className="text-3xl mb-6">Software Engineer</h2>
        <p className="text-xl mb-8">
          Building elegant solutions to complex problems
        </p>
        <button 
          onClick={scrollToProjects}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
        >
          View My Work
        </button>
      </div>
    </section>
  )
}

export default Hero 