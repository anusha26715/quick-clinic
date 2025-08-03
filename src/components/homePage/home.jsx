import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className="home-container row">
        <div className="col-lg-7 home-top pt-4 pb-4">
            <h5>LEADING HEALTHCARE SPECILISTS</h5>
            <h1>ADVANCED MEDICAL CARE<br/> FOR YOUR FAMILIES HEALTH</h1>
            <p className="pt-2 pb-2">
                Quick Clinic is a healthcare platform that connects patients with doctors, providing easy access to medical services and information. Our mission is to make healthcare more accessible and efficient for everyone.
            </p>
            <div className="explore-services-btn-container">
                <button className="explore-services-btn">
                    <a href="#">EXPLORE SERVICES</a>
                    <i className="bi bi-arrow-right ps-2"></i>
                </button>
            </div>
        </div>
        <div className="img-container col-lg-5">
            <img className="abstract-img mx-auto" src="/images/quick-clinic-logo.png" alt="oops!No Image"/>
            
        </div>
    </section>
  )
}

export default Home
