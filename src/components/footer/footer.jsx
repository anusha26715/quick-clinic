import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="footer-about col-lg-5 pb-5">
                            <span >Quick Clinic</span>
                            <p className="pt-3 pb-2">
                                Quick Clinic is a healthcare platform that connects patients with doctors, providing easy access to medical services and information. Our mission is to make healthcare more accessible and efficient for everyone.
                            </p>
                            <div className="social-links d-flex column-gap-2 mt-4">
                                <a href=""><i className="bi bi-twitter-x"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="#">Medical appointments</a></li>
                                <li><a href="#">Emergency treatment</a></li>
                                <li><a href="#">Medical Management</a></li>
                                <li><a href="#">Pharmacutical Marketing</a></li>
                                <li><a href="#">Medicine supply chain</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4 className="pb-2">Contact Us</h4>
                            <p>EWS_213, Bank of Baroda Street line</p>
                            <p>THub, Hitech City</p>
                            <p>Hyderabad</p>
                            <p className="mt-4"><strong>Phone:</strong> <span>+91 9989860638</span></p>
                            <p><strong>Email:</strong> <span>quickclinic.info@gmail.com</span></p>
                        </div>
                    </div>
                </div>
                <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong className="px-1">Quick Clinic</strong> <span>All Rights Reserved</span></p>
                <div className="credits">
                    Developed by <a href="">Anusha Prathikantam</a>
                </div>
                </div>
            </footer>
  )
}

export default Footer
