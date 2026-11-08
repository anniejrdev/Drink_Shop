import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './pages/Hero'
import Nav from './components/Nav'
import About from './pages/About'
import Service from './pages/Service'
import Menu from './pages/Menu'
import Testimonial from './pages/Testimonial'
import Blog from './pages/Blog'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Nav/>
      < Hero/>
      < Service/> 
      < About/> 
      < Menu/>
      < Testimonial/>
      < Blog/>
      < Footer/>
    </>
  )
}

export default App
