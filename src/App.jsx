import React,{Suspense,lazy} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import Header from './components/header/header'
import './App.css'

const Home = lazy(()=> import('./components/homePage/home'))
const About = lazy(()=> import('./components/aboutPage/about'))
const Landing = lazy(() => import('./components/landingPage/landing'))
const Services = lazy(()=> import('./components/servicesPage/services'))
const Contact = lazy(() => import('./components/contactPage/contact'))
const Notfound = lazy(()=> import('./components/notFoundPage/notfound'))

function App() {

  return (
    <Router>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Landing/>}/>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
