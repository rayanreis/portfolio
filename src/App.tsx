import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Education from './components/Education'
import './App.css'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster />
      <div className="app">
        <Menu />
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
        <div id="education"><Education /></div>
        <div id="contact"><Contact /></div>
      </div>
    </>
  )
}

export default App
