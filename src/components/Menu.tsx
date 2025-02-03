import { useState, useEffect } from 'react';

const Menu = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
      <ul className="flex flex-col gap-4">
        {['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className={`w-3 h-3 rounded-full ${
                activeSection === section ? 'bg-blue-500' : 'bg-gray-300'
              } hover:bg-blue-400 transition-colors`}
              aria-label={`Scroll to ${section} section`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu; 