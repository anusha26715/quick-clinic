import React,{Suspense,lazy,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Header from './components/header/header'
import './App.css'

const Home = lazy(()=> import('./components/homePage/home'))
const About = lazy(()=> import('./components/aboutPage/about'))
const Landing = lazy(() => import('./components/landingPage/landing'))
const Services = lazy(()=> import('./components/servicesPage/services'))
const Contact = lazy(() => import('./components/contactPage/contact'))
const DoctorProfile = lazy(() => import('./components/doctorProfilePage/doctorprofile'))
const BookAppointment = lazy(()=> import('./components/bookAppointmentPage/bookappointment'))
const Notfound = lazy(()=> import('./components/notFoundPage/notfound'))

function App() {

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    })
  }, [])

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
          <Route path="/doctor/:id" element={<DoctorProfile/>} />
          <Route path="/book-appointment/:id" element={<BookAppointment />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
