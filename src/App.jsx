import './App.css'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'
import Header from './Components/Navbar/Header'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>   
      <Contact></Contact>   
    </>
  )
}

export default App
